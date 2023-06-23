import styled from 'styled-components';

export const CategoryItemContainer = styled.div`
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
`;

export const CategoryTitleHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-grow: 1;
  
  h3{
    font-weight: 500;
  }

`;

export const CategoryItemContent = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  
  @media (max-width: 820px) {
    justify-content: center;
    flex: 1;
    /* max-width: 300px; */
    /* flex-direction: column; */
    /* flex-wrap: nowrap; */
  }
`;


export const CategoryView = styled.div`
  display: flex;
  align-items: center;
  gap: 0.625rem;
  cursor: pointer;
`