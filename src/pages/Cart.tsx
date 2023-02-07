import styled from 'styled-components';

import { useNavigate } from 'react-router-dom';
import { useCart } from '../contexts/CartContext';
import { ProductCart } from '../components/Products/ProductCart';
import { EmptyCart } from '../components/Cart/EmptyCart';

export function Cart() {
  const { cart } = useCart();
  const navigate = useNavigate();

  const total = cart?.reduce((total: number, product) => 
    total + (product.amount * product.price), 0);

  async function handleCheckout() {    
    localStorage.setItem('cart', JSON.stringify(cart));        

    navigate('/payment');   
  }

  if (cart === null || cart.length === 0) {
    return (
      <Wrapper>
        <EmptyCart />
      </Wrapper>
    );
  }

  return (
    <Wrapper>
      <h1>Your Cart</h1>

      <Container>
        <ProductsContainer>
          {
            cart?.map(product => (
              <ProductCart 
                key={product.id} 
                product={product}
              />
            ))
          }
        </ProductsContainer>

        <CheckoutSummary>
          <h2>Order Summary</h2>
          <div>
            <h4>Subtotal</h4>
            {
              total? <p>${total/100}</p> : <p>0</p>
            }
          </div>
          <div>
            <h4>Shipping</h4>
            <p>Free</p>
          </div>          
          <Total>
            <h3>Total</h3>
            {
              total? <p>${total/100}</p> : <p>0</p>
            }
          </Total>
          <button onClick={() => handleCheckout()}>CHECKOUT</button>
        </CheckoutSummary>
      </Container>
      
    </Wrapper>
  );
}

const Wrapper = styled.div`
  max-width: 100vw;
  min-height: 60vh;
  padding-top: 10vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: #DBF2B9;
  font-family: 'Raleway', sans-serif; 
  color: #FF724C;

  h1 {
    font-size: 2em;
    line-height: 3em;
    font-weight: 500;
  } 

  @media (max-width: 850px) {
    padding-top: 16vh;
  }
`;

const Container = styled.div`
  width: 70%;
  padding-bottom: 30px;
  display: flex;
  justify-content: space-between;

  @media (max-width: 850px) {
    width: 90%;
    flex-direction: column;
    gap: 20px;
  }
`;

const ProductsContainer = styled.div`
  width: 600px;
  padding: 20px;
  border-radius: 5px;
  background-color: #F5FAD1;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;  
  
  @media (max-width: 850px) {
    width: auto;
  }
`;

const CheckoutSummary = styled.div`
  width: 300px;
  height: 250px;
  padding: 20px;
  border-radius: 5px;
  background-color: #F5FAD1;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px; 

  h2 {
    font-size: 20px;
    margin-bottom: 20px;
  }

  h4 {
    opacity: .7;
  }

  div {
    padding: 10px 0;
    display: flex;
    justify-content: space-between;
  }

  button {
    width: 100%;
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

  @media (max-width: 850px) {
    width: auto;
  }
`;

const Total = styled.div`
  border-top: 1px solid rgba(118, 195, 82, .5);

  h3, p {
    font-size: 18px;
    font-weight: 500;
  }
`;

