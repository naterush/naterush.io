import React from 'react';
import './Post.css'

export const TITLE21 = "Spreadsheets are the Ultimate Programming Paradigm";
export const DATE21 = "2020-6-3 0:00:00 -0400";
export const TEASER21 = () => (<div>Functional programming? Eh. Objects? Maybe sometimes. But spreadsheets... spreadsheets are the ultim...</div>);

    
function Post() {
    return (
    <div className='post'>
        <h1>
            Spreadsheets are the Ultimate Programming Paradigm
        </h1>
        
<div>Functional programming? Eh. Objects? Maybe sometimes. But spreadsheets... spreadsheets are the ultimate programming paradigm.</div>

<div>Naturally, your first reaction might be &apos;Hold up, spreadsheets aren&apos;t programs.&apos; But spreadsheets allow you to cleanup and process data. Spreadsheets allow you to express complex conditional logic and make buisness decisions from it. And spreadsheets execute formulas, for god sakes. Also, <a href='http://ceur-ws.org/Vol-1209/SEMS2014.pdf'>the academics think they are programs</a>, so, ya know, blarg.</div>

<div>But spreadsheets aren&apos;t like normal programming languages: on top of standard text and function calls, they live and execute in a visual programming enviornment: a grid of cells. The execution of your spreadsheet program is dependent on what the formulas in the cells do, but also where the cells are, and how the cells relate to each other. In one sense, a spreadsheet is when you replace variable names with cell names - and layout those cell names in a grid.</div>

<div>This sort of programming is primarily interesting in-so-far as that it&apos;s easily to understand. Spreadsheets are the most widely used programming tools in the world because you can walk around them with your arrow keys; how the program runs is how it looks - and the mental model of the program is much easier to build as a result.</div>

<div>If spreadsheets can be understood as &apos;replacing variable names with cells you can reference,&apos; then spreadsheets vs. programs begins to look at lot like untyped code vs. typed: should we make it easier for people to write the code initially at the cost of later maintainability and consumability? In the case of no-typing, easier to write means less key-strokes (and no compiling, which is easier for beginners) - with spreadsheets, easier to write means easy mental model.</div>

<div>Currently, I think spreadsheets are a bit too-far on the weakly-typed end of the spectrum currently; I&apos;ve spent the past three months talking to all the Excel power users I can get my hands on, and a clear sentiment is: &apos;a model needs an owner.&apos; The reasoning given here is that it&apos;s really hard to understand what the model in depth; you can make surface level changes, but not always really get your hands in and rip out the knobs. In part, this is because variable names are easier to read than cell references - and so communicating spreadsheet code is hard.</div>

<div>So: what does a spreadsheet look like on the strongly-typed side of the spectrum?</div>

<div>For one, variable names are essential. But this is hard; the lack of variable names (and the use of cells in their place) are exactly what makes the spreadsheet model of programming so consumable. </div>

<div>I think other software engineering practices can help too: testing and documentation can help people make sure the (secret) programs they&apos;re writing are correct - and both further serve as techniques for communicating the program, which is one of the biggest problem with spreadsheet collaboration currently.</div>


    </div>
    );
}

export default Post;