import { db } from "./../utils/firebase";

const testimonyRef = db.collection("testimony");

const getProductsTestimony = async () => {
  let result: any[] = [];
  const snapshot = await testimonyRef.get();

  snapshot.forEach((doc) => {
    result.push({ ...doc.data() });
  });
  return result;
};

export const TestimonyService = {
  getProductsTestimony,
};
