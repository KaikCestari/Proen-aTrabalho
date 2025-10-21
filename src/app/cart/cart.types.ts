export interface ProductItem {
  name: string;
  description: string;
  price: number;
}

export interface CartEntry {
  product: ProductItem;
  quantity: number;
}

