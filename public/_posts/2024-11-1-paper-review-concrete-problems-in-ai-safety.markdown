---
layout: post
title:  "Paper Review: Concrete Problems in AI Safety"
date:   2024-11-1 0:00:00 -0400
categories:
  - ai-safety
---

# Raw Notes
- The authors on this paper: wild. 
- "However, in our opinion one need not invoke these extreme scenarios to productively discuss accidents, and in fact doing so can lead to unnecessarily speculative discussions that lack precision, as noted by some critics" - so true!
- The framing of the paper as issues concretely with current ML techniques: very nice and honestly is what makes this paper much more durable than the early alignment forum stuff...
- "When discussing the problems in the remainder of this document, we will focus for concreteness on either RL agents or supervised learning systems. These are not the only possible paradigms for AI or ML systems, but we believe they are sufficient to illustrate the issues we have in mind, and that similar issues are likely to arise for other kinds of AI systems." - yeah, reasonable.
- My RL knowledge is all to a bit abstract. I should implement an RL system from scratch - this feels increasingly like high priority. 
- With an RL system, minimizing side-effects - this seems legit. 
- "For instance, the reward agent could try to find scenarios that the ML system claimed were high reward but that a human labels as low reward; this is reminiscent of generative adversarial networks" - in some sense, this is what I tried to do with the probe for linear represntaitons. Note that the subtly "more powerful" thing is still here. Generally, these are really hard to balance - and there are a lot of details left out here...
- "Reward Pretraining: A possible defense against cases where the agent can influence its own reward function (e.g. feedback or environmental embedding) is to train a fixed reward function ahead of time as a supervised learning process divorced from interaction with the environment. This could involve either learning a reward function from samples of state-reward pairs, or from trajectories, as in inverse reinforcement learning [107, 51]." - RLHF came from this, fixing these issues.
- Just kidding. The later work on Scalable Oversight actually is the RLHF - e.g. to be economic with the the requests it does of humans. Note that we use scalable oversight to mean something different now: the monitoring of smarter by dumber more generally. 
- "Hierarchical reinforcement learning." - never heard of this before, but it kinda reminds me of the herd-based thinking I've thought about before. 

# Reflections
1. They weren't super far off from high-level concerns - and certainly this is much more practical than the earlier work that was done on safety (e.g. worrying about an abstract "goal misspeciication" is not super helpful, I guess).
2. The reason that worrying about this abstract goal misspecification is not helpful may just be because it's not solvable? Like, it might actually just be too challenging... or not doable. And in practice, this is solvable not abstractly - it requires making more assumptions about the environment, or the architecture of the system, etc. 
3. Solutions that are more practical (e.g. more specific) should thus update to me as more likely to be useful. This makes me feel good about control theory, about evaluations, and about mech interp (?).
4. But relevance isn't a good predictor for being "good." Like RLHF - this was safety motivated, but concretely led to ChatGPT, which started the race. 
5. So: I think we should actually think about safety measures that are a) concrete, and b) not likely to lead to advancements in capabilities. In other words, mech. interp. may actually be bad (and indeed, based on rumors about Sonnet 3.5 - this totally be the case).
6. This makes up update towards evaluations and control theory. And away from mech. interp.  