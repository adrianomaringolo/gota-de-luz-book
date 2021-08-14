import { useEffect, useState } from "react";
import styled from "styled-components";
import AdminLayout from "../../../components/admin/AdminLayout";
import {
  CartItemType,
  CartService,
  ORDER_STATUS,
} from "../../../services/CartService";

import { format } from "date-fns";
import Link from "next/link";
import { StatusTag } from "../../../components/pedidos/StatusTag";

const PedidosStyled = styled.div``;

const Pedidos = () => {
  const [orders, setOrders] = useState<any[]>([]);
  const [statusToFilter, setStatusToFilter] = useState<string>("");

  const getOrders = async () =>
    setOrders(await CartService.getOrders(statusToFilter));

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
              <option value="">Todos</option>
              <option value={ORDER_STATUS.EM_ESPERA}>Em espera</option>
              <option value={ORDER_STATUS.EM_ANDAMENTO}>Em andamento</option>
              <option value={ORDER_STATUS.APROVADO}>Aprovado</option>
              <option value={ORDER_STATUS.PAGO}>Pago</option>
              <option value={ORDER_STATUS.SEPARADO}>Separado/enviado</option>
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
            <div className="table-container">
              <table className="table is-bordered is-striped is-hoverable">
                <thead>
                  <tr>
                    <th>Código</th>
                    <th>Data</th>
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
                        <td>{order.orderId}</td>
                        <td>
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
                            R$ {getTotal(order)}
                          </div>
                        </td>
                        <td>
                          <StatusTag status={order.status} size="is-medium" />
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
