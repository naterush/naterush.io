---
layout: post
title:  "Improving Alignment and Robustness with Circuit Breakers"
date:   2024-11-21 0:00:00 -0400
categories:
  - ai-safety
---

Paper can be found [here](https://arxiv.org/pdf/2406.04313).

# Raw Notes
- "Because the representation used to generate a harmful output is independent of any attack capable of eliciting it, this approach is attack-agnostic" - this feels like a strong assumption, but I'm not sure how you would test this...
- Projected Gradient Descent (PGD) attack - I don't know what this is, but I'm guessing it's a the adversarial image example that breaks it all. I need to do 