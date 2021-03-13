import React from 'react';
import './Post.css'

export const TITLE23 = "Options";
export const DATE23 = "2020-3-24 00:00:00 -0400";
export const TEASER23 = () => (<div>I know very little about derivatives. I started learning about them yesterday, so take everything I ...</div>);

    
function Post() {
    return (
    <div className='post'>
        <h1>
            Options
        </h1>
        
<div>I know very little about derivatives. I started learning about them yesterday, so take everything I say with a grain of salt the size of one of those Himalayan salt lamps. </div>

<div>First, some definitions. </div>

<div>1. Forwards are contracts that give users the obligation to buy or sell an asset in the future for some set price. For example, on October 21, I am obligated to sell an orange for $4. </div>
<div>2. Options are contracts that give users the abillity to buy or sell an asset in the future for some set price, if they want at to do so at that time. For example, on October 21, I may sell an orange for 4$, if I so choose. </div>

<div>These definitions are not comprehensive or particuarly technical, but they will do for our purposes. </div>

<div>The really interesting distinction between forwards and options is that forwards are effectively free, while options cost something. As long as you can find someone willing to enter into the other side of a forward contract (e.g. give you $4 for that orange on October 21), then it costs nothing. </div>

<div>Options, on the other hand, cost something. The intuitive explination is that because you have a choice of whether or not to sell the asset, free options would be free money. </div>

<div>Imagine that it is free to get an option to sell an orange for $4 on the 21st of October. If the market price on October 21st was below $4, you would sell your orange and buy it back immediatly, making a risk-free profit. If the market price on the 21st was above $4, you could sell your orange on the market -- as if you never got the option in the first place. So, if options are free: you make money if the market goes down, but you can&apos;t lose money compared to the market. Which is clearly baloney, and so options must cost something. </div>

<div>I haven&apos;t gotten to the part of learning about derivatives to know how options are actually priced, but for the purposes of this post, it doesn&apos;t matter. Instead, I want to point out that options in the real world generally are valuable in the same way that option derivatives are, except when they aren&apos;t.</div>

<div>You&apos;re deciding if you want to go to the pool in a few hours. It might rain, so you don&apos;t wanna commit to going yet. Having the option to go to the pool is valuable for you, because it ensures that you&apos;re not going to the pool when it&apos;s raining. This is an example of a real-life option being valuable. </div>

<div>But real-life options are not always valuable. In both the derivatives orange-option example and the real-life pool-option example, evaluating what the &apos;correct choice is&apos; is essentially free. In the case of the orange, simply check if the market price is higher or lower than the strike price of the option on October 21st. In the case of the pool, just poke your head outside and see if it&apos;s raining right before you leave.</div>

<div>But let&apos;s consider the (common) real-world cases where evaluating the alternatives is not so easy. In a simple case, the alternatives of the options might be computationally expensive to measure against each other. Imagine figuring out if it was raining required you to pay $100 (or, more reasonably, required you to call the pool and wait in a queue to talk to someone to see if they were planning on staying open if it rained). In this case, the expense of evaluating the alternatives makes the option less valuable. </div>

<div>There may also just be too much uncertainty to evaluate the option effectively. Imagine that you live in the part of the world where rain storms come on randomly, with no warning, at any time. Seeing that it&apos;s not raining when you&apos;re leaving to go to the pool doesn&apos;t tell you much about if your time all the pool will be enjoyable, because the uncertainty makes it possible it&apos;ll rain on your way there. Again, the optionality you get from waiting to decide if you&apos;re gonna go to the pool is less valuable.</div>

<div>Let&apos;s imagine that it&apos;s easy to evaluate alternatives for some real-life option, both because it&apos;s computationally cheap and very certain. Are real-life options always valuable in this case?</div>

<div>Consider the unfortunately-sexist <a href='https://en.wikipedia.org/wiki/Battle_of_the_sexes_(game_theory)'>battle of the sexes</a> game. A man and a woman are trying to decide if they want to go to football or ballet. The man prefers football, and the woman prefers ballet, but both people would prefer being together at any event as compared to being alone. </div>

<div>Is having the option of going to either a football game or the ballet valuable for either of the game&apos;s agents? I think no. Imagine the woman removes her optionality -- she swears to go to the ballet no matter what the man does. After this commitment, the man&apos;s choice is clear: go to the ballet, for he would prefer that over being alone at the football game. </div>

<div>Here, there is actually value to the players in removing the options that they have. More generally, if there are mulitple players in the game, and you can change the payoffs available to other players by removing your optionality, a forward might be more valuable than an option is -- as it could drive other players behavior to a higher payoff for you. </div>

<div>Notably, standard derivative options don&apos;t have any of these features. In the face of a large market, your actions do little to effect the payoffs of other market users. </div>


<div>Other questions to consider:</div>
<div>- What if the size of the options owned are large compared to the size of the market? E.g. could a user getting rid of an option change the payoffs for other users in a meaningful way? Does this mean that we could productively frontrun derivative trading on blockchain-based derivative markets, because these derivatives are public? </div>
<div>- In what other cases are real-life options not valuable?</div>
<div>- An option has an &apos;excise&apos; or &apos;don&apos;t excise&apos; option. What about options with more than two alternatives? For example, what about a &apos;partially excise&apos; alternative? Are more alternatives always more valuable? In what cases are more alternatives more valuable? </div>
<div>- Does the difference between American and European options (e.g. when you&apos;re allowed to excise the option: only at the end vs. anywhere until the end of the contract) fit into the above questions? Can this choice on time to exise the contract simply be understood as another alternative to the option? </div>
<div>- How are options priced, anyways?</div>

    </div>
    );
}

export default Post;