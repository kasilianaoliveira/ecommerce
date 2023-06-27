
import { useContext } from 'react'
import {
  CheckoutContainer,
  CheckoutTitle,
  CheckoutProducts,
  CheckoutTotal
} from './checkoutItem'
import { CartContext } from '../../context/cartContext'
import { CartItem } from '../CartItem'
import { BsBagCheck } from 'react-icons/bs'
import { CustomButton } from '../CustomButton'

export const CheckoutItems = () => {
  const { products, productsTotalPrice } = useContext(CartContext)


  return (
    <CheckoutContainer>
      <CheckoutTitle>Checkout</CheckoutTitle>

      {products.length > 0 ? (
        <>
          <CheckoutProducts>
            {products.map((product) => (
              <CartItem key={product.id} product={product} />
            ))}
          </CheckoutProducts>

          <CheckoutTotal>Total: R${productsTotalPrice},00</CheckoutTotal>

          <CustomButton startIcon={<BsBagCheck />}>
            Finalizar Compra
          </CustomButton>
        </>
      ) : (
        <p>Seu carrinho está vazio!</p>
      )}
    </CheckoutContainer>
  )
}
