import { Category } from "../types/category";
import { Product } from "../types/Product";


export interface ProductContextData {

  productFavorite: Product[];
  setProductFavorite: React.Dispatch<React.SetStateAction<Product[]>>;
  categories: Category[];

  addProductFavorite: (product: Product) => void;
  removeProductFavorite: (id: string) => void;
}
