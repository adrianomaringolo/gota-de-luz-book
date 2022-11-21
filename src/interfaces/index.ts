export interface ProductType {
  id: string;
  type: string;
  typeLabel?: string;
  description: string;
  image: string;
  items?: Array<ProductItem>;
  seal?: string;
}

export interface ProductItem {
  id: string;
  name: string;
  price: number;
  priceDiscount?: string;
  oldPrice?: number;
  description: string;
  image: string;
  detailedDescription?: string;
  available?: boolean;
  seal?: string;
}
