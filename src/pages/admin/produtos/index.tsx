import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import AdminLayout from "../../../components/admin/AdminLayout";
import { ProductsService } from "../../../services/ProductsService";
import { formatCurrency } from "../../../utils/format";
import { productTypes } from "data/products";

const Produtos = () => {
  const [products, setProducts] = useState<any[]>([]);
  const [isSaving, setIsSaving] = useState<boolean>(false);
  const [selectedType, setSelectedType] = useState<string>("");

  const getProducts = async () =>
    setProducts(await ProductsService.getProducts());

  useEffect(() => {
    getProducts();
  }, []);

  const saveProduct = async (product: any) => {
    setIsSaving(true);
    await ProductsService.saveProduct(product);
    setIsSaving(false);
    toast.success("Produto atualizado!");
  };

  const changeAvailability = async (product: any, available: boolean) => {
    product.available = available;

    setIsSaving(true);
    await ProductsService.saveProduct(product);
    setIsSaving(false);
    void getProducts();
    toast.success("Produtos atualizados!");
  };

  const changeAmount = (id: string, newAmount: number) => {
    let newProducts = [...products];
    newProducts.find((p) => p.id === id).amount = newAmount;
    setProducts(newProducts);
  };

  return (
    <AdminLayout>
      <section>
        <h1 className="is-size-2">Produtos</h1>
        {/* <button
          className="button is-small is-info print-none"
          onClick={() => window.print()}
        >
          Imprimir
        </button> */}
        <div className="print-none mb-5 notification is-link is-size-6">
          <p>
            Defina abaixo a disponibilidade para venda e a quantidade de cada
            produto.
          </p>
          <p>
            Remover a <u>disponibilidade impede que o produto seja pedido</u>{" "}
            por novos clientes, mas o produto continua visível.
          </p>
          <p>
            As <u>quantidades são apenas informativas</u> e não afetam o fluxo
            dos pedidos.
          </p>
        </div>

        <div className="select is-large mb-5">
          <select
            value={selectedType}
            onChange={(e: any) => setSelectedType(e.target.value)}
          >
            <option value="" disabled>
              - Selecione a categoria -
            </option>
            <option value="all">- TODOS OS PRODUTOS -</option>
            {productTypes.map((type) => (
              <option value={type.type} key={type.type}>
                {type.type}
              </option>
            ))}
          </select>
        </div>

        {products && products.length > 0 && (
          <div className="table-container">
            <table className="table is-bordered is-striped is-hoverable">
              <thead className="print-line">
                <tr className="print-line">
                  <th className="print-none">Código</th>
                  <th>Produto</th>
                  <th>Preço</th>
                  <th className="print-none">Quantidade</th>
                  <th className="print-none">Disponibilidade</th>
                </tr>
              </thead>
              <tbody>
                {products
                  ?.sort((a, b) => a.name - b.name)
                  .filter(
                    (p) => selectedType === "all" || p.type === selectedType
                  )
                  .map((item: any) => (
                    <tr key={`${item.id}`} className="print-line">
                      <td className="print-none">{item.id}</td>
                      <td>
                        <div>{item.name}</div>
                        <div className="has-text-grey is-size-7">
                          {item.type}
                        </div>
                      </td>
                      <td>{formatCurrency(item.price)}</td>
                      {/* {showDesc && (
                        <td>
                          <span
                            dangerouslySetInnerHTML={{
                              __html: item.detailedDescription || "-",
                            }}
                          ></span>
                        </td>
                      )} */}
                      <td className="print-none">
                        <div className="is-flex">
                          <input
                            className="input is-medium mr-3"
                            onChange={(event) => {
                              changeAmount(item.id, Number(event.target.value));
                            }}
                            type="number"
                            value={item.amount}
                            style={{ minWidth: 80 }}
                          />
                          <button
                            className={`button is-medium is-success print-none ${
                              isSaving ? "is-loading" : ""
                            }`}
                            disabled={isSaving}
                            onClick={() => saveProduct(item)}
                          >
                            Salvar
                          </button>
                        </div>
                      </td>
                      <td className="print-none">
                        {item.available ? (
                          <div className="is-flex is-flex-direction-column">
                            <div className="tag is-primary is-medium">
                              Disponível
                            </div>
                            <button
                              className="button is-ghost is-small"
                              onClick={() => changeAvailability(item, false)}
                            >
                              Indisponibilizar
                            </button>
                          </div>
                        ) : (
                          <div className="is-flex is-flex-direction-column">
                            <div className="tag is-warning is-medium">
                              Indisponível
                            </div>
                            <button
                              className="button is-ghost is-small"
                              onClick={() => changeAvailability(item, true)}
                            >
                              Disponibilizar
                            </button>
                          </div>
                        )}
                      </td>
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>
        )}
      </section>
    </AdminLayout>
  );
};

export default Produtos;
