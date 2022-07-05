import { useState } from "react";
import { CartService, ORDER_STATUS } from "../../services/CartService";

export const StatusSelect = ({
  orderItem,
  afterSave,
}: {
  orderItem: any;
  afterSave: any;
}) => {
  const [newStatus, setNewStatus] = useState<string>(orderItem.status);
  const [isSaving, setIsSaving] = useState<boolean>(false);

  const changeStatus = async () => {
    setIsSaving(true);
    await CartService.editOrderStatus(orderItem, newStatus);
    afterSave();
    setIsSaving(false);
  };
  return (
    <div>
      <p>Novo status:</p>
      <div className="is-flex">
        <div className="select is-large">
          <select
            value={newStatus}
            onChange={(e: any) => setNewStatus(e.target.value)}
          >
            <option value={ORDER_STATUS.EM_ESPERA}>Em espera</option>
            <option value={ORDER_STATUS.EM_ANDAMENTO}>Em andamento</option>
            <option value={ORDER_STATUS.APROVADO}>Aprovado</option>
            <option value={ORDER_STATUS.PAGO}>Pago</option>
            <option value={ORDER_STATUS.SEPARADO}>Separado/enviado</option>
            <option value={ORDER_STATUS.EM_FINALIZACAO}>Em finalização</option>
            <option value={ORDER_STATUS.FINALIZADO}>Finalizado</option>
            <option value={ORDER_STATUS.CANCELADO}>Cancelado</option>
          </select>
        </div>
        <button
          className={`button is-large ml-2 is-primary ${
            isSaving ? "is-loading" : ""
          }`}
          onClick={changeStatus}
          disabled={isSaving}
        >
          Salvar
        </button>
      </div>
    </div>
  );
};
