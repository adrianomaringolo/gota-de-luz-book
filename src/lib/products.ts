import { productTypes } from "data/products";
import { ProductType } from "interfaces";

export const getAllProductsIds = () =>
  productTypes.map((productType: ProductType) => ({
    params: {
      type: productType.id,
    },
  }));

export const getProductData = (type: string) =>
  productTypes.find((p) => p.id === type);
