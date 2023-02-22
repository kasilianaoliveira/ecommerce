import "./styles.css"
import React, { FC } from 'react'
import { Product } from "../../types/Product"
import { BsHeart } from "react-icons/bs";

interface productProps {
  product: Product;
}
export const ProductCategory: FC<productProps> = ({ product }) => {

  const filterPrice = product.price.toLocaleString("pt-br", {
    style: "currency",
    currency: "BRL",
  });

  return (
    <div className="product-item" >
      <img src={product.imageUrl} alt="" />
      <div className="product-text">
        <p className="product-favorite">
          {product.name}
          <BsHeart size={18} />
        </p>
        <p className="product-price">{filterPrice}</p>
      </div>
    </div>
  )
}
