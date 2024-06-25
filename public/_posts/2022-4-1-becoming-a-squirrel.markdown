---
layout: post
title:  "Becoming a squirrel"
date:   2022-4-1 0:00:00 -0400
categories: new-blog
---
My previous post describes where a lack of long-term thinking can still lead to long-term planning that leads to "evolutionary success." To review, here are three necessary conditions for this to be satisfied:

1. A measure of fitness that is concerned with the survival of a lineage, not just a single entity. 
2. Death of unfit entities, and preservation of more fit entities. 
3. Creation of new structures that have the chance to compete. 

### Interpreting these in the context of my life

First, let me note that one missing thing from the model above is that there needs to be epochs of time. Time needs an explicit component. 

**Representing Time in Models**

Representing a system evolving over time is a very tricky question. There are a few ways that I can think to do it:

1. Have a global notion of system state. That is: a dynamic systems approach (or what I think is a dynamic systems approach) where the state of the system is a tuple (or vector), and time is another element in the vector; this moves over time. Another way to think about this is function `getState: (time) -> SystemState (or perhaps a set of system states)`
    1. If (as in the model we care about) the evolution of your system is defined as a state followed by a list of rules for transitions, then you can think about this as an initial state, and then a branching state diagram.
2. This above set of states mapped through time is somewhat similar to the graph based model that you see in options theory: each vertical line represents a point in time. 
    1. However, this is different than the above system, because there's is some notion of a path between states. This path between states (and indeed, a narrowing of a future cone) is a useful property for understanding some properties of the system. 
    2. In the formalization where it's just time step to state, it's much harder to track what got you there, or indeed what is possible in the future. 
3. Note: both of the formalizations above allow for the "system modeler" to have full information of the system.
    1. The relationship of the system modeler to the system is a really interesting and perhaps under researched question; i am very interested.
    2. Ok, so at what level does "incomplete information about the system state" enter into the system.
        1. There's the level where we add "agents" to the system, and then we can reason about their ability to reason about the future, or even more simply, the state of the other agents in the system.
        2. There's also the level where there are uncertainties for the modeler. Specifically, what does it mean for me as the person who is modeling the system to not get it... 
            1. The question is: does it make sense to force yourself as a component of the system you're modeling? What if you're modeling the modeling?
4. Ok, a kinda meta question here, but here's what's happening:
    1. I am trying to model the space of my life, where my actions/ideas(?) are "agents" that get killed off or survive.
    2. One of the ideas that I have is that this modeling is something that I should be doing - so in some ways, the model should be able to be aware of itself, as it is in fact the very thing that is driving it's own creation. 
    3. The model not capturing it's own existence is a problem because it is what drives the life or death of the other ideas; so a key component of the system is missing from the analysis.
    4. I am not sure how a model would possibly contain itself though; what the fuck does that even mean?
5. Can I make this concrete? Is this only a problem because I am attempting to over intellectualize or over formalize things?
    1. I am attempting to make a strategy for how to live my life, where I put my ideas in an evolutionary framework. 
    2. If I *really* believe in the evolutionary framework, than the evolutionary framework itself should be subject to the evolutionary framework - else it will not improve and grow how it should (unless my thesis is wrong).
    3. Thus, one of the things competing in the evolutionary framework needs to be the evolutionary framework itself; it's one of the ideas in the running. 
        1. This actually opens a large number of doors for very interesting introspection! For example: the fact that I haven't started on the evolutionary framework... it's not very good at staying alive, which means maybe it's an idea that is like bad at being alive!
6. The fact that my model wasn't recursive, or self-describing enough - more specifically that the evolutionary framework I am trying to create didn't include itself, meant that it escaped my noticed that the lineage of the evolutionary framework was having a very hard time getting off the ground. 
    1. So really what I'm arguing is: treating my entire life as an evolutionary sandbox for my ideas (?) - is it ideas? Even that idea needs to be included - and I don't know how to represent this formally!
7. Ok, so back to time:
    1. A mapping from time steps → states
    2. A graph of states
    3. NOTE: either of these above can both include uncertainty in the agents about what the state of the world is. 
8. So, if you want to be able to capture the uncertainty present in the model, you either:
    1. Need to model yourself, the model maker, as part of the system (who presumably interacts with it in some way).
    2. Or, you need some sort of meta protocol for changing between versions of the model, evolving it overtime. 
9. Science is (b); there's some protocol through which people update which version of the model they use. Meta science is (a); the process through which you can model the system state (kinda leaving yourself out still, but including the model maker); e.g. this is studies that say most studies are wrong (so the scientist is included).
10. The question of how you can actually accomplish (a)? How can the model maker represent themselves in the system (as they have 'access' to the model, which is the system). Well.. I think it is highly related to the question of timing.

### A sample model: the universe of numbers

The following is a goal to create a simple universe where it is possible to understand what it would mean to put the model within the model, vs as being outside of it. Just like my previous blog post: what science is part 2.

the question of the relationship to the observer is *central*. And note, I'm not engaging in any [quantum woo](https://rationalwiki.org/wiki/Quantum_woo); this isn't about how the observer changes the system. It's a fact that the systems I'm modeling I am also a part of, or the models are a part of, and the model does not capture that. 

**Attempt 1:**

