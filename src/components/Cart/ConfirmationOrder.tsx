import { InputField } from 'components/shared'
import { Coupon } from 'interfaces/coupons'
import { useState } from 'react'
import { useGetCoupons } from 'services/hooks/useGetCoupons'
import { CartItemType } from '../../services/CartService'
import { formatCurrency } from '../../utils/format'

export const ConfirmationOrder = ({
  cart,
  contactInfo,
  handleAppliedCoupon,
}: {
  cart: any
  contactInfo: any
  handleAppliedCoupon: (coupon: Coupon | undefined) => void
}) => {
  const [showCupom, setShowCupom] = useState(false)
  const [coupon, setCoupon] = useState<string>('')
  const [couponMessage, setCouponMessage] = useState<string>('')
  const [appliedCoupon, setAppliedCoupon] = useState<Coupon>()
  const activeCoupons = useGetCoupons()

  const getTotal = () => {
    let total = 0
    cart?.items.forEach((element: CartItemType) => {
      total += element.price * (element.amount || 0)
    })

    return total
  }

  const handleSetCoupon = (coupon: string) => {
    // remove all spaces and special characters, except -, and convert to uppercase
    setCoupon(coupon.replace(/[^a-zA-Z0-9-]/g, '').toUpperCase())
  }

  const applyCoupon = () => {
    const couponToApply = activeCoupons.find((c) => c.number === coupon)

    if (!couponToApply) {
      setCouponMessage('❌ Esse cupom não é válido ou está expirado.')
      setAppliedCoupon(undefined)
      handleAppliedCoupon(undefined)
      return
    }

    setAppliedCoupon(couponToApply)
    handleAppliedCoupon(couponToApply)

    setCouponMessage('✅ Cupom válido! O desconto foi aplicado.')
  }

  return (
    <section>
      <div className="border rounded-xl p-4 mb-5">
        <p className="font-bold text-2xl border-b mb-4 pb-4">🪪 Meus dados</p>
        <b>Nome:</b> {contactInfo?.name}
        <br />
        <b>Telefone:</b> {contactInfo?.phone}
        <br />
        <b>Email:</b> {contactInfo?.email}
        <br />
        <b>Cidade:</b> {contactInfo?.city} | <b>CEP:</b> {contactInfo?.zipcode}
        <br />
        <b>Observações:</b> {contactInfo?.observations || '-'}
        <br />
      </div>

      <div className="border rounded-xl p-4 mb-5">
        <p className="font-bold text-2xl border-b mb-4 pb-4">🛒 Produtos</p>

        {cart?.items
          ?.filter((item: CartItemType) => item.amount)
          .map((item: CartItemType) => (
            <div key={`${item.id}`} style={{ display: 'flex' }}>
              <div className="item-price" style={{ width: '80px', textAlign: 'right' }}>
                {formatCurrency(item.price * (item.amount || 0))}
              </div>
              <div style={{ width: '50px', textAlign: 'right', marginRight: '10px' }}>
                {item.amount} x
              </div>
              <span>
                [{item.type}] {item.name}
              </span>
            </div>
          ))}
      </div>

      <div className="text-bold text-3xl mb-5  pt-3 mt-3 flex flex-wrap justify-between items-center">
        <div>
          <p>
            <span className="text-xl">Valor total:</span> {formatCurrency(getTotal())}
          </p>
          {appliedCoupon && (
            <>
              <p className="text-xl border-t mt-3 pt-3 text-green-900">
                Desconto aplicado: {appliedCoupon.percentageDiscount}% (
                {formatCurrency((getTotal() * appliedCoupon.percentageDiscount) / 100)})
              </p>

              <p className="font-bold">
                <span className="text-xl">➡️ Valor com desconto:</span>{' '}
                {formatCurrency(
                  getTotal() -
                    (getTotal() * (appliedCoupon?.percentageDiscount || 0)) / 100,
                )}
              </p>
            </>
          )}
        </div>
        <div className="text-sm">
          <p
            className="text-blue-900  bg-none border-none cursor-pointer hover:text-black"
            onClick={() => setShowCupom((prev) => !prev)}
          >
            {showCupom ? '-' : '+'} Inserir cupom ou vale de desconto
          </p>
          {showCupom && (
            <div className="border border-gray-300 p-1">
              <div className="flex items-center gap-1">
                <InputField
                  placeholder="Código"
                  value={coupon}
                  onChange={(e) => handleSetCoupon(e.target.value)}
                />
                <a
                  className="bg-green-900 text-white p-2 cursor-pointer"
                  onClick={applyCoupon}
                >
                  Aplicar
                </a>
              </div>
              {couponMessage && (
                <p className={appliedCoupon ? 'text-green-900' : 'text-red-900'}>
                  {couponMessage}
                </p>
              )}
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
