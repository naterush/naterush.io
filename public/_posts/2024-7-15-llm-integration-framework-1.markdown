---
layout: post
title:  "First-Class LLM Integration Framework 1: Motivation for a Change"
date:   2024-7-15 0:00:00 -0400
categories:
  - product
---

If you’re here, you’ve probably heard of LangChain. If you’ve heard of LangChain, you probably read a [roast](https://news.ycombinator.com/item?id=36645575) of it online. 

LangChain is just the highest-profile example of an **LLM integration framework**: a Python library that makes it easier for you to design AI-enabled applications.

In this series, I’ll be putting my product hat and exploring: what would it look like for OpenAI/Anthropic to release an LLM integration framework of their own? 

We’ll spend some time defining what an LLM integration framework is specifically. From there, we’ll go look at some code and see how these frameworks are actually used in the wild. Finally, we’ll spend some time designing a first-class LLM integration framework of our own - and talking about the impact of this library on developers, their users, and these major AI labs as well.

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

I’ve deployed code like this at [Mito](https://trymito.io). Our customers were large U.S. banks, and large U.S. banks are particularly insecure about new dependencies; this approach allowed us to avoid adding new dependencies while hooking up to their internally deployed LLMs. 

In practice, this approach works well for getting a single response to a single prompt from a single model hosted at a single URL. Switching between models ain’t so hard either. 

However, to support multi-round conversations between user and AI, streaming of responses, generating structured output - you need to implement it all yourself.

### Level 1: API Wrappers

So, unless you have some hardcore reason for avoiding dependencies, you’re probably interested in level 1: an API wrapper around the LLMs API. 

Consider, for example, the official `openai` Python package. Here’s the code that does the same “single completion” as level 0 above: 

```python
from openai import OpenAI
client = OpenAI()

completion = client.chat.completions.create(
  model="gpt-3.5-turbo",
  messages=[{"role": "user", "content": "Say this is a test!"}]
)

print(completion.choices[0].message)
```

Already, there are considerable code savings. And let’s imagine that you want to stream the response: 

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

In general, the `openai` framework knocks off much of the list of not supported in level 0. We can easily have multi-round conversations, stream responses, and generate structured output.

**Aggregated Wrappers**

The above `openai` library is OpenAI specific, duh. There are also independent libraries that support a variety of providers. The [`llm` library](https://llm.datasette.io/en/stable/) is a good example here. 

What’s included (?) Conversation management

Or what about something that interacts with something local. Like the llm package. 

### Level 2: Convenience Functions

Ok, so we can easily interact with LLMs in the standard ways - but there’s still a lot more we want to do with them. We might want to enrich the LLMs with more of our own data easily, or store the conversations that users have with these LLMs. 

Thus, level 2 are libraries with convenience functions for common LLM applications. Let’s consider the most popular: `langchain`. 

Consider the following same chat app:

```python
from langchain_core.messages import HumanMessage, SystemMessage
from langchain_openai import ChatOpenAI

model = ChatOpenAI(model="gpt-4")

messages = [
    HumanMessage(content="Say this is a test"),
]

model.invoke(messages)
```

Note that the code still specifically chooses a model, but you can see how this would be more easy to switch out with a new AI lab - just move to `ChatAnthropic`.

And you get a lot more than just chat. Imagine you want to make a [RAG application](https://arxiv.org/abs/2005.11401) to extend the model with some of your own internal data. Well, LangChain has useful utilities for the chunking, storing, and searching that is necessary for this application:

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

Note the utilities for loading content from the web, for splitting text into chunks, for creating a vector store, and then for running a chain of computations. Level 2 LLM libraries fundamentally attempt to make common use cases (beyond just interacting with the model) much easier. 

**Notable Lack of First-Class Level 2 Frameworks**

Notably, while both OpenAI and Anthropic have level 1 libraries (`openai` and `anthropic` respectively), no major AI lab has release a level 2 LLM integration library. 

Your author speculates that this is simply a function of resources and focus; the battle is currently being fought on model quality (and hopefully safety). A level 1 wrapper requires much less use-case thinking than a level 2 wrapper. 

But use cases for LLMs are much more well-defined than they were even a year ago. It may be time for a first class level 2 LLM integration library - and the rest of this blog series will be exploring what that should look like.

## Conclusion

A level 0 LLM library isn’t much of a library at all - it’s just raw requests to the model API. A level 1 LLM library gives you useful utility functions for working with the API while remaining application agnostic. A level 2 LLM library gives you utility functions to make building common LLM applications, like RAG, easier. 

In future blog posts, we’ll explore what a level 2 LLM framework would look like if it was built by a major AI lab like OpenAI or Anthropic. We’ll take a product design approach to this question, by first figuring out what users want from their level 2 frameworks, before then asking what a first-class framework could uniquely provide to these users. 

Can’t wait - see you in the next one!