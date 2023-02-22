import styled from 'styled-components';

export const BannerContainer = styled.div`
  max-width: 1200px;
  margin: 50px auto;
  position: relative;
`;

export const ContentCard = styled.div`
  z-index: 1;

  position: absolute;
  right: 0px;
  top: 20%;

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
`;

export const BannerTitle = styled.h3`
  font-weight: 700;
  font-size: 2.5rem;
`;
export const DescriptionTitle = styled.p`
  font-weight: 500;
  font-size: 1.75rem;
  line-height: 2.375rem;
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
`;

export const ImageBanner = styled.img`
  width: 75rem;
  height: 34.375rem;

  border-radius: 10px;

  object-fit: cover;
  filter: brightness(70%)
`;
