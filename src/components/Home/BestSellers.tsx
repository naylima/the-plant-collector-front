import styled from 'styled-components';
import { BsChevronLeft, BsChevronRight } from 'react-icons/bs';

import { useRef } from 'react';
import { useQuery } from 'react-query';
import { listBestSellers } from '../../services/productsApi';
import { Product } from '../Products/Product';

interface Product {
  id: string,
  name: string,
  image: string,
  description: string,
  price: number,
  stock: number
  amount: number
};

export function BestSellers() {
  const { data } = useQuery<Product[]>('bestSellers', listBestSellers);
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

  if (data) {
    return(
      <Wrapper>
        <h1>Best sellers</h1>
        <Container>
          <BsChevronLeft className="scroll" onClick={handleLeftClick}/>
  
          <Carousel ref={carousel}>
            {
              data.map(product => (
                <Product key={product.id} product={product}/>
              ))
            }          
  
          </Carousel>
  
          <BsChevronRight className="scroll" onClick={handleRightClick}/>
  
        </Container>
      </Wrapper>
    );
  }
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
    font-size: 48px;
    font-weight: 500;
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
