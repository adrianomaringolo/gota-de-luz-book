export interface ProductType {
  id: string;
  type: string;
  description: string;
  image: string;
  items?: Array<ProductItem>;
}

export interface ProductItem {
  name: string;
  description: string;
  image: string;
  detailedDescription?: string;
}
