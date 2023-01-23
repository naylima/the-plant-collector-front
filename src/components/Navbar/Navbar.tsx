import styled from 'styled-components';

import { useState } from 'react';

import { TfiSearch } from 'react-icons/tfi';
import { RxHamburgerMenu } from 'react-icons/rx';

import { HamburgerMenu } from './HamburgerMenu';
import { MenuBar } from './MenuBar';

export function Navbar () {
  const [hidden, setHidden] = useState(true);

  return (
    <Wrapper>
      <Container>
                
        <div className='hamburgerMenu'>
          <RxHamburgerMenu onClick={()=> setHidden(false)}/>
        </div>

        <div className="logo">
          <h1>The Plant Collector</h1>
        </div> 

        <div className='searchBar'>
          <input type='text' name='name' placeholder='What are you looking for?' required />
          <TfiSearch className="icon" />
        </div>

        <MenuBar />
        
      </Container>

      <div className='searchBar-mobile'>
        <input type='text' name='name' placeholder='What are you looking for?' required />
        <TfiSearch className="icon" />
      </div>

      <HamburgerMenu hidden={hidden} setHidden={setHidden}/> 

    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 100vw;
  min-height: 10vh;
  padding: 10px 5px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  z-index: 2;

  color: #FF724C;
  font-family: 'Raleway', sans-serif;
  background-color: #F5FAD1;

  position: fixed;
  top: 0;

  input {
  width: 90%;
  padding: 6px 8px;
  font-size: 18px;
  border: none;
  border-radius: 5px;
  background: rgba(118, 195, 82, .1);
  color: #083316;
  font-family: 'Raleway', sans-serif;

    ::placeholder {
      color: #76C352;
    }

    :focus {
      border: 1px solid #76C352;
    }
  }

.searchBar {
  @media (max-width: 850px) {
    display: none;
  }
}

.searchBar-mobile {
  width: 95%;
  margin-top: 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (min-width: 850px) {
    display: none;
  }
}

.hamburgerMenu {
  font-size: 22px;
  
  @media (min-width: 850px) {
    display: none;
  }
}

.icon, h1, h3, p {
  cursor: pointer;
  :hover {
      opacity: .8;
  }
}
`;

const Container = styled.div`
  width: 95%;
  display: flex;
  align-items: center;
  justify-content: space-between;

  button {
    all: unset;
  }

  >div { 
    width: 30vw;   
    gap: 10px;
    display: flex;
    align-items: center;

    @media (max-width: 850px) {
      width: auto;
    }
  }

  div:nth-child(3) {
    justify-content: center;
    .icon {
      font-size: 22px;
    }
  }

  div:nth-child(4) {
    justify-content: flex-end;
    .icon {
      font-size: 22px;
    }
  }

  h1 {
    letter-spacing: 1.8px;
    font-size: 2em;
    font-weight: 900;

    @media (max-width: 850px) {
      font-size: 1.5em;
    }
  }

`;
