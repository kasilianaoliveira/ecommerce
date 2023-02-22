import styled from 'styled-components';

export const ProductContainer = styled.div`
  margin-top: 1.25rem;
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 100%;

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
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 94%;
`;

export const ProductItemPrice = styled.p`
   color: #626262;
`;
