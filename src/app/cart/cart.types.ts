export interface ProductItem {
  name: string;
  description: string;
  price: number;
  imageUrl: string;
}

export interface CartEntry {
  product: ProductItem;
  quantity: number;
}
