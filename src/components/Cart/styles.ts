import styled from 'styled-components'

interface CartContainerPros {
  isVisible: boolean
}

export const CartContainer = styled.div<CartContainerPros>`
  position: fixed;
  z-index: 6;
  height: 100vh;
  width: 100vw;
  right: 0;
  bottom: 0;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: flex-end;
  visibility: ${(props) => (props.isVisible ? 'visible' : 'hidden')};
  opacity: ${(props) => (props.isVisible ? '1' : '0')};
  transition: all 0.3s ease;

  p {
    color: var(--black-500);
  }
`

export const CartEscapeArea = styled.div`
  width: 100%;
`

export const CartContent = styled.div`
  z-index: 200;
  height: 100%;
  min-width: 500px;
  background-color: #FFF;
  padding: 20px;
  overflow-y: scroll;
  position: absolute;
`
export const CartTitle = styled.p`
  font-size: 1.325rem;
  font-weight: 600;
  margin-bottom: 15px;
`
export const CartTotal = styled.p`
  font-weight: 600;
  font-size: 1.125rem;
  margin-bottom: 15px;
`