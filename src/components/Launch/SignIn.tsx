import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { useState, ChangeEvent, FormEvent } from 'react';
import { GrGooglePlus } from 'react-icons/gr';
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { auth } from '../../config/firebase';

import { signIn, authSignIn } from '../../services/authApi';

export function SignIn ({ slide } : {slide: boolean}) {
  const navigate = useNavigate();
    
  const[form, setForm] = useState({
    email: '',
    password: ''
  });
    
  function handleForm (event: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) {
    setForm({
      ...form,
      [event.target.name]: event.target.value,
    });
  }

  async function sendForm(event: FormEvent) {
    event.preventDefault();

    try {
      const userData = await signIn(form);

      const name = userData.user.name;    
      localStorage.setItem('name', name);

      const token = userData.token;
      localStorage.setItem('plantshop', JSON.stringify({token: token}));

      navigate('/plantshop/home');
    } catch (error: any) {
      alert(`${error.response.data.message}`);
    }
  }

  async function authSubmit(name : string, email: string) {
    try {
      const userData = await authSignIn({ name, email});
      
      const userName = userData.user.name;    
      localStorage.setItem('name', userName);

      const token = userData.token;
      localStorage.setItem('plantshop', JSON.stringify({token: token}));

      navigate('/plantshop/home');
    } catch (error: any) {
      alert(`${error.response.data.message}`);
    }
  }

  async function handleGoogleSignIn() {
    const provider = new GoogleAuthProvider();
    const user = await signInWithPopup(auth, provider);
    const name = user.user.displayName;
    const email = user.user.email;

    if (email && name) authSubmit(name, email);    
  }

  return (
    <Wrapper slide = {slide}>
      <h1>Sign in</h1>
      <form onSubmit={sendForm}>
        <input 
          type="email" 
          name="email" 
          placeholder='E-mail'
          value={form.email}              
          onChange={handleForm}
          required 
        />
        <input 
          type="password" 
          name="password" 
          placeholder='Password'
          value={form.password}          
          onChange={handleForm}
          required 
        />
                    
        <Button type='submit'>Sign in</Button>
        <AuthSignIn onClick={handleGoogleSignIn}>Sign in with <GrGooglePlus /></AuthSignIn>
      </form>
    </Wrapper>
  );
}

type slidePops = {
    slide: boolean
}

const Wrapper = styled.div<slidePops>`
    width: 50vw;
    height: 100vh;
    display: ${props => props.slide ? 'flex' : 'none'};
    flex-direction: column;
    align-items: center;
    justify-content: center;
    color: #F5FAD1;
    z-index: 1;

    position: fixed;
    left: 0;

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

    label, span {
        font-size: 14px;
        font-weight: 500;
    }

    span {
        align-self: flex-end;
        padding-left: 40px;
        text-decoration: underline;
        cursor: pointer;

        &:hover {
            opacity: .8;
        }
    }
`;

const Button = styled.button`
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
`;

const AuthSignIn = styled.button`
  height: 30px;
  margin-top: 10px;
  gap: 10px;
  border-radius: 20px;
  font-size: 16px;
  font-weight: 500;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid #76C352;
  color: #F5FAD1;
  background: none;
  cursor: pointer; 
`;