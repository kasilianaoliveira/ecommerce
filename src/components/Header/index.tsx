import { BsHandbag } from 'react-icons/bs';
import { BsPerson } from 'react-icons/bs';
import { BsHeart } from 'react-icons/bs';
import { Link, useNavigate } from 'react-router-dom';
import { HeaderContainer, HeaderIconsItems, HeaderListItems, HeaderItemsContainer, HeaderTitle, IconItem } from './header';

export const Header = () => {
  const navigate = useNavigate();

  const handleLoginClick = () => {
    navigate('/login')
  }
  return (
    <HeaderContainer >
      <HeaderItemsContainer>
        <HeaderTitle>
          Norm club
        </HeaderTitle>

        <HeaderListItems>
          <li>Explorar</li>
          <li>Feminina</li>
          <li>Masculina</li>
          <li>Esporte</li>
        </HeaderListItems>

        <HeaderIconsItems>
          <IconItem>
            <BsHeart size={22} />
          </IconItem>
          <IconItem onClick={handleLoginClick}>
            <BsPerson size={27} />
          </IconItem>
          <IconItem>
            <BsHandbag size={22} />
            <span>5</span>
          </IconItem>
        </HeaderIconsItems>

      </HeaderItemsContainer>
    </HeaderContainer>
  )
}
