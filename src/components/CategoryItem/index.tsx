import { FC } from 'react';
import { Link } from 'react-router-dom'
import { SlArrowRight } from 'react-icons/sl'

import { Category } from '../../types/category';
import { ProductCategory } from '../ProductCategory';
import { CategoryItemContainer, CategoryItemContent, CategoryTitleHeader } from './categoryItem';

interface CategoryItemProps {
  category: Category;
  index?: number;
}
export const CategoryItem: FC<CategoryItemProps> = ({ category }) => {
  console.log(category.imageUrl)
  return (

    <CategoryItemContainer>
      <CategoryTitleHeader>
        <h3>{category.displayName}</h3>
        <Link to='/'>
          Ver tudo
          <SlArrowRight />
        </Link>
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
