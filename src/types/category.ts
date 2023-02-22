import { Product } from "./Product";


export interface Category {
  id: string
  name: string
  displayName: string
  imageUrl: string
  products: Product[]
}
