import { FormEvent, useContext, useEffect, useState } from 'react';
import { Header } from '../../components/Header'
import { ProductCategory } from '../../components/ProductCategory'
import { CategoriesContext } from '../../context/categoriesContext';
import { useParams } from 'react-router-dom';
import { ContentFilter, ProductContainer, ProductContent, ProductFilter } from './product';

export const Product = () => {
  const { categories, fetchCategories, isLoadingCategories } = useContext(CategoriesContext);
  const [searchTerm, setSearchTerm] = useState('');
  const [priceRange, setPriceRange] = useState('');

  const handleInputChange = (event: any) => {
    setSearchTerm(event.target.value);
  };


  const handlePriceRangeChange = (event: any) => {
    setPriceRange(event.target.value);
  };

  const { nameProduct } = useParams();

  useEffect(() => {
    fetchCategories()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])



  const filteredProducts = categories
    .filter(category => category.displayName === nameProduct)
    .map(category => category.products)
    .flat()
    .filter(product => product.name.toLowerCase().includes(searchTerm.toLowerCase()))
    .filter(product => {
      if (priceRange === '') {
        return true; // Se nenhum intervalo de preço for selecionado, todos os produtos são exibidos
      }
      if (priceRange === 'low') {
        return product.price >= 0 && product.price <= 200;
      } else if (priceRange === 'medium') {
        return product.price > 200 && product.price <= 499;
      } else if (priceRange === 'high') {
        return product.price >= 500;
      }
    });




  return (
    <ProductContainer>
      <Header />
      {/* <h1>Produtos</h1> */}
      <ProductFilter>

        <ContentFilter>
          <input
            type="text"
            placeholder="Digite nome do produto"
            value={searchTerm}
            onChange={handleInputChange}
          />
          <select value={priceRange} onChange={handlePriceRangeChange}>
            <option value="">Todos os preços</option>
            <option value="low">Até R$ 200</option>
            <option value="medium">De R$ 200 a R$ 400</option>
            <option value="high">Acima de R$ 500</option>
          </select>

        </ContentFilter>
        <ProductContent>
          {filteredProducts.map(product => (
            <ProductCategory
              key={product.id}
              product={product}
            />
          ))}
        </ProductContent>
      </ProductFilter>
    </ProductContainer>
  )
}
