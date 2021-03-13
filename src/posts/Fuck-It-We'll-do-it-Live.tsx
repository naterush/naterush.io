import React from 'react';
import './Post.css'

export const TITLE26 = "Fuck It, We'll do it Live";
export const DATE26 = "2020-5-18 0:00:00 -0400";
export const TEASER26 = () => (<div>You&apos;re designing a new application, and you want it to be collaborative. Don&apos;t worry, you ...</div>);

    
function Post() {
    return (
    <div className='post'>
        <h1>
            Fuck It, We'll do it Live
        </h1>
        
<h2> Live Collaboration</h2>

<div>You&apos;re designing a new application, and you want it to be collaborative. Don&apos;t worry, you don&apos;t don&apos;t have to do much thinking. You just have to adopt the Google Docs Model of Collaboration (GDMOC).</div>

<div>With GDMOC, all users edit the same document. When one user makes a change, all users see it in real time. Google Docs, Figma, Airtable, BAD_CAD_Online.jpg, etc. </div>

<div>Having spent the past four years in college, I&apos;ll be the first to admit that GDMOC works really well for a lot of things. All of the essays I wrote in college I wrote on Google Docs - and I never had a problem (ignoring my grades). The essays weren&apos;t particularly complex, and being able to see others work in real time helped me keep track of what I should be working on. </div>

<h2> Asynchronous Collaboration</h2>

<div>But I also studied computer science in college. And we didn&apos;t use the Google Docs model of collaboration - and didn&apos;t even try to - because it wouldn&apos;t work. Trying to edit a codebase when other people are editing at the same time would be a lovely way to fail your homework assignments.</div>

<div>Git is really interesting for a lot of reasons. The legend goes that Linus Torvalds wrote it in, like, 25 minutes. But more relevant to this dicussion is that it doesn&apos;t subscribe to the Google Docs Model of Collaboration.</div>

<div>Git gives you a private workspace. You&apos;re the only one that makes changes in your workspace. You don&apos;t have to worry about what anyone else is doing. When you&apos;re ready, you can share the changes you made with your team. </div>

<div>This is a massive departure from the GDMOC, and for code it obviously makes sense. Codebases are too complex, modular, and interdependent to edit in a live environment.</div>

<div>Of course, there is _some_ live collaboration in software development. If you&apos;re doing an interview, or pair programming, live collaboration works great - but this is a tiny minority of cases.</div>


<h2> Why Just Code</h2>

<div>Just because a document isn&apos;t code doesn&apos;t mean it doesn&apos;t look like a codebase. A spreadsheet, for example, is just a piece of software written in the world&apos;s-most-popular visual programming language. I&apos;ve built design systems that&apos;ve had more complex inheritance stuctures than any codebase I would dare to design. A 3D model is a visual layer sitting on top of a constraint system. </div>

<div>All of the above are examples of &apos;hidden software.&apos; </div>

<div>Sure, not ever logo you mock up has the complexity of a codebase - but some [spreadsheets/designs/cad models] do - and it&apos;s provocative to explore these from a software design perspective. Specifically, what about asynchronous collaboration?</div>

<div>When application developers don&apos;t acknowledge their applications look like code - they build tools that don&apos;t serve their users building complex systems. If you&apos;re making a 10 cell spreadsheet, Google Docs works great, but if you talk to the analysts at hedge funds working on a 100 sheet model, they&apos;ll tell you they would eat their socks before using live collaboration.</div>

<div>Private workspaces need not just exist for code.</div>

<h2> What Live Collaboration Isn&apos;t</h2>

<div>It&apos;s easy to confuse a &apos;private workspace&apos; with a &apos;hidden workspace.&apos; Git makes things challenging, because it combines private workspaces with distributed workspaces - and while both are interesting - the former is more relevant to this discussion. </div>

<div>We can build private workspaces into cloud software. Just because I can&apos;t edit the same copy of the document as my teammates doesn&apos;t mean I can&apos;t look at what they are doing in real time!</div>

<h2> Why Do We Have Live Collaboration</h2>

<div>&apos;Yeah, right!&apos; you say. &apos;I believe in the market - and if live collaboration really was so much worse, the market would demand asynchronous collaboration. Since we use don&apos;t use asynchronous collaboration, it must not be better.&apos;</div>

<div>Ignoring for a moment the absurdity of _always having to justify why something hasen&apos;t been done yet_, there are a couple of reasons for the current market failure. </div>

<div>For one, the market isn&apos;t really failing, because live collaboration works for more people most of the time. Most people aren&apos;t working on crazy complex things (e.g. <a href='http://mba.tuck.dartmouth.edu/spreadsheet/product_pubs.html)'>60% of spreadsheets have under 1000 cells</a> and or aren&apos;t collaborating. But power users, by definition, are working on complex, crazy documents - and a lot of the time, they are collaborating. And live collaboration doesn&apos;t work for them (and almost none of them are using it).</div>

<div>More controversially, I think part of the reason asynchronous collaboration isn&apos;t offered generally is because of it&apos;s history, and the perception that results. It&apos;s primarly a collaboration technique used by complicated programs and power users who can&apos;t explain it well - and comes directly from open source development efforts like Linux (literally). The Git UX leaves much to be desired, and it&apos;s not easy to imagine a private workspace that is consumable by non-technical users, or easily monetizable.</div>

<div>So, yeah, the market&apos;s failing, but only kind of, and mostly due to lack of imagination.</div>

<h2> So What</h2>

<div>I dream of a world where asynchronous collaboration is offered to all creators of hidden software. I&apos;m building it right now at <a href='https://sagacollab.com/'>Saga Collab</a>. Shoot me an email at (nate a_t sagacollab.com) if you wanna chat :)</div>



<div>P.S. For anyone who doesn&apos;t get the inspiration, check out <a href='https://www.youtube.com/watch?v=V1M6EYA14eU'>this infamous video</a> of Bill O&apos;Reilly. It&apos;s one of my all-time favorites.</div>

    </div>
    );
}

export default Post;