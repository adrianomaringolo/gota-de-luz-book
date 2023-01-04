import React, { useEffect, useState } from "react";
import SweetAlert from "react-bootstrap-sweetalert";
import { CartService } from "services/CartService";

const WARNING_KEY = "newPrices2023";

export const AlertModal: React.FC = () => {
  const [showModal, setShowModal] = useState<boolean>(false);

  useEffect(() => {
    const modalSet = localStorage.getItem(WARNING_KEY);

    if (!modalSet) {
      setShowModal(true);
    }
  }, []);

  const closeWarningModal = () => {
    CartService.clearCart();
    setShowModal(false);
    localStorage.setItem(WARNING_KEY, "true");
  };

  return (
    <SweetAlert
      show={showModal}
      showCancel={false}
      title="Atualização dos preços"
      onConfirm={closeWarningModal}
      customButtons={
        <React.Fragment>
          <button
            className="button-confirmation big"
            onClick={closeWarningModal}
          >
            OK
          </button>
        </React.Fragment>
      }
    >
      Foi necessário fazer alguns reajustes nos preços dos nossos produtos esse
      ano, agradecemos a compreensão.
      <br />
      <br />
      Confira nosso catálogo e aproveite!😉
    </SweetAlert>
  );
};
