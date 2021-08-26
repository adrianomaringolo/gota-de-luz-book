import Head from "next/head";
import React, { useEffect, useState } from "react";
import AdminLayout from "../../../components/admin/AdminLayout";
import { useRouter } from "next/dist/client/router";
import { CartItemType, CartService } from "../../../services/CartService";
import Link from "next/link";
import { StatusTag } from "../../../components/pedidos/StatusTag";
import { StatusSelect } from "../../../components/pedidos/StatusSelect";
import { OrderActivities } from "../../../components/pedidos/OrderActivities";
import Image from "next/image";
import { format } from "date-fns";

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
        <div className="is-flex is-justify-content-space-between is-align-content-space-between is-hidden-print">
          <Link href={`/admin/pedidos`}>Voltar</Link>
          <button
            className="button is-small is-info"
            onClick={() => window.print()}
          >
            Imprimir
          </button>
        </div>

        <Image
          priority
          src="/images/logo-color.png"
          height={80}
          width={261}
          alt="Logo"
          className="is-hidden is-display-print"
        />

        <div className="columns">
          <div className="column">
            <h1 className="is-size-2 has-text-weight-bold is-flex is-align-items-center">
              <span className="mr-3">Pedido #{order.orderId} </span>
              <StatusTag status={order.status || ""} size="is-large" />
            </h1>
            <p className="is-size-3">{order.contactInfo.name}</p>
            {/* <p className="mb-5">
              <b>Pedido feito em:</b>{" "}
              {format(order.createdAt, "dd/MM/yyyy HH:mm")}
            </p> */}
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

            <p className="mt-5">
              <b>Observações:</b> {order.contactInfo.observations || "-"}
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
                  <td>R$ {item.price}</td>
                  <td>{item.amount}</td>
                  <td>R$ {item.price * (item.amount || 0)}</td>
                </tr>
              ))}
          </tbody>
        </table>
        <p className="is-size-4 has-text-weight-bold">Total: R$ {getTotal()}</p>

        <div className="is-hidden-print">
          <OrderActivities orderItem={order} afterSave={() => getOrder(id)} />
        </div>
      </AdminLayout>
    </>
  );
};

export default Pedido;
