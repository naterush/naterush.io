---
layout: post
title:  "Vintage Models: An AI R&D Eval Proposal"
date:   2024-7-17 0:00:00 -0400
categories:
  - ai-safety
---

# Available Human-generated Data Stock

Model intelligence increases as a function of:
1. Improved model architecture
2. Increased quantity of training data
3. Improvements to pre/during/post training processes
4. Hardward and infra improvements

Let's focus specifically on the stock of human-created data that is available to these models. Over the next 10 years, this stock of data will likely increase by [less than a single order of magnitude](https://arxiv.org/pdf/2211.04325) (see figure 1).

Now, imagine that we can create models that are much smarter than the current SOTA. This will be a result of improvements to all of the above inputs - but in all likelyhood, it will _not be a function of the new human-created data in the past 10 years_. 

Simply put, we are not increasing the amount of human-created data fast enough for it to be the primary input to exploding model intelligence.

# Training a model that only knows the past 

This has an interesting implication: for any SOTA model `M`, we can create a twin-model that is trained on human-created data from pre-2020. Let's call this model `M_vintage`. 

Due to the above argument about data stock, it's likely that the intelligence of `M` and `M_vintage` are within spitting distance of each other. As a result, `M` and `M_vintage` likely have comparible AI R&D research capabilities, with the notable difference that they have different starting knowledge. This opens up some interesting eval possiblities for us!

# The issue with subtask based evals 

The [current SOTA](https://docs.google.com/document/d/1ktP_YhMeHdj6sI1YzqwrFiU8Ax9BOL9gTUIzbxsI6Uk/edit) for evaluating if AI agents can automate AI R&D is a collection of 9 subtasks that "simulate" AI research, and then measurement tools to see how well models can perform on these tasks. 

There's a lot of value in this style of subtask measurement. Per the goals of the evals, this approach is actually deliverable, not particularly expensive, and certainly points in the right direction.

The main issue with this subtask type of eval is that cutting-edge research isn't a list of neatly decomposible sub-tasks - at least in my research experience. Moreover, pushing the cutting-edge of AI forward need not involve _any_ of the specific subtasks on this list!

Of course, if we're not willing to do subtask-based evals, then the only other option is to have the model just aim for the main task and eval it there. This makes no sense for AI R&D evals, obviously, as the entire goal of evals is to check if models can push the SOTA before they actually begin to do so. Otherwise, we risk an uncontrolled intelligence explosion.

# Outcome based evals with `M_vintage`

`M_vintage` allows us to avoid this tradeoff. It allows us to run AI R&D evaluations that do not require us to impose some subtask decomposition, while also not pushing the current AI SOTA forward.

Here's how we do this:
1. `M_vintage` is a model that is not aware of it's own architecture. Due to the training data it has seen, it only knows the SOTA up to 2020. 
2. Thus, we can create an environment where `M_vintage` can do AI R&D research, and we simply evaluate it for it's ability to progress the SOTA past the 2020 knowledge that it has. 

If `M_vintage` can progress the state of the art past 2020 without information about how we did this, then it's very likely that `M` can progress the state of the art past current date. Similarly, as `M_vintage` has similar levels of intelligence to `M`, if `M_vintage` cannot progress the state of the art past 2020, then `M` will be unlikely to do so in the current day.

# Issues with this approach

## Issue 0: METR's desiderata failed

1. Deliverable quickly: no. This requires training a new model - but see below for futher thoughts on this.
2. Practical: Unlikely this can be run in <1 week
3. Strong positive evidence: yes. `M_vintage` able to advance the SOTA from 2020 strongly implies that `M` will be able to advance the SOTA from current day.
4. Strong negative evidence: yes. Similar to above. Primary concern is model sandbagging.
5. Smooth progress and flexible margin: yes - we can just use some continious metric for the models trained by `M_vintage`. 

## Issue 1: Cost of Training `M_vintage`

The most obvious issue: we're 

However, as `M` and `M_vintage` are supposed to be identical models in architecture, training procedures, and hardward, I am sure there are clever techniques for 

## Issue 2: `M_vintage` can peer into the future

Another major issue here is that `M_vintage` can see into the future, simply by browing the internet. Advancing the SOTA is pretty easy if you can see into the future!

This implies some requirements on our test environment. We can expose a historical copy of the internet to `M_vintage` (think Internet Archive). Of course, there are concerns of sandbagging, as any model smart enough to make R&D progress would likely be smart enough to figure out it's in a test environment - but this may not be an issue for the outcome-based eval we're interested in.