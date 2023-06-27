import styled from 'styled-components';

export const LoadingContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100vw;
  background-color: rgba(0, 0, 0, 0.3);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  p {
    color: var(--white);
    font-weight: 500;
    margin-bottom: 25px;
    font-size: 1.325rem;
    text-align: center;
    max-width: 21.875rem;
  }
`;
