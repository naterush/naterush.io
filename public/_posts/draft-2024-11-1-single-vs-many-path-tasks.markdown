---
layout: post
title:  "Single vs. Many Path Tasks"
date:   2024-11-1 0:00:00 -0400
categories:
  - ai-safety
---

Not all tasks are made equal. We can classify tasks based on the following two questions about how they must be accomplished:
1. Does the goal require a specific sequence of steps? If yes, we call this a deterministic task.
2. Do the specific sequence of steps need to be done in a specific order? If yes, we call this an ordered tasks.

When we talk of steps, we reference to one specific generation, tool usage, and observation of the result. That is - one outer loop in the scaffolding. 

# Examples
1. Deterministic and ordered: `sha256^n`. 
1. Deterministic and non-ordered: again, kinda likely to be a synthetic task. For example, "find the bug in this code", there is one bug. 
1. Non-deterministic and ordered: you could artificatially create one, perhaps. Like do `sha256^n` or `sha512^n` - picking one at the start. But most real world tasks only have an ordering if they are deterministic in their steps.
1. Non-deterministic and non-ordered: most real world tasks fall into this domain.

# Realism most often means non-deterministic and non-ordered

1. There should be a large number of steps, always. A large number of directions to go. 
2. Success requires either planning, or trying a huge number of options. 

# What this means concretely for task development

1. The most useful tasks for measuring real world performance meet this
2. This means there should not be one hard step, but rather multiple incremetnal steps. 

# "The aha moment"

1. As a problem designer, most of the abstract problems we have come with a "single hard step" - the flip or insight that if you get it on the test, you'll get an A
2. But not every problem has one big hard step. Sometimes there are a lot of small easy steps. Sometimes there is a large hard step. Sometimes there are many hard large steps. 
3. The most important thing we need to do is realism. How to make real tasks? What does this really even mean? 

Creating realistic tasks fundamentally is operational. Not research....


# Operationalizing this

1. Solving real problems effectively requires creating replicas of existing problems. 
2. The most important thing is finding problems to replicate that actually are meaningful
3. Really easy to waste time otherwise. 


# From Realistic Tests to Scaling Metrics

1. There is no absolute measure of task






2. 


In a previous post

I argue that 