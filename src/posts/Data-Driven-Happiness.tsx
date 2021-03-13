import React from 'react';
import './Post.css'

export const TITLE8 = "Data-Driven Happiness";
export const DATE8 = "2019-7-8 12:00:00 -0400";
export const TEASER8 = () => (<div>What makes me happy: a sunny day in a green park; a good run that makes you swear; a funny friend an...</div>);

    
function Post() {
    return (
    <div className='post'>
        <h1>
            Data-Driven Happiness
        </h1>
        <div>What makes me happy: a sunny day in a green park; a good run that makes you swear; a funny friend and a silly joke; a productive day and interesting work. I think. Or it could be the opposite. I realized that I haven’t really been tapping into the data sources available to me (like my own brain, or my internet history), and keeping track of what makes me happy and what makes me sad — or what makes me fulfilled and what makes me empty. Etc. </div>

<div>I have decided that I am going to build a simple tool, to be used once a day, that keeps track of relevant data from all sources I can get it from. It will ideally be mostly automated, pulling from all data sources (e.g. internet history, and sleep data, etc) that I have available. I will also ask myself nightly questions about happiness, fufilledness, sadness, anxiety, etc. </div>

<div>The obvious goal: discover what actually makes me happy. And then optimize for it. Really, I don’t know why it took me so long to realize that I was optimizing in the dark. </div>

    </div>
    );
}

export default Post;