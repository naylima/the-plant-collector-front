import styled from 'styled-components';

import { BsCart } from 'react-icons/bs';

export function CartMenu() {
  return (
    <Wrapper>
      <BsCart className='icon'/>
      <span>You cart is empty :( </span>
      <p>Browse all things pretty</p>
      <button>Continue shopping</button>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: Center;
  padding: 20px;

  .icon {
    font-size: 42px;
    font-weight: bold;
    margin-bottom: 20px;
  }

  span {
    font-size: 18px;
    line-height: 20px;
    font-weight: 500;
    margin-bottom: 10px;
  }

  button {
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
  }
`;
