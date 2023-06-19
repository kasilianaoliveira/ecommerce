import { createContext, FC, ReactNode, useContext, useEffect, useState } from 'react';
import { CartContextData } from './ContextTypes';
import { Cart } from '../types/Cart';
import { Product } from '../types/Product';



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

  const addProductToCart = (product: Product) => {
    // verificar se o produto já está no carrinho
    const productIsAlreadyInCart = products.some(
      (item) => item.id === product.id
    )

    // se sim -> aumentar sua quantidade
    if (productIsAlreadyInCart) {
      return setProducts((products) =>
        products.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      )
    }

    // se não -> adicioná-lo
    setProducts((prevState) => [...prevState, { ...product, quantity: 1 }])
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