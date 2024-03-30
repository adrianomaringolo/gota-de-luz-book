import AdminLayout from 'components/admin/AdminLayout'
import { useState } from 'react'
import { useGetVisits } from 'services/hooks'
import { formatDateUTC } from 'utils/format'

const Visitas = () => {
  const visits = useGetVisits()
  const [statusToFilter, setStatusToFilter] = useState<string>('')

  return (
    <AdminLayout>
      <div>
        <h1 className="is-size-2">Visitas</h1>
        Filtrar por data:
        <div className="is-flex">
          <div className="select is-large mb-3">
            <select
              value={statusToFilter}
              onChange={(e: any) => setStatusToFilter(e.target.value)}
            >
              <option value="">Todas</option>

              {visits.map((visit) => (
                <option value={visit.date} key={visit.date}>
                  {formatDateUTC(visit.date)}
                </option>
              ))}
            </select>
          </div>
          <button className="button is-large ml-2 is-primary" onClick={() => {}}>
            Filtrar
          </button>
        </div>
        {/* {visits && visit.length ? (
          <>
            <p>
              Exibindo <b>{orders.length}</b> pedido(s)
            </p>
            <p style={{ display: 'none' }}>
              Valor total: <b>R$ {formatCurrency(getTotalFromOrders())}</b>
            </p>
            <div className="table-container">
              <table className="table is-bordered is-striped is-hoverable">
                <thead>
                  <tr>
                    <th>Código/Data</th>
                    <th>Cliente</th>
                    <th>Produtos</th>
                    <th>Status</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  {orders
                    .sort((a, b) => b.orderId - a.orderId)
                    .map((order: any) => (
                      <tr key={'order-' + order.orderId}>
                        <td>
                          <strong>{order.orderId}</strong>
                          <br />
                          {format(new Date(order.createdAt), 'dd/MM/yyyy HH:mm')}
                        </td>
                        <td>
                          <div className="has-text-weight-bold">
                            {order.contactInfo.name}
                          </div>
                          <div className="is-size-6">{order.contactInfo.phone}</div>
                          <div className="is-size-6">
                            {order.contactInfo.city} (CEP: {order.contactInfo.zipcode})
                          </div>
                        </td>
                        <td>
                          {getTotalItens(order)} items
                          <div className="is-size-6 has-text-weight-bold">
                            {formatCurrency(getTotal(order))}
                          </div>
                          <details>
                            <summary className="has-background-link-light is-size-5">
                              Ver produtos
                            </summary>
                            <div className="card">
                              <div className="card-content">
                                <div className="content is-size-6">
                                  {order.items
                                    .filter((item: any) => item.amount)
                                    .map((item: any) => (
                                      <p>
                                        {item.amount} x [{item.type}] {item.name}
                                      </p>
                                    ))}
                                </div>
                              </div>
                            </div>
                          </details>
                        </td>
                        <td>
                          <StatusTag status={order.status} size="is-medium" />
                          <br />
                          {lastLastStatusLogPerson(order)}
                        </td>
                        <td>
                          <Link href={`/admin/pedidos/${order.orderId}`} key={order.id}>
                            Ver detalhes
                          </Link>
                        </td>
                      </tr>
                    ))}
                </tbody>
              </table>
            </div>
          </>
        ) : (
          <p>Não há pedidos para exibir</p>
        )} */}
      </div>
    </AdminLayout>
  )
}

export default Visitas
