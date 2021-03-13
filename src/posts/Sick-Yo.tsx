import React from 'react';
import './Post.css'

export const TITLE29 = "Sick, Yo";
export const DATE29 = "2019-1-17 12:00:00 -0400";
export const TEASER29 = () => (<div>When I was in the 11th grade, at the height of my (JV) soccer career, I got hit in the head with a s...</div>);

    
function Post() {
    return (
    <div className='post'>
        <h1>
            Sick, Yo
        </h1>
        <div>When I was in the 11th grade, at the height of my (JV) soccer career, I got hit in the head with a soccer ball. And got a very mild concussion. Classic. </div>

<div>I don’t know what the recommendation is at the time of reading, but back then, the solution to a concussion was “taking it easy.” This, of course, included not blasting you brain with blue light. So, for three days, I hung out in my house and didn’t use any computers of any forms. It was exhausting. </div>

<div>Lacking anything else to do, I started listening to this poetry podcast that my dad recommended. I’ll hopefully remember to come back and add the name later. In any case, I totally got obsessed with poetry as a result. Shitty, semi-original poems are one of the main gifts I give these days.</div>

<div>More recently (like last week), I got the norovirus (or something with the same symptoms). And I was quarantined in my room (and bathroom) for three days. And without anything to do, really, I started reading about quantum computing. </div>

<div>I’m as big of a noob as one could be, but it’s very interesting. It sounds fun to get obsessed. </div>

<div>In both cases, the sickness acted as a break from everything. And in both cases, I got to explore a new subject that ended up being very interesting to me. I think this seems to say that I need to prioritize “empty time” more than I have been previously. Just time to explore, without any goals at all other than keeping the time empty.</div>

    </div>
    );
}

export default Post;