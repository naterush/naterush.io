---
layout: post
title:  "Outside Auditors Need More Access"
date:   2024-11-8 0:00:00 -0400
categories:
  - ai-safety
---

# The Role of the Outside

Companies that issue debt do not also rate the riskiness of their debt. Letting companies do this would result in the same outcome as when my girlfriend asks me if the meal I cooked for myself was tasty: "yes, everything is fine here, nothing to worry about."

The potential (and likely) result is that the conflict of interest in "getting thing out into world" will outweigh the interest in "we need to put something safe out into the world." 

The financial industry deals with this by having agencies, like Moody's, that rates the riskiness of debt. These agencies are not part of the companies whose debt they rate. (Of course, 2008 showed us that there are issues with outside audiors as well - but let's ignore that for now.)

# What Outsiders Need

Let's keep rocking with the financial world. In practice, when Moody's is rating the debt of some company, they get an enormous amount of documentation from the company, including:
1. Detailed financial records and planning
1. Internal strategic plans and information about upcoming projects or deals
1. Stress-testing scenarios and contingency scenariors

That is to say: evaluating the riskiness of debt is _not_ doable from only publicly available information - it actually requires private information from the company. 

## What is required of outsiders in return

Auditors themselves have regulatory requirements - you don't get to rate debt with no constraints on you. Many of these requirements were passed in the wake of the 2008 financial crisis with the Dodd-Frank act - because of the rating agencies failure that contributed to the crisis!

These regulations include:
1. Must register with the SEC, document their rating procedure, and keep clear documentation of their rating procedure
1. Mandatory seperation of sales/marketing from the actual ratings (so we don't run into the same conflicts of interest)
1. Liability to the SEC (and sometimes the public) for their ratings

# Outsiders and new AI models

It's uncontroversial to say that LLMs may pose large risks, especially as they get increasingly intelligent. Indeed, every major AI lab [admits](https://www.anthropic.com/news/anthropics-responsible-scaling-policy) [as much](https://openai.com/index/openai-o1-system-card/).

Thus, for the same reason we prefer outside audiors in the financial industry, we should prefer outside auditors for new large language models as well. 

Notably, "private information" is also required for an LLM evaluation agency as well. The most obvious information would include details on the model architecture, training data, training procedure, safety protocols, monitoring, etc. 

But "private information" likely includes much more than this. Specifically, [o1](https://openai.com/index/openai-o1-system-card/) has demonstrated that smartly scaling inferencing-time compute can lead to a practical improvement in model capabilities - and access to the model that allows for this type of scaling (and fine-tuning) is something that does not seem to

(Note: the fact that LLM auditing orgs do not get fine-tune access to new LLMs is a guess without any inside information - but it's very likely true. Fine-tuning API's are released many months after the base model API, so these APIs likely don't even exist when they might be useful. Moreover, given the rate-limits that almost always exist on new models, I expect that these auding orgs are more token/budget constrained than they'd like to be.)

# What this means for AI labs

To me, it's clear that evaluation of new models requires way more than just access to an API that returns completions for the model. An effective audit requires access to:
1. Access to model architecture, data, and training details
1. Access to model internals (e.g. for SAE or probe training)
1. The ability to fine-tune the model 
1. A very large computational budget to run the model

All of this should be reasonably uncontroversial (if we were smart). We require this is companies that issue debt - and clearly, a single 100M dollar bond has less potential for world-impact than a new intelligence.

That being said - like the financial industry - we're very unlikely to get to a world where this happens without regulation. Damn conflicts of interest.