---
layout: post
title:  "AI Lab builds a LangChain competitor part 1"
date:   2024-7-15 0:00:00 -0400
categories:
  - product
---

If you’re here, you’ve probably heard of LangChain. And if you’ve heard of LangChain, you probably read a [roast](https://news.ycombinator.com/item?id=36645575) of LangChain.

LangChain is just the highest-profile example of an **LLM integration library**: a Python library that makes it easier for developers to build apps that use LLMs.

In this series, we will explore what types of LLM integration libraries exist, understand what the developers who use these libraries are looking for, and ask: **what would it look like for OpenAI or Anthropic to release an LLM integration library of their own?**

### Level 0: Direct Hit

You want to build an app that interacts with some remote LLM? The most direct way to do this is to just use the `requests` library:

```python
import requests
import json
import os

api_key = os.environ['OPENAI_API_KEY']

headers = {
    'Content-Type': 'application/json',
    'Authorization': f'Bearer {api_key}'
}

data = {
    "model": "gpt-3.5-turbo",
    "messages": [{"role": "user", "content": "Say this is a test!"}],
    "temperature": 0.7
}

response = requests.post('https://api.openai.com/v1/chat/completions', headers=headers, data=json.dumps(data))
result = response.json()
print(result['choices'][0]['message']['content'].strip())
```

I’ve deployed code like this at [Mito](https://trymito.io). Our customers were large U.S. banks, and large U.S. banks are particularly insecure about new dependencies; this approach allowed us to avoid new dependencies while connecting Mito to their internally-deployed LLMs. 

In practice, this approach works well for getting a single response to a single prompt from a single model hosted at a single URL.

However, to support multi-round conversations, streaming responses, generating structured output - you need to implement this yourself.

### Level 1: API Wrappers

So, unless you have some hardcore reason for avoiding dependencies, you’re probably interested in a level 1 LLM integration library: a wrapper around the LLM's API. 

Consider the official `openai` Python package. Here’s the code that does the same “single completion” as above: 

```python
from openai import OpenAI
client = OpenAI()

completion = client.chat.completions.create(
  model="gpt-3.5-turbo",
  messages=[{"role": "user", "content": "Say this is a test!"}]
)

print(completion.choices[0].message)
```

Already, there are considerable code savings. And then imagine you want to change the response to stream: 
```python
from openai import OpenAI

client = OpenAI()

stream = client.chat.completions.create(
    model="gpt-3.5-turbo",
    messages=[{"role": "user", "content": "Say this is a test"}],
    stream=True,
)
for chunk in stream:
    if chunk.choices[0].delta.content is not None:
        print(chunk.choices[0].delta.content, end="")
```

In general, the `openai` framework makes it easier to do much of what is more challenging with raw requests to the model API; it is easier to have multi-round conversations, stream responses, and generate structured output.

#### Provider-agnostic API Wrappers

The above `openai` library is OpenAI specific, duh. But there are also level 1 wrapper libraries that support a variety of providers. The [`llm` library](https://llm.datasette.io/en/stable/) is a good example here, and has much of the same functionality as the `openai` package, except for any model you can imagine.

### Level 2: Convenience Functions

We're doing good now. Level 1 libraries make it easier to interact with LLMs in standard ways. Now it's time to build applications with these LLMs.

Enter level 2: libraries that include convenience functions for common LLM applications. Let's consider the most popular level 2 library: LangChain.

Here's our same chat application from above, implemented in LangChain:
```python
from langchain_core.messages import HumanMessage, SystemMessage
from langchain_openai import ChatOpenAI

model = ChatOpenAI(model="gpt-4")

messages = [
    HumanMessage(content="Say this is a test"),
]

model.invoke(messages)
```

And with LangChain, you get a lot more than just Chat. Imagine you want to make a [RAG application](https://arxiv.org/abs/2005.11401) to extend the model's knowledge with some of your own internal data. Well, LangChain has useful utilities for the chunking, storing, and searching that is necessary for this:

```python
import bs4
from langchain import hub
from langchain_chroma import Chroma
from langchain_community.document_loaders import WebBaseLoader
from langchain_core.output_parsers import StrOutputParser
from langchain_core.runnables import RunnablePassthrough
from langchain_openai import OpenAIEmbeddings
from langchain_text_splitters import RecursiveCharacterTextSplitter

# Load, chunk and index the contents of the blog.
loader = WebBaseLoader(
    web_paths=("https://lilianweng.github.io/posts/2023-06-23-agent/",),
    bs_kwargs=dict(
        parse_only=bs4.SoupStrainer(
            class_=("post-content", "post-title", "post-header")
        )
    ),
)
docs = loader.load()

text_splitter = RecursiveCharacterTextSplitter(chunk_size=1000, chunk_overlap=200)
splits = text_splitter.split_documents(docs)
vectorstore = Chroma.from_documents(documents=splits, embedding=OpenAIEmbeddings())

# Retrieve and generate using the relevant snippets of the blog.
retriever = vectorstore.as_retriever()
prompt = hub.pull("rlm/rag-prompt")

def format_docs(docs):
    return "\n\n".join(doc.page_content for doc in docs)

rag_chain = (
    {"context": retriever | format_docs, "question": RunnablePassthrough()}
    | prompt
    | llm
    | StrOutputParser()
)

rag_chain.invoke("What is Task Decomposition?")
```

Level 2 LLM integration libraries fundamentally have the goal of making common use cases easier. In [post 2](http://naterush.io/posts/2024-7-16-llm-integration-framework-2.markdown) in this series, we'll explore these use cases in more detail.

#### Notable Lack of First-Class Level 2 Frameworks

Notably, while both OpenAI and Anthropic have level 1 libraries (`openai` and `anthropic` respectively), no major AI lab has a level 2 LLM integration library. 

Your author speculates that this is a function of resources and focus: the battle is currently being fought on model quality (and hopefully safety). 

But the use cases of LLMs are much more defined than they were even a year ago. And as such, it's wonth considering what it would look like if OpenAI or Anthropic built a level 2 library themselves.

## Conclusion

A level 0 LLM library isn’t much of a library at all - it’s just raw requests to the model API. A level 1 LLM library gives you a wrapper around the model API while remaining application agnostic. A level 2 LLM library gives you utility functions to make building common LLM applications (some RAG app) easier.

In the [next blog post](http://naterush.io/posts/2024-7-16-llm-integration-framework-2.markdown), we'll put on our product design hats and ask ourselves what users really want from level 2 LLM integration libraries. From there, we'll be prepared to [design a level 2 library](https://www.naterush.io/posts/2024-7-16-llm-integration-framework-3.markdown), pretending that we were OpenAI or Anthropic. Gulp!