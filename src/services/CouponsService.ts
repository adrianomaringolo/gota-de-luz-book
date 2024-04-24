import { Coupon } from 'interfaces/coupons'
import { db } from 'utils/firebase'

const couponsRef = db.collection('coupons')

const getActiveCoupons: () => Promise<Coupon[]> = async () => {
  let result: any[] = []
  const snapshot = await couponsRef.where('active', '==', true).get()

  snapshot.forEach((doc) => {
    result.push({ ...doc.data() })
  })
  return result as Coupon[]
}

const addCoupon: (coupon: Omit<Coupon, 'id'>) => Promise<void> = async (coupon) => {
  await couponsRef.add({ ...coupon, createdAt: new Date().toISOString() })
}

export const CouponsService = {
  getActiveCoupons,
  addCoupon,
}
