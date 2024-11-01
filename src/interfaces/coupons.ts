export interface Coupon {
  id: string
  active: boolean
  code: string
  discount: number
  discountType: 'percentage' | 'fixed'
  startDate?: string
  endDate?: string
  notes?: string
}
