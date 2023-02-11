import { 
  useState,
  createContext, 
  useContext,
  FC,
  PropsWithChildren
} from 'react';

export interface ICartItem {
  id: string,
  name: string,
  image: string,
  description: string,
  price: number,
  stock: number,
  amount: number
}

interface ICart {
  cart: ICartItem[] | null,
  setCart : React.Dispatch<React.SetStateAction<ICartItem[]>>
}

const CartContext = createContext<ICart>({
  cart: null,
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  setCart: () => {},
});

const CartProvider: FC<PropsWithChildren> = ({ children }) => {
  const products = JSON.parse(localStorage.getItem('cart') || '[]');
  const [cart, setCart] = useState<ICartItem[]>(products);

  return (
    <CartContext.Provider value={{ cart, setCart }}>
      {children}
    </CartContext.Provider>
  );
};

const useCart = () => useContext(CartContext);

export { CartProvider, useCart }; 