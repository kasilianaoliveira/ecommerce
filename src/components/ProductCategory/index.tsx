import React, { FC } from 'react'
import { BsHeart } from "react-icons/bs";

import { Product } from "../../types/Product"
import { ProductContainer, ProductContent, ProductItemFavorite, ProductItemPrice } from "./ProductCategory";

interface productProps {
  product: Product;
}
export const ProductCategory: FC<productProps> = ({ product }) => {

  const filterPrice = product.price.toLocaleString("pt-br", {
    style: "currency",
    currency: "BRL",
  });

  return (
    <ProductContainer>
      <img src={product.imageUrl} alt={`Imagem de ${product.name}`} />
      <ProductContent>
        <ProductItemFavorite>
          <p>{product.name}</p>
          <BsHeart size={18} />
        </ProductItemFavorite>
        <ProductItemPrice>
          {filterPrice}
        </ProductItemPrice>
      </ProductContent>
    </ProductContainer>
  )
}
