import styled from "styled-components";

export const ProductContainer = styled.div`

`;

export const ProductFilter = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 50px 0;

  input {
    width: 31.25rem;
    border-radius: 10px;
    padding: 15px;
    background:#e2e2e2;
    color: black;
    outline: 0;

    ::placeholder{
      color: #b4b4b4;
    }
  }
`;
export const ContentFilter = styled.div`
  width: 100%;
  max-width: 1200px;
  display: flex;
  justify-content: space-between;


  select {
    outline: 0;
    border-radius: 10px;


    option{
    border-radius: 10px;

      
    :hover {
      background-color: #ebedef;
    }
   }
  }


`;
export const ProductContent = styled.div`
  max-width: 1200px;
  width: 100%;
  /* margin: 0 auto;   */
  /* height: 100vh; */

  display: flex;
  flex-wrap: wrap;
  /* flex-direction: column; */
`;