
import { onAuthStateChanged } from "firebase/auth";
import { useContext } from "react";
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

function App() {

  const { loginUser, isAuthenticated, logoutUser } = useContext(UserContext);

  onAuthStateChanged(auth, async (user) => {


    const isSigningOut = isAuthenticated && !user;
    if (isSigningOut) {
      return logoutUser();
    }

    const isSigningIn = !isAuthenticated && user;
    if (isSigningIn) {
      const querySnapshot = await getDocs(query(collection(db, 'users').withConverter(userConverter), where('id', '==', user.uid)))
      const userFromFirestore = querySnapshot.docs[0]?.data()
      return loginUser(userFromFirestore);
    }

  })

  return (
    <ChakraProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/cadastro" element={<Register />} />
          <Route path="/favoritos" element={<Favorites />} />
        </Routes>
      </BrowserRouter>
    </ChakraProvider>
  );
}

export default App;
