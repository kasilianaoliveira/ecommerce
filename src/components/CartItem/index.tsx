import { AiOutlinePlus, AiOutlineMinus, AiOutlineClose } from 'react-icons/ai'
import { Cart } from '../../types/Cart';
import {
  CartItemContainer,
  CartItemImage,
  CartItemInfo,
  CartItemQuantity,
  RemoveButton
} from './styles'
import { useContext, useEffect } from 'react';
import { CartContext } from '../../context/cartContext';


interface CartItemProps {
  product: Cart;
}

export const CartItem = ({ product }: CartItemProps) => {

  const { addProductToCart, removeProductFromCart, decreaseProductQuantity } = useContext(CartContext)


  return (
    <CartItemContainer>
      <CartItemImage imageUrl={product.imageUrl} />

      <CartItemInfo>
        <p>{product.name}</p>
        <p>R${product.price}</p>

        <CartItemQuantity>
          <AiOutlineMinus size={18} onClick={() => decreaseProductQuantity(product.id)}/>
          <p>{product.quantity}</p>
          <AiOutlinePlus size={18} onClick={() => addProductToCart(product)} />
        </CartItemQuantity>
      </CartItemInfo>

      <RemoveButton>
        <AiOutlineClose size={22} onClick={() => removeProductFromCart(product.id)} />
      </RemoveButton>
    </CartItemContainer>
  )
}
