import React from 'react';
import './Post.css'

export const TITLE12 = "Self-Hosting";
export const DATE12 = "2020-3-12 12:00:00 -0400";
export const TEASER12 = () => (<div>This blog is self-hosted now. I stole the theme from Vitalik. It&apos;s simple but pretty and also e...</div>);

    
function Post() {
    return (
    <div className='post'>
        <h1>
            Self-Hosting
        </h1>
        
<div>This blog is self-hosted now. I stole the theme from <a href='https://vitalik.ca'>Vitalik</a>. It&apos;s simple but pretty and also exactly what I&apos;m looking for. I might put it on dark mode, though. </div>

<div>Fuck you, squarespace!</div>

    </div>
    );
}

export default Post;