import { useEffect, useState } from 'react';

import { getDocs, collection } from "firebase/firestore";
import { db } from '../config/firestore.config';

import { Category } from '../../types/category';
import { CategoryItem } from '../CategoryItem/index';
import { CategoriesContainer, CategoriesContent } from './categories';

export const Categories = () => {
  const [categories, setCategories] = useState<Category[]>([])


  const fetchCategories = async () => {
    try {
      const categoriesFromFirestore: Category[] = []
      const querySnapshot = await getDocs(collection(db, 'categories'))
      querySnapshot.forEach((doc: any) => {
        categoriesFromFirestore.push(doc.data())
      })
      console.log(categoriesFromFirestore)
      setCategories(categoriesFromFirestore)
    } catch (error) {
      console.log({ error })
    }
  }

  useEffect(() => {
    fetchCategories()
  }, [])


  return (
    <CategoriesContainer>
      <CategoriesContent>
        {categories.map((category, index) => (
          <CategoryItem category={category} key={category.id} index={index} />
        ))}
      </CategoriesContent>

    </CategoriesContainer>
  )
}
