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
`;

export const ProductItemPrice = styled.p`
   color: #626262;
`;
