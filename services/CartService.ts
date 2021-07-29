import PubSub from "pubsub-js";
import { productTypes } from "../data/products";
import { ProductItem, ProductType } from "../interfaces";

import { db } from "./../utils/firebase";

const ordersRef = db.collection("orders");

export interface CartItemType extends ProductItem {
  amount?: number;
  type: string;
}

export interface CartType {
  items: CartItemType[];
}

const getAllItems = () => {
  let allProducts: CartItemType[] = [];

  productTypes.forEach((type: ProductType) => {
    allProducts = allProducts.concat(
      type.items?.map((item: ProductItem) => ({
        ...item,
        amount: 0,
        type: type.type,
      })) || []
    );
  });
  return allProducts;
};

const addItemToCart = (item: CartItemType) => {
  let cartObj = getCart() || { items: getAllItems() };
  item.amount = 1;

  const newItems = cartObj ? cartObj.items : [];

  // if item already exists
  let found: CartItemType = newItems?.find(
    (i: CartItemType) => i.id === item.id
  );

  if (found) {
    found.amount = (found.amount || 0) + 1;
  } else {
    newItems.push(item);
  }

  cartObj = { ...cartObj, items: newItems };
  localStorage.setItem("cart", JSON.stringify(cartObj));

  PubSub.publish("card_add_item", "");
};

const editItemAmount = (itemId: string, newAmount: number) => {
  let cartObj = getCart() || { items: [] };

  const newItems = cartObj ? cartObj.items : [];

  // if item already exists
  let found: CartItemType = newItems?.find(
    (i: CartItemType) => i.id === itemId
  );

  if (found) {
    found.amount = newAmount;
  }

  cartObj = { ...cartObj, items: newItems };
  localStorage.setItem("cart", JSON.stringify(cartObj));

  PubSub.publish("card_add_item", "");
};

const removeItem = (itemId: string) => {
  let cartObj = getCart() || { items: [] };

  const newItems = cartObj ? cartObj.items : [];

  // if item already exists
  let foundIndex = newItems?.findIndex((i: CartItemType) => i.id === itemId);

  newItems.splice(foundIndex, 1);

  cartObj = { ...cartObj, items: newItems };
  localStorage.setItem("cart", JSON.stringify(cartObj));

  PubSub.publish("card_add_item", "");
};

const getCart = () => {
  let cartJSON = localStorage.getItem("cart");

  if (!cartJSON) {
    //start cart
    localStorage.setItem("cart", JSON.stringify({ items: getAllItems() }));
    cartJSON = localStorage.getItem("cart");
  }
  return cartJSON ? JSON.parse(cartJSON) : undefined;
};

const clearCart = () => {
  localStorage.removeItem("cart");
  PubSub.publish("card_add_item", "");
};

const saveOrder = async (cart: any, contactInfo: any) => {
  const lastOrder = (await getOrders()).pop();

  return await ordersRef.doc().set({
    items: cart.items
      .filter((i: CartItemType) => i.amount)
      .map((i: CartItemType) => ({
        id: i.id,
        amount: i.amount,
        name: i.name,
        price: i.price,
        type: i.type,
      })),
    orderId: Number(lastOrder.orderId) + 1,
    contactInfo,
    createdAt: new Date().toISOString(),
  });
};

const getOrders = async () => {
  let result: any[] = [];
  const snapshot = await ordersRef.orderBy("orderId").get();
  if (snapshot.empty) {
    throw Error("No matching results");
  }

  snapshot.forEach((doc) => {
    result.push({ id: doc.id, ...doc.data() });
  });
  return result;
};

const getOrderById = async (orderId: number) => {
  let result: any[] = [];

  const snapshot = await ordersRef
    .where("orderId", "==", Number(orderId))
    .get();

  if (snapshot.empty) {
    throw Error("No matching results");
  }

  snapshot.forEach((doc) => {
    result.push({ id: doc.id, ...doc.data() });
  });
  return result[0];
};

export const CartService = {
  addItemToCart,
  getCart,
  editItemAmount,
  clearCart,
  removeItem,
  saveOrder,
  getOrders,
  getOrderById,
};
