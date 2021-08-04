import { format } from "date-fns";
import { useState } from "react";
import { StatusTag } from "./StatusTag";
import { AddComment } from "./AddComment";

export const OrderActivities = ({
  orderItem,
  afterSave,
}: {
  orderItem: any;
  afterSave: any;
}) => {
  const [tabIndex, setTabIndex] = useState<number>(0);

  const sortByDate = (a: any, b: any, field: string) => {
    if (a[field] > b[field]) {
      return -1;
    }
    if (a[field] < b[field]) {
      return 1;
    }
    return 0;
  };

  return (
    <>
      <div className="tabs is-large mt-6">
        <ul>
          <li className={tabIndex === 0 ? `is-active` : ""}>
            <a className="no-link" onClick={() => setTabIndex(0)}>
              Comentários (
              {`${orderItem.comments ? orderItem.comments.length : "0"}`})
            </a>
          </li>
          <li className={tabIndex === 1 ? `is-active` : ""}>
            <a className="no-link" onClick={() => setTabIndex(1)}>
              Histórico de mudanças (
              {`${orderItem.statusLogs ? orderItem.statusLogs.length : "0"}`})
            </a>
          </li>
        </ul>
      </div>
      {tabIndex === 0 && (
        <div>
          <AddComment order={orderItem} afterSave={afterSave} />
          {orderItem.comments && orderItem.comments.length ? (
            orderItem.comments
              .sort((a: any, b: any) => sortByDate(a, b, "createdAt"))
              .map((comment: any) => (
                <div className="box mt-2">
                  <p>
                    <b>{comment.userName}</b>
                    <span className="ml-3 is-size-7">
                      [{format(new Date(comment.createdAt), "dd/MM/yyyy HH:mm")}
                      ]
                    </span>
                  </p>
                  <div style={{ whiteSpace: "pre" }}>{comment.comment}</div>
                </div>
              ))
          ) : (
            <p className="mt-2">Ainda não há comentários</p>
          )}
        </div>
      )}
      {tabIndex === 1 && (
        <div>
          {orderItem.statusLogs && orderItem.statusLogs.length ? (
            orderItem.statusLogs.map((log: any) => (
              <div className="mb-2">
                [{format(new Date(log.updatedAt), "dd/MM/yyyy HH:mm")}]{" "}
                <b>{log.userName}</b> mudou de{" "}
                <StatusTag status={log.oldStatus} size="is-medium" /> para{" "}
                <StatusTag status={log.newStatus} size="is-medium" />
              </div>
            ))
          ) : (
            <p>Não houve mudança de status</p>
          )}
        </div>
      )}
    </>
  );
};