1. There's a world. The world has a state that is either an incrementing whole number 1, 2, 3, 4, ... or the world has a state that is 1, 2, 3, 3.5, (it switches to going up by .5).
2. There is also a single agent in the world. He is me, and he has one internal state, which is represented by either (+1) or (+.5), representing what he currently believes the model to be. 
3. So, initial state is (1, +1). Note: the observer of the system always trails behind the actual state of the system (unless the state of the system is the observed one?). 
    1. Yes, the state of the system is the state the obsever actually sees at that point in time, and then they update their model instantly - or at least in that epoch. 
4. So: a valid execution (1, +1), (2, +1), (3, +1), (3.5, +.5)

**Some Thoughts:**

1. The fact that the *model* that the observer had a summary of how the state of the universe evolves means that they didn't actually need to store the entire state of the universe in their model. 
2. Wait, am I misunderstaing what a model is? A model, for my purposes, is a description of the rules with which states evolve over time. 
3. So we have states S, and a model for the evolution of those states M, which can be expressed as a set of rules R, that fit the previous history of states that the observer O (which is a part of S) has seen. 

Ok, so a model that captures itself is:

1. Some set of states S, which have U or the state of the universe, and O, the state of the observer. 
2. O contains Sprev, or the previous states (he remembers all the states he seen), and R, or rules that he thinks best describes the evolution of states.
3. There are two models here:
    1. R make up a model, that the agent himself has.
    2. But there is also the evolution of this model (the rules with which the agent updates R, for example, are not captured in this; can they be?). 
        1. If the rules for which the agent updates R were in this, (e.g. an algorithm)... then does this work?

**Attempt 2**

- The actual universe:
    - There's a world. The world has a state that is either an incrementing whole number 1, 2, 3, 4, ... or the world has a state that is 1, 2, 3, 3.5, (it switches to going up by .5). [NOTE: this is an encoding of the *universe*; this is whee I set up the observer also.]
    - There is also a single agent in the world. He is me, and he has one internal state, which is represented by either (+1) or (+.5), representing what he currently believes the model to be. His prior is +1, but if he sees any .5s, then he will update to +.5.
- Then, it works as before. We now have captured the state of the universe, as well as an observer who is modeling the universe.

**Thoughts on attempt 2:**

- The problem is when the question of what *the agents rules are* is actually a function of the world state they observe.
- In practice, this means that the rules that the agent has for updating their model of the world evolves (e.g. we move from magic and religion to science for our world modeling, this is an example of our world modeling).
- So, can you just have rules for how update your rules? But this, presumably, runs into the same problem if you update these as a function of world state.

**Attempt 3:**

- It seems like the only way to really get to a model that can contain itself is a generative one, and a generative one that evolves!
- What do I mean by that:
    - We cannot just start with a world state with someone with a model, as this fixes the level with which they can change their preferences to a maximum depth? Right? No.
- Well... do you need to change beyond a certain level? Like whatever level evolution got us too might be enough...
- The reason why it needs to be generative: because it is iterative in practice, and started at somewhere with nothing. So our model should capture this reality.

# Some conclusions

1. In me modeling science, or my life, making sure the (observer/modeler) is part of the model is essential.
    1. If the model I have of how to plan long-term is correct, namely that it makes no sense to do so and that you need to put your ideas in an evolutionary environment for them to be good - then I need to put *that* idea in the same environment. 
    2. And if I'm interested in formally reasoning about that environment, well, then I need a model that captures this fact: that the observer and modeler (me) needs to be within the model as well. 
    3. Otherwise, you'll never notice how hard it is to get this model off of the ground in the first place! E.g. the fact that the idea "place it all in an evoluationary framework" is dying on the vine (and so should in the model!) doesn't get noticed!
2. Naively representing the observer/modeler within the model as having a "static" algorithm for updating their internal model doesn't make sense:
    1. In history, humans moved from algorithms (at least, level-one decision making algorithms algorithms, which is how we explicitly say we make decisions). We went from religion, to science. 
    2. For me, I went from making decisions based on long-term plans (my set of rules for my model involved was come up with new long-term plan), and now am in this new modal of purely local optimization!
    3. There might be a level at which we can express the decision making algorithms where they are static, but really, a better way to think about it, I think is from the very evolutionary approach that this is all trying to capture anyways.
3. The path forward is a generative, evolutionary approach for modeling the universe, the observer, and the internal model the observer has of the model - and one of the things evolving is the algorithm with which
    1. Generative in that we start at a base state.
    2. And we do exactly what we need to do to stay alive. 
    3. The algorithms for updating the rules, as deep as they go (do they need to bottom out, idk? You can probably reach a fixed point), are updated by this process of random mutation, and then survival or death.
    4. This is the most realistic model of the observer because this is what actually happened. 
4. It seems like the best way to represent this structure of observer/model being a part of the model is returning to the process that created the system that we attempting to observe/model.
    1. I don't know if this is a general phenonemon, but it has a certain sort of beauty, and makes sense as a general way of understanding the world.
    2. If the thesis is that "evolution" is a general theory that captures the systems we need, then the model that captures it needs to run in and through that same process. 

<aside>
⛔ Working on this sort of problem really has the ability to make me feel *better* about what is going on - about being directionless, and feeling like I need to switch major things up. Progress on this framework is an idea that should survive in the sandbox of my mind.

</aside>