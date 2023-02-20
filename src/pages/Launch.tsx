import { useState } from 'react';
import styled from 'styled-components';
import { SignIn } from '../components/Launch/SignIn';
import { SignUp } from '../components/Launch/SignUp';

export function Launch () {
  const [slide, setSlide] = useState(true);

  return (
    <Wrapper>
      <SlipContainer slide = {slide}/>

      <Button 
        onClick={() => setSlide(!slide)}
        slide = {slide}
      >
        {slide ? 'Sign up' : 'Sign in'}
      </Button>

      <SignIn slide = {slide}/>
      <SignUp slide = {slide}/>

      <span onClick={() => setSlide(!slide)}>
        {slide ? 
          <>
            Do not have an account yet? Sign up from <a>here</a>!
          </>
          : 
          <>
            Already have an account? Sign in from <a>here</a>!
          </>
        }
      </span>
    </Wrapper>
  );
}

type slideProps = {
  slide: boolean
}

const Wrapper = styled.div`
  width: 100 vw;
  height: 100vh;
  display: flex;
  font-family: 'Raleway', sans-serif;
  
  background-image: url('https://picstatio.com/large/29e592/fern-leaves-tree.jpg');
  background-position: center;
  background-size: cover;

  span {
    width: 100vw;
    text-align: center;
    font-size: 14px;
    color: #FFF;
    cursor: pointer;

    position: fixed;
    bottom: 40px;

    @media (min-width: 600px) {
        display: none;
    }
  }

  a {
    text-decoration: underline;
  }

`;

const SlipContainer = styled.div<slideProps>`
  width: 50vw;
  height: 100vh;
  background-color: rgba(12, 12, 12, .8);
  transition: all 0.4s;

  position: fixed;
  right: ${props => props.slide ? '50%' : '0'};


  @media (max-width: 600px) {
      width: 100vw;
      right: 0;
  }
`;

const Button = styled.button<slideProps>`
  width: 130px;
  height: 50px;
  font-size: 14px;
  font-weight: 500;
  color: #F5FAD1;
  border: none;
  transition: all 0.4s;
  background-image: linear-gradient( to right, #083316, #76C352);
  cursor: pointer;    

  position: fixed;
  ${props => props.slide ? 'left: 50%' : 'right:50%'};

  @media (max-width: 600px) {
      display: none;   
  }
`;