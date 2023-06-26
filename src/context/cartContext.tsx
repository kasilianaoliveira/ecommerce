import { createContext, FC, ReactNode, useContext, useEffect, useMemo, useState } from 'react';
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

  const productsTotalPrice = useMemo(() => {
    return products.reduce((accumulator, product) =>
      accumulator + (product.price * product.quantity), 0);

  }, [products]);

  const productCount = useMemo(() => {
    return products.reduce((accumulator, product) =>
      accumulator + product.quantity, 0)
  }, [products]);


  const toggleCart = () => {
    setIsVisible((prevState) => !prevState);
  }

  const addProductToCart = (product: Product) => {

    const productIsAlreadyInCart = products.some(
      (item) => item.id === product.id
    )

    if (productIsAlreadyInCart) {

      return setProducts(prevState =>
        prevState.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        ));
    }

    setProducts((prevState) => [...prevState, { ...product, quantity: 1 }])
  }

  const decreaseProductQuantity = (productId: string) => {
    setProducts((products) =>
      products.map(product =>
        product.id === productId
          ? { ...product, quantity: product.quantity - 1 }
          : product
      ).filter(product => product.quantity > 0)
    );
  }



  const removeProductFromCart = (productId: string) => {
    setProducts((prevState) =>
      prevState.filter((item) => item.id !== productId)
    );
  };

  useEffect(() => {
    console.log(products);
  }, [products]);
  return (
    <CartContext.Provider
      value={{
        isVisible,
        products,
        productCount,
        productsTotalPrice,
        toggleCart,
        addProductToCart,
        removeProductFromCart,
        decreaseProductQuantity
      }}
    >
      {children}
    </CartContext.Provider>
  );
};