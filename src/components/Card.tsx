import React from 'react';
import './Card.css'

function Card(props: {left: number; top: number}) {
  return (
    <div className='card' style={{left: props.left, top: props.top}}>
        <h1>
            THIS IS A HEADER
        </h1>
        <div>
            Paragraph
        </div>
    </div>
  );
}

export default Card;
