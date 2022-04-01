import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import AdminLayout from "../../../components/admin/AdminLayout";
import { ProductsService } from "../../../services/ProductsService";
import { formatCurrency } from "../../../utils/format";

const Produtos = () => {
  const [products, setProducts] = useState<any[]>([]);
  const [isSaving, setIsSaving] = useState<boolean>(false);

  const getProducts = async () =>
    setProducts(await ProductsService.getProducts());

  useEffect(() => {
    getProducts();
  }, []);

  const saveProducts = async () => {
    setIsSaving(true);
    await ProductsService.saveProducts(products);
    setIsSaving(false);
    toast.success("Produtos atualizados!");
  };

  const changeAmount = (index: number, newAmount: number) => {
    let newProducts = [...products];
    newProducts[index].amount = newAmount;
    setProducts(newProducts);
  };

  const checkProduct = (index: number, checked: boolean) => {
    let newProducts = [...products];
    newProducts[index].available = checked;
    setProducts(newProducts);
  };

  return (
    <AdminLayout>
      <section>
        <h1 className="is-size-2">Produtos</h1>
        <button
          className="button is-small is-info print-none"
          onClick={() => window.print()}
        >
          Imprimir
        </button>
        <div className="print-none">
          <p>
            Defina abaixo a disponibilidade para venda e a quantidade de cada
            produto.
          </p>
          <p>
            Remover a <u>disponibilidade impede que o produto seja pedido</u>{" "}
            por novos clientes, mas o produto continua visível.
          </p>
          <p className="mb-5">
            As <u>quantidades são apenas informativas</u> e não afetam o fluxo
            dos pedidos.
          </p>
        </div>
        {products && products.length && (
          <div className="table-container">
            <table className="table is-bordered is-striped is-hoverable">
              <thead className="print-line">
                <tr className="print-line">
                  <th className="print-none">Código</th>
                  <th>Produto</th>
                  <th>Preço</th>
                  <th>Descrição</th>
                  <th className="print-none">Disponível</th>
                  <th className="print-none">Quantidade</th>
                </tr>
              </thead>
              <tbody>
                {products
                  ?.sort((a, b) => a.type - b.type || a.name - b.name)
                  .filter((p) => p.available)
                  .map((item: any, index: number) => (
                    <tr key={`${item.id}`} className="print-line">
                      <td className="print-none">{item.id}</td>
                      <td>
                        <div>{item.name}</div>
                        <div className="has-text-grey is-size-7">
                          {item.type}
                        </div>
                      </td>
                      <td>{formatCurrency(item.price)}</td>
                      <td>
                        <span
                          dangerouslySetInnerHTML={{
                            __html: item.detailedDescription || "-",
                          }}
                        ></span>
                      </td>
                      <td className="print-none">
                        <label className="b-checkbox checkbox is-medium">
                          <input
                            type="checkbox"
                            checked={item.available || false}
                            onChange={(event) =>
                              checkProduct(index, event.target.checked)
                            }
                          />
                          <span className="check"></span>
                        </label>
                      </td>
                      <td className="print-none">
                        <input
                          className="input is-medium mr-3"
                          onChange={(event) => {
                            changeAmount(index, Number(event.target.value));
                          }}
                          type="number"
                          min={0}
                          value={item.amount}
                        />
                      </td>
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>
        )}

        <button
          className={`button is-large is-primary print-none ${
            isSaving ? "is-loading" : ""
          }`}
          disabled={isSaving}
          onClick={saveProducts}
        >
          Salvar
        </button>
      </section>
    </AdminLayout>
  );
};

export default Produtos;
