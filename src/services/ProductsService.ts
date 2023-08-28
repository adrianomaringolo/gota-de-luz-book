import { db } from "./../utils/firebase";

const productsRef = db.collection("products");

const getProducts = async () => {
  let result: any[] = [];
  const snapshot = await productsRef.get();

  snapshot.forEach((doc) => {
    result.push({ ...doc.data() });
  });
  return result;
};

const getProductsByType = async (type: string) => {
  let result: any[] = [];
  const snapshot = await productsRef.where("type", "==", type).get();

  snapshot.forEach((doc) => {
    result.push({ ...doc.data() });
  });
  return result;
};

const saveProducts = async (products: any[]) => {
  for (const product of products) {
    await productsRef.doc(product.id).set({
      ...product,
    });
  }
};

const saveProduct = async (product: any) => {
  await productsRef.doc(product.id).set({
    ...product,
  });
};

export const ProductsService = {
  saveProducts,
  getProducts,
  getProductsByType,
  saveProduct,
};
