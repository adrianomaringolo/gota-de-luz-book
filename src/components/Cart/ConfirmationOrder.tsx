import { InputField } from 'components/shared'
import { useState } from 'react'
import styled from 'styled-components'
import { CartItemType } from '../../services/CartService'
import { formatCurrency } from '../../utils/format'

const StyledContactForm = styled.div``

export const ConfirmationOrder = ({
  cart,
  contactInfo,
}: {
  cart: any
  contactInfo: any
}) => {
  const [showCupom, setShowCupom] = useState(false)
  const getTotal = () => {
    let total = 0
    cart?.items.forEach((element: CartItemType) => {
      total += element.price * (element.amount || 0)
    })

    return total
  }

  return (
    <StyledContactForm>
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

      <div className="text-bold text-3xl mb-5 border-t pt-3 mt-3 flex justify-between items-center">
        <div>
          <span className="text-xl">Valor total:</span> {formatCurrency(getTotal())}
        </div>
        <p
          className="text-blue-900 text-sm bg-none border-none cursor-pointer hover:text-black"
          onClick={() => setShowCupom((prev) => !prev)}
        >
          Inserir cupom ou vale de desconto
          {showCupom && (
            <InputField placeholder="Cupom" className="border border-gray-300 p-1" />
          )}
        </p>
      </div>

      <div className="border rounded-xl p-4 mb-5">
        <p className="font-bold text-2xl">Meus dados</p>
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
    </StyledContactForm>
  )
}
