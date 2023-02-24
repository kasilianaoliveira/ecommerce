import { FC, useContext } from 'react'
import { BsHeart } from "react-icons/bs";
import { BsHeartFill } from "react-icons/bs";
import { CategoriesContext } from '../../context/categoriesContext';


import { Product } from '../../types/Product';
import { ProductContainer, ProductContent, ProductItemFavorite, ProductItemPrice } from "./ProductCategory";

interface productProps {
  product: Product;
}
export const ProductCategory: FC<productProps> = ({ product }) => {

  const filterPrice = product.price.toLocaleString("pt-br", {
    style: "currency",
    currency: "BRL",
  });


  const { productFavorite, addProductFavorite, removeProductFavorite } = useContext(CategoriesContext);

  const isFavorite = productFavorite.some(productFavorite => productFavorite.id === product.id);

  return (
    <ProductContainer>
      <img src={product.imageUrl} alt={`Imagem de ${product.name}`} />
      <ProductContent>
        <ProductItemFavorite>
          <p>{product.name}</p>
          {!isFavorite
            ? <BsHeart size={18} onClick={() => isFavorite
              ? removeProductFavorite(product.id)
              : addProductFavorite(product)}
            />
            : <BsHeartFill size={18} onClick={() => isFavorite
              ? removeProductFavorite(product.id)
              : addProductFavorite(product)}
            />
          }
        </ProductItemFavorite>
        <ProductItemPrice>
          {filterPrice}
        </ProductItemPrice>
      </ProductContent>
    </ProductContainer>
  )
}
