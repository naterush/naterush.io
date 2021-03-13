import React from 'react';
import './Post.css'

export const TITLE17 = "Client-side Code and User Guarantees";
export const DATE17 = "2018-12-31 12:00:00 -0400";
export const TEASER17 = () => (<div>At the time of writing Etherscan.io is currently the most popular Ethereum block explorer.</div>);

    
function Post() {
    return (
    <div className='post'>
        <h1>
            Client-side Code and User Guarantees
        </h1>
        <div>At the time of writing <a href='etherscan.io'>Etherscan.io</a> is currently the most popular Ethereum block explorer.</div>

<div>If you check out a smart contract on Etherscan, it sometimes has accompanying Solidity source code. This requires the author of the smart contract to upload the source code (so users can trust the smart contract), and results in the smart contract being marked as verified. </div>

<div>As is implicit with all block explorers, though, nothing has really been verified for the user at all. If compromised, Etherscan could certainly do a ton of damage to the ecosystem. As an easy attack, they could show certain transactions being process when they hadn’t been (or vice-versa). As a possible-harder-to-detect-one, they could show certain contracts as verified even when the source code provided isn’t the correct one.</div>

<div>The immediately obvious mitigation (and the one I was thinking about when I started writing this blog post) is to have some client side javascript and actually compile the source code and then compare it to the byte code. The problem here, of course, is that although the source code might match up with the byte code, there’s no guarantee that this is actually the code that’s deployed on the blockchain. </div>

<div>Again, the fix is pretty standard and straight-forward. The client-side javascript must be given a block-hash that is at least as old as when this contract was deployed. Furthermore, we insist that Etherscan provide a proof that this byte code is actually the correct byte code at this address. </div>

<div>After writing this, it seems like two things are true:</div>

<div>1. Client-side code has the potential to turn centralized and not-trustworthy things like Etherscan into centralized and pretty much totally-trustworthy things. Which is fine, because there are some benefits to Etherscan being centralized (try building a <a href='https://quickblocks.io/)'>decentralized account transaction index</a>.</div>
<div>2. Having some knowledge about what is under consensus is almost always require to get some value from the blockchain - and as such light clients are so much more important that I previous acknowledged (and I thought they were very important before).</div>

    </div>
    );
}

export default Post;