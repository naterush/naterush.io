---
layout: post
title:  "Paper Review: GSM-Symbolic"
date:   2024-10-23 0:00:00 -0400
categories:
  - ai-safety
---

Paper [here](https://arxiv.org/pdf/2410.05229).

# Raw Notes

- A Peek into Token Bias: Large Language Models Are Not Yet Genuine Reasoners - this paper seems worth skimming real quick. 
  - Overall, shared methodology of generating a synthetic dataset and trying
  - Seems useful in a synethtic dataset to have some formal task definition (or way of varying it), and then having an explicit public and private test set. 
  - It would be useful to think of a task standard for parameteric tasks. And also improving the task standard to make sure that everyone submits to one public / private repository...
  - "probabilistic pattern-matching rather than formal reasoning" literally whatever. Quite concretly, logical reasoning for humans requires paper (or a very-well trained brain). LLMs could 100% do formal reasoning if given tools to do so - and would fail in similar ways to humans. 
- " Schaeffer et al. (2023) argue that when a task requires emitting multiple tokens correctly, the probability of answering correctly decreases exponentially with the number of tokens"
  - Paper [here](https://arxiv.org/pdf/2304.15004)
  - Ohh! This looks super relevant to my thinking [here](https://www.naterush.io/posts/2024-10-10-on-task-based-scaling-laws.markdown) - but I think they are making a different point. Let's read it. 
  - " even though the model family’s per-token error rate changes smoothly, continuously and predictably with increasing scale."
    - But notably - real world tasks match this description. So sure, this is an artifact of the measurement process, but real world tasks care less about per-token error rate than they do "practically useful" things - which exact string match is a great example of!
  - I don't get how accuracy is a non-linear metric? Need to read more
  - "Changing from a nonlinear metric to a linear metric such as Token Edit Distance, scaling shows smooth, continuous and predictable improvements, ablating the emergent ability." - yes. But token edit distance for something like answering multiple choice this metric make no sense. Or on reversing a hash. Or on doing something tangible.  
  - Ah. I see how accuracy is non-linear (if accuracy is defined as selecting L correct tokens).
  - Notably though, the tasks we'd like to make benchmarks on I think should _not_ be those that are L correct tokens - these are kinda boring. Rather, we'd like the tasks to be something that require actual action... does this distinction make sense? Like it's almost more useful if they can use tools, than if they can generate L correct tokens.
  - And multiple choice is also the case - Brier Score - some metric for how close it gets to assigning the right probability. Whatever. 
  - Notably: **real usefulness in the real world often actually _requires_ accuracy. So the emergent-ness is still true - perhaps the metric graphs are misleading, because we do gradually approach performance, but if you're looking to measure what size model can accomplish something, only the bigger ones can. 
  - This paper is _only_ proving that you actually have some predictive capabilities when you are before this final result. 
  - Is this true when you have something like reversing a hash? Can you come up with a linear metric? I am not sure. 
  - "Prediction: Emergent Abilities Disappear With Better Statistics" 
  - "Emergent abilities appear only for specific metrics, not task-model families." They make this seem like such a gotcha - but in practice, some metrics are "real" in the sense that they actually measure the thing that matters for the model doing useful work in the real world. This is an important difference. Notably, though, if we can formulate the metric differently, we might be able to get more predictive power; this is kinda compelling. 
  - Overall, this paper was really useful. In general, my two takeaways:
    - Accuracy (can be) a non-linear metric in token-length. Non-linear metrics (and )

Ok, I am actually going to write about this above paper. I think it's more interesting than GSM Symbolic, specifically for task standard work. 

## Can all tasks be scored by a linear metric?

This [paper](https://arxiv.org/pdf/2304.15004) introduces a model that argues that emergent capabilities may not be real, and in fact may just be a function of the metric choosen to measure these capabilities. 

Two responses to this:
1. Some capabilities only exist when a certain non-linear metric is indeed met. E.g. if the capability you care about is "can this model pass a test" - then multiple-choice accuracy is actually the metric you _need_ to use. Switching to something like Brier Score doesn't help, as you're no longer measuring the capability you care about: passing the test.  
2. That being said, switching to Brier Score can make this performance more "predictable." So, the capabilites you care about may be "emergent" in the sense that they are NOT there for small models, and then at a certain size. But it also might be the case that the place they appear is predictable - if you can convert from Brier Score to performance on test!




