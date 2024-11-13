---
layout: post
title:  "Task-based Scaling Laws"
date:   2024-9-19 0:00:00 -0400
categories:
  - ai-safety
  - creative-writing
---

# Tasks have different types

Consider two different problems:
1. What is `sha256^10('abc')`? In other words, if we hash `abc`, and then the results, etc, ten times, what is the final resulting hash?
2. What is `1 + 2 + ... + 9 + 10`. In other words, the sum of 1 to 10?

On the surface, both of these problems seem similar: ten relatively simple steps to accomplish, applied in order, will give you the final answer.

But these problems are fundamentally different:
1. The `hash` task is inherentially sequential. Assuming hash functions can't be broken, you have to actually implement this as `...sha256(sha256('abc'))`. Meanwhile, the commutative property of addition means you can do `((1 + 10) + 9) + ...` or `((1 + 2) + 3) ...` - both work the same. 
2. There are "shortcuts" for the addition trick. If you're the [smartest-ever elementary school student](https://www.nctm.org/Publications/TCM-blog/Blog/The-Story-of-Gauss/), you can simply invent and then calculate the formula `n * (n + 1) / 2` to get the final results.

The `sha265^x` task is solvable with a fundamentally simple algorithm - a simple for loop. While the `sum(1...n)` task is also solvable with this simple algorithm, it is more easily and efficiently solvable with a smarter algorithm: one that just computes a closed-form sum.

## Human performance on these different types of tasks

If you gave reasonably-smart humans tasks from the `sha256^n` family of tasks, how would computation time scale?
1. `sha256^1('abc')` - 5 minutes. 5 mins writing the Python, and 0 seconds running.
1. `sha256^100('abc')` - 5:10 minutes. 5 mins writing the Python, and 10 seconds running.
1. `sha256^100000000('abc')` - 1 hour. 5 mins writing the Python, and 55 minutes running. 

If you gave normal humans tasks from the `sum(1...n)` family of tasks, how would computation time scale?
1. `sum(1...1)` - 1 minute. 1 mins writing Python, 0 seconds running.
1. `sum(1...100)` - 1:10 minute. 1 mins writing Python, 10 seconds running.
1. `sum(1...100000000)` - 1 hour. 1 mins writing Python, 55 minutes running.

But if this was a smarter human:
1. `sum(1...1)` - 1 minute. 1 mins writing Python, 0 seconds running.
1. `sum(1...100)` - 1 minute. 1 mins writing Python, 0 seconds running.
1. `sum(1...100000000)` - 1 minute. 1 mins writing Python, 0 seconds running.

## Higher-levels of intelligence decompose tasks into different sub-steps

For the `sum(1...n)` family of tasks, something interesting happens when we give the problem to smarter people: they can take a problem that seems to scale linearly in "solve time" and turn it into a constant time problem. 

In other words, there is a incredibly large discontinuity in how long it takes a task to be solved, depending on the intelligence of the human solving it. If you linearly scale up the intelligence of the person solving `sum(1...n)`, the time taking them to solve the problem will linearly scale for a bit - and then drop to almost zero, and remain constant there. 

# Scaling laws from tasks

Let's imagine we were trying to create a scaling law for AI performance based on their ability to complete tasks of varying levels of "hardness."

Specifically, we're looking to create a function `performance` that takes in some information about the model (e.g. perhaps the number of parameters it uses or the number of tokens it was trained on), and makes predictions about what tasks it was able to accomplish. 

One way we might try and do this is:
1. Create a family of tasks `T`, where each task takes between one minute and one week for a human to solve. 
2. Benchmark how many tasks a 1M parameter model can solve at each level. Then, do the same at 10M parameters and 100M parameters. 
3. Then, assume that the relationship between parameters of % of tasks solved at each level will scale as you've observed with these smaller models.

How would these scaling laws work if we used `sha256^n` task? What about the `sum(1...n)` task? 

## Scaling laws from `sha256^n`

In this case, our family of tasks `T` are entirely made up of `sha256^n` tasks with `n` increasing. 

Let's assume that a 1M parameter model is too dumb to write the Python code to solve the task, so gets an overall score across all tasks of 0. A 10M parameter model is just good enough, so it is able to accomplish all the tasks, for a perfect score. 100M, the same. 

In other words, our scaling law is the following: as soon as a model has enough intelligence to solve a single task, it can solve them all underneath it's execution timeout. And if we further scale up parameters, it will continue to solve all the same. In other words, a fully-piece-wise function - either zero or one.

## Scaling laws from `sum(1...n)`

In this case, our family of tasks `T` are entirely made up of `sum(1...n)` tasks with `n` increasing. 

Let's assume that a 1M parameter model is too dumb to write the Python code to solve the task, so gets an overall score across all tasks of 0. A 10M parameter model is smart enough to write a loop, so it solves all problems up to it's timeout. A 100M parameter model is smart enough to know Gauss' trick, and so solves all problems.

Our scaling law is the following: dumb models can do zero, medium smart models can do up to their timeout, and smart models can solve all problems in constant time. In other words, a fully-piece wise function.

# Tasks with a bit more realism

Most tasks beyond a certain length are neither pure `sha256^n` type or `sum(1...n)` type tasks. Rather, they require some mixture of:
1. Some steps that are required 
2. Some steps that are optional - and can be skipped entirely if you're smart
3. Some steps must be performed in order
4. some steps that can be performed in any order

## What sort of tasks we'd like to create scaling laws

Ideally, we'd like a task family `T` that is made up of tasks `t1`, `t2`, `t3`, ... `tn`, where the "intelligence" difference required to solve `ti -> ti+1`. Without this, it's unlikely that you'll get a scaling law with any predictive power. 

## Human completion time is a bad metric for ordering tasks

However - and this is the point of the above examples - it's not necessarily the case that tasks that take human beings increasing amount of time actually require simply-increasing amounts of intelligence! 

In the `sha256^n` example, human completion time increases linearly, but the required intelligence stays the same across the board. In the `sum(1...n)` examples, the strong discontinuity in performance as intelligence increases  means you can't predict if a model will be able to perform a task, until you find the first model that can do so. 

More than just these toy examples, do we really have beliefs about how the "distribution of sub-tasks" in a task takes as the "human completion time" of a task scales? Sure, colloquially, we call a task that takes longer harder. But colloquially harder tasks don't necessarily mean they require more intelligence. 

This is further exacerbated by the fact that the tasks that we're likely to be testing on are artifical. Simply put, the easiest way (and thus most likely way) to extend the "human completion time" of an artifical task is to add more steps of the type `sha256^n`, resulting in a series of tasks that take longer but don't actually require an increase in intelligence to solve.

## Validating these assumptions now

I actually think this argument is testable now! We can create/collect some models that are not SOTA, but have increasing numbers of parameters -- or even better, decreasing cross-entropy loss. 

Then, let's run them through the tasks we have now, doing a full set of elicitations, etc. Can we then predict how the next model in sequence will perform? What tasks does it surpass our expectations on? What is broken here?

Doing this now feels like a necessary step for me. Without it, any predictive claim is fundamentally just a shot in the dark - or at the very least, making strong, not-documented assumptions about sub-task decomposition of tasks in `T` that take longer.
