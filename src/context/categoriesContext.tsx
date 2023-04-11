import { createContext, FC, ReactNode, useEffect, useState } from 'react';
import { getDocs, collection } from "firebase/firestore";
import { db } from '../components/config/firestore.config';

import { Category } from '../types/category';

import { Product } from '../types/Product';
import { ProductContextData } from './ContextTypes';
import { categoryConverter } from '../converters/firestore.converters';
import { Loading } from '../components/Loading';

interface ProductProviderProps {
  children: ReactNode;
}

export const CategoriesContext = createContext({} as ProductContextData);

export const CategoriesContextProvider: FC<ProductProviderProps> = ({
  children,
}: ProductProviderProps) => {

  //logica do produtos
  const [categories, setCategories] = useState<Category[]>([])
  const [profile, setProfile] = useState<string>('')
  const [isLoadingCategories, setIsLoadingCategories] = useState(false);



  const fetchCategories = async () => {
    try {
      setIsLoadingCategories(true)
      const categoriesFromFirestore: Category[] = []
      const querySnapshot = await getDocs(collection(db, 'categories').withConverter(categoryConverter))
      querySnapshot.forEach((doc) => {
        categoriesFromFirestore.push(doc.data())
      })
      setCategories(categoriesFromFirestore)

    } catch (error) {
      console.log({ error })
    } finally {
      setIsLoadingCategories(false);
    }
  }


  useEffect(() => {
    fetchCategories()
  }, [])


  //logica dos favoritos

  const [productFavorite, setProductFavorite] = useState<Product[]>([]);

  const addProductFavorite = (product: Product) => setProductFavorite([...productFavorite, product])

  const removeProductFavorite = (id: string) => {

    const filterRemove = productFavorite.filter(product => product.id !== id);
    setProductFavorite(filterRemove)
  }


  return (
    <CategoriesContext.Provider
      value={{
        categories,
        productFavorite,
        setProductFavorite,
        addProductFavorite,
        removeProductFavorite,
        profile,
        setProfile,
        isLoadingCategories
      }}
    >
      {children}
    </CategoriesContext.Provider>
  );
};