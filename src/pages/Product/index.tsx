import { FormEvent, useContext, useEffect, useState } from 'react';
import { Header } from '../../components/Header'
import { ProductCategory } from '../../components/ProductCategory'
import { CategoriesContext } from '../../context/categoriesContext';
import { useParams } from 'react-router-dom';
import { ContentFilter, ProductContainer, ProductContent, ProductFilter } from './product';

export const Product = () => {
  const { categories, fetchCategories, isLoadingCategories } = useContext(CategoriesContext);
  const [searchTerm, setSearchTerm] = useState('');

  const [selectedOption, setSelectedOption] = useState('');

  const handleInputChange = (event: any) => {
    setSearchTerm(event.target.value);
  };


  const handleSelectChange = (event: any) => {
    setSelectedOption(event.target.value);
  };


  const { nameProduct } = useParams();

  console.log(selectedOption)
  useEffect(() => {
    fetchCategories()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const options = [
    { value: '', label: 'Todos os preços' },
    { value: 'low', label: 'Até R$ 200' },
    { value: 'medium', label: 'De R$ 200 a R$ 400' },
    { value: 'high', label: 'Acima de R$ 500' }
  ];

  const filteredProducts = categories
    .filter(category => category.displayName === nameProduct)
    .map(category => category.products)
    .flat()
    .filter(product => product.name.toLowerCase().includes(searchTerm.toLowerCase()))
    .filter(product => {
      if (selectedOption === '') {
        return true; // Se nenhum intervalo de preço for selecionado, todos os produtos são exibidos
      }
      if (selectedOption === 'low') {
        return product.price >= 0 && product.price <= 200;
      } else if (selectedOption === 'medium') {
        return product.price > 200 && product.price <= 499;
      } else if (selectedOption === 'high') {
        return product.price >= 500;
      }
      return false;
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
          <select value={selectedOption} onChange={handleSelectChange}>
            {options.map((option, index) => (
              <option
                key={index}
                value={option.value}

              >
                {option.label}
              </option>
            ))}
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
