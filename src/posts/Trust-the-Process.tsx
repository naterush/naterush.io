import React from 'react';
import './Post.css'

export const TITLE7 = "Trust the Process";
export const DATE7 = "2019-6-10 12:00:00 -0400";
export const TEASER7 = () => (<div>The New York Times recently created a series called Diary of a Song. Each video takes some famous so...</div>);

    
function Post() {
    return (
    <div className='post'>
        <h1>
            Trust the Process
        </h1>
        <div>The New York Times recently created a series called <a href='https://www.youtube.com/watch?v=ZpMNJbt3QDE'>Diary of a Song</a>. Each video takes some famous song and overviews its creation: initial ideas, the songwriting process, musical ideas that made it through to the end (and those that died), etc. As someone-who-has-never-written a song, the process is very interesting to watch; the nice visuals are nice, too.</div>

<div>The Life of Pablo is a good album. At least, I like it. But when it was first released, many people were surprised by the sloppy production, <a href='https://www.teetweets.com/products/kanye-west-ima-fix-wolves'>apparently</a>. Over the next 6 months, Kayne remixed, fixed, added and deleted from the album. The Life of Pablo isn’t the same Life of Pablo that it originally was. Which was interesting to watch. </div>

<div>Songs are generally about 3 - 5 minutes because that’s the maximum length of audio that could be <a href='https://www.vox.com/2014/8/18/6003271/why-are-songs-3-minutes-long'>recorded on disks</a>. These disks that are not used any more. The internet is much more flexible than that. </div>

    </div>
    );
}

export default Post;