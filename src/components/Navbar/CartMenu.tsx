import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../../contexts/CartContext';
import { ProductCart } from '../Products/ProductCart';
import { EmptyCart } from '../Cart/EmptyCart';

export function CartMenu() {
  const navigate = useNavigate();
  const { cart } = useCart();

  if (cart && cart.length > 0) {
    const total = cart.reduce((total: number, product) => 
      total + (product.amount * product.price), 0);

    return (
      <Wrapper>
        <ProductContainer>
          {
            cart.map(product => (
              <ProductCart 
                key={product.id}
                product={product}
              />
            ))
          }
        </ProductContainer>

        <TotalContainer>
          <div>
            <h3>Total:</h3>
            <span>${total/100}</span>
          </div>
          <button onClick={() => navigate('/cart')}>CHECKOUT</button>
        </TotalContainer>
      </Wrapper>
    );
  } else {
    return (
      <Wrapper>
        <EmptyCart />
      </Wrapper>
    );
  }

}

const Wrapper = styled.div`
  width: 300px;
  max-height: 80vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: Center;
  padding: 10px 0 10px 10px;
  position: relative;

  button {
    height: 30px;
    margin-top: 40px;
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

const ProductContainer = styled.div`
  height: 75%;
  padding-right: 20px;
  overflow-y: scroll;
`;

const TotalContainer = styled.div`
  width: 100%;
  padding: 20px 20px 10px 0;
  
  div {
    display: flex;
    justify-content: space-between;
    font-size: 20px;
    font-weight: 600;
  }

  button {
    width: 100%;
  }
`;