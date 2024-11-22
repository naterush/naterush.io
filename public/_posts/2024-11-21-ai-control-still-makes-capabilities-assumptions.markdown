---
layout: post
title:  "AI Control still makes capabilities assumptions"
date:   2024-11-21 0:00:00 -0400
categories:
  - ai-safety
---

When Anthropic's writes about [safety cases](https://alignment.anthropic.com/2024/safety-cases/), they say: "The cleanest argument that current-day AI models will not cause a catastrophe is probably that they lack the capability to do so.  However, as capabilities improve, we’ll need new tools for ensuring that AI models won’t cause a catastrophe even if we can’t rule out the capability."

They then go to give a sketch for three safety cases: mechanistic interpretability, control, and incentives analysis. From their introduction, it seems these safety cases do not assume that we can rule out the capabilities of a model.

However, Anthropic notes that for AI control, "a full safety case would probably need a way to rule out ASL-5 capabilities that’s independent of the control case’s non-sandbagging logic."

This is, of course, obvious. If an AI control scheme was able to effectively stop all purposefully exploitable bugs from entering a codebase for an actor with unbounded capabilties, this would be the single most valuable B2B software ever created. And the security community has indeed been trying to create tooling like this for 40+ years - it's the ultimate version of every automatic vulnerability scanner.

So, an AI control safety case strongly relies on capabilities limitations to be valid. The goal is just to safety support models with more capabilities.

This makes me feel a really robust understanding of model capabilties, what elicitation looks like (and really means), and making sure that all folks have the tools to do this is particularly important -- especially because AI control seems like the most likely first-deployed safety case.