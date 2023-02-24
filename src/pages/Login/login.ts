import styled from 'styled-components';

type CustomInputContainerProps = {
  hasError?: boolean
}


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
  gap: 50px;

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

   gap: 10px;

`;

export const LoginInputContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-bottom: 1.25rem;
`;

export const InputContainer = styled.input<CustomInputContainerProps>`
  border: none;

  width: 100%;
  background-color: var(--input);

  padding: 1rem;

  border-radius: 10px;

  color: var(--black-500);
  border: ${(props) => (props.hasError ? `2px solid var(--error)` : 'none')};

  &::placeholder {
    color: ${(props) =>
    props.hasError ? 'var(--error)' : 'var(--placeholder)'};
  }

  &:focus {
      outline: ${(props) =>
    props.hasError ? 'none' : `2px solid var(--placeholder)`}
  }
`;


export const RegisterButton = styled.span`
  font-weight: 600;
  margin-left: 8px;
`;