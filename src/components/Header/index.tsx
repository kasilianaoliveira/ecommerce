
import { BsHandbag } from 'react-icons/bs';
import { BsPerson } from 'react-icons/bs';
import { BsHeart } from 'react-icons/bs';
import { useNavigate } from 'react-router-dom';
import { HeaderContainer, HeaderIconsItems, HeaderListItems, HeaderItemsContainer, HeaderTitle, IconItem } from './header';

export const Header = () => {
  const navigate = useNavigate();

  const handleRedirectClick = (link?: string) => {
    navigate(`/${link}`)
  }

  return (
    <HeaderContainer >
      <HeaderItemsContainer>
        <HeaderTitle onClick={() => handleRedirectClick('')}>
          Norm club
        </HeaderTitle>

        <HeaderListItems>
          <li>Explorar</li>
          <li>Feminina</li>
          <li>Masculina</li>
          <li>Esporte</li>
        </HeaderListItems>

        <HeaderIconsItems>

          <IconItem onClick={() => handleRedirectClick('favoritos')}>
            <BsHeart size={22} />
          </IconItem>

          <IconItem onClick={() => handleRedirectClick('login')}>
            <BsPerson size={27} />
          </IconItem>
          <IconItem>
            <BsHandbag size={22} onClick={() => handleRedirectClick('carrinho')} />
            <span>5</span>
          </IconItem>
        </HeaderIconsItems>

      </HeaderItemsContainer>
    </HeaderContainer>
  )
}
