import styled from 'styled-components';

export const BannerContainer = styled.div`
  max-width: 1200px;
  width: 100%;
  margin: 50px auto;
  position: relative;

  /* background-color: red; */

  @media (max-width: 650px) {
    padding: 0 20px;
  }

`;

export const ContentCard = styled.div`
  position: absolute;
  z-index: 1;
  top: 20%;
  right: 0;
  width: 37.5rem;
  height: 19.75rem;
  background: var(--transparent);
  backdrop-filter: blur(2.5px);
  border-radius: 24px 10px 0 24px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 0.9375rem;
  color: var(--black-500);
  padding: 48px;

  @media (max-width: 650px) {
    /* padding: 0 20px; */
    /* align-items: center; */
    right: 20px;
    width: calc(100% - 40px);
    height: 19.75rem;
  }


  @media (max-width: 420px) {
    top: 0;
    height: 100%;

    border-radius: 10px;
  }
  

`;

export const BannerTitle = styled.h3`
  font-weight: 700;
  font-size: 2.5rem;


  @media (max-width: 420px) {
    font-size: 1.875rem;
  }
`;
export const DescriptionTitle = styled.p`
  font-weight: 500;
  font-size: 1.75rem;
  line-height: 2.375rem;

  @media (max-width: 420px) {
    font-size: 1.25rem;
  }
`;


export const ButtonCard = styled.button`
  width: 11.25rem;
  height: 2.75rem;

  font-weight: 500;
  font-size: 1rem;
  padding: 10px 25px;

  background: var(--black-500);
  color: var(--white);
  border-radius: 8px;

  display: flex;
  align-items: center;
  gap: 8px;
  transition:  all .5s;

  &:hover {
    background-color: var(--black);
  }

  @media (max-width: 420px) {
    font-size: .875rem;
    width: 10rem;
    /* height: 2.75rem; */
  }
`;

export const ImageBanner = styled.img`

  width: 100%;
  height: 34.375rem;

  border-radius: 10px;

  object-fit: cover;
  filter: brightness(70%);

`;
