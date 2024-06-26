---
layout: post
title:  "On Heuristics"
date:   2020-8-10 0:00:00 -0400
categories:
  - world-model
---

**TL;DR:** Heuristics are naturally an expression of special cases. Special cases, when expressed in code, are often messy and hard to write, maintain, test, and document. As such, writing code to deal with heuristics should always be put off until you bump into the case the heuristic is meant to deal with.

### What Heuristics

A heuristic is any algorithm that solves a problem approximately. In some cases, heuristics are used because "correct" algorithms are too slow; for large inputs, a correct solution to the Traveling Salesperson will take longer than Amazon actually delivering something to your house. 

In other cases, heuristics are used because there isn't really a "correct" answer to computer. Mito, practically, deals with this. We get user data as input, and are expected to be able to perform operations on it. So we need to understand what type of data we are dealing with, so we can correctly perform these operators - but the type of the data isn't well defined. For this reason, we need heuristics. 

### Special Cases, Especially

Special cases of the latter type - when there isn't really a correct answer, and we're just doing our best to get close to what the user wants - very naturally become an expression of special cases. 

As a concrete example: users frequently put text data into Mito, but all the text data is just numbers (think "$4"). So, when the user goes to input this text data into the AVG function, what do? Users clearly are expecting us to treat this as a number, so we need to perform this conversion.

And here enter the special cases. If a string begins with a $, it's probably followed by a number, so we can strip the $ off it and then parse it. But what if it has a comma in it? Then we need to remove the comma before parsing. But is the comma a thousands separator (like in the U.S.) or a decimal separator (like in Europe?)? 

Fundamentally, for varied and complex user input, any heuristic must do it's best to exploit the structure of the data to come to the correct answer. But this structure, as is the case with any real world data, is bound to be messy, chaotic, and not easily summarizable in nice recursive, pretty structure. One finds oneself programming lots of special cases.

### Why Not Special Cases

Special cases are, simply put, expensive to program and maintain. They require their own testing, documentation, explanation, and future maintenance. More than that - they require a large amount of mental overhead to manage - software with special cases is the worst!

### Waiting For User Input

So heuristics for user input naturally lead to special cases in code. And special cases in code are hard to maintain. So - what's the solution?

The best solution, IMO, is the restrict what types of user input you take. This might mean narrowing who you're definition of customer is (Mito is currently doing this), or it might mean forcing the users to get the input in some consistent format before inputting into your software (not the best UX). 

Another hack here is to not train your heuristics on no data; don't write heuristics for things you haven't seen (as it's a lot harder to delete code than it is to write it). This will make sure you focus your special-case-required effort on the special cases that actually appear in the wild for your customers, which is the best you can do at the end of the day, anyways.

### Fun Formalisms

For some function F: X → Y, a good heuristic for that function is a function F': X → Y, where for all x, F(x) is reasonably close to F'(x), where reasonably close is sensibly defined (and depends on the function under consideration). 

Another potentially useful definition of heuristic: for a function F: X → Y, F': X → Y is a heuristic if P(F(x) is reasonably close to F'(x)), for an arbitrary x, is above some reasonable cutoff.

But really, both of these formal definitions seem impossible to apply for most problems without a correct solution - as proving such statements require a formal understanding of the input domain; and if you have that, why the hell do you have such a heuristic anyways. 

This leads to the heuristic heuristic: if you have an algorithm that works in practice, and is sometimes wrong, it's probably a heuristic (in the above definition).