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

export const ORDER_STATUS = {
  EM_ESPERA: "em-espera",
  EM_ANDAMENTO: "em-andamento",
  APROVADO: "aprovado",
  PAGO: "pago",
  SEPARADO: "separado-enviado",
  FINALIZADO: "finalizado",
  CANCELADO: "cancelado",
};

const getAllItems = () => {
  let allProducts: CartItemType[] = [];

  productTypes.forEach((type: ProductType) => {
    allProducts = allProducts.concat(
      type.items
        ?.filter((item: ProductItem) => !item.notAvailable)
        .map((item: ProductItem) => ({
          ...item,
          amount: 0,
          type: type.type,
        })) || []
    );
  });
  return allProducts;
};

const isCartEmpty = (cartItems: any[]) =>
  cartItems.filter((item) => item.amount > 0).length === 0;

const addItemToCart = (item: CartItemType) => {
  let cartObj = getCart();

  if (!cartObj || isCartEmpty(cartObj?.items || [])) {
    cartObj = { items: getAllItems() };
  }

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

  fetch(
    `https://us-central1-portal-morada.cloudfunctions.net/sendGotaDeLuzAlert?order=${
      Number(lastOrder.orderId) + 1
    }&client=${contactInfo.name}`
  );

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
    status: ORDER_STATUS.EM_ESPERA,
    createdAt: new Date().toISOString(),
  });
};

const getOrders = async (statusToFilter = "") => {
  let result: any[] = [];
  const snapshot = await (statusToFilter
    ? ordersRef.orderBy("orderId").where("status", "==", statusToFilter).get()
    : ordersRef.orderBy("orderId").get());

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

const editOrderStatus = async (orderItem: any, newStatus: string) => {
  const userLS = localStorage.getItem("adminLogged")
    ? JSON.parse(localStorage.getItem("adminLogged") || "")
    : undefined;

  const newData = {
    updatedAt: new Date(),
    status: newStatus,
    statusLogs: [
      ...(orderItem.statusLogs || []),
      {
        userName: userLS.name,
        oldStatus: orderItem.status || "",
        newStatus: newStatus,
        updatedAt: new Date().toISOString(),
      },
    ],
  };

  return await ordersRef.doc(orderItem.id).update(newData);
};

const addCommentToOrder = async (orderItem: any, newComment: string) => {
  const userLS = localStorage.getItem("adminLogged")
    ? JSON.parse(localStorage.getItem("adminLogged") || "")
    : undefined;

  return await ordersRef.doc(orderItem.id).update({
    comments: [
      ...(orderItem.comments || []),
      {
        userName: userLS.name,
        comment: newComment,
        createdAt: new Date().toISOString(),
      },
    ],
  });
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
  editOrderStatus,
  addCommentToOrder,
  getAllItems,
};
