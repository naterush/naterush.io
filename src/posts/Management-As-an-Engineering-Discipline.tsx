import React from 'react';
import './Post.css'

export const TITLE3 = "Management As an Engineering Discipline";
export const DATE3 = "2019-2-7 12:00:00 -0400";
export const TEASER3 = () => (<div>Bridges conform to rigorous standards, else they fall. And so usually they confirm to the standards....</div>);

    
function Post() {
    return (
    <div className='post'>
        <h1>
            Management As an Engineering Discipline
        </h1>
        <div>Bridges conform to rigorous standards, else they fall. And so usually they confirm to the standards. Teams don’t really conform to any standards, and they fail all the time. What would it look like to make bridges into an engineering discipline? </div>

<div>For one, material have the benefit of being pretty uniform. Unless something is lying and your steel is iron, the steel you’re working with is going to behave like pretty much any other piece of steel you’ve met before. Humans not only frequently lie about being steel, they don’t really behave like other humans do. Also, they sometimes steal!</div>

<div>For two, the goal of a bridge doesn’t really change. A bridge exists to get humans across something - usually water or a big hole in the ground. Teams exist to serve a purpose, sure, but this purpose is often pretty fluid. The goals of a team change and evolve over time. </div>

<div>It might be possible that the only fields that can really become engineering disciplines (a noble goal, I think) are those with consistent materials, and well-defined, static goals. On the other hand, defining what an engineering discipline looks like in fields that have inconsistent materials, or changing goals, or both, seems like it would be very worthwhile. </div>

    </div>
    );
}

export default Post;