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

  a {
    color: inherit;
    display: flex;
    align-items: center;
    gap: 0.5rem; 
  }
`;

export const CategoryItemContent = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
`;
