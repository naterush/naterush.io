---
layout: post
title:  "Enlightenment Maybe"
date:   2023-11-15 0:00:00 -0400
categories:
  - world-model
  - ai-safety
---
# Our World Model

Here’s our simple model of the world. 

1. Before time `t = 1`, there are `2` people. 
2. At every time step:
    1. Some new people are born, with a growth rate of `b`
    2. Some existing people die, with a death rate of `d`
3. The current population of the world is thus `2 * (b - d)^t`. For simplicity, we just treat the number of living people as continuous, as this has no relevant to latter results.  

# Technological Intervention for Positive

Steven Pinker argues that human reason leads to technological advances which has led to the world getting better. 

To support this in our model, we add a tech timeline: tuples of timestep, changes to growth rate, and changes to death rate `(t, delta b, delta d)`. 

For example, at time `t = 2`, someone uses their superior rationality to invent washing hands before delivering babies [(this guy died as a result of this, btw)](https://www.npr.org/sections/health-shots/2015/01/12/375663920/the-doctor-who-championed-hand-washing-and-saved-women-s-lives). This has no effect on the number of babies born, but it does stop many mothers from dying. 

So we would get something like `(t=2, delta b = 0, delta d = -.01)` . From this tech timline, we can refactor our model in the following way. 

1. Before time `t = 1`, there are `2` people. 
2. At every time step:
    1. Some new people are born, with a growth rate of `b_t`, where `b_t` is computed from `b_1 += (delta b)_{t' < t}`
    2. Some existing people die, with a death rate of `d_t` , where `d_t` is computed from `d_1 += (delta d)_{t' < t}`
3. Thus, the current population of the world at time `T` is 

$$
2 * \prod_{t = 1}^{T}(b_t - d_t)
$$

# The goal of human civilization

Given the complexities of measuring human happiness, we choose to take a pinker-esque approach and simply say that the goal of human civilization is to maximize the number of humans that ever live. Of course, we’d like to factor happiness and quality of life into this model — but doing so is identical to birth and death rates above.

As such, we are looking to maximize the following sum:

$$
\sum_{i = 1}^{?} 2 * \prod_{t = 1}^{i}(b_t - d_t)
$$

Note the question mark!

# Time for extinction

Let’s address this question mark by introducing *extinction* into our model. Let’s say that there is some base-rate probability of extinction (e.g. super-massive asteroid) that all life on earth faces during any time-step. Let’s call this `e`. (My math gets shoddy here, please excuse). 

Thus, our expected time until extinction is `1 / e`, and we get the following sum for the total number of people. 

$$
\sum_{i = 1}^{1/e} 2 * \prod_{t = 1}^{i}(b_t - d_t)
$$

Now, let us have technology effect our probability of extinction. So our tech timeline becomes: tuples of timestep, changes to growth rate, and changes to death rate `(t, delta b, delta d, delta e)`. 

For example:

1. Hand washing: `(t=2, delta b = 0, delta d = -.01, delta e = 0)`
2. Nuclear power: `(t=2, delta b = 0, delta d = -.01, delta e = .01)`

# Final refactor: technologies effect of extinction risk

1. Before time `t = 1`, there are `2` people. 
2. At every time step:
    1. Some new people are born, with a growth rate of `b_t`, where `b_t` is computed from `b_1 += (delta b)_{t' < t}`
    2. Some existing people die, with a death rate of `d_t` , where `d_t` is computed from `d_1 += (delta d)_{t' < t}`
    3. There is some probability we go extinct, which is given by `e_t`, where `e_t` is computed from `e_1 += (delta e)_{t' < t}`
3. Thus, the current population of the world at time `T` is now a random variable:
    1. With probability $\prod_{t = 1}^T (1 - e_t)$, there are $2 * \prod_{t = 1}^{T}(b_t - d_t)$ people living. 
    2. With probability $\prod_{t = 1}^T e_t$, there are $0$ people alive

Thus, we can refactor our final equation to find the total number of people who live. 

$$
\sum_{i = 0}^{\inf} ((\prod_{t = 1}^i (1 - e_t)) * (2 * \prod_{t = 1}^{i}(b_t - d_t)) + (\prod_{t = 1}^i e_t) * 0)
$$

Which, removing extraneous terms an constants, reduces to:

$$
\sum_{i = 0}^{\inf} \prod_{t = 1}^i (1 - e_t) * (b_t - d_t)
$$

This function:

1. Increases as `b_t` increases
2. Decreases as `d_t` increases
3. Decreases as `e_t` increases

# The impossibility of measuring the probability of extinction

Measuring `b_t` and `d_t` are possible. From this, Steven Pinker can make arguments about how things have “gotten better.”

But if `b_t` and `d_t` have gotten better, but `e_t` as grown as well, then things might not be better. And notably, because `e_t` is entirely a function of long-tail events, *it is impossible to estimate `e_t` effectively.* 

As such, we can only speculate. Thing might be better. Or they might not be. 

Some things we humans have built have absolutely increased `e_t` (nuclear bombs). Indeed, we have come ***close*** to nuclear Armageddon [multiple times](https://en.wikipedia.org/wiki/List_of_nuclear_close_calls)!

# Conclusions

1. Things may or may not have gotten better. It’s unknowable, as a primary variable (`e_t`) is only sampled from long-tail distributions we cannot accurately measure or estimate. 
2. We should focus our time and energies on technologies that increase `b_t`, reduce `d_t`, but do not effect `e_t`. In other words, **low-power technologies**. 
3. There is more work to do to model tech “trees” - where later, high-power technical advancements can occur more easily because of low-power technical advancements.