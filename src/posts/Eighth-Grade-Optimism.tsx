import React from 'react';
import './Post.css'

export const TITLE31 = "Eighth-Grade Optimism";
export const DATE31 = "2019-3-11 12:00:00 -0400";
export const TEASER31 = () => (<div>Eighth Grade is a painful movie. I fast-forwarded bits of conversation to avoid the second-hand emba...</div>);

    
function Post() {
    return (
    <div className='post'>
        <h1>
            Eighth-Grade Optimism
        </h1>
        <div>Eighth Grade is a painful movie. I fast-forwarded bits of conversation to avoid the second-hand embarrassment.</div>

<div>Throughout the movie, I prayed things would “work out.” That she would end up totally, like, cool. But the movie ended with her exactly as cool as she was at the start: not. In her great un-cool-ness, though, she looked forward with optimism renewed.</div>

<div>“Optimism renewed” is a feeling that I, the viewer, feel at the end of (happy) movies. When things work out, I realize how happy and glorious and great the world is, and so of course I’m optimistic.</div>

<div>But it wasn’t the viewer who was left with this feeling. Instead, the characters get this optimism renewal that is meant for me! Frankly, I’m pissed. At least my optimism isn’t misplaced, though - I’m much cooler at the end of happy movies.</div>

    </div>
    );
}

export default Post;