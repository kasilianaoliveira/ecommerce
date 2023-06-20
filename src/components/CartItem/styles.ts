import styled from 'styled-components'

interface CartItemImageProps {
  imageUrl: string
}

export const CartItemContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 0.9375rem;

  p {
    color: var(--black);;
  }
`

export const CartItemImage = styled.div<CartItemImageProps>`
  display: block;
  height: 9rem;
  width: 7.5rem;
  background-image: ${(props) => `url('${props.imageUrl}')`};
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  border-radius: 10px;
`

export const CartItemInfo = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 1.25rem;
  flex: 1;

  p:nth-child(1) {
    font-weight: 600;
    margin-bottom: 0.3125rem;
  }

  p:nth-child(2) {
    font-weight: 500;
  }
`

export const CartItemQuantity = styled.div`
  display: flex;
  align-items: center;
  margin-top: 0.625rem;

  p {
    margin-left: 0.625rem;
    margin-right: 0.625rem;
  }

  svg:hover {
    cursor: pointer;
  }
`

export const RemoveButton = styled.div`
  margin-right: 1.25rem;

  &:hover {
    cursor: pointer;
  }
`