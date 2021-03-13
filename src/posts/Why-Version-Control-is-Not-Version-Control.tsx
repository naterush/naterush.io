import React from 'react';
import './Post.css'

export const TITLE1 = "Why Version Control is Not Version Control";
export const DATE1 = "2020-5-19 0:00:00 -0400";
export const TEASER1 = () => (<div>This post disagrees with a post by Abstract, a company one would expect Saga to be aligned with give...</div>);

    
function Post() {
    return (
    <div className='post'>
        <h1>
            Why Version Control is Not Version Control
        </h1>
        
<div>This post disagrees with a <a href='https://www.abstract.com/blog/version-history-version-control/'>post by Abstract</a>, a company one would expect Saga to be aligned with given our &apos;async collaboration is better narratives.&apos; It&apos;s a great read, and if you had to pick a blog post to read, I&apos;d pick theirs. Thanks for sending me the article <a href='https://andrewshen.net/'>Andrew</a> :).</div>

<h2> Current State &gt;</h2>

<div>Version control is a terrible name for version control. </div>

<div>Consider Git, the most popular version control system currently. If you use Git, you spend your time checking out branches, making changes to files on those branches, and merging those branches together. The tip of the version tree is all you&apos;re really concerned with - most of the time. </div>

<div>If you don&apos;t use Git, take a look at the Github for the most liked Git project: <a href='https://github.com/freeCodeCamp/freeCodeCamp'>freeCodeCamp</a>. The current version takes up 90% of the screen. Try and find some historical versions of the project (good luck). </div>

<div>Managing old versions isn&apos;t prioritized because version control isn&apos;t about controlling versions: it&apos;s about managing current state. </div>

<h2> Current State ?</h2>

<div>&apos;Well, if I&apos;m managing current state, why can&apos;t I just manage current state? Why do I need to keep historical versions around?&apos;</div>

<div>A fair question! I think there are a few partial answers.</div>

<div>1. Keeping historical state around is free. If you&apos;re always saving current state, then keeping historical versions is just not deleting things. With Git, you have to explicitly commit the state, but that&apos;s the current state you&apos;re commiting, and the old state just hangs around. </div>

<div>2. Historical state sometimes becomes current state. If you screw things up (I do) and want to roll back (yes please), having old versions actually can be super helpful. For Git users, you probably don&apos;t spent a ton of timing rolling back to previous commits, but you&apos;ve almost certainly done it before - and edit-undo in a word editor for no reason.</div>

<div>3. Historical state can be helpful. Internally, when Git merges two of your branches, it does so using a merge algorithm that <a href='https://en.wikipedia.org/wiki/Merge_(version_control)#Recursive_three-way_merge'>explicitly considers historical state</a>. By looking at the historical state of your project and how it evolved to the current state of both branches, it can merge these two branches together more effectively than it can when not considering historical state. </div>

<div>So: historical versions are pretty much free to keep around, and they both allow you to roll back (in the rare case that you need to) and also do more interesting things on your current state - like effectively merge two current states together!</div>

<div>Notably, (2) and (3) are much more important in collaborative contexts. More people means rolling back happens more often. It also means there are more tips on the current state tree, and so more reason to merge. So, the more collaborative the project and larger the team, the more keeping historical versions around actually helps you construct your current state.</div>

<h2> So What</h2>

<div>Building version control is, to be blunt, gross.</div>

<div>&apos;Hey - don&apos;t you want a bunch of copies of some shit you already have&apos; is appealing to the worriers among us, but generally doesn&apos;t seem like it&apos;d pick up your bottom line - except in the rare case where Jim from accounting accidently deletes everything.</div>

<div>But if we accurately represent version control as &apos;current state management that is very valuable for teams&apos;, then we&apos;re not building tooling for the biggest cowards; we&apos;re building tools for the best collaborators.</div>

    </div>
    );
}

export default Post;