---
layout: post
title:  "On Task Based Scaling Laws"
date:   2024-10-10 0:00:00 -0400
categories:
  - ai-safety
---

## What you need for a scaling law

One useful thing to do is to predict your LLM's performance based on how much of a certain resource you give it. For example, [this scaling law paper](https://arxiv.org/abs/2001.08361) measures how an LLM's cross-entropy loss changes as a function of compute or dataset size or parameters.

For scaling laws to be predictive, the measured performance variable must have a _consistent_ relationship with the inputs being varied. 

Imagine the following attempted scaling law: how does an LLM's cross-entropy loss change as a function of the number of GPUs we train on? Of course, for a fixed amount of compute, this doesn't really matter -- and so this attempted scaling law would be bunk.

Note that a consistent relationship need not be a linear relationship. The linked paper above observes a 10x increase in compute results in a -1 decrease in cross-entropy loss. 

## Scaling laws for real-world tasks

Let's imagine we want a particularly practical scaling law, where the performance variable we're measuring is "how well can this model do on a set of tasks?"

It sounds super useful, if it can work. Let's now ask: what does this set of tasks look like?

### The sha256^n family of tasks

Let's create a pathological family of tasks called `sha256^n`. This is 100 tasks, where `task i` is defined as "Return the {i}th sha256 hash of the input string 'abc'".

First, observe that if we measured the % of `sha256^n` tasks completed by humans over time, it would increase linearly. This is simply because each task takes slightly longer than the previous one to complete -- simply due to the necessary sequential nature of repeated hashing.

Now, lets imagine that we tried to form a scaling law for LLMs with this family of tasks. We'll vary the number of model parameters, and then see how the % of tasks the LLM can complete scales. (Note that we'll give the LLM the ability to run Python code.)

In practice, we would likely observe the following piece-wise, discontinuous function:
1. Small models would not be able to write the necessary Python code, and so would complete 0% of the tasks.
2. Above a certain size, the model would be able to write correct Python code. If a model can write code for one `sha256^n` task, it can likely write it for all -- as all tasks are effectively the same. Thus, a model of a sufficient size would likely get a 100%.

Thus, despite human performance on this task family scaling linearly as a function of time, the structure of the task family means that we will _not_ form a predictive scaling law as we vary the size of the model.

**In other words, creating a consistent scaling law for real-world tasks requires reasoning about the structure / overlap in your task set.**

### What about less pathologically constructed tasks?

Fair enough, you say, for the `sha256^n` family. But what if we have a diverse array of tasks, constructed by diverse folks in a large number of domains? What are the odds that these tasks have structure that overlaps to such a degree?

Honestly, who can say? The main question here is how much "overlap" causes a problem - and it's not even really clear what "overlap" is. 

Consider programming tasks, for example. Is the fact that they are all programming already too much overlap? Or maybe the crux of the problem to be solved in every task can just be labeled as "debugging" or "planning"? Are domain-specific tasks bad in particular, because the domain itself imposes an overlap? 

## Verifying the scaling laws now

One thing we can do is start with smaller models and easier tasks, and test our ability to build effective scaling laws. There's a wealth of open-source, smaller models that we can use off the shelf -- and a wealth of smaller, less hard benchmarks that we can test against. 

If we can't get predictive scaling laws on simple tasks with smaller models, we're probably not going to get predictive scaling laws on harder tasks with large models. At least, it could hardly be called a scaling law if it worked this way...