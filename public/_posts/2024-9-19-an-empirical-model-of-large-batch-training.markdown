---
layout: post
title:  "Paper Review: An Empirical Model of Large-Batch Training"
date:   2024-9-19 0:00:00 -0400
categories:
  - ai-safety
  - creative-writing
---

Paper [here](http://arxiv.org/pdf/1812.06162).

# Raw Notes
- First I'll note that the implications here are not so relevant to me, who is compute limited (usually to an A100 GPU); I mostly am just looking for GPU saturation, which isn't something that I actually was looking at too closely before...
- Pareto-front: for a given computational cost, higher parallelism gives you more accuracy, but also takes longer. For a given wall-clock time, higher parallelism gives you higher accuracy, but for higher computational cost. This makes sense in both cases.  
- The idea that SGD type optimizers -- smaller steps have higher variance. Potentially this is good in the start of training to get out of local optima (wow, the assumptions we make here; wild). But also, less steps has a lower variance - they are closer to the true direction of the gradient over the training set. 
- Minibatch gradient is an estimate of true gradient. Larger batches give better, lower variance estimates. 
- They drive to some definition of noise scale. I get lost around 2.5 - the expansions are a bit about my paygrade currently. Namely, lost by the trace and the hessian (but working on it).
- B_crit is the critical batch size - the optimal computational place to put it for efficiency and cost. And they estimate this with being proportial to B_noise. B_noise itself can be estimated by B_simple. 
- A whole bunch of other discussion. Notably, B_noise increases as you reach a lower loss, so thus the optimal batch size increases as well. 
- But also, there's some complexity injected by learning rates. Learning rates 
- I don't get why larger batches -> larger optimal learning rates. And also lower loss -> large batches. But often we have a decay in the learning rate, per a learning rate schedule, towards the end. Claude says: it's complicated. Depends, but in practice, decaying learning rates can work well. Higher earlier is better for fine-tuning. Hmm. 
- In trying to calculate it myself, it seems we need to do some per sample calculation - which is a bit tricky. I'm not exactly sure about this calculation, but I will return to it later. 



# My Thoughts
1. Need to dig in on hessian. Getting that it's some second order partial derivative of a matrix valued function - but not really following the relationships here. Additionally, `tr(H @ Sigma)` - yeah, I'm a bit lost here. 
2. Want to actually compute the noise scale for some MNIST classifiers I've used. I'd be interested to see how batch-size relates to what I've been using, which has been totally arbitrary so far. Also want to see how to compute it in practice.
  - Update: I tried computing this, and must be doing it wrong as a) it decreases over time and b) it's like 4.
  - Update: I think I need to calculate the variance per sample, rather than per batch. This improves things, but the numbers are like 6k now. This could be reasonable, but training on this batch size leads to bad performance in practice. 
