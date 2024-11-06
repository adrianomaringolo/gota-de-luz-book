import { Coupon } from 'interfaces/coupons'
import { useRouter } from 'next/dist/client/router'
import React, { FormEvent, useEffect, useState } from 'react'
import { ConfirmationOrder } from '../../components/Cart/ConfirmationOrder'
import { ContactForm } from '../../components/Cart/ContactForm'
import Layout from '../../components/Layout'
import { CartItemType, CartService, CartType } from '../../services/CartService'
import { formatCurrency } from '../../utils/format'
import styles from './../../styles/products.module.scss'
import CartItem from './components/CartItem'
import StyledCartArea from './components/StyledCartArea'

const Carrinho = () => {
  const [cart, setCart] = useState<CartType>()

  const [errorMessage, setErrorMessage] = useState(false)

  const [orderStep, setOrderStep] = useState(0)

  const [contactInfo, setContactInfo] = useState<any>()
  const [appliedCoupon, setAppliedCoupon] = useState<Coupon>()

  const router = useRouter()

  const getCart = async () => {
    setCart(await CartService.getCart())
  }

  useEffect(() => {
    getCart()

    PubSub.subscribe('card_add_item', () => getCart())

    return () => PubSub.unsubscribe('card_add_item')
  }, [])

  const getTotal = () => {
    let total = 0
    cart?.items.forEach((element: CartItemType) => {
      total += element.price * (element.amount || 0)
    })

    return total
  }

  const saveOrder = async (e: FormEvent) => {
    e.preventDefault()
    setOrderStep(3)
    await CartService.saveOrder(cart, contactInfo, appliedCoupon)
    setOrderStep(4)
  }

  const checkData = () => {
    if (
      !contactInfo?.name ||
      !contactInfo?.phone ||
      !contactInfo?.city ||
      !contactInfo?.zipcode
    ) {
      setErrorMessage(true)
    } else {
      setErrorMessage(false)
      setOrderStep(2)
    }
  }

  const newCart = () => {
    CartService.clearCart()
  }

  return (
    <Layout title={`${process.env.NEXT_PUBLIC_COMPANY_NAME} - Reserva`}>
      <StyledCartArea>
        <div className="cart-area">
          {orderStep === 0 && (
            <div>
              <p className="title">Meu pedido</p>
              <p className="title-description">
                Escolha os itens e quantidades abaixo e finalize sua reserva de pedido.{' '}
                <br />
                Após a finalização do pedido, a equipe{' '}
                {process.env.NEXT_PUBLIC_COMPANY_NAME} vai entrar em contato para
                confirmar a disponibilidade dos produtos escolhidos e pagamento.
              </p>
              <div
                style={{
                  padding: '20px',
                  maxHeight: '600px',
                  overflowY: 'scroll',
                  border: '1px solid #ccc',
                }}
              >
                {cart?.items
                  ?.filter((item) => item.amount && item.amount > 0)
                  .map((item: CartItemType) => <CartItem item={item} />)}
              </div>
              <div className="total-value">Valor total: {formatCurrency(getTotal())}</div>
              <div className={styles.buttonArea} style={{ display: 'flex' }}>
                <button
                  onClick={() => {
                    setOrderStep(0)
                    router.push('/#produtos')
                  }}
                  style={{ marginRight: 'auto' }}
                >
                  Pedir mais produtos
                </button>
                <button onClick={newCart} style={{ marginRight: 10 }}>
                  Limpar tudo
                </button>
                <button onClick={() => setOrderStep(1)} className="buy-button">
                  Fazer pedido
                </button>
              </div>
            </div>
          )}

          {orderStep === 1 && (
            <form>
              <p className="title">Dados de contato</p>
              <p className="title-description">Preencha seus dados de contato abaixo</p>
              {errorMessage && (
                <p style={{ color: 'red' }}>Preencha todos os campos obrigatórios</p>
              )}
              <ContactForm setContactInfo={setContactInfo} contactInfo={contactInfo} />
              <div className={styles.buttonArea} style={{ display: 'flex' }}>
                <button
                  type="button"
                  onClick={() => {
                    setOrderStep(0)
                  }}
                  style={{ marginRight: 'auto' }}
                >
                  Voltar aos produtos
                </button>
                <button
                  type="submit"
                  onClick={(e) => {
                    e.preventDefault()
                    checkData()
                  }}
                  className="buy-button"
                >
                  Fazer pedido
                </button>
              </div>
            </form>
          )}

          {orderStep === 2 && (
            <div>
              <p className="title">Confirmação</p>
              <p className="title-description mb-5">
                Confirme os produtos e seus dados de contato abaixo e clique em "Confirmar
                pedido"
              </p>

              <ConfirmationOrder
                cart={cart}
                contactInfo={contactInfo}
                handleAppliedCoupon={(coupon) => setAppliedCoupon(coupon)}
              />

              <div className={styles.buttonArea} style={{ display: 'flex' }}>
                <button
                  type="button"
                  onClick={() => {
                    setOrderStep(1)
                  }}
                  style={{ marginRight: 'auto' }}
                >
                  Corrigir dados de contato
                </button>
                <button
                  type="submit"
                  onClick={(e) => saveOrder(e)}
                  className="buy-button"
                >
                  CONFIRMAR PEDIDO
                </button>
              </div>
            </div>
          )}

          {orderStep === 3 && (
            <div style={{ textAlign: 'center' }}>
              <p style={{ fontSize: '2em', fontWeight: 'bold', color: '#ddd' }}>
                Sua reserva está sendo processada!
              </p>
            </div>
          )}

          {orderStep === 4 && (
            <div style={{ textAlign: 'center' }}>
              <p style={{ fontSize: '1.5em', fontWeight: 'bold' }}>
                Sua reserva foi feita com sucesso!
              </p>

              <p style={{ fontSize: '1.2em' }}>
                Em breve, a equipe {process.env.NEXT_PUBLIC_COMPANY_NAME} vai entrar em
                contato para confirmar os produtos e combinar a entrega.
              </p>

              <p>Obrigado pelo seu apoio!</p>

              <p>
                👋❤️ Gostaria de nos deixar um{' '}
                <a
                  href="https://docs.google.com/forms/d/e/1FAIpQLSetBUhLfPUyn-AAaeZFSluLuB3BEzrpEX0yirA2CPk6LklYWg/viewform"
                  target="blank"
                >
                  depoimento
                </a>{' '}
                ?
              </p>

              <div className={styles.buttonArea} style={{ display: 'flex' }}>
                <button
                  type="button"
                  onClick={() => {
                    setContactInfo({})
                    CartService.clearCart()
                    setOrderStep(0)
                  }}
                  style={{ marginRight: 'auto' }}
                >
                  Fechar
                </button>
              </div>
            </div>
          )}
        </div>
      </StyledCartArea>
    </Layout>
  )
}

export default Carrinho
