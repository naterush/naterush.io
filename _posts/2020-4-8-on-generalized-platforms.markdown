---
layout: post
title:  "On Generalized Platforms"
date:   2020-4-8 0:00:00 -0400
categories: new-blog
---

# Inspiration 

We launched [saga](https://sagalab.org) with the intention of building "generalized version control." The thesis: git-style collaboration works really well for code, and live collaboration doesn't work so well, because of the complex structure of these projects. If we could enable creators of all sorts with git-style (or "asyncronous") collaboration, they would reap the benefits of the workflow and solve their collaboration problems. 

(Yes, we know. Wrong way to approach solving problems. Imposing our solution is no way to approach product building.)

In any case, we are no longer, currently, building generalized version control. This is mostly because most of the work with generalized version control is specific to the file format you want your generalized verison control system to work for next; who coulda guessed? 

Attempting to build generalized version control was by no means a waste of time. For one, we developed version control algorithms we're currently using in our git-style Excel version control (launching soon!). Moreover, we got a lot better at building software. Also, our product-building process is much better. I wouldn't change a thing. 

But it's worth asking what a "generalized" (ok, just quoting this one) tool is in the first place? What might make a generalized tool useful for users? When does it make sense to try to build one? 

# Generalized Tools, Generally

A generalized tool is a tool that can be applied to tasks in different domains. Duh. It's not a super helpful definion, but some examples do help:
1. A word processor is a general tool. I can use one to write an aggressive email to my professor, or to write code, or to make some ASCII art. It's always text of some sort, but the tasks are in different domains. 
2. A calendar. I can store events of all sorts: dates with friends, dates with enemies, dates with dates (the fruit), class, etc. 
3. A fitness app that allows me to track my runs and bike rides. Of course, it would be more general if I could use it to track how much I've been working on my abs, but it's still general. 

Of course, not all generalized tools are the same. Some generalized products solve problems across 6 domains, some solve problems across 10,000. But they are still generalized tools. 

# When Useful?

Generality sounds nice. Like, of course I'd prefer that my calendar app can store any sort of event. It would be terrible to use one calendar to for your social events, an entirely different calendar for your class, and a whole different one for phone calls with your parents. 

(I've actually done something like this before [because I'm too dumb to sync my calendars], and as you can guess I missed just about everything, and frequently scheduled events on top of each other.)



> Ok, yeah, I hear you, calling a calendar app a generalized application is a little wonky. In my defense though, there are apps that do things other than just scheduling that also have calendar-like stuff (e.g. like events on Facebook) - so a calendar really is a generalization of this.
> Or, if that doesn't work for you, just take it as a toy example. 


This calendar example gives us a clue about when generality is nice: when different tasks in different domains are related to each other (dependencies, or network effects, or something). Two events, even if one is social and one is buisness, can't really be scheduled at the same time as each other. This dependency makes the generalized tool valuable to users. 

Another great exampe of where dependency between different tasks leads to value for users is a smart contract blockchain like Ethereum <3. It turns out that different smart contracts performing different tasks interacting with each other is like half of what people [care about](https://twitter.com/vitalikbuterin/status/1182117805405032448?lang=en).

It's worth noting that these relationships between different domains might not exist in practice, before you build the tool. Only after notion showed me the value of having a progress board inlined in my text documents did I realize the value of these two domains interacting with each other. 

# When Build?

Just because a general tool is nice for users doesn't make it the right thing to build. 

Generalized tools are usually harder to build than more specialized ones, for obvious reasons. You simply have to handle more cases. This is worth in some cases, though. For calendars, once you support events of any type, you kinda already support all events. Just make the title editable, or something. For generalized version control, it's a herculean effort for every new file format you decide to support. Pretty expensive, not so nice. 

Also, if the value to users of generalizing is based on the _currently unobserved_ relationships between domains (e.g. the Notion example), then it seems like there's signifigant engineering cost here (as the tooling for the relationship doesn't exist) - not to mention the cost of the user education that needs to occur.

There are also costs to generalizing. Mostly, a more general tool might be less able to serve the needs of a specific subset of possible users. A calendar app that supports any event is probably less useful to runners than a calendar app just for runs that _also_ automatically tracks your runs when your meet up (generalized calednar apps still make more sense for the reasons above, though).

# Should I Generalize?

In the beggining, probably no. Unless generalizing is free, in which case yes. 