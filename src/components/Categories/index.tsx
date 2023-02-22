import React, { useEffect, useState } from 'react';

import { Category } from '../../types/category';

import { CategoryItem } from '../CategoryItem/index';
import { getDocs, collection } from "firebase/firestore";
import { db } from '../config/firestore.config';
import "./styles.css"
import { env } from '../config/env.config';
import axios from 'axios';

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
    <div className='categories-container'>
      <div className='content-categories'>
        {categories.map((category, index) => (
          <CategoryItem category={category} key={category.id} index={index} />
        ))}
      </div>

    </div>
  )
}
