import styled from 'styled-components';
import Cards from 'react-credit-cards';
import 'react-credit-cards/es/styles-compiled.css';

import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { addToCart } from '../../services/cartApi';
import { makePayment } from '../../services/paymentApi';
import { useCart } from '../../contexts/CartContext';

export function PaymentForm() {
  const navigate = useNavigate();
  const { cart, setCart } = useCart();
  
  const [cardNumber, setCardNumber] = useState('');
  const [cardName, setCardName] = useState('');
  const [cardDate, setCardDate] = useState('');
  const [cardCVC, setCardCVC] = useState('');
  const [cardIssuer, setCardIssuer] = useState('');

  const total = cart?.reduce((total: number, product) => 
    total + (product.amount * product.price), 0) || 0;

  function handleCallback({ issuer } : {issuer: string}) {
    setCardIssuer((issuer).toUpperCase());
  }

  async function handleForm(e: { preventDefault: () => void; }) {
    e.preventDefault();

    const paymentData = {  
      value: total,   
      issuer: cardIssuer,
      number: cardNumber,
      name: cardName,
      expirationDate: cardDate,
      cvc: cardCVC      
    };

    try {
      cart?.map(async (product) => {
        const product_id = product.id;
        const amount = product.amount;         
    
        await addToCart({product_id, amount});                        
      });

      await makePayment(paymentData);
      setCart([]);
      navigate('/success');
    } catch {
      alert('Something went wrong! Please try again!');
    }
  }

  return (
    <>
      <CardBox id="PaymentForm">
        <form onSubmit={handleForm}>
          <AlignHor>
            <Cards
              cvc={cardCVC}
              expiry={cardDate}
              name={cardName}
              number={cardNumber}
              callback={handleCallback}
            />
            <AlignInput>
              <Input
                type="number"
                id="number" required
                autoComplete='off'
                maxLength={16}
                placeholder="Card Number"
                onChange={(e) => setCardNumber(e.target.value)} value={cardNumber}
              />
              <Input
                type="name"
                id="name" required
                placeholder="Name"
                onChange={(e) => setCardName(e.target.value)} value={cardName}
              />
              <AlignItems>
                <Input
                  type="number"
                  id="expiry" required
                  placeholder="Valid Thru"
                  onChange={(e) => setCardDate(e.target.value)} value={cardDate}

                />
                <Input
                  type="number"
                  id='cvc' required
                  placeholder="CVC"
                  onChange={(e) => setCardCVC(e.target.value)} value={cardCVC}

                />
              </AlignItems>
            </AlignInput>
          </AlignHor>
          <Button>Pay Now</Button>
        </form>
      </CardBox>
    </>
  );
}

const CardBox = styled.div`
  width: 600px;
  height: 270px;
  display: flex;
  padding: 20px;
  margin-top: 37px;
  border-radius: 5px;
  background-color: #F5FAD1;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px; 

  @media (max-width: 850px) {
    width: 90%;
    height: auto;
  }
`;

const AlignHor = styled.div`
  display: flex;

  @media (max-width: 850px) {
    flex-direction: column;
    gap: 20px;
  }
`;

const AlignInput = styled.div`
  display: flex;
	flex-direction: column;
  width: 50%;
  margin-left: 24px;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 850px) {
    width: 100%;
    margin-left: 0;
    gap: 10px;
  }
`;

const Input = styled.input`
  box-sizing: border-box;
  color: #8e8e8e;
  width: 100%;
  height: 48px;
  padding: 2px;
  padding-left: 6px;
  font-size: 18px;
  border-radius: 5px;
  background-color: #F5FAD1;
  border: 1px solid #76C352;

  &&[type=number]::-webkit-inner-spin-button,
    &&[type=number]::-webkit-outer-spin-button {
      -webkit-appearance: none;
      margin: 0;
    }
`;

const AlignItems = styled.div`
  display: flex;
  justify-content: space-between;
  Input {
  width: 49%
  }
`;

const Button = styled.button`
  width: 182px;
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

  @media (max-width: 850px) {
    width: 100%;
  }
`;