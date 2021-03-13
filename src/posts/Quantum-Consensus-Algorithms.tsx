import React from 'react';
import './Post.css'

export const TITLE11 = "Quantum Consensus Algorithms";
export const DATE11 = "2019-1-17 12:00:00 -0400";
export const TEASER11 = () => (<div>DISCLAIMER: I have no idea what I’m talking about. </div>);

    
function Post() {
    return (
    <div className='post'>
        <h1>
            Quantum Consensus Algorithms
        </h1>
        <div>DISCLAIMER: I have no idea what I’m talking about. </div>

<div>Although I know as little as one could know about it, quantum computing seems very interesting. </div>

<div>One of the more interesting factoids (that I don’t get the math behind) is the <a href='https://sergworks.wordpress.com/2016/10/26/chsh-game-in-detail/'>CHSH game</a>.</div>

<div>Pretty much: two distributed agents can “coordinate” better, in some loose sense, better in a world where they exploit quantum entanglement. Which is crazy!</div>

<div>My theory is this: the question of liveness (any maybe safety too, although this would be more surprising) in consensus algorithms can be helped by taking advantage of quantum effects. I don’t know how, or why, but I’d love to hear if it were true.</div>

    </div>
    );
}

export default Post;