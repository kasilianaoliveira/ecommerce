import styled from 'styled-components'

type CustomInputContainerProps = {
  hasError?: boolean
}

export const CustomInputContainer = styled.input<CustomInputContainerProps>`
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
    props.hasError ? 'none' : `2px solid var(--placeholder)`
  }

}
`