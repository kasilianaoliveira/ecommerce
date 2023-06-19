import { Product } from "./Product";


export interface Cart extends Product{
  quantity: number;
}