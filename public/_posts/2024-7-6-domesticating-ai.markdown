---
layout: post
title:  "Domesticating AI"
date:   2024-7-6 0:00:00 -0400
categories:
  - ai-safety
  - creative-writing
---

# Basics of Domestication

Domestication is, excuse my french, super. 

An animal is more domesticatable if it's easier / more plesant to put in a pen and breed. More specifically:
1. Not a picky eater. So they are easy to keep.
2. Quick growers. So one human can make progress on domestication in their lifetime.
3. Easy breeders. This one's obvious.
4. Nice and plesant. Gotta be fun or no one's gonna do it!
5. No freakouts. If they are always panicking, that's hard to control.
6. Social herds help. If animals are used to social structure, then humans can control them more easily.

Domesticated animals go through a variety of genetic, enviornmental, and epigenetic changes that result in them being different beings - ones more useful and beneficial to humans. Dogs are much more interested in being social with humans than an undomesticated wolf. Cows are much easier to herd and milk than their wild bovine counterparts; the last remaining herd of [wild cattle](https://chillingham-castle.com/wild-cattle/) "are still potentially dangerous."

# Domesticating AI

Like cows, we want AIs to be useful and beneficial to humans. Can our current models of domestication help us do this more effectively?

Some features map obviously. An AI is easier to domesticate if it's not picky food-wise (any training data works), quick growers (fast iteration cycles), easy to reproduce (experiments are replicable), nice and plesant to interact with (alignment work is fun), and don't panic (work consistently).

Social herd behavior is a bit less obvious. Let's think about it in more detail.

## Herd Behavior

Animals that exist in herds are easier to domesticate:
1. Social hierarchy -> humans can assume a role of leader.
2. Safety in numbers -> animals will stay together easier and not run away.
3. Calmness in numbers -> animals are easier to work with.
4. Predictable movement patterns -> easier to control.
5. Reproductive line-up -> breeding becomes easier.
6. Learning from eachother -> easier to domesticate many.
7. Cooperative behavior -> animals work together. 

Of all these traits, social hierarchy stands out. In general, animals accustomed to social hierarchy more easily allow humans to assume the role of [top chicken](https://www.youtube.com/watch?v=wOmjnioNulo) - and so lead any indivigual animal easier.

## Herds of Models

Scalable oversight is one proposed approach for aligning a super-intelligent AI. At a high-level: a dumber, already-aligned AI evaluates the outputs of the super-intelligent AI to provide training signal to it. [Constitutional AI](https://arxiv.org/pdf/2212.08073) is a somewhat similar approach, where an AI critiques its own outputs according to a set of rules initially provided by a human, again providing training signal.

In both of these proposals, there's some notion of one model generating reward signal for another. 

What would happen if we allowed multiple models to all generate reward signal for each other during training? What sort of simulated social dynamics could we add to this training process? Can we raise a herd of models together and find a way to have one model emerge as top chicken? Could we then make the top chicken a puppet? 