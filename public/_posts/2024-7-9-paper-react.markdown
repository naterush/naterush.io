---
layout: post
title:  "Paper Review: React: Synergizing Reasoning and Acting in Language Models"
date:   2024-2-10 0:00:00 -0400
categories:
  - paper-review
---

> This is my first paper review. I'm only pivoting into AI safety research now, so I've got a lot of catching up to do. Feel free to skim these to see my 

Paper [here](https://arxiv.org/pdf/1706.03741). Reading papers following the method [here](http://ccr.sigcomm.org/online/files/p83-keshavA.pdf).

# First Pass

## Intro
- Unifying chain of thought reasoning and the actions based on that reasoning; this feels archaiac. 
-  Benchmarks idk: HotpotQA and Fever
- No, sorry, this is different than chain of thought; the new innovation here is letting the agent actually Act within it's chain of thought. Chain of thought only allows internal knowledge.

## Fact Retreival
- Reasoning and acting is better than just acting - this is in the simple fact 
- ReAct is not much better in succeeding in CoT, but it is better at: not hallucinating. It is worse in that it is more likely to get caught in reasoning loops. Search being successful is the most important input... this seems to make sense

## Decision Making Tasks
- React signifigantly outperforms the benchmarks here, Act especially.
- Benchmarks idk: ALFWorld and Webshop.
- Out performs IL (imitation learning) and RL (reinforcement learning).

## Conclusion:
- They introduced react, ya. Not chain of thought or just action because it is the model that allows users to.

## Appendices
- The prompt and format is pretty simple. 
- Just: Thought -> Act. Then get an Observation from the Act, and then go on to the next round. 
- Human in the loop? They consider this; they say it can help correct problematic traces.
- I do not look to deeply into fine-tuning smaller models. Overall, I am very suspicious that fine-tuning smaller models is actually a useful long-term strategy.

## Citations
- I know 0 of these citations. 
- Want to read: Large language models are zero-shot reasoners.

> No second and third passes are required on this paper for now. 

# My Conclusions
1. Basic framework of (Thought -> Act -> Observe)* is very simple. Notably, though, when naively implementing a basic agent without a framework, it's easy to go straight to Act -> Observe, skipping the explicit planning stages. This apparently decreases the success. 
2. In practice, I have observed the reasoning loops that these agents can stuck in. I do not think it is unique to Act, but it is reasonably common with what happens with Mito AI. 
3. Human in the loop, fine-tuning smaller models. Both of these things increase success in the short-term on benchmarks, and perhaps they are enough to take current systems to useful. But long-term they are BS strategies.
4. It's remarkable how much concern there was for exposing LLMs to the internet / for arbitrary code execution in the early days; this is pretty much not a concern anymore, we just let these things run free in most cases (even when prompts are injectable).