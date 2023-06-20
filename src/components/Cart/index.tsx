import React, { useContext } from 'react'
import { CartContext } from '../../context/cartContext'

import {
  CartContainer,
  CartContent,
  CartEscapeArea,
  CartTitle,
  CartTotal
} from './styles'
import { CustomButton } from '../CustomButton'
import { BsCartCheck } from 'react-icons/bs'
import { CartItem } from '../CartItem'

export const Cart = () => {
  const { isVisible, toggleCart, products } = useContext(CartContext)

  const totalValueCart = products.reduce((accumulator, product) =>
    accumulator + (product.price * product.quantity), 0);



  const filterPrice = totalValueCart.toLocaleString("pt-br", {
    style: "currency",
    currency: "BRL",
  });

  return (
    <CartContainer isVisible={isVisible}>
      <CartEscapeArea onClick={toggleCart} />
      <CartContent>
        <CartTitle>Seu Carrinho</CartTitle>

        {
          products.map(product => (
            <CartItem key={product.id} product={product}/>
          ))
        }

        <CartTotal>Total: {filterPrice}</CartTotal>

        <CustomButton startIcon={<BsCartCheck />}>
          Ir para o Checkout
        </CustomButton>
      </CartContent>
    </CartContainer>
  )
}
