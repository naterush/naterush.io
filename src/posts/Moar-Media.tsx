import React from 'react';
import './Post.css'

export const TITLE0 = "Moar Media";
export const DATE0 = "2019-1-17 12:00:00 -0400";
export const TEASER0 = () => (<div>The new God of War game looks awesome. I haven’t played it, but I watched pretty much the entire gam...</div>);

    
function Post() {
    return (
    <div className='post'>
        <h1>
            Moar Media
        </h1>
        <div>The new God of War game looks awesome. I haven’t played it, but I watched pretty much the entire game on YouTube. It’s heavily story driven and done with a no-cut camera. In places, this turns the game into a movie. </div>

<div>I haven’t see the most recent Black Mirror (Bandersnatch, or whatever). But it’s a choose your own adventure TV show. In many ways, this seems to play like a video game.</div>

<div>I think that as our media gets better (and I’m sure this isn’t an original idea, as usual), the barriers between different types of media will break down. Movies are video games are VR experiences are audiobooks are the dreams we have, probably. </div>

<div>Also, I think that the idea of “choose your own adventure” might go to the max. When computers can create personalized content - and not just ads, but real content - then why can’t each person have a computer that entertains them perfectly? The idea of a universal translator here seems relevant - because I still want to talk to people about TV shows, but hardly can when we are all watching different TV shows. So our computers will figure out some way of expressing these experiences to each other. </div>

<div>As a side note: this future sounds a little dark and not necessarily so good. So I hope we figure it out properly. I don’t want to become addicted to the most entertaining content of all time. </div>

    </div>
    );
}

export default Post;