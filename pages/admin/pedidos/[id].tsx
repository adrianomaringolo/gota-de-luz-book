import Head from "next/head";
import React, { useEffect, useState } from "react";
import AdminLayout from "../../../components/admin/AdminLayout";
import { useRouter } from "next/dist/client/router";
import { CartItemType, CartService } from "../../../services/CartService";
import Link from "next/link";

const Pedido = () => {
  const router = useRouter();
  const { id } = router.query;

  const [order, setOrder] = useState<any>({ items: [], contactInfo: {} });

  const getOrder = async (orderId: any) =>
    setOrder(await CartService.getOrderById(orderId));

  useEffect(() => {
    if (id) {
      getOrder(id);
    }
  }, [id]);

  const getTotal = () => {
    let total = 0;
    order.items.forEach((element: CartItemType) => {
      total += element.price * (element.amount || 0);
    });

    return total;
  };

  return (
    <>
      <Head>
        <title>Detalhes do pedido</title>
      </Head>

      <AdminLayout>
        <Link href={`/admin/pedidos`}>Voltar</Link>
        <h1 className="is-size-2 has-text-weight-bold">
          Pedido #{order.orderId}
        </h1>
        <p className="is-size-3">{order.contactInfo.name}</p>
        <p>
          <b>Celular:</b> {order.contactInfo.phone}
        </p>
        <p>
          <b>Email:</b> {order.contactInfo.email || "-"}
        </p>
        <p>
          <b>Cidade:</b> {order.contactInfo?.city} (CEP:{" "}
          {order.contactInfo?.zipcode})
        </p>

        <p className="mt-3">
          <b>Observações:</b> {order.contactInfo.observations || "-"}
        </p>

        <h1 className="is-size-4 has-text-weight-bold mt-3">Produtos</h1>

        <table className="table is-bordered is-striped is-hoverable">
          <thead>
            <tr>
              <th>Código</th>
              <th>Nome produto</th>
              <th>Preço un.</th>
              <th>Quantidade</th>
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
                  <td>R$ {item.price}</td>
                  <td>{item.amount}</td>
                  <td>R$ {item.price * (item.amount || 0)}</td>
                </tr>
              ))}
          </tbody>
        </table>
        <p className="is-size-4 has-text-weight-bold">Total: R$ {getTotal()}</p>
      </AdminLayout>
    </>
  );
};

export default Pedido;
