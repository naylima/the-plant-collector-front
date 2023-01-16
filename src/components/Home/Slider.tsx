import styled from "styled-components";
import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import snake from "../../assets/img/snake.png";

export function Slider() {
    const images = [snake, snake, snake, snake, snake, snake, snake];

    const [index, setIndex] = useState(0);
    const timeoutRef = useRef<null | number>(null);
    const delay = 2500;

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
            <div className="carousel">
                <motion.div className="title">
                    <div>
                        <h2>Go green.</h2>
                    </div>
                    <div>
                        <div>
                            <h1>The world of plants</h1>
                        </div>
                        <div>
                            <p>
                                Discover everything you need to know about your plants. 
                                Treat them with kindness and they will take care of you.
                            </p>
                        </div>
                    </div>
                </motion.div>
                <div 
                className="inner" 
                style={{ transform: `translate3d(${-index * 300}px, 50px, 0)` }}
                >
                    {images.map((image, idx) => (
                        <div 
                        className={index === idx ? "item current" : "item"}
                        key={idx}
                        >
                            <div className="box"></div>
                            <img src={image} alt="plant" />
                            <p>plant name</p>
                        </div>
                    ))}
                </div>
            </div>            
        </Wrapper>
    )
}

const Wrapper = styled.div`
    max-width: 100vw;
    min-height: 80vh;
    padding-top: 10vh;
    display: flex;
    align-items: center;
    justify-content: center;
    background-image: linear-gradient( to right, #76C352, #F5FAD1);

    .carousel {
        width: 90%;
        height: 100%;
        padding: 15vh 15vh;
        overflow: hidden;
        position: relative;
    }

    .title {
        width: 40vw;
        height: 30vh;
        margin: 0 auto;
        border-radius: 10px;
        z-index: 1;
        
        position: absolute;
        top: 5vh;
        left: 450px;

        div {
            width: 100%;
            display: flex;
        }

        h1, h2 {
            letter-spacing: 1.8px;
            line-height: 50px;
            font-family: 'Raleway', sans-serif;
        }

        h1 {            
            font-size: 48px;
            font-weight: 800;
            color: #083316;
        }

        h2 {
            font-size: 28px;
            font-weight: 600;
            color: #F5FAD1;
        }

        p {
            letter-spacing: 1.8px;
            line-height: 25px;
            font-family: 'Raleway', sans-serif;
        }
    }

    .inner {
        height: 100%;
        display: inline-flex;
        transition: ease 1s;
    }

    .item {
        width: 300px;
        height: 300px;
        display: flex;
        align-items: center;
        align-self: flex-end;
        justify-content: center;
        pointer-events: none;
        position: relative; 
        transition: transform 1s;
    }

    .box {
        width: 60%;
        height: 60%;
        align-self: flex-end;
        box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
        background: rgba(255, 255, 255, .05);
        border-radius: 10px;
        backdrop-filter: blur(45px);
        transition: transform 1s;
    }

    .item img {
        width: 80%;
        height: 80%;
        position: absolute;
        left: 0;
        bottom: 0px;
        transition: transform 1s;
        z-index: 1;
    }

    .current {    
            
        transform: translateY(-110px);
        transition: transform 1s;
        perspective: 1000px;
        
        .box {
            transform: translateZ(400px);
        }

        img {
            transform: translateZ(500px);
        }
    }

`;