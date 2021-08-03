import { format } from "date-fns";
import { useState } from "react";
import { StatusTag } from "./StatusTag";

export const OrderActivities = ({ orderItem }: { orderItem: any }) => {
  const [tabIndex, setTabIndex] = useState<number>(0);

  return (
    <>
      <div className="tabs is-large mt-6">
        <ul>
          <li className={tabIndex === 0 ? `is-active` : ""}>
            <a className="no-link" onClick={() => setTabIndex(0)}>
              Histórico de mudanças
            </a>
          </li>
          <li className={tabIndex === 1 ? `is-active` : ""}>
            <a className="no-link" onClick={() => setTabIndex(1)}>
              Comentários
            </a>
          </li>
        </ul>
      </div>
      {tabIndex === 0 && (
        <div>
          {orderItem.statusLogs?.map((log: any) => (
            <div className="mb-2">
              [{format(new Date(log.updatedAt), "dd/MM/yyyy hh:mm")}]{" "}
              <b>{log.userName}</b> mudou de{" "}
              <StatusTag status={log.oldStatus} size="is-medium" /> para{" "}
              <StatusTag status={log.newStatus} size="is-medium" />
            </div>
          ))}
        </div>
      )}
      {tabIndex === 1 && <div>Em desenvolvimento</div>}
    </>
  );
};
