---
layout: post
title:  "Why Version Control is Not Version Control"
date:   2020-5-19 0:00:00 -0400
categories: new-blog
---

Pre.S. This post disagrees with a [post by Abstract](https://www.abstract.com/blog/version-history-version-control/), a company one would expect Saga to be aligned with given our "async collaboration is better narratives." It's a great read, and if you had to pick a blog post to read, I'd pick theirs. And thanks for sending me the article [Andrew](https://andrewshen.net/) :).

# Current State >

Version control is a terrible name for version control. 

Consider the most popular version control system current in existance: Git. If you use Git, you spend your time checking out branches, making changes to files on those branches, and merging those branches together. The tip of the version tree is all you're really concerned with - most of the time. 

If you don't use Git, take a look at the Github for the most liked Git project: [freeCodeCamp](https://github.com/freeCodeCamp/freeCodeCamp). The current version takes up 90% of the screen. Try and find some historical versions of the project (good luck). 

Managing old versions isn't prioritized because version control isn't about controlling versions: it's about managing current state. 

# Current State ?

"Well, if I'm managing current state, why can't I just manage current state? Why do I need to keep historical versions around?"

A fair question! I think there are a few partial answers.

1. Keeping historical state around is free. If you're always saving current state, then saving historical versions is just not deleting rather than saving extra things. With Git, you have to explicitly commit the state, but that's the current state you're commiting, and the old state just hangs around. 

2. Historical state sometimes becomes current state. If you screw things up (I do) and want to roll back (yes please), having old versions actually can be super helpful. For Git users, you probably don't spent a ton of timing rolling back to previous commits, but you've almost certainly done it before - and edit-undo in a word editor for no reason.

3. Historical state can be helpful. Internally, when Git merges two of your branches, it does so using a merge algorithm that [explicitly considers historical state](https://en.wikipedia.org/wiki/Merge_(version_control)#Recursive_three-way_merge). By looking at the historical state of your project and how it evolved to the current state of both branches, it can merge these two branches together more effectively than it can when not considering historical state. 

So: historical versions are pretty much free to keep around, and they both allow you to roll back (in the rare case that you need to) and also do more interesting things on your current state - like effectively merge two current states together!

Notably, (2) and (3) are much more important in collaborative contexts. More people means more rolling back happening more often, and more of a reasons to be merging two different versions of current state. So, the larger the project and the larger the team, the more likely that keeping historical versions around actually helps you construct your current state.

# So What

Building version control is, to be blunt, gross.

"Hey - don't you want a bunch of copies of some shit you already have" is appealing to the worriers among us, but generally doesn't seem like it'd pick up your bottom line - except in the rare case where Jim from accounting accidently deletes everything.

But if we accurately represent version control as "current state management that is very valuable for teams", then we're not building tooling for the biggest cowards; we're building tools for the best collaborators.