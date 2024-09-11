---
layout: post
title:  "Mechanistic Interpretability: Baby's First Month"
date:   2024-9-11 0:00:00 -0400
categories:
  - ai-safety
---

It's been about a month since I've begun my journey into mechanistic interpretability - I'm the baby mentioned in the title!

This post is an overview of how I spent my time, what I found valuable, what I wish I did differently, and what resources I wished existed for aspiring mech interp researchers like myself. 

If you're an aspiring mech interp researcher: you can use this as a bar for how to learn effectively (if you're like me) - both what to do, and what not to do!
If you're an existing mech interp researcher: this might give you insight into the onboarding process to mech interp, and some ideas for improving that onboarding.
If you're me: this is a chance to reflect, so next month's learning can be even better.

# What my month has looked like

I quit my startup two months ago to work on AI Safety. Since then, I've been up-skilling on basic AI fundamentals, like building random basic algos [from scratch](https://github.com/naterush/nml).

Around August 15th, I came across the [MATS](https://www.matsprogram.org) program, which connects aspiring AI safety scholars with mentors in the field to do solo research. MATS seemed perfectly aligned (ha ha) with my interest in as-technical-as-possible AI Safety research, so I decided I was going to go do my best to apply before the deadline - August 30th. 

The bulk of the application was a 10-16 hour solo research project, where applicants were asked to explore something interesting with transformers, some novel circuit, or SAEs. This project sounded great, with the only problem being that I only had a very vague idea of what any of "transformer" meant - not to mention SAEs... 

As such, I needed to get some basics under my belt before I could even attempt a solo research project. Luckily, the application had reccomendations for these prereqs: take the [ARENA](https://arena3-chapter0-fundamentals.streamlit.app) ML learning course. So this is what I started on!

## Week 1: ARENA - working with PyTorch for the first time

I spent the first week with [ARENA chapter 1](https://arena3-chapter0-fundamentals.streamlit.app/[0.0]_Prerequisites). There are lessons (aka notebook exercises) on:
1. Tensors, einops, and einsum: very educational. Tensors were introduced well, but einops and einsum were introduced in a somewhat unmotivated way - I hadn't naturally encountered any problems that they would make it easier to solve. I would have done indexing first, then matrix operations, then einops and einsum.
2. Ray tracing: I mostly skipped this. It's clearly there as PyTorch practice, but I was in a time-crunch, and it required a fair bit of other math, like thinking about collisions between rays and objects. This other math didn't seem particuarly high-priority - and I figured I'd get a fair bit more PyTorch practice if I just kept chugging.
3. CNNs and ResNets: fantastically educational. I built up to my first PyTorch model. This notebook took me the most time of any of them (closer to two days, while other notebooks were usually only a few hours). I understood neural network diagrams for the first time, how modules compose with eachother, and felt good about finially understanding what convolutions are. 
4. Optimization: completed, but would skip if I went back. Loss landscapes are cool, and having intuition on this seems important at some point. But... I don't think it's that useful for your first month. If I could go back, I would just skim this.
5. Backprop: skimmed, but didn't implement. I've derived and implemented back-prop from scratch before, so this didn't seem high-priority. And implementing computation graphs - not super relevant for me. Might be higher priority for you.
6. VAEs and GANs: skipped entirely. I was anxious to get to language models. Have yet to feel like I'm missing this knowledge - so maybe that's fine!

Overall, I highly reccomend the first week of the ARENA course - and felt that this was a week of very high learning. If you're looking to upskill as quickly as possible, I'd reccomend:
1. Tensors, einops, and einsum: complete this lesson in entirety
2. Ray tracing: _skip this lesson_
3. CNNs and ResNets: complete this lesson in entirety
4. Optimization: skim this lesson
5. Backprop: skim this lesson
6. VAEs and GANs: _skip this lesson_

## Week 2: Fella's First Transformers and Circuit Analysis

By week two, I was into [ARENA week 2](https://arena3-chapter1-transformer-interp.streamlit.app). These lessons are much more focused on transformers specifically:
1. Transformers from scratch
2. Intro to mech interp
3. Superposition and SAEs
4. Interpretability with SAEs
5. Indirect Object Identification
6. Function Vectors & Model Steering
7. Balanced Bracket Classifier

As I was in a full-blown time-crunch now, expecting to have to finish these lessons and do my own research before the end of the week, I had to skip around a bit:

Lesson 1: Excellent, highly reccomend. This was led to actually understand how transformers work. One warning here: your partner might find you particuarly annoying post taking this lesson, as you'll be ranting and raving about transformers for a few days.

Lesson 2: Excellent, highly recommend. Warning that this is much longer than a day in my experience, and many of the later ideas (specifically around induction circuits) will be rattling in your head for a while. At least for me, despite high-effort, they didn't click on day one (or even day two).

Lesson 5: I then skipped to the Indirect Object Identification - as I was aware that SAEs were a big, somewhat seperate research thread than the circuit analysis I had begun to do in Lesson 2. I got maybe halfway through this lesson before switching back to SAEs

Lesson 3: skimmed. Implemented pieces of it where it seemed relevant. Looked at solutions. Helped me understand SAEs pretty directly!

And with that, I ran out of time. On Wednesday, as it was clear I wasn't going to get to the solo research project (and was knee-deep in my first circuit analysis in lesson 2) - so I emailed and asked for a week extension. I thankfully got one - which meant that next week was going to be for the solo research project!

If you're sprinting through mech interp, I've got less strong recs here. I'll note that circuit analysis (lessons 2 and lessons 5) are a totally seperate thread than SAEs (lessons 3 and 4). If you're like me, and in a time crunch to do any project, just pick one! I wish I had skipped the circuit analysis and spent all my time with SAEs - my solo research project would likely have come out much more interesting.

## Week 3: SAE Project 

After reading Neel's ideas for interesting projects, I decided I would spend the week working with sparse autoencoders. The project I embarked on turned [into this write-up](https://docs.google.com/document/d/19t1UerxvN1spgPhYR8064Iom11CYCtm8ALs9cHePXqE/edit?usp=sharing). 

I aimed for about four hours of active work per day. Notably, this work was really choppy. I didn’t use a good GPU until day two, because I had never trained a large model before. I lost a fair bit of work to Google Colab clearing storage. I quickly realized that I had to create a cloud storage bucket to save artifacts, but this chopped work up as well.

Even with this choppiness, this week was a week of magnificent learning. Rather than being able to give up, I was forced to struggle through any issue I ran into: modifying the code of the libraries I was using to work around their limitations, writing my own analysis functions from scratch because of missing documentation, training and retraining because my learning rate was too high and caused exploding gradients, etc. 

Moreover, the process of documenting and communicating what I worked on was dramatically more valuable than I expected it to be. It forced me to clarify where I was confused vs. unsure, allowed me to think and plan for next steps on this project, and 

Overall, this week was the most frustrating, most enjoyable, and most educational week for me - at least when it comes to being a mech interp researcher.

## Week 4: where I'm at now

This week, I've picked my head up. I'm writing this in case it's useful to anyone else, and to give myself the chance to reflect on what what worked for me. There's going to be many more months of learning, and I want to make them as effective and useful as possible. 

In poking my head up, I've been:
1. Reading more about the overall [tech tree](https://www.neelnanda.io/mechanistic-interpretability/getting-started) for mech interp. What pieces of it am I most interested in? What seems understudied?
2. Talking to folks who do AI safety research currently. I've been in a little solo box for a few weeks, but that's no fun. 
3. Setting up infrastructure for myself so I can continue my research outside of Google Colab and instead work in VSCode, which I much prefer. 
4. Continuing my SAE research. The process of doing this solo research, and then actually documenting it - excellent!
5. Committing to posting my SAE work publicly. Let's not be fearful now. Any feedback is good feedback this early, as I might be doing things totally wrong.
6. Doing this reflection, so that I can continue to learn more effectively.

I'd describe myself as a mechanistic interpretability amature now. Not a noob anymore, but an amature. Not sure it's true, but even if it's aspirational I'm fine with that.

# Reflections and iterations

### What I've done well:
1. Tied this learning to a specific deadline with a concrete output. The MATS application was a kick in the butt - in a good way. Hopefully I can particate in the program for a continued dose of that!
2. Aiming for steady, consistent learning. I've been pacing myself well, with a few hours of hard deep work per day. In practice, I find this much more sustainable and enjoyable than 12 hour study sessions every day of the week.
3. Working on a solo project, rather than just doing predefined lessons. For me, this is the most useful and fun way to learn. I should continue to double down on this - and only return to lessons if/when I need something specific.

### What I could have done better:
1. Talked to folks in the space from the very start. I think I had a fear of talking to folks without knowing anything - but this isn't a useful fear. 
2. Focused on SAEs earlier. This is specific to the application I was working on, but I wish I went deeper rather than wider - I think I would have ultimately learned much more. 
3. Figured out a scalable tech stack earlier. For example, [this post](https://www.neelnanda.io/mechanistic-interpretability/getting-started) would have made clear I need to think about this - and saved me a bunch of pain and time.

### What resources I wish existed:

Overall, I would rate my onboarding experience as an 8/10. There's clearly been a lot of thought, care, effort, and money put into resources for aspiring mech interp researchers - which is really great. The first few weeks of this journey were effectively just learning with no cruft. 

However, the transition from super-small toy models and small GPUs to more-real projects could use a bit of work. I think the most useful changes would be:

1. Reccomended VSCode tech stack. Where should I get a virtual machine with a good GPU? How can I easily hook this up to VSCode? Colab was excellent for the first two weeks, and a huge productivity hit for the later week. Let's make that transition smoother.
2. Aspiring-researcher GPU fund. As I quit my job to do AI Safety, I don't have funds to rent/buy a good GPU. I wish I could fill out a <5 minute application, and get access to an A100 GPU for 10 hours, and then show my results, and then get another 10 hours, etc etc. Yes, I've applied to the transition funds like the Open Phil Transition Fund - but these applications are long, and the turnaround time is in weeks! Not so useful for just getting started. 
3. Documentation for analysis using SAELens. This exists in ARENA (although I didn't find it until I went looking right now) - but it is missing (or very hard to find) from the SAELens library. I had to roll most SAE analysis from scratch. Maybe great for learning, but probably not how we want things to work!

