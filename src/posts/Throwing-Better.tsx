import React from 'react';
import './Post.css'

export const TITLE35 = "Throwing Better";
export const DATE35 = "2019-1-21 12:00:00 -0400";
export const TEASER35 = () => (<div>I’ve thrown a single bowl in my life. It was hard as hell, terrific fun, and looked terrible at the ...</div>);

    
function Post() {
    return (
    <div className='post'>
        <h1>
            Throwing Better
        </h1>
        <div>I’ve thrown a single bowl in my life. It was hard as hell, terrific fun, and looked terrible at the end. Is there some improvement we can make to the process? The first potter’s wheel ever recorded is from 3129 BC - and although the struggle is part of the charm, I think there’s value in making the process easier, if the potter so desires.</div>

<div>As far as I know, the recent introduction of electricity to the pottery wheel was a dramatic improvement for most non-purists. I’m looking for another dramatic change, if possible. Something that fundamentally changes a) how the potter interacts with the technology, or b) what the technology allows potters to create.</div>

<div>Here are two proposals:</div>

<h2> Auto-centering</h2>

<div>If you’ve ever thrown before, you have had the lovely experience of being tossed around by a pottery wheel. If the center of mass is not in the center of the wheel, then the wheel jerks and becomes almost impossible to work with. As far as I can tell, keeping the clay centered in the main skill a beginning potter must learn. </div>

<div>I propose pottery wheels add a button labeled “center.” Using some weight sensors, the wheel detects the center of mass of the clay and adjusts the axis of rotation so that the clay is aligned properly. </div>

<div>Like most tools, though this might remove some skill required to be a potter, it will also make getting into the subject easier. And, as far as I can tell, throwing is fun enough that is a noble goal. </div>

<div>More generally, the idea of having sensors in the pottery wheel and using them to provide feedback to the user seems interesting and relevant to beginning potters (and pottery classes, for example).</div>

<h2> Throwing in 3D</h2>

<div>Pottery wheels spin in a single direction. What if we made pottery wheels that, through some fancy process of holding the clay, could rotate along different axises? Currently, pottery wheels in some way dictate that pots are symmetric about the vertical axis, as this is the axis of rotation. With a different axis of rotation, it possible that new pots could exist - as they could not be symmetric about this axis. </div>

<div>Obviously, designing this is hard. I have no idea how this 3D wheel could work - or if there’s some reason why it might be impossible. But I do think it would be cool.</div>

    </div>
    );
}

export default Post;