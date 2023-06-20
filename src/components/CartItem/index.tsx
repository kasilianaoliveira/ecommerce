import { AiOutlinePlus, AiOutlineMinus, AiOutlineClose } from 'react-icons/ai'
import { Cart } from '../../types/Cart';
import {
  CartItemContainer,
  CartItemImage,
  CartItemInfo,
  CartItemQuantity,
  RemoveButton
} from './styles'


interface CartItemProps {
  product: Cart;
}

export const CartItem = ({ product }: CartItemProps) => {
  return (
    <CartItemContainer>
      <CartItemImage imageUrl={product.imageUrl} />

      <CartItemInfo>
        <p>{product.name}</p>
        <p>R${product.price}</p>

        <CartItemQuantity>
          <AiOutlineMinus size={18} />
          <p>{product.quantity}</p>
          <AiOutlinePlus size={18} />
        </CartItemQuantity>
      </CartItemInfo>

      <RemoveButton>
        <AiOutlineClose size={22} />
      </RemoveButton>
    </CartItemContainer>
  )
}
