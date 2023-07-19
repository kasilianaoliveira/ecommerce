
import { useContext, useState } from 'react'
import { CartContext } from '../../context/cartContext'
import { CartItem } from '../CartItem'
import { CustomButton } from '../CustomButton'
import { BsBagCheck } from 'react-icons/bs'
import {
  CheckoutContainer,
  CheckoutTitle,
  CheckoutProducts,
  CheckoutTotal
} from './checkoutItem'
import axios from 'axios'
import { Loading } from '../Loading'

export const CheckoutItems = () => {
  const { products, productsTotalPrice } = useContext(CartContext)

  const [isLoading, setIsLoading] = useState(false)

  const handleFinishPurchaseClick = async () => {
    try {
      setIsLoading(true)
      const {data} = await axios.post(`${process.env.REACT_APP_API_URL}/create-checkout-session`, {products})

      console.log(data)
      window.location.href = data.url
    } catch (error) {
      console.log(error)
    }finally {
      setIsLoading(false)
    }
  }

  return (
    <CheckoutContainer>
      {isLoading && <Loading/>}
      <CheckoutTitle>Checkout</CheckoutTitle>

      {products.length > 0 ? (
        <>
          <CheckoutProducts>
            {products.map((product) => (
              <CartItem key={product.id} product={product} />
            ))}
          </CheckoutProducts>

          <CheckoutTotal>Total: R${productsTotalPrice},00</CheckoutTotal>

          <CustomButton startIcon={<BsBagCheck />} onClick={handleFinishPurchaseClick}>
            Finalizar Compra
          </CustomButton>
        </>
      ) : (
        <p>Seu carrinho está vazio!</p>
      )}
    </CheckoutContainer>
  )
}
