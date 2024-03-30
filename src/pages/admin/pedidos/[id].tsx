import { useRouter } from 'next/dist/client/router'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import AdminLayout from '../../../components/admin/AdminLayout'
import { OrderActivities } from '../../../components/pedidos/OrderActivities'
import { StatusSelect } from '../../../components/pedidos/StatusSelect'
import { StatusTag } from '../../../components/pedidos/StatusTag'
import { CartItemType, CartService } from '../../../services/CartService'
import { formatCurrency, formatDateAndTime } from '../../../utils/format'

const Pedido = () => {
  const router = useRouter()
  const { id } = router.query

  const [order, setOrder] = useState<any>({ items: [], contactInfo: {} })

  const getOrder = async (orderId: any) =>
    setOrder(await CartService.getOrderById(orderId))

  useEffect(() => {
    if (id) {
      getOrder(id)
    }
  }, [id])

  const getTotal = () => {
    let total = 0
    order.items.forEach((element: CartItemType) => {
      total += element.price * (element.amount || 0)
    })

    return total
  }

  return (
    <>
      <Head>
        <title>Detalhes do pedido</title>
      </Head>

      <AdminLayout>
        <div className="is-flex is-justify-content-space-between is-align-content-space-between is-hidden-print">
          <Link href={`/admin/pedidos`}>Voltar</Link>
          <button className="button is-small is-info" onClick={() => window.print()}>
            Imprimir
          </button>
        </div>

        <div className="is-display-print">
          <Image
            priority
            src="/images/logo-color.png"
            height={75}
            width={261}
            alt="Logo"
          />
        </div>

        <div className="columns">
          <div className="column">
            <h1 className="is-size-2 has-text-weight-bold is-flex is-align-items-center">
              <span className="mr-3">Pedido #{order.orderId} </span>
              <StatusTag status={order.status || ''} size="is-large" />
            </h1>
            <p className="is-size-3">{order.contactInfo.name}</p>
            <p className="mb-5">
              <b>Pedido feito em:</b> {formatDateAndTime(new Date(order.createdAt))}
            </p>
            <p>
              <b>Celular:</b> {order.contactInfo.phone}
            </p>
            <p>
              <b>Email:</b> {order.contactInfo.email || '-'}
            </p>
            <p>
              <b>Cidade:</b> {order.contactInfo?.city} (CEP: {order.contactInfo?.zipcode})
            </p>

            <p className="mt-5">
              <b>Observações:</b> {order.contactInfo.observations || '-'}
            </p>
          </div>
          <div className="column is-hidden-print">
            <StatusSelect orderItem={order} afterSave={() => getOrder(id)} />
          </div>
        </div>

        <h1 className="is-size-4 has-text-weight-bold mt-3">Produtos</h1>

        <table className="table is-bordered is-striped is-hoverable">
          <thead>
            <tr>
              <th>Código</th>
              <th>Nome produto</th>
              <th>Preço un.</th>
              <th>Qtd.</th>
              <th>Total</th>
            </tr>
          </thead>
          <tbody>
            {order.items
              .filter((item: any) => item.amount)
              .map((item: any) => (
                <tr key={`pedido-${item.id}`}>
                  <td>{item.id}</td>
                  <td>
                    [{item.type}] {item.name}
                  </td>
                  <td>{formatCurrency(item.price)}</td>
                  <td>{item.amount}</td>
                  <td>{formatCurrency(item.price * (item.amount || 0))}</td>
                </tr>
              ))}
          </tbody>
        </table>
        <p className="is-size-4 has-text-weight-bold">
          Total: {formatCurrency(getTotal())}
        </p>

        {order.coupon && (
          <>
            <p className="text-xl border-t mt-3 pt-3 text-green-900">
              Desconto aplicado: {order.coupon.percentageDiscount}% (
              {formatCurrency((getTotal() * order.coupon.percentageDiscount) / 100)})
            </p>
            <p>
              Cupom usado: <strong>{order.coupon.number}</strong> 🎟️
            </p>

            <p className="font-bold text-3xl mt-3">
              <span className="">➡️ Valor com desconto:</span>{' '}
              {formatCurrency(
                getTotal() - (getTotal() * (order.coupon?.percentageDiscount || 0)) / 100,
              )}
            </p>
          </>
        )}

        <div className="is-hidden-print">
          <OrderActivities orderItem={order} afterSave={() => getOrder(id)} />
        </div>
      </AdminLayout>
    </>
  )
}

export default Pedido
