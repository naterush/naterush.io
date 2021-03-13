import React from 'react';
import './Post.css'

export const TITLE15 = "Light-speed, Nerf, and Abstraction";
export const DATE15 = "2019-2-15 12:00:00 -0400";
export const TEASER15 = () => (<div>I used to love Nerf guns. Sometime in middle school, I started trying to modify the few Nerf guns I ...</div>);

    
function Post() {
    return (
    <div className='post'>
        <h1>
            Light-speed, Nerf, and Abstraction
        </h1>
        <div>I used to love Nerf guns. Sometime in middle school, I started trying to modify the few Nerf guns I had to shoot faster and farther. I’m using the world modify loosely, because all I did was “throw my arm” before pulling the trigger mid-throw. It was a surprisingly effective tactic, and if I remember correctly, it led to the bullets shooting about 1.5x as far.</div>

<div>A classic riddle about light-speed being the fastest thing in the universe: what happens if you shoot out of the front of a spaceship that is going 99% of the speed of light? Well, it turns out that light and nerf bullets don’t act exactly the same. While Nerf bullets go faster than Nerf bullets in some cases, light never goes faster than light does. </div>

<div>This boundary condition is very interesting. And it makes a strong argument for it being interesting to try to “abstract” one’s observations. Considering where the abstraction remains true and where it breaks seems very educational. </div>

<div>Here’s an abstraction. Let’s say I have some idea I, and it seems to be interesting in some subject matter S. Can I be generalized to an I’ such that I’ applies to an S’ such that S is a subset of S’? Does the generalization hold in this case? If yes, can I give a proof? If not, are there any counter examples that are particularly informative?</div>

<div>One major question with the above abstractions (and all abstractions, really) is how to formalize things. I think that the creating simple mathematical models is probably the answer here - but I don’t think this is a skill I have yet!</div>

    </div>
    );
}

export default Post;