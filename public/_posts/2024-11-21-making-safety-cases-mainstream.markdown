---
layout: post
title:  "Making Safety Cases Mainstream"
date:   2024-11-21 0:00:00 -0400
categories:
  - ai-safety
---

From RSPs to safety cases. As models continue to improve, we loose the ability to argue that they are safe simply because they cannot perform dangerous actions. As such, we'd like to either stop developing smarter models, or we have to make a new type of argument about why these models are safe. An argument of this type if known as a safety case. 

Defined by the UK AI Safety Institute, as safety case is: “A structured argument, supported by a body of evidence, that provides a compelling, comprehensible, and valid case that a system is safe for a given application in a given environment.” 

In this post, I'm going to think through what feels like it will be helpful in making safety cases more popular. Rephrased slightly, what can researchers outside of major labs do to improve the odds that major labs actually make safety cases? For now, I'm going to ignore regulatory approachs, and instead just think about what technical/product work we can do to improve the odds that safety cases are adopted. 

# Step 1: Reference Implementation

Fundamentally, the safety community has yet to make a full, concrete safety case. You can see some sketches by Anthropic [here](https://alignment.anthropic.com/2024/safety-cases/). But no full safety case exists, beyond informal arguments that models lack capabilities necessary to cause safety violations. 

The first pass at defining a complex system is often the most informative pass - as you get a much more concrete handle on what is easy, what is hard, and where you have holes that you need to fill it. Furthermore, it's much easier to copy an existing safety case (and modify it) than it is to create an entirely new one from scratch. For these reasons, defining a concrete safety case that is NOT just about limited capabilities should be priority one for anyone trying to get safety cases adopted. 

## Cutting-edge models vs. old models?

I'm not sure how important it is that this safety case is actually defined on cutting-edge models. For example, we could restrict ourselves to an older model like GPT-4 (lol) and attempt to make an AI control argument. As long as we're clear about the assumptions we're making (e.g. the model is not smart enough to have a behavioral shift in deployment), we can make a concrete, complete safety argument that others can then build on top of. 

The benefit of this simpler safety case is that we may will likely get much of the structure of the safety case worked out, while avoiding some larger research questions with uncertain timelines. 

## Make it open source

Notably, this reference implementation should be open-source -- otherwise it's not really a reference for anyone. This isn't really capabilities work, so there's not too much acceleration risk or danger in open sourcing this. 

## Make it executable

I strongly believe that this reference safety case should be fully executable. In other words, the open source project should be an actual implementation of the system, as well as the claimed safety properties. This will facilitate researchers actually being able to test the claimed safety properties of the system.

## Which safety case to pick?

In Anthropic's [sketch safety cases](https://alignment.anthropic.com/2024/safety-cases/), they sketch safety cases for Mechanistic Interpretability, AI Control, and Incentives Analysis. 

If we're making a reference implementation, which of these should we pick? 

Well, I think if our goal is to get safety cases adopted, and we think a reference implementation is the most important step in doing this, we should pick a safety case that we can create a reference for as quickly as possible. 

In practice, I think this is AI Control.

Mechanistic Interpretability and Incentives Analysis seem to me to have a much larger number of unknown unknowns. Moreover, if a good AI Control safety case exists, it feels that much of it will look like "good monitoring and basic safety precautions" - which is hardly wasted work whatever else we add on top of it. 

# Step 2: Make it Incrementally Adoptable

In general, implementing things is much easier if you can implement them piece-wise. In practice, AI labs have an incredible time pressure, and if we give them a safety case that says "this takes 6 months of work by 10 engineers before it's working" -- it's much less likely to be prioritized. 

As such, it's important that the initial reference safety case can be adopted incrementally. Moreover, we'd like each step of incremental adoption to be an improvement in safety. 

For example, an AI Control safety case could be phrased as "here are 10 monitors you need to implement to have safety" or it could be phrased as "your first monitor, your second monitor, etc etc." We should help AI labs prioritize how to roll out safety cases internally. 

## Put on your product hats

In practice, I think that creating an incrementally adoptable safety case looks a lot like product work -- in practice, it's the same set of questions that a B2B SASS auth product thinks about as they think about how to get folks to adopt their full product offering. 

This means we need to think about selling safety cases NOT just to engineers -- as engineers aren't the only folks who are going to need to be onboard. We also need to think about product managers, the finance team, etc, etc, etc. 

We're effectively designing an open-source standard that we want a certain set of companies to adopt. Doing this most effectively requires thinking about the needs of the company, and... pretty much the same set of concerns that B2B sass companies have when they sell their products. 

# Safety Cases are Important

While we're getting our regulatory footing, and as models will likely to continue to improve (ignoring the so-called wall for now), I do believe that safety cases are important for us to be making. It's certainly better than flying by the seat of our pants!

# Main Conclusions
1. Safety cases are important, and we should attempt to ensure they are actually created.
2. External to a lab, the most effective way to do this is likely to create a reference implementation.
2. As time-to-market is of upmost important, the most compelling safety case is probably AI control. 
3. The reference implementation we create should be open source and executable (!)
4. The safety case should be designed to be incrementally adoptable. 
5. More generally, when thinking about safety cases, we should put on our B2B sass product hats -- we're effectively trying to get major AI labs to adopt our product!


