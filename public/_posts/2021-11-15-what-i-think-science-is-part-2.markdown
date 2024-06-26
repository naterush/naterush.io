---
layout: post
title:  "What I think science is part 2"
date:   2021-11-15 0:00:00 -0400
categories:
  - world-model
---
- Science is the search for truth about the universe, at a variety of levels of detail and rigor. Let us consider a very simple toy universe, and see what we might say:
    - The state of the universe is initially 0.
    - There is some observer to the state of the universe, and for what they percieve as a timestep, the state increases by 1.

Some things I note:

1. The observer needs to be part of the universe for this construction to make sense. Doing the science from an outside-the-universe perspective doesn't really make a ton of sense, I think... maybe?
2. This is pretty fucking simple. 

Now, let us say we want to make propositions about the state of the universe. Let us say the fundamental question here is: how does the state of the universe evolve? A question has an answer, and the set of possible answers takes the form of something like H(S → S'). That is, it's a hypothsis about what is going on with this universe state transition function.

Some things I note:

1. These hypothesis are dynamic in what they can assert. It would also be possible to make a hypothesis that was a function of a single state, or a state and a state before it, or a state and a set of states after it. I wonder if this is a helpful classification.
2. The hypothesis that seem "reasonable" are very different than the ones that could be taken under consideration. 
    1. What seems reasonable:
        1.  H(S → S') ::: S' = S + 1
        2.  H(S → S') ::: S' = S * 2
        3.  H(S → S') ::: S' = S ^ 2
        4.  H(S → S') ::: S1 = S0 + 1, S2 = S1 + 1, S3 = S2 * 1000
    2. What seems less reasonable:
        1.  H(S → S') ::: S' = CONCAT(S, 1)
        2. ... something else insane

So, there is this notion of what hypotheses are under consideration. The ones that are under consideration are the one  that seem reasonable. Reasonable is a function of the current state of knowledge. It's very likely that the places where science has been wrong (most places) are the places where the hypothesis are not *in the initial consideration set in the first place. Maybe?*

Because, there are also cases where this is not true, I guess... at a certain time scale. Our understanding of the arrangment of the solar system is probably just correct now... but I guess if we were to be wrong, it probably wouldn't be the other alternative (flat earth). So my claim is that if science is wrong it's wrong in ways that are not in the in the set of reasonable hypotheses. NOTE: this is a somewhat easily checkable statement.

So, what do you do when you when you have a set of hypotheses? Well, you go about collecting what you can, which namely is pieces of evidence. In this model, we'll make the knowledge deterministic (rather than fucking with distributions, although our next toy model indubitably needs this!). So what does a piece of evidence look like?

- It's a pair of observed (state, state') pair, where the first state transitioned to the second state.
- It could also be a chain of states, or a collection of pairs. Evidence can have a bunch of different definitions:
    - In this model, it needs to be computably evaluatable with the hypothsis function. NOTE: this changes in the case where it's probabilistic?

Ok, so we collect our first piece of evidence. It's that S0 = 0, and S1 = 1. This immediately disproves an infinite amount of hypotheses, **but it does not prove any hypotheses.**

- The reason it cannot prove any hypotheses about the universe is that we're trying to make a 'forall' claim about the state transition, and no finite amount of evidence can prove this.
- **There is not necessarily a cohoerent logical system of the universe, which means proving a forall statement is impossible, you can only disprove them.**

So, if the only thing we can be sure of in this toy model that is that something does not explain the universe, then how does this increase our surety of any indivigual hypothesis? How do we move to a world where we privilidge one over the other?

In the case where there are no probability distributions, I do not think that this is something that we can do. I think we need to a) add probability distributions, and then b) make claims about the sorts of distributions generally guide these sorts of principals [because otherwise why do we privilidge something like simplicity].

So, I'll explore this in the future. The conclusion about is very intresting is that no finite amount of evidence can prove a forall claim, so we can only disprove. We get a leading theory only in the case of distributions.

- Do the distributions enter in in terms of probabilistic hyptotheses?
- Or is it each piece of evidence different in likelyhood for matching a specific hypothesis, or something?
- I don't really get the level with which these enter in.

# Probabilistic Hypotheses!

- Let's again take the state of the universe as a single integer, and again be posing a hypothesis about the state transition function.
- When we get a piece of evidence, we need this function to *unequally* effect our consideration of the existing hypotheses. It seems like we can get away with two sorts of distributions:
- Priors on the set of hypotheses:
    - A distribution of the "hypotheses" themselves that lead us to privilidge one over the other. Rather, this might be better stated as "priors" about the type of hypothesis we might get.
    - So, for example, we prefer simple hypotheses that don't have special cases (e.g. literally just short statements in our logic).
    - This is pretty much what theoretical physicists do with this idea of beauty. They effectively
- For an individual hypothesis, we can also have specific knowledge of how likely evidence is to fit with this. That is, it's not that a specific piece of evidence does *nothing* or *disallows* a hypothesis, but rather can preferentially disagree with certain hypothesis more.
    - So instead of a deterministic state transition funtion, imagine one that that is:
        - H(S → S') ::: S' = S + 1, S' = S + 2 - 50% of the time to each.
    - But imagine we have a set of transitions that did occur that are all +1. If there are 10 in a row that just add one, this makes it much more likely that it's H(S → S') ::: S' = S + 1, and not the more complex one.
- So, we've got two ranking systems:
    - hypotheses under consideration: a filter of agreement with evidence that is a function of the specific distributions of "evidence" output: sorted list of most likely hypotheses.
    - Infinite hypotheses : a filter of "reasonableness" that may or may not include evidence: hypotheses under consideration
- So, two questions about this:
    - Is this filter of reasonableness legit? Isn't this just subject-ass-bullshit, where we don't, for example, consider the fact that the universe is made not by god but by spagetti?
        - I guess you need to start somewhere, and moving from infinite to tractable is the cost of doing business in the real world.
        - Note then that we're actually making some claims about the structure of the universe that we're filtering for reasonableness.
            - **But in some places, this structure might not exist.** This, I think, might help explain the problem with treating social science as *science*.
            - It doesn't respect the structure of the universe that we expect to be able to do science, which is some sort of simplicity / consistency (that is attributable back to physics/math, I think).
                - Now: why do things like human brains not meet this criteria? That is a totally way harder question, but