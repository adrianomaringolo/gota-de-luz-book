export interface ProductType {
  id: string;
  type: string;
  description: string;
  image: string;
  items?: Array<ProductItem>;
}

export interface ProductItem {
  id: string;
  name: string;
  price: number;
  description: string;
  image: string;
  detailedDescription?: string;
}
