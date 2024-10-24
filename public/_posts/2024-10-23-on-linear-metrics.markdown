---
layout: post
title:  "On Linear Metrics"
date:   2024-10-23 0:00:00 -0400
categories:
  - ai-safety
---

In a [previous post](https://www.naterush.io/posts/2024-10-10-on-task-based-scaling-laws.markdown), I argue that even if human performance on a set of tasks scales naturally with the resources given to these humans, you may not get predictive capabilities of model performance from this set of tasks, if the tasks within this set are too correlated.

To show this, I introduce the `sha256^n` family of tasks: 
1. For task `i`, return the `ith` hash of a given input. 
2. Performance on this family of tasks is measured as % of correct answers out of the total task set. 

For humans, performance on this task scales linearly with time given to them - simply because they have more time to run the simple Python for loop they write to solve this problem.

For models, performance on this task is likely a binary: either zero, or some fixed percentage of the task family. Small models will likely get a score of zero, as they are too dumb to write the correct Python code, so they will solve none of the tasks. Above a certain size, models will be able to write the simple Python script for one task, and thus will be able to do so for all tasks (as it's effectively the same Python code for every task). 

Thus, these larger models will all likely score `x`, where `x` is the percentage of tasks who can be solved by a Python script that can run within the fixed timeout given to these models. Note that because the testing framework (like [METR's vivaria](https://vivaria.metr.org)) gives the same fixed timeout to all models for running code, `x` will be the same for all models above a certain size.

In other words, you cannot form a useful, predictive scaling law with the `sha256^n` family of tasks. This is primarily a result of the internal correlation between these tasks - but note that it also depends on the specifics of the testing infrastructure.

# From task correlation to task measurement

Ok - so we have a family of tasks that preclude a scaling law because of their internal correlation. [This paper](https://arxiv.org/pdf/2304.15004) argues that you can get a similar phenomenon (no useful scaling law) as a result of metric you choose to score your task family.

## Quick summary of the paper

1. As model size increases, CEL decreases according to a predictable scaling law. 
2. However, some tasks/metrics appear to _not_ form a predictable scaling law. Rather, these tasks/metrics are claimed to demonstrate [emergent capabilities](https://openreview.net/pdf?id=yzkSU5zdwD#:~:text=An%20ability%20is%20emergent%20if,)%20from%20small%2Dscale%20models.) of models - where increasing model size _suddenly_ leads to a sudden, rapid, and unpredictable improvement in performance on this task. 
3. This paper argues that these so-called emergent capabilities are actually an artifact of the metric being used by the tasks. Some metrics scale linearly with increasing token-length (e.g. edit distance from a correct string), while other metrics scale non-linearly (e.g. % of correct answers on a multiple choice test).
4. If you have metrics that scale non-linearly, then you're likely to observe these emergent properties. But if you reformulate the task/metric to use a linear, continuous metric, then you actually can form a nice, useful scaling law. 
5. They validate this hypothesis by reformulating tasks from non-linear metrics to linear metrics, and demonstrate that these tasks then have smooth scaling and predictable results. 

The model of emergent capabilities introduced in this paper is very useful in thinking about issues with the metrics we oft use for scoring tasks. However, the implication that emergent capabilities _aren't really real_ on these tasks goes a bit too far. Measuring the Brier Score on a multiple choice test is more practically useful than measuring the CEL, but ultimately what we care about is the _actual grade_ that models can get on such a test. 

In other words, some tasks actually _require_ specific metrics to be a meaningful test of model capabilities in the real world - and sometimes these specific metrics are just inherently non-linear. 

## Emergent = Sudden + Unpredictable

Consider 3-digit addition. This task can be scored in two ways: non-linearly with accuracy (e.g. did the model get the right answer), or linearly with edit distance (# of token edits required to get the calculated answer to the correct answer). This paper demonstrates that the non-linear metric will exhibit "emergent" capabilities - suddenly and unpredictably going from very low accuracy to very high accuracy - while the linear metric will scale naturally (as CEL does).

As any first grader can tell you, for 3-digit addition to be useful in the real world, getting close to the correct answer is NOT going to cut it. For this problem, we actually care about getting the correct answer - in other words, we care about the accuracy, not the edit distnace. In other words, this is one of those tasks I mentioned above, where a non-linear metric is required for the task/metric pair to be practically useful to us humans.

That being said, the existance of a linear formulation of this metric is still a boon. There is a natural correlation between the linear formula and the non-linear one: if edit distance is zero, then accuracy scales to one. Thus, by using a linear metric, we can form a scaling law that we can use to predict the non-linear metric that we care about. 

This raises an obvious question: does every non-linear metric have a linear metric that corresponds to it naturally?

## `sha256(i)` and the lack of a linearly-scaling metric

Let's create a new task family, called `sha256(i)`. For any task `i` in the family, the correct answer to the task is `sha256(i)`. Pretty simple! 

Let's imagine now we try and setup a simple linear scoring metric: from the paper above, we take the score on the task as the edit distance from the submitted answer to the correct answer.

Well, due to standard assumptions of sha256's randomness, we can conclude that if an LLM scores better than random chance, then it MUST have the ability to run sha256 - either internally or with some tool. And as it's unlikely any LLM has sha256 implemented internally (holy gradient descent), this means to do better than random chance, the model must be capable of effectively using a tool.

So, let's again try to imagine a scaling law for this task. Again, we imagine ourselves testing with a setup like [METR's vivaria](https://vivaria.metr.org) - where agents have the ability to run code for a fixed amount of time. 

Just like the [`sha256^n`](https://www.naterush.io/posts/2024-10-10-on-task-based-scaling-laws.markdown) family of tasks, models' performance on this task is likely a binary: 
1. Small models cannot write a working Python script, and so will get a random chance number of tokens correct - as they will just have to guess a random hash.
2. Large-enough models will get a perfect score on every token. That is, if you can write Python script, you can compute the hash, and so get all the output tokens correct. 

In other words, no model is likely to get half the tokens correct. We're not going to form a scaling law with this task, as there is no suitable metric that could possible be linear with respect to the number of tokens - it's either all or nothing!

## Why does this task not have a linearly scaling metric?

It's actually pretty simple to see why this task does not have a scoring metric that is linear:
1. Accomplishing this task requires tool usage - namely, running some code
2. Running code is itself a task that _requires accuracy_. 

Sure, the larger models get, the lower the edit distance between their Python script and a correct Python script. Unfortunately for these models, though, an edit distance of >0 in their Python script likely means it's won't run at all!

We can formalize this in the [mathematical model provided by this paper](https://arxiv.org/pdf/2304.15004):
1. Consider a task with the following steps:
  1. Sample `L` tokens
  2. Pass these `L` tokens to a `tool`, which is required to calculate the correct answer.
  3. If all `L` tokens are "correct", output the correct answer. Otherwise, output an incorrect answer.

And with the same argument given in the paper, and as `tool` usage is required to submit a correct answer, we can conclude that performance on this task will decrease geometrically with the length of `L`. There will be no linear metric we can apply to the results to try and form a smoother scaling law.

## Do tools require accuracy?

It's worth asking - is this `tool` we introduce in the above task representative of real tools that we let models use in the real world? 

I think yes. Think of writing and running any code, or browsing the web - an edit distance of one here can actually results in just totally incorrect answers. In general, I think most of the tools we use aren't particularly flexible on inputs!

# What this means

My conclusion: for tasks that require tool usage, it's unlikely that we're going to find a pleasant linear scaling law for model performance on these tasks. This is not an artifact of a badly selected metric. This is an artifact of the accuracy requirements for the tools we give to models. 

I think that this argument could benefit from further formalization - I'm a bit rusty myself! Moreover, I think the entire goal of "scaling law on real-world task performance" could benefit from formalization overall:
1. The testing harness: timeouts, token-budgets, inference-time compute, etc
2. The tools: how can we model these, what do they require, what impact do they have?
3. The measurement: what metrics are we choosing, why are these metrics the best? 