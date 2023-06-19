import styled from 'styled-components';

export const ProductContainer = styled.div`
  margin-top: 1.25rem;
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-left: 10px;

  img {
    width: 17.875rem;
    height: 17.875rem;
    object-fit: cover;
    cursor: pointer;

    &:hover{
    filter: brightness(70%)

    }
  }
`;

export const ProductContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.625rem;
  
  p{
    font-weight: 600;
    font-size: 1rem;
    line-height: 1.25rem;
  }
`;

export const ProductItemFavorite = styled.div`

  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 285px;

  /* button {
    background-color: transparent;
  } */
`;

export const ProductItemPrice = styled.p`
   color: #626262;
`;

export const ImageContainer = styled.div`
  position: relative;
  /* background-color: red; */

  img {
    border-radius: 10px;
  }

  button {
    display: flex;
    align-items: center;
    gap: 0.5rem;

    background-color: var(--black-500);
    color: white;
    width: 15.625rem;

    position: absolute;
    bottom:0;
    left: 0;
    right: 0;

    margin: auto;
    
    transform: translateX(-50%, -50%);

    opacity: 0;
    transition: opacity 0.3s ease, transform 0.3s ease;

  }


  &:hover button {
    opacity: 1;
    transform: translateY(-30%);
  

  }

  button:hover{
    background-color: white;
    color: var(--black-500);

  }
`