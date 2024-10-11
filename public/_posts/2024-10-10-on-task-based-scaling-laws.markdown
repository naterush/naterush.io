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

As an example of a scaling law that would not work, imagine if we attempted to predict how an LLM's cross-entropy loss changes as a function of the number of GPUs we split training across. Of course, this doesn't really matter (for a fixed amount of compute), and so our scaling law would be bunk.

Note that a consistent relationship need not be a linear relationship. The linked paper above observes a 10x increase in compute results in a -1 decrease in cross-entropy loss. 

## Scaling laws for real-world tasks

So, let's imagine we want to create a scaling law where the performance variable we're looking to predict is "how well the model can do on a family of tasks?"

Sounds good and practical! Let's now ask: what is in this family of tasks?

### The sha256^n family of tasks

Let's create a pathological family of tasks called `sha256^n`. This is 100 tasks, where `task i` is defined as "Return the {i}th sha256 hash of the input string 'abc'".

First, let's observe that if we benchmarked average human performance on this set of tasks (by % of tasks completed), then the more time we gave humans, the higher their score would be. 

Now, let's imagine trying to form a basic scaling law for these tasks - where we increase the number of LLM model parameters, ask it to generate/execute Python, and see how % of tasks completed scales. 

In practice, we'd likely see the following from this experiment:
1. Small models would not be able to write the necessary Python code, and so would complete 0% of the tasks.
2. Above a certain size, the model would be able to write correct Python code. If a model can write code for one `sha256^n` task, it can likely write it for all. Thus, a model of a sufficient size would likely get a 100%.

This is notable. Despite human performance scaling almost perfectly linearly as a function of time-given, the structure of the task family mean that we cannot form a useful scaling law with the size/capabilities of the model. 

In other words, you actually need to reason about the structure of the tasks in your task family, if you want this family of tasks to create a predictive scaling law!

### What about less pathologically constructed tasks?

Fair enough, you say, for the sha256^n family. But what if we have a diverse array of tasks, constructed by a diverse folks in a large number of domains? What are the odds that these tasks have structure that overlaps to such a degree?

Honestly, who can say? The main question here is how much "overlap" causes a problem. And what really is defined as "overlap" is not super easy to define. 

Consider programming tasks for example -- is the fact that they are all programming already too much of a problem? Or maybe the crux of the problem is just that you need to be good at debugging? Are domain-specific tasks bad in particular for predictive laws, because the domain itself imposes an overlap? 

## Verifying the scaling laws now

One thing we can do is start with smaller models and easier tasks, and test our ability to build effective scaling laws. There's a wealth of open-source, smaller models that we can use off the shelf -- and a wealth of smaller, less hard benchmarks that we can test against. 

If we can't get predictive scaling laws on simple tasks with smaller models, we're probably not going to get predictive scaling laws on harder tasks with large models. At least, it doesn't seem like scaling laws should work that way...