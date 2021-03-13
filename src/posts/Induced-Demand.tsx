import React from 'react';
import './Post.css'

export const TITLE16 = "Induced Demand";
export const DATE16 = "2020-3-20 11:00:00 -0400";
export const TEASER16 = () => (<div>City streets and computer hardware and blockchain throughput. We dream that &apos;make bigger, make ...</div>);

    
function Post() {
    return (
    <div className='post'>
        <h1>
            Induced Demand
        </h1>
        
<div>City streets and computer hardware and blockchain throughput. We dream that &apos;make bigger, make faster&apos; will alleviate congestion in all of these places, and make our comute and compute as fast and cheap as we want it to be. </div>

<div>City planners are well-aquantined with the concept of <a href='https://www.citylab.com/transportation/2018/09/citylab-university-induced-demand/569455/'>induced demand</a>, when increasing road capacity changes commuter bahavior and encouages them to drive more. In turn, the roads fill up again, with the congestion worse than before. </div>

<div>Our computer programmers are commuters. They see the new capacity of their system, and they dream even bigger. More sound assets, more string parsing, more dependencies - and more than anything - higher level languages that make programming more pleasant. In turn, the hardware is pushed to it&apos;s limit again, and we need swap files to make sure we have enough RAM to run two instances of Google Chrome (the pig!) at once.</div>

<div>I suspect blockchain throughput will be the same. Sharding promises to increase the supply of block space, but it will likely induce more demand for block space too. And once blocks fill up again, so will continue the blockchain scaling argument. Blockchain sharding will likely be considered a failure to alleviate blockchain throughput problems, in the long term. </div>

<div>City planners address induced demand in a variety of ways. For one, they just limit the size of roads -- in some cases shrinking roads to make them less appealing to cars. Furthermore, they use <a href='https://en.wikipedia.org/wiki/Congestion_pricing'>congestion pricing</a>, where users of the system must pay (more) to use the system during times of congestion, reducing demand. </div>

<div>Naively applying the above to computers and blockchains seems mostly crazy. Why would be purposefully build computers with worse specs? Why would we limit the size of our blockchain blocks? Why would we charge users when their apps run slow?  But charging more for blockchain usage during congestion actually fits well with <a href='https://bitinfocharts.com/comparison/bitcoin-transactionfees.html'>what we do</a>.</div>

<div>For one, we need to make sure that the people paying for the congestion are the people who are benefiting from using the roadways. Practically, for computers and blockchains, this means app developers should be responsible for some of the cost that their app puts on the system. And that sounds like nonsense - but maybe only because these app developers could just lose money from people using their app (without the developers running any compute themselves). I wonder if we could a) make app developers pay for writing slow apps, and b) bound their profits above 0, so making you app slower just makes you less profitable. This seems maybe resonable in a blockchain context, less so in a home-computing one. </div>

<div>Furthermore, we need to make sure to consider the real concern of &apos;yeah but with congestion pricing, the rich people just live it up and the poor people get fucked.&apos; With congestion pricing on roads, owning a car becomes a luxury - and the commute time of ever non-rich person doubles. We don&apos;t want running apps or interacting with dapps to be the same, where the existing terribly-distributed property rights leads to inequality in new places.</div>

<div>The above inequality can be addressed, at least partially, by making sure that the profits from the congestion pricing <a href='https://barnabemonnot.com/thesis.pdf'>helps the people disadvantaged by the system</a>. So: congestion pricing on roads should go to paying for better public transport, or other social welfare things. Similarly, for blockchain apps, some of the fees should go those who _need_ -- whatever that means in a blockchain context.</div>

<div>The problem with the above is that the rich, on top of getting to drive around on the city streets, also usually control the governance process. In pratice, those with property rights can control the flow of government money, and why would they use this tax revenue to help not-them? We need to make sure that the governance process that distributes the revenue of this congestion pricing is not controlled by the people who benefit from congestion pricing too. Just one more reason coin-holder governance can fuck right off. </div>

<div>In practice, blockchains seem well suited to congestion pricing. Users expect to pay already, and understand there is limited demand for block space. Furthermore, the fact that we can have protocol guarantees in the first place make the above &apos;keep governance out of the hands of the rich&apos; more possible than it is else where. </div>

<div>Unrelatedly, I think that the concept of <a href='https://forum.cosmos.network/t/research-slashing-incentives-for-validator-decentralization/1835'>correlated slashing</a> can be understood as congestion pricing. The throughput is the &apos;slashing allowance,&apos; and validators pay more on their slashing allowance during times of congestion. This suggests that slashed capital should go to the users effected by the congestion -- say those that got double spent! </div>

    </div>
    );
}

export default Post;