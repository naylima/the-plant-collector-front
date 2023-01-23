import styled from 'styled-components';

import { HiOutlineBadgeCheck } from 'react-icons/hi';
import { FaTruck } from 'react-icons/fa';
import { RiPlantLine } from 'react-icons/ri';

export function Benefits() {
  return (
    <Wrapper>
      <div>
        <HiOutlineBadgeCheck className='icon' />
        <p>30-day guarantee</p>
      </div>
      <div>
        <FaTruck className='icon' />
        <p>free shipping</p>
      </div>
      <div>
        <RiPlantLine className='icon' />
        <p>care guide include</p>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 90%;
  height: 40vh;
  margin: 0 auto;
  gap: 5px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  font-family: 'Raleway', sans-serif; 
  color: #76C352;

  div {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    transition: all .4s;

    :hover{
      opacity: .7;
    }

    p {
      font-weight: 500;
    }
  }

  .icon {
    font-size: 72px;
  }
`;