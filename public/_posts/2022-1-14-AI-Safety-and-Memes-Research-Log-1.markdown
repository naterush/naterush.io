---
layout: post
title:  "AI Safety and Memes, Initial Research Ideas"
date:   2022-1-14 0:00:00 -0400
categories:
  - ai-safety

---
## [The misunderstanding of memes: Biography of an unscientific object, 1976–1999](https://direct.mit.edu/posc/article/20/1/75/15308/The-misunderstanding-of-memes-Biography-of-an)

### Notes

- The meme was invented as another example of a “replicator” by Dawkins in The Selfish Gene; disagreement on how literally he meant the idea (does this matter?)
- GEB dude and some other philosopher reinterpreted the idea in the context of a virus that infects the mind, as a real object.
- Through a serious of reinterpretations and popularizations, this infected the public consciousness, which also changed the scientific dialogue.
- There is absolutely not agreement if the meme is a legit object of study, vs. a metaphor or an interesting thought experiment
    
    > In short, therefore, what follows is a story about the construction of meaning through social interaction; how an understanding is shared among minds that are forever situated in their own contexts, having their own interests, and working toward their own ends. It is not a story about the spread of a social infection.

### Questions/thoughts

- I don’t think it matters if Dawkins meant it as a real object vs. a metaphor for a replicator; I think what matters if it has explanatory power.
- There are two angles to approach the concept of a meme: ideas are viruses that infect people, or replication of shared meaning (noting how vague we’re being about both of these things).
    - I think the ideas that infect people is potentially interesting only so-far as our understanding and models of viruses is (but with another layer of complication on top). Given our failures of virus models (cough cough), I think this would a dead-end from a modeling/simulation perspective. We can maybe look at the parameters for some ideas though.
    - Replication of shared meaning; this seems more useful. There is an aspect to the meme that has to do with shared beliefs, and common knowledge. This is what differentiates the meme from the standard virus (which has no notion of shared belief), and where I think we could make progress!

# For reading:

- https://www.alignmentforum.org/posts/LpM3EAakwYdS6aRKf/what-multipolar-failure-looks-like-and-robust-agent-agnostic#Conclusion
- https://www.alignmentforum.org/posts/6iedrXht3GpKTQWRF/what-if-memes-are-common-in-highly-capable-minds
- The meme machine
- 11 proposals for safe advanced AI
- Joe Carlsons report on risks from power seeking AI - original report is good. He wrote one of the reviews, and we can read and get a sense of how doomed we all are.

# Meeting 2 Prep

- Page 174 of the dawn of everything ; people define themselves in opposition to others, so rather than thinking of ideas that worm their way in, think of the process of schisms genesis as the starting point for new ideas (not just simple mutation). How does this change our theory of memes
- The meme machine:
    - Thesis 1: human beings are human beings because we imitate.
        - To prove this she adopts a variety of complex poses about what imitation is vs. learning from other mechanisms; who cares if humans are the only mfs that do this? Also it’s clearly bullshit; I would bet this has aged terribly.
        - I think we can ignore this thesis for our purposes.
    - Thesis 2: memes are replicators in their own right; they do not just exist for the purpose of reproductive fitness but rather for their own survival. A meme is anything that is spread through imitation. A few thoughts on this:
        - I don’t think the notion of imitation in it’s own right is the useful slicing point for useful analysis on memes.
            - The definition of a replicator is “form lineages of identical copies with occasional random mutations, are called replicators.” This is a **sufficient condition**.
            - Notably, I do not think that this is a **necessary** condition. Specifically, I believe that she choose imitation as the base unit of replication to fit this definition of replication.
            - But there can be other replicators. Consider the two sides of DNA, inverses of eachother; we could consider these as the base replicators, and then it’s not identical copies, but inverses.
            - Really what I’m saying here: we need not the identical condition, but rather some notion of “pure functional” relationship. As long as the operation that is defined is not super lossy, then we’re good!
                - TODO: figure out why there needs to be this mostly pure relationship? Because things get to chaotic? Is this really needed or just observed here.
            - So, then, once we’ve extended our definition of replicator to be a bit more general, and (perhaps necessary?), then we get that a meme can be any idea that is transmitted horizontally through some “reasonably pure” function of the original idea.
                - So, imitation is just one form of replication; we can see others in this pure function nonsense.
                - Schismogensis is another valid form of this transmission. You can see this as demonstrated by early societies (which Susan Blackmore greatly misidentifies).

