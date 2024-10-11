---
layout: post
title:  "On Task Based Scaling Laws"
date:   2024-10-10 0:00:00 -0400
categories:
  - ai-safety
---

## Building a scaling law

One thing you may want to do is be able to predict your agent's performance (y axis) based on some amount of input (x axis). For example, [this scaling law paper](https://arxiv.org/abs/2001.08361) measures how cross-entropy loss (y axis) changes as a function of compute or dataset size or parameters (x axis).

Scaling laws are useful if they have predictive power. Thus, to create a useful scaling law, the measured performance variable needs a _consistent_ relationship with inputs being varied. 

This does not imply the relationship must be linear. The above linked paper observes a 10x increase in compute results in a -1 decrease in cross-entropy loss. 

## Scaling laws for real-world tasks

So, let's imagine we want to create a scaling law where the performance variable we're looking to predict is "how well the model can do on a family of tasks?"

Sounds good and practical! Let's now ask: what is in this family of tasks? How does this effect our ability to form a scaling law. 

### The sha256^n family of tasks

Let's create a pathological family of tasks called sha256^n. This is 100 tasks, where task i is defined as "Return the {i}th sha256 hash of the input string 'abc'".

First, let's observe that if we benchmarked average human performance on this set of tasks (in terms of % of tasks completed), then the longer time we gave the humans, the higher there score would be. 

Now, let's imagine trying to form a basic scaling law for these tasks - where we increase the number of LLM model parameters, ask it to generate/execute Python, and see how % of tasks completed correctly scales. What would likely happen? 

In practice, we'd likely see the following:
1. Small models would not be able to write the necessary Python code, and so would get a zero. 
2. Above a certain size, the model would be able to write the Python code. If they could write code for one task, they could write it for all - and thus would get a perfect score (assuming that the timeouts on the code execution were long enough). 

This is notable. Despite human performance scaling almost perfectly linearly as a function of time, the structure of the tasks mean that this family of tasks will _not_ form a scaling law with the size of the model. 

In other words, you actually need to reason about the structure of the tasks in your task family, if you want this family of tasks to create a preditive scaling law!

### What about less pathologically constructed tasks?

Fair enough, you say, for the sha256^n family. But what if we have a diverse array of tasks, constructed by a diverse folks in a large number of domains? What are the odds that these tasks have structure that overlaps to such a degree?

Honestly, who can say? The main question here is how much "overlap" causes a problem. And what really is defined as "overlap" is not super easy to define. 

Consider programming tasks for example -- is the fact that they are all programming already too much of a problem? Or maybe the crux of the problem is just that you need to be good at debugging? Are domain-specific tasks bad in particular for predictive laws, because the domain itself imposes an overlap? 

## Verifying the scaling laws now

One thing we can do is start with smaller models and easier tasks, and test our ability to build effective scaling laws. There's a wealth of open-source, smaller models that we can use off the shelf -- and a wealth of smaller, less hard benchmarks that we can test against. 

If we can't get predictive scaling laws on simple tasks with smaller models, we're probably not going to get predictive scaling laws on harder tasks with large models. At least, it doesn't seem like scaling laws should work that way...