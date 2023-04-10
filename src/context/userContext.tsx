import { createContext, FC, ReactNode, useContext, useEffect, useState} from 'react';
import { User } from '../types/User';
import { CategoriesContext } from './categoriesContext';

import { UserContextData } from './ContextTypes';


interface UserProviderProps {
  children: ReactNode;
}

export const UserContext = createContext({} as UserContextData);

export const UserContextProvider: FC<UserProviderProps> = ({
  children,
}: UserProviderProps) => {

  const [currentUser, setCurrentUser] = useState<User | null >(null)
  const { setProductFavorite } = useContext(CategoriesContext);

  const loginUser = (user: User) => {
    setCurrentUser(user);
  }
  const logoutUser = () => {
    setCurrentUser(null);
  }

 const isAuthenticated = currentUser !== null;

 useEffect(() => {
    
  if (!isAuthenticated) {
    setProductFavorite([]);
  }
}, [isAuthenticated, setProductFavorite])

  return (
    <UserContext.Provider
      value={{
        currentUser,
        setCurrentUser,
        isAuthenticated,
        loginUser,
        logoutUser
      }}
    >
      {children}
    </UserContext.Provider>
  );
};