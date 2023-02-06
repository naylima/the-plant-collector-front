import styled from 'styled-components';
import { BsFillPlusCircleFill, BsFillDashCircleFill } from 'react-icons/bs';
import { useCart, ICartItem } from '../../contexts/CartContext';

interface Product {
  id: string,
  name: string,
  image: string,
  description: string,
  price: number,
  stock: number,
};

export function ProductCart ({product} : {product: ICartItem}) {
  const { setCart } = useCart();

  const handleAddToCart = (clickedItem: Product) => {
    setCart(prev => {      
      const isItemInCart = prev.find(item => item.id === clickedItem.id); 

      if (isItemInCart) {
        if (isItemInCart) {
          if(isItemInCart.amount < clickedItem.stock) {
            return prev.map(item => 
              item.id === clickedItem.id 
                ? { ...item, amount: item.amount + 1 } 
                : item 
            );
          } else {
            return [...prev];
          }
        };
      };
      
      return [...prev, {...clickedItem, amount: 1}];
    });
  };

  const handleRemoveFromCart = (id: string) => {
    setCart(prev => 
      prev.reduce((acc, item) => {
        if (item.id === id) {
          if (item.amount === 1) return acc;
          return [...acc, {...item, amount: item.amount - 1}];
        } else {
          return [...acc, item]; 
        }
      },  [] as ICartItem[])
    );
  };  
  
  return (
    <Wrapper key={product.id}>
      <div>
        <img src={product.image} alt="" />
      </div>
      <InfoContainer>
        <Title>
          <h3>{product.name}</h3>
          <span>Quantity: {product.amount}</span>
        </Title>
                
        <AmountContainer>
          <h4>${product.price /100}</h4>
          <div>
            <Minus onClick={() => handleRemoveFromCart(product.id)}/> 
            <div>{product.amount}</div>
            <Plus onClick={() => handleAddToCart(product)}/>
          </div>
        </AmountContainer>
      </InfoContainer>
              
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  padding: 10px 0;
  gap: 10px;

  border-bottom: 1px solid rgba(118, 195, 82, .5);
  
  img {
    width: 90px;
    height: 100px;
    border-radius: 5px;
  }
`;

const InfoContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
`;

const Title = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  text-align: start;

  h3 {
    font-weight: 500;
    line-height: 20px;
  }
  
  span {
    font-size: 13px;
    line-height: 16px;
    opacity: .7;
  }
`;

const AmountContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;

  h4 {
    font-size: 18px;
    font-weight: 500;
  }

  div {
    display: flex;
    gap: 5px;
    font-weight: 500;
  }
`;

const Minus = styled(BsFillDashCircleFill)`
  font-size: 18px;
  cursor: pointer;

  :hover{
    opacity: .9;
  }
`;

const Plus = styled(BsFillPlusCircleFill)`
  font-size: 18px;
  cursor: pointer;

  :hover{
    opacity: .9;
  }
`;