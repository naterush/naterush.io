---
layout: post
title:  "Don't Adjust Task Hardness"
date:   2024-10-23 0:00:00 -0400
categories:
  - ai-safety
---

[I previously argued](https://www.naterush.io/posts/2024-10-10-on-task-based-scaling-laws.markdown) that even if human performance on a set of tasks scales naturally with the resources given to these humans, you may not get predictive capabilities of model performance from this set of tasks - if the tasks are too correlated with each other. I then adapted existing justifications for [emergent behavior](https://arxiv.org/pdf/2304.15004) - namely, that they are a product of the non-linearity present in the metrics used to store some task - to argue that this precludes some tasks from having useful scaling laws as well. 

I'm going to take a slightly different turn in this post. Instead of talking about the structure of the tasks (or the structure of it's sub-tasks), I'm going to argue that the methodology that we use to create tasks might preclude us from creating useful scaling laws.

# How task creation currently works

I'm following the protocol laid out in [METR's task development bounty instructions](https://taskdev.metr.org/desiderata/). In general, the

1. Make a task. The goal of this task is 


The idea:
1. If humans get stuck, make the task easier - so the humans can make progress faster
2. Then, our scaling law x-axis is ???. 

Criticisms of the x-axis (?)
1. If you adjust task hardness after running it, then you're potentailly going 

Human performance on a task is not smooth. Let's assume it's bimodal that we measure how long it takes a user to do a task. 

There is a sequence of n steps, each of which is an opporuntity for a blow-up. There is a similar non-linearity to the accuracy metric (TODO: I need to understand this). 

This results in emergent behavior with intelligence. In other words, we get low scores, and then scores that scale exponentially. And the result of this we need a large number of samples to see the actual human distribution. 

What does this mean? Idk. I feel like we want a normal metric for the x-axis or y-axis or something. But why? What specifically am I saying here? We need our y-axis to have consistent steps. 

Ok - so imagine we then have many different tasks - and we normalize all of them and assume a normal distribution. What does this even mean? 
