import styled from 'styled-components';
import { BsCart } from 'react-icons/bs';
import { useNavigate } from 'react-router-dom';

export function EmptyCart() {
  const navigate = useNavigate();

  return (
    <>
      <Cart className='icon'/>
      <H2>Your cart is empty :( </H2>
      <Button onClick={() => navigate('home')}>Continue shopping</Button>
    </>
  );
}

const Cart = styled(BsCart)`
  font-size: 5em;
  font-weight: bold;
  margin-bottom: 20px;
`;

const H2 = styled.h2`
  font-size: 1.5em;
  line-height: 20px;
  font-weight: 500;
  margin-bottom: 10px;
`;

const Button = styled.button`
  height: 30px;
  margin-top: 40px;
  border-radius: 20px;
  font-size: 16px;
  font-weight: 500;
  border: none;
  color: #F5FAD1;
  background-image: linear-gradient( to right, #083316, #76C352);
  cursor: pointer; 
  
  &:hover {
      opacity: .8;
  }
`;