### Replicator 2.0

Any entity that forms lineages of descendants created by some “reasonably pure function of the parent” with occasional random mutations. Note that this definition makes the title “replicator” a bad name; something like “lineager” is better?

For genes: the reasonably pure function is copying. 

For memes: the reasonably pure function can be copying (imitation), or rejecting (schismogensis), or probably some other things. 

Note that this isn’t really a new notion; theories of early replicating molecules often cite polar molecules that created an “inverse.” One way of looking at this is to consider it as just the copying process. The other way to look at this is that there were 

The role of schismogensis cannot be understated; it is both historically inaccurate and silly to act like humans main method of cultural transmission is just imitation; early scoeties (pre-faming, pro-explicit social conciousness) were often defined in opposition to the groups around them. “We’re not those people” is an explicit method for getting to well defined

### A random thought about the unsolvable

Assume AI alignment is “unsolvable”; imagine for a moment that it’s impossible for an entity to reason about a different agent and say it has “aligned” goals with it. 

Then, let’s imagine we build our first AGI; it is not aligned with us (because of the above statement), and let’s just imagine it’s trying to maximize the number of paperclips. 

Commonly, we argue that this AI would be able to improve itself. But when does improvement mean that this AI is effectively trying to train a new agent? It might be that this agent is only able to improve itsely by creating new AIs and training them. But if AI alignment is unsolvable, then these new agents will not be aligned with the original agent. 

And if this agent is not aligned, then it will conflict with the original AI agent; so the original AI agent may choose not to train these new agents, and thus the paths for self-improvement are limited. 

NOTE: I and most interested in model failure, above all things. Mostly because it is the most annoying thing to analyze for the people in the system.

# Meeting 2 Notes

- We are all a bit suspicious of the level of formalization and evidence she brings.
- Discussing her definitions:
    - Memes are just replicators.
    - She is really just saying there is a second lineage of replicators.
    - One thing that was useful from her approach: the meditation exercise; we’d have to come up with definitons that are a lot more specific than her approach.
    - She has a good starting point, and diverts on very strange things. Like the idea that humans brains are not at an advantage biologically, but from a meme perspective. If we got caught in this kinda reasoning, we are hopeless to figure out anything.
    - The definition of memes of being replicators; having this necessity to replicate, and be subject to the selective process. The imitation process is not clear.
        - The conflict of interest between genes and memes is interesting. Memetic, misalignment is by default.
    - There are places where she goes a bit too far, trying to reverse engineer where she came to this definition. The idea of meme creation, is trying to justify that molecules organize themselves, and they create vessels. The memes are similar in genes only in that they are information that gets structured.
    - Some thoughts on extending replicators to having things other than just “pure copying” - in some cases, there is something like “rejection” or something like that.
    - C***** points out that the complexity might be tough; representing human society might be so complex that putting this in a simulation environment is impossible.
    - H****** points out that in the case of agriculture theory of memes is just probably... silly. Like, there are probably better theories that capture it.
        - And she points out how can we really capture the two different optimizers in the same model.
    - So their two points about simulation:
        - Caudio thinks that we might be able to simulate something interesting, but if we try and capture the complexity of society, we likely will be fucked.
        - H****** is pointing out that the cool part of the model is the competition between the genetic and memetic evolution; these are not necessarily aligned. How do we represent this in a simulation?
    - The same agent in one scenario: has competition inside of it.
        - If agents can copy and share policies, then some misaligned policy could force the agents to copy and replicate policies. The policy will maybe take more effort into actually creating the final goal.
        - What would a mind virus look like for AIs;
        - Also we’re thinking about this from a long time-line. Maybe we don’t need to think about this from the perspective of what a model can do now, but what a model can do in 50 years.
    - Trying to move forward: we want to make specific definitions for these things (perhaps a few). We want to focus on specific definitions, and some hypothesis and questions based on that. As a way of thinking about it.
        - One question: genes vs. memes things.
        - Other question: imitation vs. other forms of replication.
            - Even the term imitation is a bit misleading. You also have to even be able to imitate what you are saying. To resonate with something, more than imitation.
                - First, experience something. Sampling from the meme pool.
                - Then, you resonate with it.
            - The term imitation lacks a lot of details like if you’re able to imitate; like it also assumes equivalent levels of intelligence or ability. It also assumes some level of intentionality.
            - The relationship between intentiality, in an RL environment, learning to run in some weird way. That’s through trial and error. If you gave an egent vision, and it was able to imitate a human running, that doesn’t necessarily mean it’s imitation.
                - The central point of imitation for her is that humans are able to imitate and no one else is.
            - We might want to look into inverse reinforcement learning, to see if there is some useful concept for us in terms of imitation.
    - She says we don’t need to come up with a unit of a meme; if we’re trying to come up with a simple environment, we might want to come up with a simple unit. Otherwise, it gets too complicated.
        - If we want to use a controlled environment, we need some atomic particles, or at least find something that isn’t a general definition of a unit.
    - We wonder how much the theory of the book would change now?
        - If she were writing this now, she might consider these models. There are have been quite a lot of advanced in biology in the past 20 years, and the theory of genetics has actually changed quite a bit.
    - We should talk to susan, why not? We kinda want to also see what experts have to say.
    - Memetics today would be captured in information influence and information warefare.
        - How can an agent get more agents to optimize for paperclips? How do you make more people vote for donald trump.
        - We should talk to people about information influence.
        - One of the reasons that H****** finds Susans theory unpalletable, than you’re not necessarily thinking critically. Memeplexes: you’d be influenced by the memes the other agents pick.
    - We also want to make a google doc and use this to create ideas and chat.

