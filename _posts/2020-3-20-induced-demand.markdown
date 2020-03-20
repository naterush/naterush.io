---
layout: post
title:  "Induced Demand"
date:   2020-3-20 12:00:00 -0400
categories: new-blog
---

City streets and computer hardware and blockchain throughput. We dream that "make bigger, make faster" will alleviate congestion in all of these places, and make our comute and compute as fast and cheap as we want it to be. 

City planners are well-aquantined with the concept of [induced demand](https://www.citylab.com/transportation/2018/09/citylab-university-induced-demand/569455/), when increasing road capacity changes commuter bahavior and encouages them to drive more. In turn, the roads fill up again, with the congestion worse than before. 

Our computer programmers are commuters. They see the new capacity of their system, and they dream even bigger. More sound assets, more string parsing, more dependencies - and more than anything - higher level languages that make programming easier and more pleasant. In turn, the hardware is pushed to it's limit again, and we need swap files to make sure we have enough RAM to run two instances of Google Chrome (the pig!) at once.

I suspect blockchain throughput will be the same. Sharding promises to increase the supply of block space, but it will likely induce more demand for block space as well. And the blocks will fill up again, and we'll argue about blockchain scaling again. Blockchain sharding of any sort will likely be considered a failure to alleviate blockchain throughput problems, in the long term. 

City planners address induced demand in a variety of ways. For one, they just limit the size of roads -- in some cases shrinking already made roads to less appealing to cars. Furthermore, they use [congestion pricing](https://en.wikipedia.org/wiki/Congestion_pricing), where users of the system must pay to use the system during times of congestion, reducing demand. 

Naively applying the above to computers and blockchains seems mostly crazy. Why would be purposefully build computers with worse specs? Why would we limit the size of our blockchain blocks? Why would we charge users when their apps run slow? Charging more for blockchain usage during congestion actually fits well with [what we expect](https://bitinfocharts.com/comparison/bitcoin-transactionfees.html).

For one, we need to make sure that the people paying for the congestion are the people who are benefiting from using the roadways. Practically, this means that for computers and blockchains, app developers should be responsible for some of the cost that their app provides to a system. And that sounds like nonsense - but maybe only because these app developers could just lose money from people using their app (without them running any comptue themselves). I wonder if we could a) make app developers pay for writing slow apps, and b) bound their profits above 0, so making you app slower just makes you less profitable. This seems maybe resonable in a blockchain context, less so in a home-computing one. 

Furthermore, we need to make sure to consider the real classic concern of "yeah but with congestion pricing, the rich people just live it up and the poor people get fucked." With congestion pricing on roads, owning a car becomes a luxury. We don't want running apps or interacting with dapps to be the same, where the existing terribly-distributed property rights leads to inequality in new places.

The above inequality can be addressed, at least partially, by making sure that the profits from the congestion pricing [helps the people disadvantaged by the system](https://barnabemonnot.com/thesis.pdf). So: congestion pricing on roads should go to paying for better public transport, or other social welfare things that help disadvantaged people. Similarly, for blockchain apps, some of the fees should go those who _need_ -- whatever that means in this system.

The problem with the above is that the rich, on top of getting to drive around on the city streets, also usually control the governance process. In pratice, those with property rights can control the flow of government money, and why would they use this tax revenue to help not-them? We need to make sure that the governance process that distributes the revenue of this congestion pricing is not controlled by the people who benefit from the congestion pricing. Just one more reasons for coin-holder governance can fuck right off. 

In practice, blockchains seem well suited to congestion pricing. Users expect to pay already, and understand there is limited demand for blockspace. Furthermore, the fact that we can have protocol guarantees in the first place make the above "keep governance out of the hands of the rich" more possible than it is else where. 

Unrelatedly, I think that the concept of [correlated slashing](https://forum.cosmos.network/t/research-slashing-incentives-for-validator-decentralization/1835) can be considered congestion pricing. The throughput is the "slashing allowance," and validators pay more on their slashing allowance during times of congestion. We should make sure this slashed capital goes to the users effected by the congestion -- say those that got double spent! 