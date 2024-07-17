---
layout: post
title:  "Leading AI Lab builds a LangChain competitor part 3"
date:   2024-7-16 1:00:00 -0400
categories:
  - product
---

See [part 1](https://www.naterush.io/posts/2024-7-15-llm-integration-framework-1.markdown) where we define the types of LLM integration libraries, and [part 2](https://www.naterush.io/posts/2024-7-16-llm-integration-framework-2.markdown), where we build user stories and understanding for these libraries. 

We're now ready to ask: **what would it look like if OpenAI or Anthropic built a LangChain competitor?**

Here's my guess:
```python
from openai import OpenAI

client = OpenAI()
completion = client.chat.completions.create(
    model="gpt-3.5-turbo",
    messages=[{"role": "user", "content": "Say this is a test!"}],
    # Note the parameter below. The model's completion is augmented with additional data
    # without needing to pad the prompt or setup your own RAG architecture
    extra_data=["https://lilianweng.github.io/posts/2023-06-23-agent/"]
)

print(completion.choices[0].message)
```

This is a big improvement from the 40+ lines of code to setup a [basic RAG application using LangChain](https://python.langchain.com/v0.2/docs/tutorials/rag/).

### Developer experience starts with model capabilities

LLM integration frameworks like LangChain exist because server-side model capabilities are still limited. Leading labs like OpenAI and Anthropic are best suited to removing these limitations, obviously - and doing so would have huge benefits for both app developers and the AI labs alike.

Imagine: you can directly pass data to a model to augment a completion, without needing to shove it into the prompt yourself. Then, the server does the hard work of parsing out the relevant bits - either with a RAG approach, or just with bigger context lengths. 

Imagine: you can define serverless-style functions that models can call directly inside of a container. You can hook up a model directly to your infra, without needing to build gallons of plumbing. 

Both of these changes are examples of server-side capability improvements to the model. They have the net result of taking work off of LLM application developers, and instead allowing the model to do it instead. Isn't this tradeoff the whole point of building an intelligence, after all?

Let's dream about APIs a little bit!

### Capability Improvement: Data Stores

```python
from openai import OpenAI
import snowflake.connector

client = OpenAI()

# Create a data store. You can pass webpages, documents,
# snowflake databases - and the server will index this data appropriately
data_store = client.data_store.create(
    name="gpt-3.5-turbo",
    extra_data=[
	    "https://lilianweng.github.io/posts/2023-06-23-agent/",
	    '../path/to/revenue_report.pdf',
        snowflake.connector.connect(...)
	]
)

completion = client.chat.completions.create(
    model="gpt-3.5-turbo",
    messages=[{"role": "user", "content": "What was our reported revenue last year?"}],
    # Augment the completion with the data store created above. The model will
    # intelligently figure out what additional data to use
    extra_data=[data_store]
)

print(completion.choices[0].message)
```

No worrying about loading, splitting, storing, or adding to a prompt. Just give the model the data you want it to have access to, and it figures everything out for you.

(Of course, there’s complexity around versioning, updating, and syncing - but these complexities all exist with current hand-rolled applications as well.)

### Capability Improvement: Serverless-style Function Execution

```python
from openai import OpenAI
import snowflake.connector

snowflake_serverless_function_string = """
def execute_read_only_snowflake_query(query):

    conn = snowflake.connector.connect(...os.enviorn...)

    try:
        cursor = conn.cursor()
        cursor.execute(query)
        results = cursor.fetchall()

        return {
            'statusCode': 200,
            'body': results
        }

    finally:
        cursor.close()
        conn.close()
"""
	
client = OpenAI()

# Allow the model to execute execute_read_only_snowflake_query in a container
# server-side. This allows users to easily create safe execution environments
snowflake_query_tool = client.tools.create(
	name="Execute Snowflake Query (Read Only)",
	code=snowflake_serverless_function_string
)

# Give the model access to snowflake data as well - so it can figure out
# what specific tables/columns it needs to access
snowflake_data_store = client.data_store.create(
    name="gpt-3.5-turbo",
    extra_data=[
        snowflake.connector.connect()
	]
)

completion = client.chat.completions.create(
    model="gpt-3.5-turbo",
    messages=[{"role": "user", "content": "Avg revenue per month per product line?"}],
    extra_data=[data_store],
    tools=[snowflake_query_tool]
)

print(completion.choices[0].message)
```

The app developer doesn’t need to worry about a safe execution context - the server now handles that for them! The app developer doesn’t need to worry about adjusting the prompt with the relevant snowflake tables and columns, the model also does that for them as well. 

## Why model capability improvements are a win-win for AI labs and app developers

For application developers, the benefits of improved model capabilities are obvious. Rather than having to write hundreds of lines of custom LangChain code, I can just give the model the data/ capabilities I want it to access, and then let it figure out the rest. In practice, this would dramatically reduce the time to take a LLM product to market.

As a result, the first AI lab to provide these capabilities will have a compelling pitch to choose their models over others. Just imagine: 

> Build with Anthropic. While our models are competative with OpenAI, you can write 10x less code to integrate our models into your product.

I think we will see capabilities in this style soon. And that soon after, LangChain will go the way of the dodo.