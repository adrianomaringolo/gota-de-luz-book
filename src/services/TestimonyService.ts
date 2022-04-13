import { db } from "./../utils/firebase";

const testimonyRef = db.collection("testimony");

const getTestimonyList = async () => {
  let result: any[] = [];
  const snapshot = await testimonyRef.get();

  snapshot.forEach((doc) => {
    result.push({ ...doc.data() });
  });
  return result;
};

export const TestimonyService = {
  getTestimonyList,
};
