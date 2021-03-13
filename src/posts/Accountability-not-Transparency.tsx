import React from 'react';
import './Post.css'

export const TITLE13 = "Accountability not Transparency";
export const DATE13 = "2018-12-23 12:00:00 -0400";
export const TEASER13 = () => (<div>Blockchain is often touted as a corruption-stopper. The idea: government payments can be put on the ...</div>);

    
function Post() {
    return (
    <div className='post'>
        <h1>
            Accountability not Transparency
        </h1>
        <div>Blockchain is often touted as a corruption-stopper. The idea: government payments can be put on the blockchain, and because these transactions are public, any fraudulent ones will be noticed.</div>

<div>This solution obviously misses the point (corruption is a lot more complicated than just money leaving the government when it shouldn’t), but that’s too obvious to justify a whole blog post. Instead, I think that this line of thinking leads to some wrong conclusions about what the goals of blockchain technology are. Simple put, I don’t think blockchains should, by default, be about transparency.</div>

<div>In many cases and many places, transparency is great. If a system is transparent (and not particularly complicated), it’s a lot easier for me to trust it. But there are also obvious places where it’s terrible. As an individual, there’s a ton of things I don’t want to be transparent about myself - totally reasonably, I think. For the government, I think that total transparency would be lunatic (although this gets into more philosophical arguments than I’m probably equipped to handle). But it’s also the case that if transparency is the default, users will remain transparent even when it doesn’t make sense.</div>

<div>Pretty much the point I’m trying to make here is that many blockchain proponents seem to think that transparency is the goal. But I think transparency is just one tool we have to a) make sure a system performs properly and b) actually get users to trust that the system is perform properly. I call this property accountability, and accountability is the goal. </div>

<div>So: blockchains as they are today (far too transparent) may help us achieve the goal of accountability, but this comes with a larger set of downsides than we should accept as users. Namely, it requires we sacrifice our privacy. We should aspire to have systems that remain accountable without being transparent by default. And we should stop praising transparency as the goal, while we’re doing it.  </div>

<div>But I don’t know if transparency is the goal. Rather, it seems to me that accountability is the goal, and transparency is just a helpful tool. So, if we can get the benefits of transparency (namely, user trust in the system) without </div>

    </div>
    );
}

export default Post;