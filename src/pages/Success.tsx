import styled from 'styled-components';
import { BsCheckCircle } from 'react-icons/bs';
import { useNavigate } from 'react-router-dom';
import { signOut } from '../services/authApi';

export function Success() {
  const navigate = useNavigate();

  function ExitServer () {
    const promise = signOut();
    promise.then(() => navigate('/'));
  }    

  return (
    <Wrapper>
      <Check />
      <h1>Your Order is Confirmed</h1>
      <h2>Thank You For Your Order</h2>
      <button onClick={() => ExitServer()}>Done</button>
      <p onClick={() => navigate('/home')}>Exit to Home</p>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 100%;
  height: 70vh;
  margin-top: 10vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-family: 'Raleway', sans-serif; 
  font-weight: 400;
  background-color: rgba(245,250,209, 0.7);
  
  h1, h2 {
    padding: 8px;
    color: #76C352;
  }

  h1 {
    font-size: 30px;
  }

  h2 {
    font-size: 20px;
  }

  button {
    width: 200px;
    height: 30px;
    margin-top: 20px;
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

  p {
    padding: 8px;
    margin-top: 20px;
    font-size: 18px;
    line-height: 22px;
    color: #083316;
    cursor: pointer;
    :hover {
        text-decoration-line: underline;
    }   
  }
`;

const Check = styled(BsCheckCircle)`
  font-size: 92px;
  color: #FF724C;
  padding: 8px;
`;