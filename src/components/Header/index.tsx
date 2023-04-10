
import { signOut } from 'firebase/auth';
import { useContext } from 'react';
import { BsHandbag } from 'react-icons/bs';
import { BsHeart } from 'react-icons/bs';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../../context/userContext';
import { auth } from '../config/firestore.config';
import { HeaderContainer, HeaderIconsItems, HeaderListItems, HeaderItemsContainer, HeaderTitle, IconItem} from './header';

export const Header = () => {
  const { isAuthenticated } = useContext(UserContext);

  const navigate = useNavigate();

  const handleRedirectClick = (link?: string) => {
    navigate(`/${link}`)
  }


  return (
    <HeaderContainer >
      <HeaderItemsContainer>
        <HeaderTitle onClick={() => handleRedirectClick('')} aria-label="Norm Club" tabIndex={1}>
          Norm club
        </HeaderTitle>

        <HeaderListItems>
          <li aria-label="Masculino" tabIndex={2}>Masculino</li>
          <li aria-label="Feminino" tabIndex={3}>Feminino</li>
          <li aria-label="Tênis" tabIndex={4}>Tênis</li>
          <li aria-label="Chapéus" tabIndex={5}>Chapéus</li>
          <li aria-label="Jaquetas" tabIndex={6}>Jaquetas</li>

        </HeaderListItems>

        <HeaderIconsItems>


          {!isAuthenticated &&
            <>
              <IconItem onClick={() => handleRedirectClick('login')} aria-label="Login" tabIndex={7}>
                <p>Login</p>
              </IconItem>
              <IconItem onClick={() => handleRedirectClick('cadastro')} aria-label="Cadastro" tabIndex={8}>
                <p>Cadastro</p>
              </IconItem>
            </>
          }
          {
            isAuthenticated && <IconItem onClick={() => signOut(auth)}  aria-label="Sair" tabIndex={9}>
              <p>Sair</p>
            </IconItem>
          }

          <IconItem aria-label="Favoritos" tabIndex={10}>
            <BsHeart size={22} onClick={() => handleRedirectClick('favoritos')}/>
          </IconItem>

          <IconItem aria-label="Carrinho de compras" tabIndex={11}>
            <BsHandbag size={22} onClick={() => handleRedirectClick('carrinho')} />
            <span>5</span>
          </IconItem>
          {/* 
          add nome da pessoa "Olá, fulano"

          } */}

        </HeaderIconsItems>

      </HeaderItemsContainer>
    </HeaderContainer>
  )
}
