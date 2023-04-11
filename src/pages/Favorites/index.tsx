import { useContext, useState } from 'react';
import { Header } from '../../components/Header';
import { ProductCategory } from '../../components/ProductCategory'
import { CategoriesContext } from '../../context/categoriesContext';
import { FavoriteCard, FavoriteContainer, FavoriteContent, FavoriteTitleHeader, FavoriteNotFoundContainer, NotFoundTextContent } from './favorite';
import favoriteNotFound from '../../assets/notFound.svg';
export const Favorites = () => {

  const { productFavorite } = useContext(CategoriesContext);

  const favoritesExists = productFavorite.length

  return (
    <>
      <Header />
      <FavoriteContainer>

        <FavoriteContent>

          <FavoriteTitleHeader>
            <h3>Favoritos</h3>
          </FavoriteTitleHeader>


          {

            favoritesExists ?
              (<FavoriteCard>
                {
                  productFavorite.map((product) => (
                    <ProductCategory product={product} key={product.id} />
                  ))
                }
              </FavoriteCard>)
              : (
                <FavoriteNotFoundContainer>
                  <img src={favoriteNotFound} alt="" />
                  <NotFoundTextContent>
                    <p>Você ainda não tem favoritos.</p>
                    <p>Favorite um para poder ver aqui</p>
                  </NotFoundTextContent>
                </FavoriteNotFoundContainer>
              )
          }


        </FavoriteContent>
      </FavoriteContainer>
    </>
  )
}
