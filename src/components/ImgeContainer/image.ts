import styled from 'styled-components';

export const ImageContent = styled.img`

    width: 50%;
    max-height: 750px;
    border-radius: 20px;
    object-fit: cover;


    @media (max-width: 650px) {
    display: none;
  }
  
`;
