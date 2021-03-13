import React from 'react';
import './Post.css'

export const TITLE37 = "Review: NileRed";
export const DATE37 = "2019-7-17 12:00:00 -0400";
export const TEASER37 = () => (<div>This is the start of a new series on this blog. The goal: review things I find on the internet that ...</div>);

    
function Post() {
    return (
    <div className='post'>
        <h1>
            Review: NileRed
        </h1>
        <div>This is the start of a new series on this blog. The goal: review things I find on the internet that I find particularly interesting or cool or ~yes~. More specifically, I’ll try and justify why I feel this way. </div>

<div>This review is of a YouTube channel called <a href='https://www.youtube.com/channel/UCFhXFikryT4aFcLkLw2LBLA'>NileRed</a>. NileRed is an ex-chemistry student of some sort, and so he makes videos about chemical reactions and related subjects. He goes into great detail about his process, methodology, failures and successes. He explores and replicates various chemical reactions. </div>

<div>The videos are well made: clear audio, good video, etc. He’s also a strange man (who else makes videos on the internet), but totally charming. And the chemical reactions he explores are interesting enough in their own right it’s unsurprising they go viral. </div>

<div>What makes his content so interesting is how direct of a translation it is of a lab notebook. I’ve written lab reports before, and the style prescribed by the <a href='https://www.training.nih.gov/assets/Lab_Notebook_508_(new).pdf'>official rules</a> is the style he follows, almost to the T, in his videos. That’s the amazing bit. Who would have guessed that this format would be used by a chemist not to record their process — but more-so to entertain and educate on YouTube in a video format? </div>

<div>Formats of the old world obviously adapt as they interact with the internet, but sometimes seeing the influences so visibly is #shocking. I wonder what other formats we will see this with — especially in the context of YouTube — in the next couple years.</div>

    </div>
    );
}

export default Post;