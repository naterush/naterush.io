import React, { useLayoutEffect, useState } from 'react';
import './CardCaraselle.css'
import Card from './Card'

function useWindowSize() {
  const [size, setSize] = useState([0, 0]);
  useLayoutEffect(() => {
    function updateSize() {
      setSize([window.innerWidth, window.innerHeight]);
    }
    window.addEventListener('resize', updateSize);
    updateSize();
    return () => window.removeEventListener('resize', updateSize);
  }, []);
  return size;
}


function CardCaraselle(props: {caraselleNum: number}) {
    const numCards = 10;
    const numDisplayed = 6;
    const [width, height] = useWindowSize();

    // We want to display about 5 cards per screen, so we split up left 
    const widthStep = width / numDisplayed;
    const heightStep = height / numDisplayed;

    const newCards = [];
    for (let i = 0; i < numCards; i++) {
        const leftShift = i * widthStep;
        const topShift = i * heightStep + props.caraselleNum * height * 1.2;

        newCards.push(
            <Card
                key={i}
                left={leftShift}
                top={topShift}
            />
        )
    }

    return (
        <div>
            {newCards}
        </div>
    );
}

export default CardCaraselle;
