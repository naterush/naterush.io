---
layout: post
title:  "Paper Review: Intriguing properties of neural networks"
date:   2024-9-16 0:00:00 -0400
categories:
  - ai-safety
  - creative-writing
---

Paper [here](https://arxiv.org/abs/1312.6199).

# Raw Notes
- Ilya Sutskever is author, interesting.
- The idea of a perturbation is really simple and clear. And the optimization scheme makes sense, at a high-level: find the minmal perturbation that leads to a misclassification.
- Natural basis vs. random direction: I get the gist of this, but in practice, what is the natural basis of a layer? How do you actually compute that? 
  - The directions in activation space meaning something is SAEs (which when you read the SAE literature seems like it's new and novel). But maybe the new and novel thing is that the decomposition is interpretable - if you just encourage sparsity.
- Local smoothness assumptions do not hold. Unclear why this is...
- I need to read more about optimization. "a box-constrained L-BFGS" like makes sense to me in only the vaguest of ways, where I'm guessing what each letter means, lol. 
- Cool experimental results! These are not super visible perturbations!
- Spectral analysis of unstability: the Lipschitz constant is a simple and reasonable metric. It also leads to an ever-growing and awful bound. Note here that better mechanistic understandings of these networks might lead to better bounds. 
- I'm lost after the Jacobian step, but get the general push of the argument; very weak bound on what factor a perturbation can make. 


# My Thoughts
1. I want to think more about why local smoothness assumptions may not hold. Has there been progress on this question? My first feeling is that it's just a function of not seeing enough of the distribution. My second (stronger) feeling is that it's a function of the architecture, and in some sense might be fundamentally unescapable.
2. Can we understand something about the structure of these adversarial perturbations if we look at them in the context of an SAE? In other words, is `r` moving in some interesting direction? I want to read about adversarial examples for LLM, which are a different ballgame. 
3. Per the [Compact Proofs of Model Performance via Mech. Interp](https://arxiv.org/pdf/2406.11779) paper, can we do better on this bound than just the sum of every layer? Note that heuristic arguments will be useful here - we might have to assume something about the uncorrelatedness of some structure. 


Overall, this paper was a great read. I love old deep learning papers, as there's so little to keep track of and think about b/c the field is so young. Woo woo!