import styled from 'styled-components'

export const CustomButtonContainer = styled.button`
  width: 100%;

  background-color: var(--black-500);
  color: var(--white);

  display: flex;
  align-items: center;
  justify-content: center;

  border-radius: 0.625rem;
  padding: 1rem;

  font-weight: 600;
  transition: all 0.5s ease;

  &:hover {
    cursor: pointer;
    background-color: var(--black);
  }
`

export const IconContainer = styled.div`
  margin-right: 0.5rem;
  height: 100%;
  display: flex;
  align-items: center;
`