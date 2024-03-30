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

export const CouponsService = {
  getActiveCoupons,
}
