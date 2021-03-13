import React from 'react';
import './Post.css'

export const TITLE39 = "Taste Reset 2";
export const DATE39 = "2020-4-2 00:00:00 -0400";
export const TEASER39 = () => (<div>Yeah, ok, the Taste Reset is not gonna happen. There&apos;s just no way I could really solicit good ...</div>);

    
function Post() {
    return (
    <div className='post'>
        <h1>
            Taste Reset 2
        </h1>
        
<div>Yeah, ok, the Taste Reset is not gonna happen. There&apos;s just no way I could really solicit good input from my friends with music, on an open platform. If I asked them indivigually, sure, they&apos;d support. But an open platform? I&apos;m asking to get trolled. </div>

<div>And yeah, I know I said that thing about content moderation, but let&apos;s be real. I&apos;m not equipped for that. </div>

<div>So, instead: I&apos;m going to build a simple script that downloads the recent albumbs that have been rated &gt;8.0 on Pitchfork, and automatically add them to a playlist. It&apos;s more reasonable, I think, if a bit less romantic. Either that, or I&apos;ll just try to branch out more. Eh.</div>

    </div>
    );
}

export default Post;