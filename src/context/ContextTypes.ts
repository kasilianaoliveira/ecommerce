import { Category } from "../types/category";
import { Product } from "../types/Product";


export interface ProductContextData {

  productFavorite: Product[];
  setProductFavorite: React.Dispatch<React.SetStateAction<Product[]>>;
  categories: Category[];

  profile: string;
  setProfile: React.Dispatch<React.SetStateAction<string>>;

  addProductFavorite: (product: Product) => void;
  removeProductFavorite: (id: string) => void;
}
