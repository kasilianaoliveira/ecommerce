import { createContext, FC, ReactNode, useCallback, useEffect, useState } from 'react';
import { getAuth } from 'firebase/auth';
import { addDoc, collection, deleteDoc,  getDocs, query, where } from 'firebase/firestore';

import { Product } from '../types/Product';
import { FavoritesContextData } from './ContextTypes';
import { db } from '../components/config/firestore.config';
import { toast } from 'react-toastify';
import { favoriteConverter } from '../converters/firestore.converters';
import { Favorites } from '../types/Favorites';

interface FavoritesProviderProps {
  children: ReactNode;
}


export const FavoritesContext = createContext({} as FavoritesContextData);

export const FavoritesContextProvider: FC<FavoritesProviderProps> = ({
  children,
}: FavoritesProviderProps) => {


  const [productFavorite, setProductFavorite] = useState<Product[]>([]);

  const fetchFavoritesByUser = async () => {
    try {
      const auth = getAuth();
      const user = auth.currentUser;
      auth.onAuthStateChanged(async (user) => {
        if (user) {
          const userId = user.uid;
          const favoritesFromFirestore: Favorites[] = [];

          const querySnapshot = await getDocs(
            query(
              collection(db, "favorites").withConverter(favoriteConverter),
              where("userId", "==", userId)
            )
          );

          querySnapshot.forEach((doc) => {
            favoritesFromFirestore.push(doc.data());
          });


          setProductFavorite(favoritesFromFirestore);
        }
      });
    } catch (error) {
      console.error('Erro ao buscar os favoritos do usuário:', error);
    }
  };
  const addFavorite = async (favorite: Product) => {
    try {
      const auth = getAuth();
      const user = auth.currentUser;

      if (user) {
        const userId = user.uid;

        const querySnapshot = await getDocs(
          query(
            collection(db, `favorites`),
            where("userId", "==", userId),
            where("id", "==", favorite.id)
          )
        );
        const favoriteDocs = querySnapshot.docs[0]?.data();

        if (!favoriteDocs) {
          await addDoc(collection(db, `favorites`), {
            userId: userId,
            id: favorite.id,
            name: favorite.name,
            price: favorite.price,
            imageUrl: favorite.imageUrl
          });
          await fetchFavoritesByUser();

          toast.success('Produto adicionado aos favoritos com sucesso!', {
            position: "bottom-left",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          });

        } else {
          toast.error('Este produto já está na lista de favoritos!', {
            position: "bottom-left",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          });
        }
      }
    } catch (error) {
      console.log(error);
    }
  };

  const removeFavorite = async (favoriteId: string) => {
    try {
      const auth = getAuth();
      const user = auth.currentUser;

      if (user) {
        const userId = user.uid;

        const querySnapshot = await getDocs(
          query(
            collection(db, "favorites"),
            where("userId", "==", userId),
            where("id", "==", favoriteId)
          )
        );
        const favoriteDocs = querySnapshot.docs[0];

        if (favoriteDocs) {
          await deleteDoc(favoriteDocs.ref);
          await fetchFavoritesByUser();

          toast.success("Produto removido com sucesso dos favoritos!", {
            position: "bottom-left",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          });
        } else {
          toast.error("Produto não encontrado.", {
            position: "bottom-left",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          });
        }
      }
    } catch (error) {
      console.error("Erro ao remover o favorito:", error);
    }
  };


  useEffect(() => {
    fetchFavoritesByUser();
  }, []);

  return (
    <FavoritesContext.Provider
      value={{
        fetchFavoritesByUser,
        addFavorite,
        removeFavorite,
        productFavorite
      }}
    >
      {children}
    </FavoritesContext.Provider>
  );
};