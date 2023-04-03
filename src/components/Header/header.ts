import styled from 'styled-components';

export const HeaderContainer = styled.div`
  width: 100%;

  background-color: var(--white);
  color: var(--black-500);

  padding: 10px;
`;

export const HeaderItemsContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;

  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const HeaderTitle = styled.h2`
  font-weight: bold;
  font-size: 1.5rem;

  :hover {
    cursor: pointer;
  }
`;


export const HeaderListItems = styled.ul`
  font-weight: 500;
  font-size: 1rem;

  display: flex;
  align-items: center;
  gap: 2.5rem;

  cursor: pointer;
`;


export const HeaderIconsItems = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;

  
`;

export const IconItem = styled.div`
  display: flex;
  gap: 5px;
  cursor: pointer;
`;


export const ImageIcon = styled.img`
 border-radius: 50%;
  cursor: pointer;
  width: 28px;
`;
