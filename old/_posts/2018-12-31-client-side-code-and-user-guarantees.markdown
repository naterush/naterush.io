---
layout: post
title:  "Client-side Code and User Guarantees"
date:   2018-12-31 12:00:00 -0400
categories: old-blog
---
At the time of writing [Etherscan.io](etherscan.io) is currently the most popular Ethereum block explorer.

If you check out a smart contract on Etherscan, it sometimes has accompanying Solidity source code. This requires the author of the smart contract to upload the source code (so users can trust the smart contract), and results in the smart contract being marked as verified. 

As is implicit with all block explorers, though, nothing has really been verified for the user at all. If compromised, Etherscan could certainly do a ton of damage to the ecosystem. As an easy attack, they could show certain transactions being process when they hadn’t been (or vice-versa). As a possible-harder-to-detect-one, they could show certain contracts as verified even when the source code provided isn’t the correct one.

The immediately obvious mitigation (and the one I was thinking about when I started writing this blog post) is to have some client side javascript and actually compile the source code and then compare it to the byte code. The problem here, of course, is that although the source code might match up with the byte code, there’s no guarantee that this is actually the code that’s deployed on the blockchain. 

Again, the fix is pretty standard and straight-forward. The client-side javascript must be given a block-hash that is at least as old as when this contract was deployed. Furthermore, we insist that Etherscan provide a proof that this byte code is actually the correct byte code at this address. 

After writing this, it seems like two things are true:

1. Client-side code has the potential to turn centralized and not-trustworthy things like Etherscan into centralized and pretty much totally-trustworthy things. Which is fine, because there are some benefits to Etherscan being centralized (try building a [decentralized account transaction index](https://quickblocks.io/)).
2. Having some knowledge about what is under consensus is almost always require to get some value from the blockchain - and as such light clients are so much more important that I previous acknowledged (and I thought they were very important before).