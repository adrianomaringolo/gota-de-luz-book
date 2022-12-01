import { useEffect, useState } from "react";
import styled from "styled-components";
import AdminLayout from "components/admin/AdminLayout";
import { CartItemType, CartService, ORDER_STATUS } from "services/CartService";

import { format } from "date-fns";
import Link from "next/link";
import { StatusTag } from "components/pedidos/StatusTag";
import { formatCurrency } from "utils/format";

const PedidosStyled = styled.div``;

const Pedidos = () => {
  const [orders, setOrders] = useState<any[]>([]);
  const [statusToFilter, setStatusToFilter] = useState<string>("");

  const getOrders = async () => {
    const resp = await CartService.getOrders(statusToFilter);
    if (!statusToFilter) {
      setOrders(
        resp.filter(
          (o) =>
            o.status !== ORDER_STATUS.FINALIZADO &&
            o.status !== ORDER_STATUS.CANCELADO
        )
      );
    } else {
      setOrders(resp);
    }
  };

  useEffect(() => {
    getOrders();
  }, []);

  const getTotalItens = (order: any) => {
    let total = 0;
    order.items.forEach((element: CartItemType) => {
      total += element.amount || 0;
    });

    return total;
  };

  const getTotal = (order: any) => {
    let total = 0;
    order.items.forEach((element: CartItemType) => {
      total += element.price * (element.amount || 0);
    });

    return total;
  };

  // const getTotalFromOrders = () => {
  //   let total = 0;
  //   orders.forEach((order: any) => {
  //     total += getTotal(order);
  //   });

  //   return total;
  // };

  const lastLastStatusLogPerson = (order: any) =>
    order.statusLogs && order.statusLogs.length > 0
      ? order.statusLogs[order.statusLogs.length - 1]?.userName
      : "-";

  return (
    <AdminLayout>
      <PedidosStyled>
        <h1 className="is-size-2">Pedidos</h1>
        Filtrar por status:
        <div className="is-flex">
          <div className="select is-large mb-3">
            <select
              value={statusToFilter}
              onChange={(e: any) => setStatusToFilter(e.target.value)}
            >
              <option value="">Todos (não finalizados)</option>
              <option value={ORDER_STATUS.EM_ESPERA}>Em espera</option>
              <option value={ORDER_STATUS.EM_ANDAMENTO}>Em andamento</option>
              <option value={ORDER_STATUS.APROVADO}>Aprovado</option>
              <option value={ORDER_STATUS.PAGO}>Pago</option>
              <option value={ORDER_STATUS.SEPARADO}>Separado/enviado</option>
              <option value={ORDER_STATUS.EM_FINALIZACAO}>
                Em finalização
              </option>
              <option value={ORDER_STATUS.FINALIZADO}>Finalizado</option>
              <option value={ORDER_STATUS.CANCELADO}>Cancelado</option>
            </select>
          </div>
          <button
            className="button is-large ml-2 is-primary"
            onClick={getOrders}
          >
            Filtrar
          </button>
        </div>
        {orders && orders.length ? (
          <>
            <p>
              Exibindo <b>{orders.length}</b> pedido(s)
            </p>
            {/* <p>
              Valor total: <b>R$ {formatCurrency(getTotalFromOrders())}</b>
            </p> */}
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
                      <tr key={"order-" + order.orderId}>
                        <td>
                          <strong>{order.orderId}</strong>
                          <br />
                          {format(
                            new Date(order.createdAt),
                            "dd/MM/yyyy HH:mm"
                          )}
                        </td>
                        <td>
                          <div className="has-text-weight-bold">
                            {order.contactInfo.name}
                          </div>
                          <div className="is-size-6">
                            {order.contactInfo.phone}
                          </div>
                          <div className="is-size-6">
                            {order.contactInfo.city} (CEP:{" "}
                            {order.contactInfo.zipcode})
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
                                        {item.amount} x [{item.type}]{" "}
                                        {item.name}
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
                          <Link
                            href={`/admin/pedidos/${order.orderId}`}
                            key={order.id}
                          >
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
        )}
      </PedidosStyled>
    </AdminLayout>
  );
};

export default Pedidos;
