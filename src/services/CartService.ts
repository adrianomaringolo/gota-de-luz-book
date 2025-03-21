import { Coupon } from 'interfaces/coupons'
import PubSub from 'pubsub-js'
import toast from 'react-hot-toast'
import { ProductItem } from '../interfaces/products'
import { db } from './../utils/firebase'
import { ProductsService } from './ProductsService'
import { UsersService } from './UsersService'
import { EmailSender } from './utils/EmailSender'
import { orderMailList } from './utils/maillist'

const ordersRef = db.collection('orders')

export interface CartItemType extends ProductItem {
  amount?: number
  type: string
}

export interface CartType {
  items: CartItemType[]
}

export const ORDER_STATUS = {
  EM_ESPERA: 'em-espera',
  EM_ANDAMENTO: 'em-andamento',
  APROVADO: 'aprovado',
  PAGO: 'pago',
  SEPARADO: 'separado-enviado',
  EM_FINALIZACAO: 'em-finalizacao',
  FINALIZADO: 'finalizado',
  CANCELADO: 'cancelado',
}

const getAllItems = async () => {
  const products = await ProductsService.getProducts()

  return products
    ?.filter((item: ProductItem) => item.available)
    .map((item: ProductItem) => ({
      ...item,
      amount: 0,
    }))
}

const isCartEmpty = (cartItems: any[]) =>
  cartItems.filter((item) => item.amount > 0).length === 0

const addItemToCart = async (item: CartItemType) => {
  let cartObj = await getCart()

  if (!cartObj || isCartEmpty(cartObj?.items || [])) {
    cartObj = { items: await getAllItems() }
  }

  item.amount = 1

  const newItems = cartObj ? cartObj.items : []

  // if item already exists
  let found: CartItemType = newItems?.find((i: CartItemType) => i.id === item.id)

  if (found) {
    found.amount = (found.amount || 0) + 1
  } else {
    newItems.push(item)
  }

  cartObj = { ...cartObj, items: newItems }
  localStorage.setItem('cart', JSON.stringify(cartObj))

  toast.success('O produto foi adicionado ao carrinho!')

  PubSub.publish('card_add_item', '')
}

const editItemAmount = async (itemId: string, newAmount: number) => {
  let cartObj = (await getCart()) || { items: [] }

  const newItems = cartObj ? cartObj.items : []

  // if item already exists
  let found: CartItemType = newItems?.find((i: CartItemType) => i.id === itemId)

  if (found) {
    found.amount = newAmount
  }

  cartObj = { ...cartObj, items: newItems }
  localStorage.setItem('cart', JSON.stringify(cartObj))

  PubSub.publish('card_add_item', '')
}

const removeItem = async (itemId: string) => {
  let cartObj = (await getCart()) || { items: [] }

  const newItems = cartObj ? cartObj.items : []

  // if item already exists
  let foundIndex = newItems?.findIndex((i: CartItemType) => i.id === itemId)

  newItems.splice(foundIndex, 1)

  cartObj = { ...cartObj, items: newItems }
  localStorage.setItem('cart', JSON.stringify(cartObj))

  PubSub.publish('card_add_item', '')
}

const updatePrices = async (cart: any) => {
  const products = await getAllItems()

  cart.items.forEach((item: CartItemType) => {
    const product = products.find((p: ProductItem) => p.id === item.id)
    if (product) {
      item.price = product.price
    }
  })

  return cart
}

const getCart = async () => {
  let cartJSON = localStorage.getItem('cart')

  if (!cartJSON) {
    //start cart
    const items = await getAllItems()
    localStorage.setItem('cart', JSON.stringify({ items }))
    cartJSON = localStorage.getItem('cart')
  }
  return cartJSON ? updatePrices(JSON.parse(cartJSON)) : undefined
}

const clearCart = () => {
  localStorage.removeItem('cart')
  PubSub.publish('card_add_item', '')
}

const saveOrder = async (cart: any, contactInfo: any, coupon: Coupon | undefined) => {
  const lastOrder = (await getOrders()).pop()
  const currentOrderNumber = lastOrder ? Number(lastOrder.orderId) + 1 : 0

  EmailSender.sendNewOrderEmail(currentOrderNumber, contactInfo.name, orderMailList)

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
    orderId: currentOrderNumber,
    coupon: coupon
      ? {
          number: coupon.code,
          discount: coupon.discount,
          discountType: coupon.discountType,
        }
      : '',
    contactInfo,
    status: ORDER_STATUS.EM_ESPERA,
    createdAt: new Date().toISOString(),
  })
}

const getOrders = async (statusToFilter = '') => {
  let result: any[] = []
  const snapshot = await (statusToFilter
    ? ordersRef.orderBy('orderId').where('status', '==', statusToFilter).get()
    : ordersRef.orderBy('orderId').get())

  snapshot.forEach((doc) => {
    result.push({ id: doc.id, ...doc.data() })
  })
  return result
}

const getOrderById = async (orderId: number) => {
  let result: any[] = []

  const snapshot = await ordersRef.where('orderId', '==', Number(orderId)).get()

  if (snapshot.empty) {
    throw Error('No matching results')
  }

  snapshot.forEach((doc) => {
    result.push({ id: doc.id, ...doc.data() })
  })
  return result[0]
}

const editOrderStatus = async (orderItem: any, newStatus: string) => {
  const userLS = localStorage.getItem(UsersService.LOGGED_USER_KEY)
    ? JSON.parse(localStorage.getItem(UsersService.LOGGED_USER_KEY) || '')
    : undefined

  const newData = {
    updatedAt: new Date(),
    status: newStatus,
    statusLogs: [
      ...(orderItem.statusLogs || []),
      {
        userName: userLS.name,
        oldStatus: orderItem.status || '',
        newStatus: newStatus,
        updatedAt: new Date().toISOString(),
      },
    ],
  }

  return await ordersRef.doc(orderItem.id).update(newData)
}

const addCommentToOrder = async (orderItem: any, newComment: string) => {
  const userLS = localStorage.getItem(UsersService.LOGGED_USER_KEY)
    ? JSON.parse(localStorage.getItem(UsersService.LOGGED_USER_KEY) || '')
    : undefined

  return await ordersRef.doc(orderItem.id).update({
    comments: [
      ...(orderItem.comments || []),
      {
        userName: userLS.name,
        comment: newComment,
        createdAt: new Date().toISOString(),
      },
    ],
  })
}

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
}
