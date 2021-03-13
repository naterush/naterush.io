import React from 'react';
import './Post.css'

export const TITLE18 = "Stacking as Human";
export const DATE18 = "2019-2-15 12:00:00 -0400";
export const TEASER18 = () => (<div>All the greatest things are just stacks of other less great things. Sandwiches? Just a big stack of ...</div>);

    
function Post() {
    return (
    <div className='post'>
        <h1>
            Stacking as Human
        </h1>
        <div>All the greatest things are just stacks of other less great things. Sandwiches? Just a big stack of bread, meat, cheese, pickles. Skyscrapers? Just a big stack of regular buildings.</div>

<div>New theory for why human civilization evolved so “well:” because we had opposable thumbs, we were better able to stack objects. And because we could stack things, we could create dense, information rich environments that had a similar effect on human productivity that the agricultural revolution did. </div>

<div>If nothing else, this argument gives a compelling reason that sandwiches are a superior food - which is the only real goal, anyways.</div>

    </div>
    );
}

export default Post;