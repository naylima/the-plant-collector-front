import * as Menubar from '@radix-ui/react-menubar';

import styled from 'styled-components';

import { RxPerson } from 'react-icons/rx';
import { BsCart } from 'react-icons/bs';

import { CartMenu } from './CartMenu';

export function MenuBar() {
  return (
    <Root>
      <Menubar.Menu>
        <Trigger>
          <RxPerson className='icon'/>
        </Trigger>

        <Menubar.Portal>
          <Content align="end" sideOffset={5} alignOffset={-3}>

            <Menubar.Item>Logout</Menubar.Item>
            <Menubar.Item>Login</Menubar.Item>

          </Content>
        </Menubar.Portal>
      </Menubar.Menu>

      <Menubar.Menu>
        <Trigger>
          <BsCart className='icon' />
        </Trigger>
        <Menubar.Portal>
          <Content align="end" sideOffset={5} alignOffset={-3}>
            <CartMenu />
          </Content>
        </Menubar.Portal>
      </Menubar.Menu>
    </Root>
  );
}

const Root = styled(Menubar.Root)`
  width: 30vw;       
  gap: 10px;
  display: flex;
  align-items: center;
`;

const Trigger = styled(Menubar.Trigger)`
  .icon {
    font-size: 22px;
  }
  &&[data-highlighted],
  &&[data-state='open'] {
    .icon {
      opacity: .8;
    }
  }
`;

const Content = styled(Menubar.Content)`
  border-radius: 6px;
  padding: 5px;
  font-family: 'Raleway', sans-serif;
  color: #FF724C;
  background-color: #F5FAD1;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  animation-duration: 400ms;
  animation-timing-function: cubic-bezier(0.16, 1, 0.3, 1);
  will-change: transform, opacity;
  z-index: 2;
`;