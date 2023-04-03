
import { useContext } from 'react';
import { BsHandbag } from 'react-icons/bs';
import { BsPerson } from 'react-icons/bs';
import { BsHeart } from 'react-icons/bs';
import { useNavigate } from 'react-router-dom';
import { CategoriesContext } from '../../context/categoriesContext';
import { HeaderContainer, HeaderIconsItems, HeaderListItems, HeaderItemsContainer, HeaderTitle, IconItem, ImageIcon } from './header';

export const Header = () => {
  const navigate = useNavigate();

  const handleRedirectClick = (link?: string) => {
    navigate(`/${link}`)
  }

  const { profile } = useContext(CategoriesContext);

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


          {
            !!profile === false && (
              <>
                <IconItem onClick={() => handleRedirectClick('login')}>
                  <p>Login</p>
                </IconItem>
                <IconItem onClick={() => handleRedirectClick('cadastro')}>
                  <p>Cadastro</p>
                </IconItem>
              </>
            )

          }

          <IconItem onClick={() => handleRedirectClick('favoritos')}>
            <BsHeart size={22} />
          </IconItem>

          <IconItem>
            <BsHandbag size={22} onClick={() => handleRedirectClick('carrinho')} />
            <span>5</span>
          </IconItem>
{/* 
          {
            !profile ? (
              <IconItem>
                <ImageIcon src={profile} alt="foto de perfil" />
              </IconItem>
            ) : (
              <IconItem>
                <BsPerson size={27} />
              </IconItem>
            )

          } */}

        </HeaderIconsItems>

      </HeaderItemsContainer>
    </HeaderContainer>
  )
}
