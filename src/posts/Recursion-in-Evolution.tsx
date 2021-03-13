import React from 'react';
import './Post.css'

export const TITLE22 = "Recursion in Evolution";
export const DATE22 = "2018-12-31 12:00:00 -0400";
export const TEASER22 = () => (<div>Disclaimer: my biology knowledge ends at 9th grade bio - so everything in this blog post is pretty m...</div>);

    
function Post() {
    return (
    <div className='post'>
        <h1>
            Recursion in Evolution
        </h1>
        
<div>Disclaimer: my biology knowledge ends at 9th grade bio - so everything in this blog post is pretty much fake. </div>

<div>Why are so many things in nature very recursive looking? Fingers are limbs on limbs on a base-case body. Trees are branches on branches on branches on a base-case trunk. Many plants are symmetric in a way that seems like it could be specified in a very simple recursive way. </div>

<div>Here’s my (probably unoriginal) current theory why this is: recursive specifications, in some cases, take up significantly less space than their non-recursive counter-parts. In the case of plants and animals, this means that the DNA that can be used to express a tree in recursive form is X pairs, while a similar tree in non-recursive form is 1000X pairs (or something).</div>

<div>I bet that this has a major practical benefit - from the perspective of a tree. Namely, the odds a tree gets some fatal mutation is much smaller; the mission critical set of genes is much smaller - and so with a total amount of space the genes can take up in either case, there can be more backups when there is a smaller specification.</div>

<div>The next obvious question is: why does a tree have to be a tree at all? The answer, I think, is that there is an evolutionary advantage to growing how a tree did: namely, tall and big. So, if a tree wants to be tall and big, it has two options. Use a small set of genes to do it and have less risk of dying due to some mutation. Or don’t, and lose to the trees that did.</div>

    </div>
    );
}

export default Post;