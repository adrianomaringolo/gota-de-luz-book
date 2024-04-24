import { AddCouponModal } from 'components/admin/AddCouponModal'
import AdminLayout from 'components/admin/AdminLayout'
import { format } from 'date-fns'
import { Coupon } from 'interfaces/coupons'
import { useState } from 'react'
import { useGetCoupons } from 'services/hooks/useGetCoupons'

const Cupons = () => {
  const coupoms = useGetCoupons()
  const [showModal, setShowModal] = useState<boolean>(false)

  return (
    <AdminLayout>
      <div className="flex justify-between mb-7 pb-4 border-b">
        <h1 className="text-4xl font-semibold">Cupons</h1>
        <button className="button is-primary" onClick={() => setShowModal(true)}>
          Adicionar cupom
        </button>
      </div>

      <table className="table is-bordered is-striped is-hoverable">
        <thead>
          <tr>
            <th></th>
            <th>Código</th>
            <th>Desconto</th>
            <th>Período de uso</th>
          </tr>
        </thead>
        <tbody>
          {coupoms
            .sort((a, b) => (b.number > a.number ? 1 : -1))
            .map((coupon: Coupon) => (
              <tr key={'coupon-' + coupon.id}>
                <td>{coupon.active ? '✅' : '⛔'}</td>
                <td>{coupon.number}</td>
                <td>{coupon.percentageDiscount} %</td>
                <td>
                  {format(new Date(coupon.startDate), 'dd/MM/yyyy')} -{' '}
                  {format(new Date(coupon.endDate), 'dd/MM/yyyy')}
                </td>
              </tr>
            ))}
        </tbody>
      </table>
      <AddCouponModal isOpen={showModal} onClose={() => setShowModal(false)} />
    </AdminLayout>
  )
}

export default Cupons
