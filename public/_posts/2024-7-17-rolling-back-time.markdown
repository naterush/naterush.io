---
layout: post
title:  "Vintage Models: An AI R&D Eval Proposal"
date:   2024-7-17 0:00:00 -0400
categories:
  - ai-safety
---

## Available Human-generated Data Stock

Model intelligence increases as a function of:
1. Model architecture improvements
2. Training data quantity
3. Pre/during/post training processes
4. Hardward/infra improvements

When it comes to training data, the stock of human-created training data will likely increase by [less than a single order of magnitude](https://arxiv.org/pdf/2211.04325) (fig 1).

Now, imagine we create a model that is smarter than the current SOTA. This will be a result of improvements to all the above inputs, but in all likelyhood, this model's smarts will not come in majority from the new human-created data from the past 10 years. 

Put simply: the amount of human-created data is not increasing fast enough for it to be the primary input to a large jump in model intelligence.

## `M_vintage`: training a model that lives in the past 

This has an interesting implication: for any SOTA model `M`, we can create a twin model that has the same architecture, same training process, same hardware, but is trained only on the subset of the training data from pre-2020. Let's call this model `M_vintage`. Sounds cute.

Due to the above argument about data stock, it's likely that the intelligence of `M` and `M_vintage` are within spitting distance of each other. As a result, `M` and `M_vintage` likely have comparable AI R&D research capabilities. 

However, as `M` and `M_vintage` have different starting knowledge for what SOTA AI models look like, this opens up some interesting eval possibilities for us. 

## The issue with subtask based evals 

The [current SOTA](https://docs.google.com/document/d/1ktP_YhMeHdj6sI1YzqwrFiU8Ax9BOL9gTUIzbxsI6Uk/edit) for evaluating if AI agents can automate AI R&D is a collection of 9 subtasks that "simulate" AI research, and then measurement tools to see how well models can perform on these tasks. 

There's a lot of value in this style of subtask measurement. Per the goals of the evals, this approach is actually deliverable, not particularly expensive, and certainly points in the right direction.

The main issue with this subtask type of eval is that cutting-edge research isn't a list of neatly decomposible sub-tasks - at least in my research experience! Moreover, pushing the cutting-edge of AI forward does not necessarily involve _any_ of the specific subtasks on this list.

Of course, if we're not willing to do subtask-based evals, then the only other option is to have the model just aim for the main task. This makes no sense for AI R&D evals, obviously, as the entire goal of evals is to check if models can push the SOTA forward before they actually begin to do so. Otherwise, we risk an uncontrolled intelligence explosion.

## Outcome based evals with `M_vintage`

`M_vintage` allows us to avoid this tradeoff. It allows us to run AI R&D evaluations that do not require us to impose a specific subtask decomposition, while also not pushing the current AI SOTA forward.

Here's how we do this:
1. `M_vintage` is a model that only knows the SOTA up to 2020. 
2. Thus, we can create an environment where `M_vintage` can do AI R&D research, starting from 2020. 
3. We then evaluate `M_vintage` for it's ability to progress the SOTA past 2020.

If `M_vintage` can progress the SOTA past 2020, then it's very likely that `M` can make progress in the current day. Similarly, as `M_vintage` has similar levels of intelligence to `M`, if `M_vintage` cannot progress past 2020, then `M` will be unlikely to do so in the current day.

## Further work for `M_vintage`

This is a very incomplete proposal, with quite a few issues.

### Issue 0: this fails most of METR's eval desiderata

1. Deliverable quickly: No. This requires training a new model, and creating a very specific test environment. See thoughts on both below.
2. Practical: No. Unlikely this can be run in <1 week. 
3. Strong positive evidence: Yes. `M_vintage` able to advance the SOTA from 2020 strongly implies that `M` will be able to advance the SOTA from current day.
4. Strong negative evidence: Yes. Primary concern is model sandbagging here.
5. Smooth progress and flexible margin: Yes! We can just use some continuous metric of model quality for the models trained by `M_vintage`. 

The timeline and cost are the primary failed desiderata here. Let's get a bit more specific.

### Issue 1: Cost of Training `M_vintage`

The most obvious issue: we now have to convince AI labs to train an entire new SOTA model. Sounds... really damn expensive.

However, as `M` and `M_vintage` are supposed to be identical models in architecture, training procedures, and hardware, there are techniques to make this cheaper! 

We could train `M_vintage` first on just up-to-2020 data, cut a release for testing, and then continue to train model `M` from there. Or perhaps it's possible to selectively undo the training effect of all post 2020 data. 

### Issue 2: `M_vintage` can peer into the future

Another major issue here is that `M_vintage` can see into the future, simply by browing the internet. Advancing the SOTA is pretty easy if you can see into the future!

This implies some requirements on our test environment. We can expose a historical copy of the internet to `M_vintage` (think Internet Archive). 

Of course, there are concerns of sandbagging, as any model smart enough to make R&D progress would likely be smart enough to figure out it's in a test environment - but this may not be an issue for the outcome-based eval we're interested in.