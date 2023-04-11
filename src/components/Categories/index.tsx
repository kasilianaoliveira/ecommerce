import { useContext } from 'react';


import { CategoryItem } from '../CategoryItem/index';
import { CategoriesContainer, CategoriesContent } from './categories';
import { CategoriesContext } from '../../context/categoriesContext';
import { Loading } from '../Loading';

export const Categories = () => {

  const { categories, isLoadingCategories } = useContext(CategoriesContext);

  return (
    <CategoriesContainer>
      <CategoriesContent>

        {isLoadingCategories && <Loading />}

        {categories.map((category) => (
          <CategoryItem category={category} key={category.id} />
        ))}
      </CategoriesContent>

    </CategoriesContainer>
  )
}
