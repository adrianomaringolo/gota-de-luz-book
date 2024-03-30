import { Coupon } from 'interfaces/coupons'
import { useEffect, useState } from 'react'
import { CouponsService } from 'services/CouponsService'

export function useGetCoupons() {
  const [coupons, setCoupons] = useState<Coupon[]>([])

  const getCoupons = async () => setCoupons(await CouponsService.getActiveCoupons())

  useEffect(() => {
    getCoupons()
  }, [])

  return coupons
}
