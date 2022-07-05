import { ORDER_STATUS } from "../../services/CartService";

export const StatusTag = ({
  status,
  size,
}: {
  status: string;
  size: string;
}) => {
  const getStatusLabel = () => {
    switch (status) {
      case ORDER_STATUS.EM_ESPERA:
        return "Em Espera";
      case ORDER_STATUS.EM_ANDAMENTO:
        return "Em Andamento";
      case ORDER_STATUS.APROVADO:
        return "Aprovado";
      case ORDER_STATUS.SEPARADO:
        return "Separado/Enviado";
      case ORDER_STATUS.PAGO:
        return "Pago";
      case ORDER_STATUS.EM_FINALIZACAO:
        return "Em Finalização";
      case ORDER_STATUS.CANCELADO:
        return "Cancelado";
      default:
        return "Finalizado";
    }
  };
  const getTagClass = () => {
    switch (status) {
      case ORDER_STATUS.EM_ESPERA:
        return "is-warning";
      case ORDER_STATUS.EM_ANDAMENTO:
        return "is-primary";
      case ORDER_STATUS.APROVADO:
        return "is-info";
      case ORDER_STATUS.SEPARADO:
        return "is-link";
      case ORDER_STATUS.PAGO:
        return "is-light";
      case ORDER_STATUS.EM_FINALIZACAO:
        return "is-link";
      case ORDER_STATUS.CANCELADO:
        return "is-dark";
      default:
        return "is-success";
    }
  };
  return (
    <span className={`tag ${getTagClass()} ${size}`}>{getStatusLabel()}</span>
  );
};
