
import { signOut } from 'firebase/auth';
import { useContext, useState } from 'react';
import { BsHandbag } from 'react-icons/bs';
import { IoPersonOutline } from 'react-icons/io5'
import { BiMenu } from 'react-icons/bi';

import { BsHeart } from 'react-icons/bs';
import { Link, useNavigate } from 'react-router-dom';
import { UserContext } from '../../context/userContext';
import { auth } from '../config/firestore.config';
import { HeaderContainer, HeaderIconsItems, HeaderListItems, HeaderItemsContainer, HeaderTitle, IconItem, NavBar, StyledIconItem } from './header';
import { CartContext } from '../../context/cartContext';

export const Header = () => {
  const { toggleCart, products } = useContext(CartContext)
  const { isAuthenticated } = useContext(UserContext);

  const [isOpen, setIsOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsOpen((isOpen) => !isOpen);
    console.log(isOpen)
  };

  const navigate = useNavigate();

  const handleRedirectClick = (link?: string) => {
    navigate(`/${link}`)
  }
  const totalQuantity = products.reduce((accumulator, product) =>
    accumulator + product.quantity, 0);

  return (
    <HeaderContainer >
      <HeaderItemsContainer>
        <HeaderTitle onClick={() => handleRedirectClick('')} aria-label="Norm Club" tabIndex={1}>
          Dream Store
        </HeaderTitle>

        <NavBar >

          {/* <Menu> */}
          <HeaderListItems isActiveMobile={isOpen}>
            <li >
              <Link to="/produtos/Masculino">Masculino</Link>
            </li>
            <li >
              <Link to="/produtos/Feminino">Feminino</Link>
            </li>
            <li >
              <Link to="/produtos/Chapéus">Chapéus</Link>
            </li>
            <li >
              <Link to="/produtos/Jaquetas">Jaquetas</Link>
            </li>
            <li >
              <Link to="/produtos/Tênis">Tênis</Link>
            </li>

          </HeaderListItems>


          {/* </Menu> */}
        </NavBar>




        <HeaderIconsItems isOpen={isOpen}>

          {!isAuthenticated &&
            <>
              <IconItem onClick={() => handleRedirectClick('login')} aria-label="Login" tabIndex={7}>
                <IoPersonOutline size={24} />
              </IconItem>
            </>
          }
          {
            isAuthenticated && <IconItem onClick={() => signOut(auth)} aria-label="Sair" tabIndex={9}>
              <p>Sair</p>
            </IconItem>
          }

          <IconItem aria-label="Favoritos" tabIndex={10}>
            <BsHeart size={22} onClick={() => handleRedirectClick('favoritos')} />
          </IconItem>

          <IconItem aria-label="Carrinho de compras" tabIndex={11}>
            <BsHandbag size={22} onClick={toggleCart} />
            <span>{totalQuantity}</span>
          </IconItem>


          {/* 
          add nome da pessoa "Olá, fulano"

          } */}

        </HeaderIconsItems>


        <StyledIconItem aria-label="Menu com items" tabIndex={11} isOpen={isOpen}>

          <BiMenu size={40} onClick={handleMenuToggle}  />
        </StyledIconItem>

      </HeaderItemsContainer>
    </HeaderContainer>
  )
}
