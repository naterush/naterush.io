---
layout: post
title:  "AI Lab builds a LangChain competitor part 2"
date:   2024-7-16 0:00:00 -0400
categories:
  - product
---

In [part 1](https://www.naterush.io/posts/2024-7-15-llm-integration-framework-1.markdown), we explored LLM integration libraries: level 0 is raw API requests, level 1 is an application-agnostic API wrapper, and level 2 is utility functions for common application architectures.

In this blog post, I'll put on my product hat and get much more specific about level 2 libraries:
1. What applications are users actually trying to build with LLMs?
2. What are the primary concerns users have when building these applications?

Once we’re armed with a coherent understanding of our users, I’ll spend the [final blog post](https://www.naterush.io/posts/2024-7-16-llm-integration-framework-3.markdown) in this series designing a level 2 library from the perspective of an AI lab like OpenAI or Anthropic. Woop!

## What Users Are Trying to Do

To kick off our user stories, let’s focus on three common use cases for LLM-based applications:

1. Customer/internal support chatbot: users ask a chatbot questions, rather than reading documentation or consulting a knowledge base.
2. Data analysis and decision support: users run natural language queries over some dataset(s) to give them some business insight.
3. Content generation: a user wants to create a specific type of content, in a specific type of style, often for marketing or sales purposes.

Let's build a better understanding of users' motivations, concerns and desired outcomes for each of these common use cases. 

### Why even roll your own application?

A quick aside. A natural response to the above use cases is: why not just use an off-the-shelf saas product to accomplish these use cases?

In my experience selling Mito to large enterprises, the primary three motivations these businesses had for “rolling their own” LLM applications were:
1. Cost: enterprises didn’t want to pay for additional software if they could develop it themselves.
2. Privacy: enterprises are concerned about sending their data to random startups (good call).
3. Customization/environment-specific: enterprises have specific enviornments they want to enable with AI - not every sass works where one wants it to.

I often saw the first LLM applications popping in large enterprises as silly prototypes in streamlit, running locally on a single user's device. Often, users roll their own LLM applications because this is the easiest way to get started!

### Use Case: Customer/internal support chatbot

#### What the problem being solved is:

At Mito, we used [Rippling](http://rippling.com) to run our payroll. As a first-time CEO, I spent a fair bit of time reading Rippling's documentation with a pratical question like "how can I change my address." About a year ago, Rippling added an AI Chatbot to their documentation. In practice, it was able to help me resolve my issues immediately, 75% of the time. It helped me resolve my issues much faster, and allowed Rippling to reduce their support cost.

This problem more abstractly: there is knowledge spread across multiple webpages and documents. Consumers of this information have questions that is answered somewhere, but they don't know where. Users are thus unable to easily find the information they need without support.

To solve this, provide users with a chatbot that has access to the information in these webpages and documents. Users can then talk to the chatbot to answer their questions!

**What development of this app looks like:**

The two primary architectural approaches to this application are:

1. [RAG](https://arxiv.org/abs/2005.11401): create a semantic index of your data. On any question from a user, search the index for relevant content. Attach this relevant context to the LLM prompt, so that the model can respond more accurately.
2. Fine-tuning: additionally train the model on the specific data, again so the LLM can respond more accurately.

You can understand these two approaches as implementation details of the same general approach: *give the model access to your data, so it can answer questions correctly in context.*

We saw an example of RAG in blog post 1 - copying the code here: 
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

This example is taken from the LangChain documentation, and by golly, it's not well factored: the imports are impossible to remember, the number of steps in the "rag chain" is too high, and there are classes named `RunnablePassthrough`...

Aren’t LLMs supposed to be intelligent? Why is it so hard to help them get the relevant data they need? 

**What the application developer cares about:**

1. Correctness of the answers given. Devs want to maximize the amount of helpful correct answers, and minimize the amount of misleading incorrect answers.
2. Ease of development. Ideally it’s as easy as possible to provide this additional information to the LLM to increase the veracity of it’s answers. LangChain fails here.
3. Privacy. There may be limitations in providing additional data to the LLM.

### Use Case: Data analysis and decision support

#### What the problem being solved is:

At Mito, we used the user analytics software Mixpanel. While it had a intuitive interface for questions like "what are our most used features?", more complex questions required some technical reasoning. As such, my non-technical teammates were less adept at getting the answers they needed and instead had to ask me for help! 

Most abstractly: there are some data sets stored in a database(s), excel documents, or other files. Internal users have questions about this data answers, but do not have the technical skills (like SQL or Python or Mixpanel) to answer these questions by themselves. 

In practice, an analytics team likely exists to help users answers these repeated and ad-hoc questions. But then non-technical users need to coordinate with other employees to answer their questions!

**What development of this app looks like:**

Developing an app that allows non-technical users to run natural language queries against internal data has a few components:
1. Provide relevant data structure to the LLM. E.g. what are the available tables and columns?
2. Have the LLM generate an executable query to answer the question - in Python or SQL, for example.
3. Execute this query somewhere, and then report the results to the user

Similar to the above support chatbot use case, step one is giving the LLM access to your data. 

But there's a major additional step: the app needs some way of securely executing the query it generates. This is non-trivial. Early public Streamlit apps that demoed “natural language data query” functionality were quickly prompt-injected, and had their API keys stolen.

**What the application developer cares about:**

1. Correctness of the answers given by the LLM. Just like above. Numbers being incorrect is particularly offensive to users.
2. Ease of development. Both on providing your data context to the LLM, and in terms of building a secure execution environment. 
3. Privacy. As above, data privacy may be a concern.

### Use Case: Content generation

#### What the problem being solved is:

As part of YC, we saw a fair number of startups who were pursuring programmatic SEO strategies, where they quickly generated hundreds of pages using LLMs. Sometimes verging on spam, marketing and sales often benefits from creating a large amount of similarly structured content quickly. It's much easier to do this with an LLM than it is to do it manually. 

Naturally, this content has a destination after it's generated. In practice, I've seen programmatically generated content get turned into webpages, into slide decks, put in emails, and put in videos.

**What development of this app looks like:**

Architecturally, this application looks reasonably similar to the previous two. In practice, less data work is required. Developers usually give a model a few examples of the content they'd like to generate, and then prompt it to create more.

After the content is generated, the hard part comes. In the case of programmatic SEO, a webpage with that content must be created. With sales, emails actually have to be sent. This is similar the secure execution environment in the above use case, and in my experience, where much of the development work is in this application.

**What the application developer cares about:**

1. Quality of the content. There’s less of a “correct” answer here, and more of a intangible quality thing. 
2. Ease of development. The examples are easy to develop here, so really most of the development work is on the “post creation” of the content. Ideally, this should be easy as well.

From what I’ve seen, privacy is less of a concern with this use case. There's usually less data to worry about.

## Ok, so what do developers really care about in a level 2 library?

LLM app developers want a Python library:
1. that answers questions based on proprietary data in a variety of formats
2. that has the ability to “execute” actions securely, including Python, SQL, and other API calls
3. that is as private as it can be

And perhaps most importantly: *all of this should be as easy to develop as it possible can be.* 

Developers want a good developer experience, duh!

In the [next post](https://www.naterush.io/posts/2024-7-16-llm-integration-framework-3.markdown), we'll explore how AI labs can make a level 2 LLM integration that outperforms LangChain on all of these wants - and in doing so provides a really wonderful developer experience. C u there!