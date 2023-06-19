import { useCallback, useContext, useEffect } from 'react';


import { CategoryItem } from '../CategoryItem/index';
import { CategoriesContainer, CategoriesContent } from './categories';
import { CategoriesContext } from '../../context/categoriesContext';
import { Loading } from '../Loading';

export const Categories = () => {

  const { categories,fetchCategories, isLoadingCategories } = useContext(CategoriesContext);

  // const memoizedFetchCategories = useCallback(() => {
  //   fetchCategories();
  // }, [fetchCategories]);

  // useEffect(() => {
  //   memoizedFetchCategories();
  // }, [memoizedFetchCategories]);

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
