---
layout: post
title:  "VM Versioning with Persistent Smart Contracts"
date:   2019-1-17 12:00:00 -0400
categories:
  - blockchain
---
The [most recent Ethereum Hardfork](https://blog.ethereum.org/2019/01/15/security-alert-ethereum-constantinople-postponement/) didn’t happen. Shortly before the hard fork block, a bug was found; pretty much, old code relied on certain invariants holding for some op-code (SSTORE), and the semantics of the op-code was changing with the hardfork. Bugs could have been introduced. As a result, the community decided to postpone the hardfork. 

Generally, I think that changing the semantics of a virtual machine while the virtual machine is running unchangeable code is crazy. Straight up. It seems like it’s just a terrible idea.

So: how can we build our blockchain virtual machines such that a) we can deploy code that need not be updated, but b) we have the ability to upgrade the virtual machine over time?

Here’s one proposal:

Smart contracts exist in some namespace/VM, where we promise to never change the semantics of the VM, ever, under any circumstances.

Furthermore, there are boundaries between namespaces; essentially, an input pipe. Here, we can either insist that all input pipes share the same input format (e.g. a common address standard across namespaces), or we can allow different VMs to have different input pipe input types. The benefit of the later is more flexibility in the protocol, and the disadvantage is that earlier deployed namespaces will struggle to communicate with later deployed contracts without either a) more complexity in protocol or b) explicit support for this within the smart contracts themselves.

I think that, on balance, a standard address format is the best option and so should be required. Other than that, cross-namespace transactions can send any bytes they want into the input pipe. 

Note that these different namespaces are not shards; we can run all of these cross-namespace transactions totally synchronously. We also note that standardizing the gas accounting model across different VMs is not necessary. For example, if a new precompile is introduced that reduces the gas cost of some operation by a large margin, this happens in a new namespace. This gives some pressure to smart contract developers to move to better VMs - while old ones can still use this new precompile by sending data across the input pipe (if it makes economic sense to do so). 

Main open question: what about semantic changes like “add rent” or “make SSTORE more expensive?” These changes are bug-fixes in a way - and we want them to retroactively apply to all the old VMs. So what do?