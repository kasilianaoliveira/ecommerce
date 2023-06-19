import { useContext, useEffect } from 'react';
import { Header } from '../../components/Header'
import { ProductCategory } from '../../components/ProductCategory'
import { CategoriesContext } from '../../context/categoriesContext';
import { useParams } from 'react-router-dom';
import { ProductContainer, ProductContent } from './product';

export const Product = () => {
  const { categories, fetchCategories, isLoadingCategories } = useContext(CategoriesContext);

  const { nameProduct } = useParams();

  useEffect(() => {
    fetchCategories()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const filteredProducts = categories
    .filter(category => category.displayName === nameProduct)
    .map(category => category.products)
    .flat()



  return (
    <ProductContainer>
      <Header />
      {/* <h1>Produtos</h1> */}
      <ProductContent>
        {filteredProducts.map(product => (
          <ProductCategory
            key={product.id}
            product={product}
          />
        ))}
      </ProductContent>
    </ProductContainer>
  )
}
