import styled from 'styled-components';
import { GrFacebookOption, GrGooglePlus, GrTwitter } from 'react-icons/gr';

export function SignUp ({ slide } : {slide: boolean}) {
  return (
    <Wrapper slide = {slide}>
      <h1>Sign up</h1>
      <form>
        <input type="name" name="name" placeholder=' Name' required />
        <input type="email" name="email" placeholder=' E-mail' required />
        <input type="password" name="password" placeholder=' Password' required />
        <input type="password" name="confirm_password" placeholder=' Repeat password ' required />
        <button>Sign up</button>
      </form>
      <Icons>
        <button><GrFacebookOption /></button>
        <button><GrGooglePlus /></button>
        <button><GrTwitter /></button>
      </Icons>
    </Wrapper>
  );
}

type slidePops = {
    slide: boolean
}

const Wrapper = styled.div<slidePops>`
  width: 50vw;
  height: 100vh;
  display: ${props => props.slide ? 'none' : 'flex'};
  flex-direction: column;
  align-items: center;
  justify-content: center;
  z-index: 1;

  position: fixed;
  right: 0;

  @media (max-width: 600px) {
    width: 100 vw;
    left: 25%;
  }

  h1 {
    font-size: 48px;
    line-height: 72px;
    color:  #F5FAD1;
    padding-bottom: 20px;
  }

  form {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }

  input {
    padding: 6px 8px;
    font-size: 16px;
    border: none;
    background: none;
    color:  #F5FAD1;
    border-bottom: 2px solid #76C352;
  }

  button {
    height: 30px;
    margin-top: 10px;
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

const Icons = styled.div`
  display: flex;
  gap: 20px;
  margin-top: 20px;

  button {
    width: 30px;
    height: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    color: #76C352;
    border: 1px solid #76C352;
    background: none;
  }    
`;