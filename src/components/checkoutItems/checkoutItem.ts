import styled from 'styled-components'

export const CheckoutContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  padding-top: 30px;
  padding-bottom: 30px;
  overflow: hidden;

  p {
    color: var(--black-500);
  }

  button {
    width: 650px;
  }
`

export const CheckoutTitle = styled.p`
  font-weight: bold;
  font-size: 1.325rem;
`

export const CheckoutProducts = styled.div`
  min-width: 650px;
  overflow-y: scroll;
  margin-top: 15px;
  margin-bottom: 15px;
  max-height: 450px;

  /* width */
  ::-webkit-scrollbar {
    width: 5px;
    border: 10px solid var(--white);
  }


  /* Handle */
  ::-webkit-scrollbar-thumb {
  background-color: var(--black-500);
  border-radius: 0.5rem;
  color: var(--white);

  }


`

export const CheckoutTotal = styled.p`
  width: 650px;
  font-size: 1.125rem;
  font-weight: 600;
  margin-bottom: 15px;
`