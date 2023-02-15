import styled from 'styled-components';

import { useLocation } from 'react-router-dom';

export function ProductPage() {
  const { product } =  useLocation().state;
  
  return (
    <Wrapper>
      <Image image={product.image}></Image>

      <Description>
        <H1>{product.name}</H1>
        <P>{product.description}</P>
        <Price>${product.price/100}</Price>
        <Button>Buy Now</Button>
      </Description>      
    </Wrapper>
  );
}

type Image = {
  image: string
}

const Wrapper = styled.div`
  padding: 20px 60px;
  display: flex;
  justify-content: space-between;
`;

const Description = styled.div`
  width: 50vw;
  padding: 50px;
  display: flex;
  flex-direction: column;
`;

const H1 = styled.h1`
  text-align: center;
  color: #FF724C;
  font-size: 2em;
  line-height: 2em;
  font-weight: 500;
`;

const P = styled.p`
  font-size: 1.2em;
  line-height: 1.2em;
  color: #FF724C;
`;

const Price = styled.span`
  padding: 20px 0;
  font-size: 3em;
  font-weight: 500;
  color: #FF724C;
`;

const Button = styled.button`
  width: 200px;
  height: 30px;
  margin-top: 10px;
  border-radius: 20px;
  font-size: 16px;
  font-weight: 500;
  border: none;
  color: #F5FAD1;
  font-family: 'Raleway', sans-serif;
  background-image: linear-gradient( to right, #083316, #76C352);
  cursor: pointer; 
  
  &:hover {
      opacity: .8;
  }
`;

const Image = styled.div<Image>`
  width: 40vw;
  height: 120vh;
  border-radius: 20px;
  
  background-image: url(${props => props.image});
  background-position: center;
  background-size: cover;
`;

