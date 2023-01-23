import * as NavigationMenu from '@radix-ui/react-navigation-menu';
import styled, { keyframes } from 'styled-components';
import './styles.css';

import { RxCaretDown } from 'react-icons/rx';

export function SubNavBar() { 
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

        <NavigationMenu.Item>
          <Trigger>
            All Potted Plants <CaretDown className="CaretDown" aria-hidden />
          </Trigger>
          <Content className="NavigationMenuContent">
            <ul>
              <li>Pet-Friendly Plants</li>
              <li>Tropical Indoor Plants</li>
              <li>Flowering Plants</li>
              <li>Rare Plants</li>
              <li>Succulents & Cacti</li>
              <li>Aquatic Plants</li>
              <li>Outdoor Plants</li>
              <li>Vegetable & Herb Plants</li>
              <li>Dried Plants</li>
            </ul>
          </Content>
        </NavigationMenu.Item>

        <NavigationMenu.Item>
          <Trigger>
            Air Plants <CaretDown className="CaretDown" aria-hidden />
          </Trigger>
          <Content className="NavigationMenuContent">
            <ul>
              <li>Small Air PLants</li>
              <li>Large Air Plants</li>
              <li>Air Plants Accessories</li>
            </ul>
          </Content>
        </NavigationMenu.Item>

        <NavigationMenu.Item>
          <Trigger>
            Zodiac Houseplants <CaretDown className="CaretDown" aria-hidden />
          </Trigger>
          <Content className="NavigationMenuContent">
            <ul>
              <li>Capricorn</li>
              <li>Aquarius</li>
              <li>Pisces</li>
              <li>Aries</li>
              <li>Taurus</li>
              <li>Gemini</li>
              <li>Cancer</li>
              <li>Leo</li>
              <li>Virgo</li>
              <li>Libra</li>
              <li>Scorpio</li>
              <li>Sagittarius</li>
            </ul>
          </Content>
        </NavigationMenu.Item>

        <NavigationMenu.Item>
          <Trigger>
            Pots & Accessories <CaretDown className="CaretDown" aria-hidden />
          </Trigger>
          <Content className="NavigationMenuContent">
            <ul>
              <li>All Pots & Accessories</li>
              <li>Pots & Planters</li>
              <li>Watering Tools</li>
              <li>Garden Tools</li>
              <li>Fertilizer & Treatments</li>
            </ul>
          </Content>
        </NavigationMenu.Item>

        <NavigationMenu.Item>
          <Trigger>
            Seed Packets <CaretDown className="CaretDown" aria-hidden />
          </Trigger>
          <Content className="NavigationMenuContent">
            <ul>
              <li>Vegetable & Herb Seeds</li>
            </ul>
          </Content>
        </NavigationMenu.Item>

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
