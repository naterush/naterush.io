---
layout: post
title:  "Fuck It, We'll do it Live"
date:   2020-5-18 0:00:00 -0400
categories:
  - product
  - spreadsheets
---

# Live Collaboration

You're designing a new application, and you want it to be collaborative. Don't worry, you don't don't have to do much thinking. You just have to adopt the Google Docs Model of Collaboration (GDMOC).

With GDMOC, all users edit the same document. When one user makes a change, all users see it in real time. Google Docs, Figma, Airtable, BAD_CAD_Online.jpg, etc. 

Having spent the past four years in college, I'll be the first to admit that GDMOC works really well for a lot of things. All of the essays I wrote in college I wrote on Google Docs - and I never had a problem (ignoring my grades). The essays weren't particularly complex, and being able to see others work in real time helped me keep track of what I should be working on. 

# Asynchronous Collaboration

But I also studied computer science in college. And we didn't use the Google Docs model of collaboration - and didn't even try to - because it wouldn't work. Trying to edit a codebase when other people are editing at the same time would be a lovely way to fail your homework assignments.

Git is really interesting for a lot of reasons. The legend goes that Linus Torvalds wrote it in, like, 25 minutes. But more relevant to this dicussion is that it doesn't subscribe to the Google Docs Model of Collaboration.

Git gives you a private workspace. You're the only one that makes changes in your workspace. You don't have to worry about what anyone else is doing. When you're ready, you can share the changes you made with your team. 

This is a massive departure from the GDMOC, and for code it obviously makes sense. Codebases are too complex, modular, and interdependent to edit in a live environment.

Of course, there is _some_ live collaboration in software development. If you're doing an interview, or pair programming, live collaboration works great - but this is a tiny minority of cases.


# Why Just Code

Just because a document isn't code doesn't mean it doesn't look like a codebase. A spreadsheet, for example, is just a piece of software written in the world's-most-popular visual programming language. I've built design systems that've had more complex inheritance stuctures than any codebase I would dare to design. A 3D model is a visual layer sitting on top of a constraint system. 

All of the above are examples of "hidden software." 

Sure, not ever logo you mock up has the complexity of a codebase - but some [spreadsheets/designs/cad models] do - and it's provocative to explore these from a software design perspective. Specifically, what about asynchronous collaboration?

When application developers don't acknowledge their applications look like code - they build tools that don't serve their users building complex systems. If you're making a 10 cell spreadsheet, Google Docs works great, but if you talk to the analysts at hedge funds working on a 100 sheet model, they'll tell you they would eat their socks before using live collaboration.

Private workspaces need not just exist for code.

# What Live Collaboration Isn't

It's easy to confuse a "private workspace" with a "hidden workspace." Git makes things challenging, because it combines private workspaces with distributed workspaces - and while both are interesting - the former is more relevant to this discussion. 

We can build private workspaces into cloud software. Just because I can't edit the same copy of the document as my teammates doesn't mean I can't look at what they are doing in real time!

# Why Do We Have Live Collaboration

"Yeah, right!" you say. "I believe in the market - and if live collaboration really was so much worse, the market would demand asynchronous collaboration. Since we use don't use asynchronous collaboration, it must not be better."

Ignoring for a moment the absurdity of _always having to justify why something hasen't been done yet_, there are a couple of reasons for the current market failure. 

For one, the market isn't really failing, because live collaboration works for more people most of the time. Most people aren't working on crazy complex things (e.g. [60% of spreadsheets have under 1000 cells](http://mba.tuck.dartmouth.edu/spreadsheet/product_pubs.html)) and or aren't collaborating. But power users, by definition, are working on complex, crazy documents - and a lot of the time, they are collaborating. And live collaboration doesn't work for them (and almost none of them are using it).

More controversially, I think part of the reason asynchronous collaboration isn't offered generally is because of it's history, and the perception that results. It's primarly a collaboration technique used by complicated programs and power users who can't explain it well - and comes directly from open source development efforts like Linux (literally). The Git UX leaves much to be desired, and it's not easy to imagine a private workspace that is consumable by non-technical users, or easily monetizable.

So, yeah, the market's failing, but only kind of, and mostly due to lack of imagination.

# So What

I dream of a world where asynchronous collaboration is offered to all creators of hidden software. I'm building it right now at [Saga Collab](https://sagacollab.com/). Shoot me an email at (nate a_t sagacollab.com) if you wanna chat :)



P.S. For anyone who doesn't get the inspiration, check out [this infamous video](https://www.youtube.com/watch?v=V1M6EYA14eU) of Bill O'Reilly. It's one of my all-time favorites.