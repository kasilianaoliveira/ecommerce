import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import "./global.css";
import { UserContextProvider } from './context/userContext';
import { CategoriesContextProvider } from './context/categoriesContext';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <CategoriesContextProvider>
      <UserContextProvider>
        <App />
      </UserContextProvider>
    </CategoriesContextProvider>
  </React.StrictMode>
);


reportWebVitals();
