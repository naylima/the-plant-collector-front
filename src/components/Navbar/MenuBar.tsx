import * as Menubar from '@radix-ui/react-menubar';
import styled from 'styled-components';

import { useNavigate } from 'react-router-dom';
import { RxPerson } from 'react-icons/rx';
import { BsCart } from 'react-icons/bs';

import { CartMenu } from './CartMenu';
import { signOut } from '../../services/authApi';
import { useCart } from '../../contexts/CartContext';

export function MenuBar() {
  const navigate = useNavigate();
  const name = localStorage.getItem('name');
  const { cart } = useCart();
  let total = 0;

  if(cart) {
    total = cart.reduce((amount, item) => { return amount + item.amount;}, 0);
  }
 
  async function handleSignOut() {
    try {
      await signOut();
      localStorage.clear();
      navigate('/');
    } catch (error) {
      alert('Something went wrong! PLease try again :)');
    }
  }

  return (
    <Root>
      <Menubar.Menu>
        <Trigger> 
          {
            name === null ? null :  <span>Olá, {name}!</span> 
          }
          <RxPerson className='icon'/>
        </Trigger>

        <Menubar.Portal>
          <Content align="end" sideOffset={5} alignOffset={-3}>
            {
              name === null ?
                <Menubar.Item onClick={() => navigate('/launch')}>
                  <p>Login</p>
                </Menubar.Item>
                :
                <Menubar.Item onClick={() => handleSignOut()}>
                  <p>Logout</p>
                </Menubar.Item>
            }       
          </Content>
        </Menubar.Portal>
      </Menubar.Menu>

      <Menubar.Menu>
        <Trigger>
          <Cart>
            <BsCart className='icon'/>
            {
              total === 0 ? null : <Circle>{total}</Circle>
            }
          </Cart>
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
  justify-content: flex-end;

  button {
    all: unset;
  }
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

  span {
    margin-right: 10px;
  }

  @media (max-width: 850px) {
    span {
      display: none;
    }
  }
`;

const Content = styled(Menubar.Content)`
  min-width: 150px;
  padding: 5px;
  border-radius: 6px;
  text-align: center;
  font-family: 'Raleway', sans-serif;
  color: #FF724C;
  background-color: #F5FAD1;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  animation-duration: 400ms;
  animation-timing-function: cubic-bezier(0.16, 1, 0.3, 1);
  will-change: transform, opacity;
  z-index: 2;

  p {
    cursor: pointer;
  }

  p:hover {
    font-weight: 600;
    background-color: rgba(118, 195, 82, .1);
  }
`;

const Cart = styled.div`
  padding: 10px;
  position: relative;
`;

const Circle = styled.div`
  width: 18px;
  height: 18px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  background-color: red;
  color: #FFF;

  position: absolute;
  top: 0;
  right: 0;
`;