import { Cart } from "../types/Cart";
import { Category } from "../types/category";
import { Product } from "../types/Product";
import { User } from "../types/User";


export interface ProductContextData {

  categories: Category[];

  profile: string;
  setProfile: React.Dispatch<React.SetStateAction<string>>;

  isLoadingCategories: boolean;

  fetchCategories: () => Promise<void>;

}

export interface UserContextData {
  currentUser: User | null;
  setCurrentUser: React.Dispatch<React.SetStateAction<User | null>>;
  isAuthenticated: boolean;

  loginUser: (user: User) => void;
  logoutUser: () => void;
}

export interface CartContextData {
  isVisible: boolean;
  products: Cart[];
  productsTotalPrice: number;
  toggleCart: () => void;
  removeProductFromCart: (productId: string) => void;
  addProductToCart: (product: Product) => void;
  decreaseProductQuantity: (productId: string) => void
}

export interface FavoritesContextData {
  fetchFavoritesByUser: (userId: string) => Promise<void>;
  addFavorite: (favorite: Product) => Promise<void>;
  removeFavorite: (favoritoId: string) => Promise<void>;
  productFavorite: Product[];
}