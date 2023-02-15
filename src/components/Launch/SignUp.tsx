import styled from 'styled-components';
import { useState, ChangeEvent, FormEvent } from 'react';

import { signUp } from '../../services/userApi';

export function SignUp ({ slide } : {slide: boolean}) {
  const[form, setForm] = useState({
    name: '',
    email: '',
    password: '',
    confirm_password: ''
  });

  function handleForm (event: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) {
    setForm({
      ...form,
      [event.target.name]: event.target.value,
    });
  }

  async function sendForm (event: FormEvent) {
    event.preventDefault();

    if (form.password !== form.confirm_password) {
      alert('Passwords do not mach!');
      return;
    }

    const name = form.name;
    const email = form.email;
    const password = form.password;
    
    try {
      await signUp({name, email, password});
      alert('Your registration has been successfully concluded');
    } catch (error: any) {
      alert(`${error.response.data.message}`);
    }
  }

  return (
    <Wrapper slide = {slide}>
      <h1>Sign up</h1>
      <form onSubmit={sendForm}>
        <input 
          type="text"                
          placeholder="Name"
          name="name" 
          value={form.name}               
          onChange={handleForm}
          required
        />
        <input 
          type='email' 
          name='email'
          placeholder='E-mail'
          value={form.email}              
          onChange={handleForm}
          required 
        />
        <input 
          type='password'
          name='password'
          placeholder='Password'
          value={form.password}          
          onChange={handleForm}
          required 
        />
        <input 
          type='password'
          name='confirm_password'
          placeholder='Repeat password' 
          required />

        <button type='submit'>Sign up</button>
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