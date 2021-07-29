import { useEffect, useState } from "react";
import styled from "styled-components";
import AdminLayout from "../../../components/admin/AdminLayout";
import { CartItemType, CartService } from "../../../services/CartService";

import { format } from "date-fns";
import Link from "next/link";

const PedidosStyled = styled.div``;

const Pedidos = () => {
  const [orders, setOrders] = useState<any[]>([]);

  const getOrders = async () => setOrders(await CartService.getOrders());

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
        <table className="table is-bordered is-striped is-hoverable">
          <thead>
            <tr>
              <th>Código</th>
              <th>Data</th>
              <th>Nome</th>
              <th>Telefone</th>
              <th>Endereço</th>
              <th>Produtos</th>
              <th>Total</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order: any) => (
              <tr>
                <td>{order.orderId}</td>
                <td>{format(new Date(order.createdAt), "dd/MM/yyyy HH:mm")}</td>
                <td>{order.contactInfo.name}</td>
                <td>{order.contactInfo.phone}</td>
                <td>
                  {order.contactInfo.city} (CEP: {order.contactInfo.zipcode})
                </td>
                <td>{getTotalItens(order)} produto(s)</td>
                <td>R$ {getTotal(order)}</td>
                <td>
                  <Link href={`/admin/pedidos/${order.orderId}`} key={order.id}>
                    Ver detalhes
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </PedidosStyled>
    </AdminLayout>
  );
};

export default Pedidos;
