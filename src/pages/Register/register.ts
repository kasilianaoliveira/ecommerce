import styled from 'styled-components';

type CustomInputContainerProps = {
  hasError?: boolean
}


export const RegisterContainer = styled.div`
  height: 100%;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto; 

  display: flex;
  flex-direction: column;
`;
export const RegisterContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-grow: 1;
  margin: 50px 0;
  gap: 50px;
  

`;

export const RegisterHeadline = styled.p`
  font-weight: 600;
  font-size: 1.3rem;
  margin-bottom: 1rem;
  color: var(--dark-500);
`

export const RegisterSubtitle = styled.p`
  color: var(--dark-500);
  padding-bottom: 1rem;

  border-bottom: 1px solid #6c757d;

  width: 100%;

  margin-top: 1rem;

  text-align: center;
  font-weight: 500;
  margin-bottom: 1.25rem;
`


export const RegisterContentForm = styled.div`
  width: 50%;
  /* max-height: 600px; */
  display: flex; 
  flex-direction: column;
  align-items: center;
  justify-content: center;

   gap: 5px;

`;

export const RegisterInputContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-bottom: 0.5rem;
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

export const RegisterButtonRedirect = styled.div`
  margin-top:10px;
`;

export const RegisterButton = styled.span`
  font-weight: 600;
  margin-left: 8px;
`;