---
layout: post
title:  "Formal Methods for Scam Detection"
date:   2018-12-31 12:00:00 -0400
categories: old-blog
---

I read a paper recently where the papers authors analyzed how often Ethereum ICOs delivered on the what they promised in their white paper. More specifically, the authors checked promises like “there will be at most 1000 tokens” and “the pre-mine will be escrowed” with the actual contract code that was deployed on the Ethereum main net. 

As it turns out, an unsurprisingly small number of ICOs actually delivered on the above sort of promise. At least, token caps and founder escrows were almost _always_ not implemented in the token contract. 

Here’s my pipe-dream proposal to stop this from occurring: client-side code checks the promises in the white-paper with the invariants that can be proved about the smart contract. 

For example, if a white-paper promises that “the token supply will be capped at 1000 tokens,” a user reading this paper can (with a slick UI, of course) can have their computer check that the smart contract actually provides this. If the promises in the white paper are actually guaranteed by the code - then a fat, green check mark should appear (with a slick UI, of course).

If we were super hardcore, we could insist that part of the white paper of any smart contract system is actually generated directly from the invariants that can be proved about the smart contract code. The DAO shouldn’t be able to promise that “anyone who owns DAO tokens can retrieve their share of rewards” if any ole DAO hacker can come along and take it. 