import { FC } from 'react';
import { Link, useNavigate } from 'react-router-dom'
import { SlArrowRight } from 'react-icons/sl'

import { Category } from '../../types/category';
import { ProductCategory } from '../ProductCategory';
import { CategoryItemContainer, CategoryItemContent, CategoryTitleHeader, CategoryView } from './categoryItem';

interface CategoryItemProps {
  category: Category;
}
export const CategoryItem: FC<CategoryItemProps> = ({ category }) => {

  const navigate = useNavigate();
  const redirect = (name: string) => navigate(`/produtos/${name}`)
  return (

    <CategoryItemContainer>
      <CategoryTitleHeader>
        <h3>{category.displayName}</h3>
        <CategoryView onClick={() => redirect(category.displayName)}>
          <p>Ver tudo</p>
          <SlArrowRight />
        </CategoryView>
      </CategoryTitleHeader>

      <CategoryItemContent>
        {
          category.products?.map((product, index) =>
            index <= 3 && (<ProductCategory key={product.id} product={product} />)
          )
        }
      </CategoryItemContent>

    </CategoryItemContainer>
  )
}