### Meeting 2 Next Steps

We’re looking to start with definitions that are useful for further analysis. We’re looking to define what a meme is (and some helpful base unit of a meme to start with), as well as some definitions around what replication looks like.

From there, we decided we’ll come up with some hypotheses and questions we want to explore in the context of our definitions. As of now, we mentioned that we’re interested in 1) the competition between genes and memes and how that plays out in a single agent, and 2) what imitation really means, and if there are other ways memes get transmitted.

See future blog post on Replicators for further thoughts.

- Multi-level selection: https://en.wikipedia.org/wiki/Group_selection#Multilevel_selection_theory
- https://plato.stanford.edu/entries/replication/#GeneRepl

# A**** Meeting Prep

I am looking to understand if my understanding of “confirmation bias” as the leading cause is important, and trying to figure out if there are other activism things that I can learn from; what is the recycling equivalent of 

- I am interested to understand:
    - What is the order of events that led him to this work, specifically to the technical considerations (where did he encounter these arguments)?
    - Does he think that the confirmation bias theory holds weight generally?
- I am also interested to see what structurally is different between this problem, and say, climate change?
    - Both seem like they have the potential for runaway effects; chaotic systems, etc.
    - Both are massive coordination problems in the same way.

There is a shit ton of alignment researchers who push on this, but 

- Any alignment researcher would gladly stop doing alignment research, they would do alignment research to make it safe. They would gladly take a magic thing that says they stop research now. Clearly, if we could do this, this would be a really useful thing. There are bunch of reasons, where a bunch of AI alignemnt and AI govenance, they don’t have any idea how to do the social work.
- One of his reactions, is like there is not much interesting work being done; this problem with people working on stopping AI alignment research, they say random shit. He said something like: if someone understands why the problem is hard, he would love to see someone do great work solving coordination problems.
- What should I be doing:
    - AI Governance. Alexis was the Q&A - the head of strategy and GovAI, and they deal with this sort of problem.
    - He doesn’t do this, but this is a thing.
- Slowing or changing the course of the research, there is def a bunch of effort on this; the hard part is stopping it.
- One reason people in alignment that people are political, let’s say we know enough to know we don’t know enough.
    - Climate change is a partisan problem. You have half the voter pool, who are like oh that’s democrats problem.
    - We don’t want alignment to become a partisan problem, ideally we want people in general to agree; in principal, that’s.
    - Question: would we rather this be a partisan issue than something?
- How bad is the situation? There are more and more people who have some sort of credibility; boris johnson, added a line on existential risk. He thinks the situation is not as bad as it was, when it was really a bunch of lunatics on the internet.
- At the moment, AGI research are pretty much irrelevant; there are more private companies doing the research. Open AI, DeepMind, etc. Some of those companies don’t have that good a grasp on alignment.
- If political action was the best way; he thinks the AI researchers would go and do that. I fundamentally disagree with this.
- His claim: if you have a rationalist who actually gave a shit about politics, they could do better than normal politicians.
- Since the EA started participating in the factory farming movement; they started looking at how to be effective. He argues that this is effective. Two big things in EA:
    - Animal suffering
    - Alignment
