---
layout: post
title:  "Types of Understanding"
date:   2018-12-31 12:00:00 -0400
categories:
  - reflection
---
I’m a total type theory noob. When I say I “like Type Theory,” I’m mostly just saying I like type systems that stop me from creating stupid bugs when writing stupid code. 

But even as a noob, I’ve found type systems very helpful in understanding things I didn’t really expect them to help me understand. 

As an example, consider random variables: any function from the sample space to some real number. 

When I was introduced to random variables, the example I was given: consider an experiment where a fair, 6-sided die is rolled, and the random variable that maps the outcomes {1, 2, 3, 4, 5, 6} to the number that was rolled (again {1, 2, 3, 4, 5, 6}). 

What? Why would we do this? What is the purpose of a function that literally does nothing. Die rolls are already real numbers - why do we need to map them to the same real numbers? 

I understand random variables in the following way: the above questions don’t compile. Die rolls are not real numbers. The sample space of a dice roll is a dice face with some number of dots on it. The random variable is the object that reads the number of dots on the die face. And this clarification helped me a lot!