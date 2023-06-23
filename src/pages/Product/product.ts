import styled from "styled-components";

export const ProductContainer = styled.div`

`;

export const ProductFilter = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 50px 0;


`;
export const ContentFilter = styled.div`
  width: 100%;
  max-width: 1200px;
  padding: 0 15px;
  display: flex;
  justify-content: space-between;

  input {
    /* width: 31.25rem; */
    border-radius: 10px;
    padding: 15px;
    background:#e2e2e2;
    color: black;
    outline: 0;

    ::placeholder{
      color: #b4b4b4;
    }
  }
  select {

    padding: 15px;
    display: flex;
    align-items: center;
    outline: 0;
    border-radius: 10px;

  }

  @media (max-width: 820px) {
    width: 100%;
    justify-content: center;
    align-items: self-start;
    gap: 1.25rem;
    flex-direction: column;

    input,select {
     width: 100%;
    }


  }

`;
export const ProductContent = styled.div`
  max-width: 1200px;
  width: 100%;

  display: flex;
  flex-wrap: wrap;
`;