import styled from 'styled-components';

export const LoginContainer = styled.div`
  height: 100%;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto; 

  display: flex;
`;
export const LoginContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-grow: 1;
  margin: 10px 0;
  gap: 100px;
  
  img {
    width: 50%;
    height: 90%;
    object-fit: cover;
    border-radius: 20px;
  }
`;

export const LoginHeadline = styled.p`
  font-weight: 600;
  font-size: 1.3rem;
  margin-bottom: 20px;
  color: var(--dark-500);
`

export const LoginSubtitle = styled.p`
  color: var(--dark-500);
  padding-bottom: 1.25rem;
  border-bottom: 1px solid #6c757d;
  width: 100%;
  margin-top: 1.25rem;
  text-align: center;
  font-weight: 500;
  margin-bottom: 1.25rem;
`


export const LoginContentForm = styled.div`
  width: 50%;
   display: flex; 
   flex-direction: column;
   align-items: center;
   justify-content: center;
`;