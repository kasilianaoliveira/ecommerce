import { createContext, FC, ReactNode, useContext, useEffect, useState } from 'react';
import { CartContextData } from './ContextTypes';
import { Cart } from '../types/Cart';



interface CartProviderProps {
  children: ReactNode;
}

export const CartContext = createContext({} as CartContextData);

export const CartContextProvider: FC<CartProviderProps> = ({
  children,
}: CartProviderProps) => {

  const [isVisible, setIsVisible] = useState(false);
  const [products, setProducts] = useState<Cart[]>([]);

  const toggleCart = () => {
    setIsVisible((prevState) => !prevState);
  }
  return (
    <CartContext.Provider
      value={{
        isVisible,
        products,
        toggleCart
      }}
    >
      {children}
    </CartContext.Provider>
  );
};