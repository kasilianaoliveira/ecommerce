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
  const { isVisible, toggleCart, products, productsTotalPrice, productCount } = useContext(CartContext)


  const filterPrice = productsTotalPrice.toLocaleString("pt-br", {
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
            <CartItem key={product.id} product={product} />
          ))
        }

        {productCount > 0 && (
            <>
              <CartTotal>Total: {filterPrice}</CartTotal>
              <CustomButton startIcon={<BsCartCheck />}>
                Ir para o Checkout
              </CustomButton>
            </>
          )}

        {
          productCount === 0 && <p>Seu carrinho está vazinho :(</p>
        }

      </CartContent>
    </CartContainer>
  )
}
