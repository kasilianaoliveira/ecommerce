import styled from 'styled-components';

export const FavoriteContainer = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

`;

export const FavoriteContent = styled.div`
  max-width: 1200px;
  width: 100%;
  margin: 50px auto;

  display: flex; 
  flex-direction: column;
  align-items: center;

  flex-grow: 1;

`;

export const FavoriteTitleHeader = styled.div`


  h3 {
    font-size: 40px;
  }
`;


export const FavoriteCard = styled.div`

  width: 100%;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  margin-top: 30px;

`;


export const FavoriteNotFoundContainer = styled.div`

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 30px;
`;

export const NotFoundTextContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 8px;

  p {
    font-weight: bold;
    font-size: 40px;
  }
`;