import React from 'react';
import './Post.css'

export const TITLE28 = "Correct by Construction Correct by Construction";
export const DATE28 = "2018-12-31 12:00:00 -0400";
export const TEASER28 = () => (<div>The Correct by Construction (CBC) design process is a very interesting. The general idea can be summ...</div>);

    
function Post() {
    return (
    <div className='post'>
        <h1>
            Correct by Construction Correct by Construction
        </h1>
        <div>The Correct by Construction (CBC) design process is a very interesting. The general idea can be summarized as: </div>

<div>1. give a partial specification of a protocol. </div>
<div>2. prove properties of this partial specification.</div>
<div>3. fill in the rest of the specification in way that preserved the properties proved above.</div>

<div>The benefits of the CBC process are many, but, to me, the most interesting are the simplicity it leads to - and how it allows for rapid iteration of the protocol (as long as the partial specification is not changed). </div>

<div>Note that CBC design is itself a protocol - a protocol for designing protocols. So, naturally, the question arises: is there a Correct by Construction way of designing Correct by Construction protocols? </div>

<div>I think the answer is probably yes - and also informative. Here would be the agenda of such a program:</div>

<div>1. specify a family of abstract specifications. </div>
<div>2. prove that a certain set of properties of these protocols are invariant under further specification.</div>
<div>3. fill in the rest of the specification by picking one abstract specification from the family and showing the properties come from the set mentioned in step 2. </div>

<div>The benefits of step 3 above are obvious. The work in creating a Correct by Construction protocol - and showing that it is actually Correct by Construction - seems to be greatly mitigated. And with the aforementioned simplicity and flexibility, I dream of a world where are protocols are Correct by Construction: not just consensus algorithms, but operating systems, cryptographic protocols, communication protocols, and much more. </div>

<div>Once here, the question again arises: is there a Correct by Construction way of designing a Correct by Construction way of designing a Correct by Construction protocol? </div>

<div>I think the answer is yes, but at some point (probably, here), the properties and proofs get general enough that they become useless. But I also haven’t explored it yet, so I might be wrong. </div>

<div>Thanks to <a href='https://twitter.com/_aaronDR'>Aaron Diamond-Reivich</a> for bringing this great idea up!</div>

    </div>
    );
}

export default Post;