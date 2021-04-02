import { productTypes } from "../data/products";
import { ProductType } from "../interfaces";

export const getAllProductsIds = () =>
  productTypes.map((productType: ProductType) => ({
    params: {
      id: productType.id,
    },
  }));

export const getProductData = (id: string) =>
  productTypes.find((p) => p.id === id);