- He was frustrated by the arguments I was making. A lot of people care about animal suffering, etc. A good example of doing shit through political action in a somewhat rational way; Peter Singer is the forefather of EA. Maybe that is not visible, because Peter Signer said a bunch of other random shit. When he started looking into EA stuff, everyone was reading Peter Singer; he is the one you invited at your conference.
- A lot of the effective in EA boils down to rationality.
- There are times that I say things that are interesting; but then I :
- People like using the outside view just to say you’re wrong. Not give you any specific reason to doubt; the way he felt.
- Read about modest epistomology; learn about the outside view. Figure out what this was.
- I made the point that it could be true to say that this is hard, but also that saying it’s a coordination problem makes it even harder.

- https://deepmind.com/blog/article/fast-reinforcement-learning-through-the-composition-of-behaviours ← this introduced me to HRL, which I think is so relevant

# Some random thoughts

- There is this really interesting way that “the real world state” - some objective reality becomes a cornerstone for AIs misleading us:
    - Examples from wikipedia:
        - A superintelligence programmed to "maximize the [expected](https://en.wikipedia.org/wiki/Expected_utility) time-discounted integral of your future reward signal", might short-circuit its reward pathway to maximum strength, and then (for reasons of [instrumental convergence](https://en.wikipedia.org/wiki/Instrumental_convergence)) exterminate the unpredictable human race and convert the entire Earth into a fortress on constant guard against any even slight unlikely alien attempts to disconnect the reward signal.
        - A superintelligence programmed to "maximize human happiness", might implant electrodes into the pleasure center of our brains, or [upload](https://en.wikipedia.org/wiki/Mind_uploading) a human into a computer and tile the universe with copies of that computer running a five-second loop of maximal happiness again and again.
    - In this article, the example is that there is a screen in front of the diamond in the vault. How can

Coherent Extrapolated Volition: https://intelligence.org/files/CEV.pdf

- What if there are mulitple end states?
- Or better stated: if human moral evolution is a chaotic process (which I think we can probably argue it is, in some ways) - then there isn’t a real definition here for what we would want.
- Also, what makes

# Figuring out what model to operate in

[This paper](https://arxiv.org/pdf/1605.03142.pdf) introduces the standard cybernetic model as a model for an agent operating in the world. This is a really good starting point, IMO. 

- A side note
    
    It seems true that a self-changing agent can just be represented as an agent having a “higher-level” understanding of itself. E.g. there is no difference between an agent that is self-changing, and an agent that has some master utility function that allows it to change it’s sub-utility function, right?
    
    The point here: the model in this paper that introduces the notion of self-modification is *useful* in so far as it allows us to reason about these higher-level utility functions. Similarly, I think introduction the “heirachical” structure that allows us to reason about memes could be useful in thinking about how to... yeah we really need to do the below, and figure out how to shove memes into a new model.
    

Our first question: where can we shove memes into the standard cybernetic model?

- Utility function? It seems like this is one place...
- Memes as relevant in a higher-level utility function? How do we model a higher-level utility function, though?
    - I want to be higher-level than a HRL task; the goal is not that we select a specific subtask

# How to design this research process?

Given the amount of uncertainty that is present in this project, IMO selecting the right project to work on now is a huge waste of time and something we will likely fail on. Instead, I’d prefer to structure the project so that:

1. It forces us to “attempt” to make some real progress every week.
2. It allows us to change the structure of what we’re working on every week.
3. It encourages us to decrease the amount of uncertainty that we have (so we can operate better going forward). 

IMO, the default for this project should be writing. I think we should, at any point, have 3 research questions we’re working on. We should aim at 500 words of “good” writing on it per week. Then, the structure of our meetings is:

1. We are all sent the writings before the EOD on Friday.
2. We all do the reading before the end of the weekend, and leave comemnts 24 hours before the meeting.
3. We come to the meeting ready to discuss next questions and thoughts. 

I think we could pair this with taking [this course](https://docs.google.com/document/d/1mTm_sT2YQx3mRXQD6J2xD2QJG1c3kHyvX8kQc_IQ0ns/edit#), starting from week 1. 

# New Document

- https://docs.google.com/document/d/1JfzMEf6Zsk-evYYdwKvZWrS5KFU14t03Wxlpb5GTGbs/edit?usp=sharing