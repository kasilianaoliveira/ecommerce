import { SlArrowRight } from 'react-icons/sl'
import { Link } from 'react-router-dom'
import "./styles.css"
import { Category } from '../../types/category';
import { FC } from 'react';
import { ProductCategory } from '../ProductCategory';

interface CategoryItemProps {
  category: Category;
  index?: number;
}
export const CategoryItem: FC<CategoryItemProps> = ({ category }) => {
  console.log(category.imageUrl)
  return (

    <div className="categories-content">
      <div className="content-title">
        <h3>{category.displayName}</h3>
        <Link to='/'>
          Ver tudo
          <SlArrowRight />
        </Link>
      </div>

      <div className="content-items">
        {
          category.products?.map((product, index) =>
            index <= 3 && (<ProductCategory key={product.id} product={product} />)
          )
        }
      </div>

    </div>
  )
}
