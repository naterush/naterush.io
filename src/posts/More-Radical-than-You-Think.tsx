import React from 'react';
import './Post.css'

export const TITLE36 = "More Radical than You Think";
export const DATE36 = "2019-2-7 12:00:00 -0400";
export const TEASER36 = () => (<div>People making predictions about technology is always a terrible idea (if you value being correct). B...</div>);

    
function Post() {
    return (
    <div className='post'>
        <h1>
            More Radical than You Think
        </h1>
        <div>People making predictions about technology is always a terrible idea (if you value being correct). But even articles that acknowledge that trying to make these predictions are a terrible idea try and make predictions anyways.</div>

<div>I have no idea the impact self-driving cars will have on society. I can make some guesses - and I’ll probably do so later - but who knows if they will be right? So, to preserve my confidence in my estimation skills, I’m instead going to define a new goal: </div>

<div>Rather than predicting the impact of self-driving cars on society, can we instead make a prediction as to how large the impact they will have will be? </div>

<div>Right off the bat, this sounds wildly counter-intuitive. How the hell would we make an estimate as the size of the effect of something without first understanding what it’s possible effects might be? </div>

<div>I’m not sure. But I do know that, when thinking about self-driving cars, it’s quite easy to say “ah, yes, the trucking industry is fucked.” But I think that the effects of self-driving cars are probably going to be dramatically more dramatic than that. When cars were first introduced, we could have thought “ah, yes, the horses are fucked.” But the impact of cars on the economy, cities, daily human life, and the American consciousness are more massive than, like, anything ever.</div>

    </div>
    );
}

export default Post;