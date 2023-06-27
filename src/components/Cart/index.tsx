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
import { useNavigate } from 'react-router-dom'

export const Cart = () => {
  const { isVisible, toggleCart, products, productsTotalPrice, productCount } = useContext(CartContext)

  const navigate = useNavigate()

  const filterPrice = productsTotalPrice.toLocaleString("pt-br", {
    style: "currency",
    currency: "BRL",
  });

  const handleClickFromCheckout = () => {
    navigate('/checkout');
    toggleCart();
  }
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
              <CustomButton startIcon={<BsCartCheck />} onClick={handleClickFromCheckout} >
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
