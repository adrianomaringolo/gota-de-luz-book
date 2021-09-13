import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import AdminLayout from "../../../components/admin/AdminLayout";
import { ProductsService } from "../../../services/ProductsService";

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
        <p>
          Defina abaixo a disponibilidade para venda e a quantidade de cada
          produto.
        </p>
        <p>
          Remover a <u>disponibilidade impede que o produto seja pedido</u> por
          novos clientes, mas o produto continua visível.
        </p>
        <p className="mb-5">
          As <u>quantidades são apenas informativas</u> e não afetam o fluxo dos
          pedidos.
        </p>
        {products && products.length && (
          <div className="table-container">
            <table className="table is-bordered is-striped is-hoverable">
              <thead>
                <tr>
                  <th>Código</th>
                  <th>Produto</th>
                  <th>Disponível</th>
                  <th>Quantidade</th>
                </tr>
              </thead>
              <tbody>
                {products?.map((item: any, index: number) => (
                  <tr
                    key={`${item.id}`}
                    style={{
                      borderBottom: "1px solid #ccc",
                      paddingBottom: 5,
                      marginBottom: 5,
                    }}
                  >
                    <td>{item.id}</td>
                    <td>
                      <div>{item.name}</div>
                      <div className="has-text-grey is-size-7">{item.type}</div>
                    </td>
                    <td>
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
                    <td>
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
          className={`button is-large is-primary ${
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
