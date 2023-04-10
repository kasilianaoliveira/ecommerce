import { Category } from "../types/category";
import { Product } from "../types/Product";
import { User } from "../types/User";


export interface ProductContextData {

  productFavorite: Product[];
  setProductFavorite: React.Dispatch<React.SetStateAction<Product[]>>;
  categories: Category[];

  profile: string;
  setProfile: React.Dispatch<React.SetStateAction<string>>;

  addProductFavorite: (product: Product) => void;
  removeProductFavorite: (id: string) => void;
}

export interface UserContextData {
  currentUser:  User | null;
  setCurrentUser: React.Dispatch<React.SetStateAction<User | null>>;
  isAuthenticated : boolean;
  loginUser: (user: User) => void;
  logoutUser: () => void;
}

