import { useContext } from 'react';


import { CategoryItem } from '../CategoryItem/index';
import { CategoriesContainer, CategoriesContent } from './categories';
import { CategoriesContext } from '../../context/categoriesContext';

export const Categories = () => {
  const { categories } = useContext(CategoriesContext);



  return (
    <CategoriesContainer>
      <CategoriesContent>
        {categories.map((category) => (
          <CategoryItem category={category} key={category.id} />
        ))}
      </CategoriesContent>

    </CategoriesContainer>
  )
}
