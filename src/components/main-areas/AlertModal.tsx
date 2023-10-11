import React, { useEffect, useState } from "react";
import SweetAlert from "react-bootstrap-sweetalert";
import { CartService } from "services/CartService";

const WARNING_KEY = "novo-hidrolato-canela";

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
      title="Novas opções de óleos essenciais"
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
      Conhece nosso novo hidrolato de canela?
      <br />
      <br />
      Com um sabor delicioso, além de ter propriedades bactericidas e
      antifúngicas. Excelente para fortalecer a imunidade e com a vantagem de
      ser extremamente seguro para ser usado, inclusive para crianças.
      <br />
      <br />
      Confira nosso catálogo e aproveite!😉
    </SweetAlert>
  );
};
