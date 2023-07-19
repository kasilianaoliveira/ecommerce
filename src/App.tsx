
import { onAuthStateChanged } from "firebase/auth";
import { useContext, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { auth, db } from "./components/config/firestore.config";
import { Favorites } from "./pages/Favorites";
import { Home } from "./pages/Home/Index";
import { Login } from "./pages/Login";
import { Register } from './pages/Register/index';
import { UserContext } from './context/userContext';
import { collection, getDocs, query, where } from "firebase/firestore";
import { ChakraProvider } from "@chakra-ui/react";
import { userConverter } from "./converters/firestore.converters";
import { Loading } from "./components/Loading";
import { Product } from "./pages/Product";
import { Cart } from "./components/Cart";
import { Checkout } from "./pages/Checkout";
import AuthenticationGuard from "./guards/authentication.guard";
import PaymentConfirmationPage from "./pages/PaymentConfirmation";

function App() {

  const [isInitializing, setIsInitializing] = useState(false);

  const { loginUser, isAuthenticated, logoutUser } = useContext(UserContext);

  onAuthStateChanged(auth, async (user) => {


    const isSigningOut = isAuthenticated && !user;
    if (isSigningOut) {
      logoutUser();
      return setIsInitializing(false)
    }

    const isSigningIn = !isAuthenticated && user;
    if (isSigningIn) {
      const querySnapshot = await getDocs(query(collection(db, 'users').withConverter(userConverter), where('id', '==', user.uid)))
      const userFromFirestore = querySnapshot.docs[0]?.data()
      loginUser(userFromFirestore);

      return setIsInitializing(false)
    }


  })

  if(isInitializing) return null;

  return (
    <ChakraProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/cadastro" element={<Register />} />
          <Route path="/favoritos" element={<Favorites />} />
          <Route path="/produtos/:nameProduct" element={<Product />} />
          <Route path="/checkout" element={<AuthenticationGuard><Checkout /></AuthenticationGuard>} />
          <Route path="/payment-confirmation" element={<PaymentConfirmationPage />} />
        </Routes>
        <Cart/>
      </BrowserRouter>
    </ChakraProvider>
  );
}

export default App;
