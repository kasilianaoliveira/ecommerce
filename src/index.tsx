import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import "./global.css";
import { UserContextProvider } from './context/userContext';
import { CategoriesContextProvider } from './context/categoriesContext';
import { CartContextProvider } from './context/cartContext';
import { FavoritesContextProvider } from './context/favoriteContext';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <FavoritesContextProvider>
      <CategoriesContextProvider>
        <UserContextProvider>
          <CartContextProvider>
            <App />
          </CartContextProvider>
        </UserContextProvider>
      </CategoriesContextProvider>
    </FavoritesContextProvider>
  </React.StrictMode>
);


reportWebVitals();
