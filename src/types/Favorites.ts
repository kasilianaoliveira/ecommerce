import { Product } from "./Product";

export interface Favorites extends Product{
  userId: string;
}