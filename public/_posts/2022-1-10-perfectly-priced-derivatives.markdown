---
layout: post
title:  "Perfectly priced derivatives"
date:   2022-1-10 0:00:00 -0400
categories: new-blog
---
### Introduction

Terra is a protocol that, at a high-level does the following:

1. Creates two assets, Luna and TerraUSD.
2. Knows the market-price of Luna within in USD, L.
3. At any point in time:
    1.  A Luna holder can turn 1 Luna into L TerraUSD.
    2. A TerraUSD holder can turn L TerraUSD into 1 Luna.

In practice, this leads to TerraUSD being a stable coin. In theory, understanding how this protocol leads to stability can be a bit tricky. We justify this in two ways.

### The Static Approach to Understanding Stability

The simple way to understand how this system could lead to a stable coin is the understand that, at any point of time, the Luna ↔ TerraUSD conversion market effectively means that TerraUSD is denominated as 1 USD.

Specifically, Luna is worth L USD per Luna in the open market. TerraUSD is worth 1 / L Luna, as defined by the protocol. Thus, as we can first buy Luna on the open market, and then convert it to TerraUSD through the protocol:

1. 1 USD buys us 1/L Luna. 
2. 1/L Luna gets us 1 TerraUSD

Thus, from a static consideration of the market, it seems reasonable that 1 TerraUSD is worth 1 USD. The dynamic approach to understanding stability can help justify how this stability is actually maintained in practice. 

### The Dynamic Approach to Understanding Stability

Understanding this market as a dynamic system requires introducing a notion of time, and then making an inductive argument about the stability of TerraUSD. 

Assume that at time T, 1 TerraUSD can be acquired for 1 USD, either on the open market or by buying Luna and converting to TerraUSD.

At time T + 1, consider the case where 1 TerraUSD is then worth less than 1 dollar on the open market. Thus, any TerraUSD holder can convert to 1$ of Luna (through the protocol), and then sell this 1$ of Luna. This leads to a profit, as by our inductive assumption they acquired this TerraUSD for 1$. 

Notably, as this arbitrage burns TerraUSD, it contracts the supply of TerraUSD, driving the price up, back towards 1$. 

A symmetric argument can be made when TerraUSD is more than 1$. Thus, these two forces drive TerraUSD back towards 1 USD, and our assumption that 1 TerraUSD is worth 1 USD is preserved at time T + 1.

### Luna and TerraUSD are a Single Asset

Another angle to look at this protocol is particularly cool (and is something first mentioned to thsi author by Sunny Aggarwal). Specifically, it's possible to consider the Luna and TerraUSD as pieces of one single asset. 

This single asset was split into two pieces with different properties: the TerraUSD takes all of its volatility and gives it into Luna. While this makes TerraUSD non-volatile, it also makes Luna more volatile than it would be otherwise.

### Terra is more complicated than this

The Terra white paper spends very little time on the actual mechanics of the protocol described above, and instead extends the protocol so that the incentives of the validators of the Terra network are happy. Specifically, the validators of this chain are Luna holders, and as they are being asked to absorb extra volatility by holding Luna in the long-term, they must be compensated for this.

We ignore this for now, except to note that special care must be paid to transaction fees, which in turn go to Luna holders. As the Terra white paper shows, this can compensate them for the cost of holding Luna long-term.

### Extending the Protocol to Support Derivatives on TerraUSD's Price

Because TerraUSD is always exactly 1 USD, selling an option on this asset makes no sense. An option to buy something at 1$ that is always priced at 1$ is worthless, as you always have this option anyways. More generally, selling USD-based derivatives on an asset that is totally stable in USD is not sensible.

However, using the protocol described above as a starting point, we can introduce the notion of an "almost stable coin" that in turn makes derivates possible:

1. Each time period, rather than setting the bi-directional exchange rate between Terra and TerraUSD to be L, we set it equal to $L + d$ .
2. We sample d randomly from some distribution D (whose design and necessary conditions we ignore for now). For example, D could be a uniform distribution from -5 cents to 5 cents, etc.

As this asset is no longer exactly stable, it is not meaningful to take about USD-based derivatives on this asset. As an example of how this might work:

1. The protocol would issue options.
2. The protocol would know:
    1. The strike price of the option (1 TerraUSD)
    2. The current TerraUSD price
    3. The time to expiration (could be user supplied)
    4. The risk-free rate (or at least make a reasonable assumption here)
    5. The volatility of the asset (this can be derived from the distribution D)
3. In turn, the protocol could use Black-Scholes to correctly price the option, and charge a small fee to the user for buying it.
4. Excising the options just means getting the payout in TerraUSD from the protocol.

### Why Sell Derivatives

In the wild, derivatives are used and created for a variety of reasons. To name a few (high-brow, smart-money) motivations:

1. Allow investors to hedge their positions.
2. Allow investors to hold positions with less capital requirements than would otherwise be required.
3. Allow asset-holders to create synthetic assets that have more attractive risk/reward profiles to certain investors than the underlying asset.

There are also, of course, other (low-brow, dumb-money) reasons for creating derivatives in practice:

1. Speculators like speculating on some derivatives, because of their attractive best-case scenarios (and limited capital requirements).
2. Derivative creators can get money for creating / selling these derivatives!

In this case, as the derivatives are priced perfectly, and only are effective at hedging against holding TerraUSD, none of the high-brow, smart-money reasons really make sense. But, for speculators and derivative creators, there is much fun to be had here.

### Future Directions of Research

1. Understanding what properties of the distribution D are required vs. just nice. Clearly the payouts of the options must aggregate to 0 (or less), or the protocol will go broke!
2. Changing the distribution D to make it have nicer properties: for example, making it so buyers have the potential to get big payouts, as they like big payouts!