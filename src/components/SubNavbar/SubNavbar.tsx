import * as NavigationMenu from '@radix-ui/react-navigation-menu';
import styled, { keyframes } from 'styled-components';
import './styles.css';

import { listCategories } from '../../services/categoriesApi';

import { RxCaretDown } from 'react-icons/rx';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
interface Category {
  id: string,
  name: string,
  type: {
    id: string,
    name: string,
  }[]
}

export function SubNavBar() {
  const navigate = useNavigate(); 
  const [data, setData] = useState<Category[]>([]); 
  
  useEffect(() => {
    const promise = listCategories();
    promise.then((res => {
      setData(res);
    })).catch(()=>{
      alert('An error occurred while trying to fetch the data, please refresh the page');
    });
  }, []); 

  return (
    <Root>
      <List>
        <NavigationMenu.Item>
          <Trigger>
            New Arrivals <CaretDown className="CaretDown" aria-hidden />
          </Trigger>
          <Content className="NavigationMenuContent">
            <ul>
              <li>New Arrivals in Potted Plants</li>
              <li>New Arrivals in Airs Plants</li>
              <li>New Arrivals in Pots & Accessories</li>
              <li>New Arrivals in Seed Packets</li>
            </ul>
          </Content>
        </NavigationMenu.Item>
      
        { data &&
          data.map(category => (
            <NavigationMenu.Item key={category.id}>
              <Trigger>
                {category.name}<CaretDown className="CaretDown" aria-hidden />
              </Trigger>
              <Content className="NavigationMenuContent">
                <ul>
                  {
                    category.type.map(type => (
                      <li 
                        key={type.id} 
                        onClick={() => navigate(`${type.id}`, {state: { name: type.name }})}
                      >                        
                        {type.name}                        
                      </li>
                    ))
                  }                    
                </ul>
              </Content>
            </NavigationMenu.Item>
          ))
        }     
            
        <Indicator>
          <div className="Arrow" />
        </Indicator>

        <div className="ViewportPosition">
          <Viewport />
        </div>

      </List>
    </Root>
  );
}

const scaleIn = keyframes`
 0% { opacity: 0; transform: rotateX(-30deg) scale(0.9)}
 100% { opacity: 1; transform: rotateX(0deg) scale(1) }
`;

const scaleOut = keyframes`
 100% { opacity: 1; transform: rotateX(0deg) scale(1)}
 0% { opacity: 0; transform: rotateX(-10deg) scale(0.95)}
`;

const fadeIn = keyframes`
 0% { opacity: 0 }
 100% { opacity: 1 }
`;

const fadeOut = keyframes`
 100% { opacity: 1 }
 0% { opacity: 0 }
`;

const Root = styled(NavigationMenu.Root)`
  max-width: 100vw;
  height: 8vh;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1;

  color: #FF724C;
  font-family: 'Raleway', sans-serif;
  background-color: #F5FAD1;

  position: relative;
  top: 10vh;

  button {
    border: none;
    background: none;
  }

  .ViewportPosition {
    position: absolute;
    display: flex;
    justify-content: center;
    width: 100%;
    top: 100%;
    left: 0;
    perspective: 2000px;
  }

  [data-state='open'] > .CaretDown {
    transform: rotate(-180deg);
  }

  @media (max-width: 850px) {
    display: none;
  }
`;

const List = styled(NavigationMenu.List)`
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 4px;
  list-style: none;
`;

const Trigger = styled(NavigationMenu.Trigger)`
  display: flex;
  padding: 8px 12px;
  gap: 2px;
  font-size: 18px;
  color: #FF724C;
  font-family: 'Raleway', sans-serif;

  :hover {
    font-weight: 700;
  }

  &&[data-state='open'] {
    font-weight: 700;
  }
`;

const Content = styled(NavigationMenu.Content)`
  padding: 5px;
  font-family: 'Raleway', sans-serif;
  color: #FF724C;
  background-color: #F5FAD1;
  z-index: 2;

  animation-duration: 250ms;
  animation-timing-function: ease;

  ul {
    text-align: center;
  }

  li {
    line-height: 22px;
    cursor: pointer;

    a {
      color: #FF724C;
    }

    :hover {
      font-weight: 600;
      background-color: rgba(118, 195, 82, .1);
    }
  }
`;

const CaretDown = styled(RxCaretDown)`
  position: relative;
  top: 1px;
  transition: transform 250ms ease;
`;

const Indicator = styled(NavigationMenu.Indicator)`
  display: flex;
  align-items: flex-end;
  justify-content: center;
  height: 10px;
  top: 100%;
  overflow: hidden;
  z-index: 1;
  transition: width, transform 250ms ease;

  .Arrow {
    position: relative;
    top: 70%;
    background-color: #F5FAD1;
    width: 10px;
    height: 10px;
    transform: rotate(45deg);
    border-top-left-radius: 2px;
  }

  &&[data-state='visible'] {
    animation-name: ${fadeIn};
    animation-duration: 200ms;
  }
  &&[data-state='hidden'] {
    animation-name: ${fadeOut};
    animation-duration: 200ms;
  }
`;

const Viewport = styled(NavigationMenu.Viewport)`
  position: relative;
  transform-origin: top center;
  margin-top: 10px;
  width: 100%;
  border-radius: 6px;
  overflow: hidden;
  height: var(--radix-navigation-menu-viewport-height);
  transition: width, height, 300ms ease;
  background-color:  #F5FAD1;
  &&[data-state='open'] {
    animation-name: ${scaleIn};
    animation-duration: 200ms;
  }
  &&[data-state='closed'] {
    animation-name: ${scaleOut};
    animation-duration: 200ms;
  }
`;
