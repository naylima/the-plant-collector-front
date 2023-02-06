import styled from 'styled-components';
import { BsPlusCircle, BsChevronLeft, BsChevronRight } from 'react-icons/bs';

import { useRef } from 'react';

import plant from '../../assets/img/plant.jpg';

export function BestSellers() {

  const carousel = useRef<HTMLDivElement | null>(null);

  const handleLeftClick = (e: React.MouseEvent) => {
    e.preventDefault();
    if (carousel.current !== null) {
      carousel.current.scrollLeft -= carousel.current.offsetWidth;
    }
  };

  const handleRightClick = (e: React.MouseEvent) => {
    e.preventDefault();
    if (carousel.current !== null) {
      carousel.current.scrollLeft += carousel.current.offsetWidth;
    }
  };

  return(
    <Wrapper>
      <h1>Best sellers</h1>
      <Container>
        <BsChevronLeft className="scroll" onClick={handleLeftClick}/>

        <Carousel ref={carousel}>

          <ProductCard>
            <img src={plant} alt="" />
            <p>Plant name</p>
            <div>
              <span>$ 98.99</span>
              <BsPlusCircle className='plus'/>
            </div>
          </ProductCard>

          <ProductCard>
            <img src={plant} alt="" />
            <p>Plant name</p>
            <div>
              <span>$ 98.99</span>
              <BsPlusCircle className='plus'/>
            </div>
          </ProductCard>

          <ProductCard>
            <img src={plant} alt="" />
            <p>Plant name</p>
            <div>
              <span>$ 98.99</span>
              <BsPlusCircle className='plus'/>
            </div>
          </ProductCard>

          <ProductCard>
            <img src={plant} alt="" />
            <p>Plant name</p>
            <div>
              <span>$ 98.99</span>
              <BsPlusCircle className='plus'/>
            </div>
          </ProductCard>

          <ProductCard>
            <img src={plant} alt="" />
            <p>Plant name</p>
            <div>
              <span>$ 98.99</span>
              <BsPlusCircle className='plus'/>
            </div>
          </ProductCard>

          <ProductCard>
            <img src={plant} alt="" />
            <p>Plant name</p>
            <div>
              <span>$ 98.99</span>
              <BsPlusCircle className='plus'/>
            </div>
          </ProductCard>

        </Carousel>

        <BsChevronRight className="scroll" onClick={handleRightClick}/>

      </Container>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 100%;
  padding: 5vh 0;
  display: flex; 
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  font-family: 'Raleway', sans-serif;

  h1 {
    font-size: 2em;
    line-height: 3em;
    font-weight: 500;
    color: #76C352;
  }
`;

const Container = styled.div`
  width: 90%;
  gap: 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  .scroll {
    font-size: 28px;
    color: #76C352;
    cursor: pointer;
  }
`;

const Carousel = styled.div`
  margin: 0 10px;
  overflow-x: hidden;
  scroll-behavior: smooth;
  display: flex;
  
  @media (max-width: 600px) {
      width: 90%;
      margin: 0 10px;
  }
`;

const ProductCard = styled.div`
  width: 200px;
  height: 300px;
  margin: 20px 10px;
  display: flex;
  flex: none;
  flex-direction: column;
  justify-content: space-between;
  background-color: #F5FAD1;
  border-radius: 10px;
  transition: all 250ms;

  :hover {
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  }

  img {
    width: 100%;
    height: 225px;
    padding: 8px;
    object-fit: cover;
    cursor: pointer;

    :hover {
      filter: brightness(1.1);
    }

    :active {
      transform: scale(0.98);
    }
  }

  p {
    padding: 4px 8px;
    text-align: center;
    font-size: 18px;
    color: #FF724C;
    cursor: pointer;

    :hover {
      font-weight: 700;
    }
  }

  >div {
    width: 100%;
    padding: 8px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: #FF724C;
    span {
      font-size: 18px;
    }

    .plus {
      font-size: 22px;
      cursor: pointer;
      :hover {
        color: #76C352;
      }
      :active {
        transform: scale(0.98);
      }
    }
  }

  @media (max-width: 600px) {
    width: 100%;
    height: auto;
    margin: 20px 0;

    img {
      height: auto;
    }
  }
`;
