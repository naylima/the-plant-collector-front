import styled from 'styled-components';
import { useState, useEffect, useRef } from 'react';

import homedecor from '../../assets/img/homedecor.jpg';
import plantpots from '../../assets/img/plantpots.jpg';
import indorplants from '../../assets/img/indorplants.jpg';


export function Slider() {
  const images = [indorplants, plantpots, homedecor];

  const [index, setIndex] = useState(0);
  const timeoutRef = useRef<null | number>(null);
  const delay = 5000;

  function resetTimeout() {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  }

  useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(
      () =>
        setIndex((prevIndex) =>
          prevIndex === images.length - 1 ? 0 : prevIndex + 1
        ),
      delay
    );

    return () => {
      resetTimeout();
    };
  }, [index]);
    

  return(
    <Wrapper>           
      <div className="slideshow">
        <div
          className="slideshowSlider"
          style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}
        >
          {images.map((image, idx) => (
            <Slide
              key={idx}
              image = {image}
            >
            </Slide>
          ))}
        </div>

        <div className="slideshowDots">
          {images.map((_, idx) => (
            <div
              key={idx}
              className={`slideshowDot${index === idx ? ' active' : ''}`}
              onClick={() => {
                setIndex(idx);
              }}
            ></div>
          ))}
        </div>
      </div>       
    </Wrapper>
  );
}

type slideProps = {
  image: string
}

const Wrapper = styled.div`
  .slideshow {
      max-width: 100%;
      height: 80vh;
      overflow: hidden;
      position: relative;
  }

  .slideshowSlider {
    white-space: nowrap;
    transition: ease 1000ms;
  }

  .slide {
      display: inline-block;
      width: 100%;
      pointer-events: none;
      transition: transform 1s;
  }

  .slideshowDots {
    width: 100%;
    text-align: center;
    position: absolute;
    bottom: 5vh;
  }

  .slideshowDot {
    display: inline-block;
    height: 20px;
    width: 20px;
    border-radius: 50%;

    cursor: pointer;
    margin: 15px 7px 0px;

    background-color: #c4c4c4;
    opacity: .5;
  }

  .slideshowDot.active {
    background-color: #FF724C;
    opacity: 1;
  }

`;

const Slide = styled.div<slideProps>`
  display: inline-block;
  width: 100%;
  height: 80vh;
  transition: transform 1s;
  position: relative;
  
  background-image: url(${props => props.image});
  background-position: center;
  background-size: cover;
`;