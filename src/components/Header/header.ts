import styled from 'styled-components';

export const HeaderContainer = styled.header`
  width: 100%;
  position: relative;

  background-color: var(--white);
  color: var(--black-500);

  padding: 0 20px;
  /* margin: 0 20px; */
`;

export const HeaderItemsContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;

  display: flex;
  align-items: center;
  justify-content: space-between; //pensar sobre

`;

export const HeaderTitle = styled.h2`
  font-weight: bold;
  font-size: 1.5rem;
  margin-right: .3125rem;

  :hover {
    cursor: pointer;
  }
`;


export const HeaderListItems = styled.ul<{ isActiveMobile: boolean }>`
  font-weight: 500;
  font-size: 1rem;

  display: flex;
  align-items: center;
  gap: 2.5rem;

  cursor: pointer;


  @media (max-width: 820px) {
    width: 12.5rem;
    gap: 0.625rem;
    display: ${({ isActiveMobile }) => (isActiveMobile ? 'flex' : 'none')};
    flex-direction: column;
    /* align-items: self-start; */
    position: absolute;
    top: 40px;
    right: 0;
    z-index: 7;

    opacity: ${({ isActiveMobile }) => (isActiveMobile ? '1' : '0')};
    visibility: ${({ isActiveMobile }) => (isActiveMobile ? 'visible' : 'hidden')};
    transition: opacity 0.3s ease-in-out, visibility 0.3s ease-in-out; 

    li {
      width: 100%;
      height: 100%;
      padding: 0.625rem 0.9375rem;
    }
    li:hover {
      width: 100%;
      background:  rgba(0, 0, 0, 0.2);
    }

  }

  @media (max-width: 650px) {

  width: 50%;

}
`;


export const HeaderIconsItems = styled.div<{ isOpen: boolean }>`
  display: flex;
  align-items: center;
  gap: 20px;

  @media (max-width: 820px) {
    margin-right: 120px;
  }

  @media (max-width: 420px) {
    margin-right: 5rem;
  }
  
`;

export const IconItem = styled.div`
  display: flex;
  gap: 5px;
  cursor: pointer;
  span {
   font-weight: 600;
  }
`;

export const StyledIconItem = styled.div<{ isOpen: boolean }>`
  cursor: pointer;
  display: none;
  z-index: 5;
  @media (max-width: 820px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    background-color: ${({ isOpen }) => (isOpen ? '#ccc' : '')};
    height: 100vh;
    width: ${({ isOpen }) => (isOpen ? '200px' : '40px')};

    display: flex;
    justify-content: flex-end;
  }

  @media (max-width: 650px) {
    width: ${({ isOpen }) => (isOpen ? '50%' : '50px')};

    svg {
      margin-right: 20px;
    }
  }

  @media (max-width: 420px) {

   svg {
      margin-top: 18px;
    }
  }

`;


export const ImageIcon = styled.img`
 border-radius: 50%;
  cursor: pointer;
  width: 1.75rem;
`;


export const NavBar = styled.nav`
    display: flex;
    gap: 2.5rem;



`

