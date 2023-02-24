
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CategoriesContextProvider } from "./context/categoriesContext";

import { Favorites } from "./pages/Favorites";
import { Home } from "./pages/Home/Index";
import { Login } from "./pages/Login";
import { Register } from './pages/Register/index';


function App() {
  return (
    <CategoriesContextProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/cadastro" element={<Register />} />
          <Route path="/favoritos" element={<Favorites />} />
        </Routes>
      </BrowserRouter>
    </CategoriesContextProvider>
  );
}

export default App;
