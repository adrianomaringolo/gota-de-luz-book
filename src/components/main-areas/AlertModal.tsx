import React, { useEffect, useState } from "react";
import SweetAlert from "react-bootstrap-sweetalert";
import { CartService } from "services/CartService";

const WARNING_KEY = "recesso-final-2023";

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
      title="🏖️ Recesso de final de ano!"
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
      Estaremos em recesso a partir de 22 de dezembro, e novos pedidos serão
      atendidos a partir de 02 de janeiro. <br />
      <br />
      Agradecemos pela compreensão e desejamos um 2024 cheio de realizações!
      <br />
      <br />
      Até mais e boas festas! 🥳
      <br />
      <br />
      Confira nosso catálogo e aproveite!😉
    </SweetAlert>
  );
};
