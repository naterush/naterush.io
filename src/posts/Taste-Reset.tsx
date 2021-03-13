import React from 'react';
import './Post.css'

export const TITLE19 = "Taste Reset";
export const DATE19 = "2020-3-30 00:00:00 -0400";
export const TEASER19 = () => (<div>Here&apos;s a terrible idea: I&apos;d like to reset my preferences. </div>);

    
function Post() {
    return (
    <div className='post'>
        <h1>
            Taste Reset
        </h1>
        
<div>Here&apos;s a terrible idea: I&apos;d like to reset my preferences. </div>

<div>Less dramatically - more specifically- I&apos;m going to create a new Spotify account. This account will be the only account that I listen to music on, for the month after it&apos;s creation. </div>

<div>Furthermore, I&apos;m going to get a cool domain name -- something like tasteres.et (if it existed - it doesn&apos;t), and make a website where anyone with the link (and maybe a token of some sort) can go and suggest songs that _inform their taste_. These suggested songs will be the only songs I can listen to on this account.</div>

<div>I&apos;m sure I&apos;ll get trolled heavily, but what a cool opportunity for me to learn about content moderation on a tiny scale. </div>

<div>I&apos;ll market it lightly. And listen heavily to everything suggested. And hopefully change my taste a bit, before I ultimately return to live Mac DeMarco and JPEGMAFIA.</div>


    </div>
    );
}

export default Post;