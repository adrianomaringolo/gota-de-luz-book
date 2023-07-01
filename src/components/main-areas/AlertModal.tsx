import React, { useEffect, useState } from "react";
import SweetAlert from "react-bootstrap-sweetalert";
import { CartService } from "services/CartService";

const WARNING_KEY = "newprices-2sem23";

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
      title="Novos produtos"
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
      Você já conhece nossos sprays energéticos e nossos sais de banho?
      <br />
      <br />
      Os sprays são confeccionados especialmente para trazer efeitos vibratórios
      ao ambiente e às pessoas! <br /> Os sais de banho são ótimos para ajudar
      no relaxamento no dia a dia!
      <br />
      <br />
      Confira nosso catálogo e aproveite!😉
    </SweetAlert>
  );
};
