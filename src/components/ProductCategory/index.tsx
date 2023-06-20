import { FC, useContext } from 'react'
import { BsHeart } from "react-icons/bs";
import { BsHeartFill } from "react-icons/bs";
import { BsFillCartCheckFill } from "react-icons/bs";

import { CategoriesContext } from '../../context/categoriesContext';
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Button,
} from '@chakra-ui/react';

import { Product } from '../../types/Product';
import { ImageContainer, ProductContainer, ProductContent, ProductItemFavorite, ProductItemPrice } from "./ProductCategory";
import { UserContext } from '../../context/userContext';
import { Link } from 'react-router-dom';

import { ToastContainer, toast } from 'react-toastify';
import { FavoritesContext } from '../../context/favoriteContext';
import { CartContext } from '../../context/cartContext';
interface productProps {
  product: Product;
}
export const ProductCategory: FC<productProps> = ({ product }) => {

  const filterPrice = product.price.toLocaleString("pt-br", {
    style: "currency",
    currency: "BRL",
  });


  const { addFavorite, removeFavorite, productFavorite } = useContext(FavoritesContext);
  const { isAuthenticated } = useContext(UserContext);
  const { addProductToCart } = useContext(CartContext);


  const isFavorite = (product: Product): boolean => {
    return productFavorite.some((favorite) => favorite.id === product.id);
  };



  const handleAddToCartClick = (product: Product) => {
    addProductToCart(product);
  }
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <ProductContainer>
      <ImageContainer>
        <img src={product.imageUrl} alt={`Imagem de ${product.name}`} />
        <Button onClick={() => handleAddToCartClick(product)}>
          <BsFillCartCheckFill />
          Adicionar ao carrinho
        </Button>
      </ImageContainer>

      <ProductContent>
        <ProductItemFavorite>
          <p>{product.name}</p>
          <>
            {isAuthenticated ? !isFavorite(product)
              ?
              <Button aria-label="Adicionar aos favoritos">
                <BsHeart size={18} onClick={() => addFavorite(product)} />
              </Button>
              :
              <Button aria-label="Remover dos favoritos">
                <BsHeartFill size={18} onClick={() => removeFavorite(product.id)} />
              </Button>
              :
              <Button onClick={onOpen} aria-label='Modal'><BsHeart size={18} /></Button>
            }
            <Modal isOpen={isOpen} onClose={onClose}>
              <ModalOverlay />
              <ModalContent>
                <ModalHeader style={{ color: "#222121" }}>Desejar favoritar esse item?</ModalHeader>
                <ModalCloseButton />
                <ModalBody>
                  Faça login ou cadastra-se para conseguir favoritar um item!
                </ModalBody>

                <ModalFooter>
                  <Button colorScheme='white' mr={3} onClick={onClose} style={{ background: "#222121" }}>
                    Cancelar
                  </Button>
                  <Button variant='ghost' style={{ color: "#222121" }}>
                    <Link to="login">Realizar login</Link>
                  </Button>
                </ModalFooter>
              </ModalContent>
            </Modal>
          </>
        </ProductItemFavorite>
        <ProductItemPrice>
          {filterPrice}
        </ProductItemPrice>
      </ProductContent>
      <ToastContainer
        position="bottom-left"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </ProductContainer>
  )
}