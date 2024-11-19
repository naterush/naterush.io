---
layout: post
title:  "Let's Talk Tasks"
date:   2024-11-13 0:00:00 -0400
categories:
  - ai-safety
---

# Why tasks in the first place?

Most AI systems before ChatGPT were not of the ChatGPT flavor - they didn't not try to solve every problem under the sun. Rather, they were usually built to solve a specific problem, like identifying fraud transactions or labeling images. 

As such, tasks were a very natural way to measure how well an AI system was performing: a system was built to label images could be validated on it's ability to label images. This validation step is part of the training process of any AI system - going back well before ChatGPT. 

Indeed, as many folks wanted to solve similar problems, it was fair to abstract this validation work into a public task that different architectures/companies/optimizers/VC funds could measure themselves against. 

But we're not building systems for a specific task anymore. We're building systems that approach (at least, much more closely) general intelligence. And so rather than being able to usefully measure these systems one type of task, we're not measuring them on all sorts of tasks. How well does this model do on math, on coding, on image labeling, on fact recall?

## What are tasks for

There are two things that a diverse family of tasks are remarkably, clearly useful for. 

1. Providing comparisons between models: look at tasks you care about, look at which model does best, and use this model to do the thing you want to do.
2. Providing rhetorical/political tools for humans: tasks (not CEL) are the things that make headlines when a model makes progress. No one gives a damn about anything, except what the functional capabilities of the model are, and a diverse family of tasks are how we get information about these functional capabilities
3. Environments for close observation: we observe models much more closely when running tasks than otherwise. This leads to interesting facts, like in the o1 deployment - when task-runners found unexpected behavior that was kinda freaky. These close observations are useful for (2) as well.

There are other things that a diverse family of tasks may be useful for, but it's not yet clear:
1. Scaling laws: as I've written about here and here (TODO), it's not clear that we're going to be able to form functional scaling laws for tasks. I expect that we won't, and that in general task performance will remain an emergent behavior. 
2. Red lines for AI development: this is a subset of bullet point (2) above. Mainly, it's unclear if we're going to be able to politically align on some tasks

I personally think a very well-developed set of AI R&D evaluations, and a clear, legible argument for why these AI R&D evaluations should be a red-line, could be remarkably effective rallying point. Not sure what is required for getting this - TODO in a future blog post called "How to bring a good red-line to production?" Also useful would be some research myself, which is "How red-lines exist in other fields?" Bio-engineering and nuclear is probably most useful here? 


## Different Types of Tasks

One thing this diverse family of tasks obscures is that all sorts of tasks in this family are quite diverse. Pointing on some binaries tasks can fall on:
1. Tool usage vs. not. This seems like it shouldn't matter, but as I argue here (TODO), depending on the tool being used, this might almost force emergent capabilities. 
2. Sequential vs. not. Some 
3. Deterministic vs. not. 
4. Knowledge-based vs. not. 

## From Tasks to Testing Framework

More than 

I expect that more useful than 

### Subnote: how to get folks to do good elicitation

HMMM... This seems important. 







 to solve a specific task, so measuring it's performance on that specific task was very useful. Indeed, as many different folks wanted to solve similar problems, it was possible to 

# 

As such, it makes total sense that we began. 

There are many different types of tasks in the world. When we benchmark AI systems, we often compare across different types of tasks. This is natural, given the history of task-




# 


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