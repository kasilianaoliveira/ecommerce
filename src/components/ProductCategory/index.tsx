import { FC, useContext } from 'react'
import { BsHeart } from "react-icons/bs";
import { BsHeartFill } from "react-icons/bs";
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
import { ProductContainer, ProductContent, ProductItemFavorite, ProductItemPrice } from "./ProductCategory";
import { UserContext } from '../../context/userContext';
import { Link } from 'react-router-dom';
interface productProps {
  product: Product;
}
export const ProductCategory: FC<productProps> = ({ product }) => {

  const filterPrice = product.price.toLocaleString("pt-br", {
    style: "currency",
    currency: "BRL",
  });


  const { productFavorite, addProductFavorite, removeProductFavorite } = useContext(CategoriesContext);
  const { isAuthenticated } = useContext(UserContext);

  const isFavorite = productFavorite.some(productFavorite => productFavorite.id === product.id);
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <ProductContainer>
      <img src={product.imageUrl} alt={`Imagem de ${product.name}`} />
      <ProductContent>
        <ProductItemFavorite>
          <p>{product.name}</p>
          <>
            {isAuthenticated ? !isFavorite
              ? 
              <Button aria-label="Adicionar aos favoritos">
                <BsHeart size={18} onClick={() => isFavorite
                  ? removeProductFavorite(product.id)
                  : addProductFavorite(product)} />
              </Button>
              : 
              <Button aria-label="Remover dos favoritos">
                <BsHeartFill size={18} onClick={() => isFavorite
                  ? removeProductFavorite(product.id)
                  : addProductFavorite(product)} />
              </Button>
              :
              <Button onClick={onOpen}><BsHeart size={18} /></Button>
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
    </ProductContainer>
  )
}
