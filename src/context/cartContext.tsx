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

    // console.log(products)
    // se sim -> aumentar sua quantidade
    if (productIsAlreadyInCart) {

      const newCartProduct = products.map((item) =>
        item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
      );

      return setProducts(newCartProduct);
    }

    // se não -> adicioná-lo
    setProducts((prevState) => [...prevState, { ...product, quantity: 1 }])
  }

  useEffect(() => {
    console.log(products); // Verifica se o carrinho é atualizado corretamente
  }, [products]);
  return (
    <CartContext.Provider
      value={{
        isVisible,
        products,
        toggleCart,
        addProductToCart
      }}
    >
      {children}
    </CartContext.Provider>
  );
};