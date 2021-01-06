---
layout: post
title:  "Product vs. Protocol"
date:   2020-4-2 0:00:00 -0400
categories: new-blog
---

I'm not very good at building products. I don't have a great product sense, I kinda suck at user interviews, and I struggle to understand user problems from the conversations I have. But I'm trying, hard, to get better all of this. The literature promises it will help me build products people actually want.

Before I started trying to build products, I helped design blockchain protocols at the Ethereum Foundation for about two years. I worked on Correct-by-Construction Casper, a family of consensus algorithms that were well suited for Proof-of-Stake consensus as well as sharding. I also bounced around to other areas of Ethereum research, and met (and argued with) a lot of other blockchain protocol designers working on different blockchains.

For a blockchain, the protocol is the product that developers and end users interact with. The protocol defines what developers can develop, and whenever an end user interacts with the system, it's the protocol that they are talking to, or waiting for.

But, in my expirence, protocol design isn't understood as product development as compared to an academic exercise. After all, why run through the product development gambit when you _already understand user problems?_

I mean, it's clear what users need. They want a super-fast, super-scalable blockchain that will host all the applications they interact with, and protect their assets, privacy, and personal freedoms. Alternatively, they don't care about the blockchain at all: they just want _digitial gold_ - money they can be sure they will never inflate, which of course their government is prone to do.

Developers? They are even easier to understand. Of course they want a fast, scalable blockchain as well, but the independence of their applications is the most important thing otherwise. Alternatively, they could give a damn about independence; they want composability.

We don't compare the protocols we build in terms of their ability to serve user needs. Instead, we stop the conversation within the arcane, archaic frameworks we have for thinking about them. Safety in a probalistically asyncronous network isn't a reason a protocol is better than another - it's, well, to be honest, I still have no idea what that means.

Of course, many of the properties we talk about within these acadmic frameworks are short-hand for user needs. Safety is, like, important for users, surely? Scalability obviously matters for a base-layer blockchain protocol, I think?

I mean, I still believe these properties matter. I just wish we talked to some goddamn users as we were building things for them. 

To be clear: I'm not just saying "blockchain UX sucks." For one, it's so much better than it used to be in 2016 when I first started messing about. But more than that - I'm questioning if the protocols themselves are really being designed with users in mind. 

Also, the users here aren't just end users. They are the developers and the end users and the other stakeholders of a blockchain system -- which is, you know, potentially a lot. 

Finially, I want to be clear that the above is, more than anything, a reflection on my own failings as a protocol designer. The people I worked with and met are some of the smartest, most interesting, and lovely people I know!