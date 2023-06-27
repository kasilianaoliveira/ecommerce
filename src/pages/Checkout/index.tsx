import { FC } from "react"
import { Header } from "../../components/Header"
import { CheckoutItems } from "../../components/checkoutItems"

export const Checkout: FC = () => {
  return (
    <>
      <Header />
      <CheckoutItems />
    </>
  )
}
