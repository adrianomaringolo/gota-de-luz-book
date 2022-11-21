import React, { useEffect, useState } from "react";
import SweetAlert from "react-bootstrap-sweetalert";
import { CartService } from "services/CartService";

export const AlertModal: React.FC = () => {
  const [showModal, setShowModal] = useState<boolean>(false);

  useEffect(() => {
    const modalSet = localStorage.getItem("blackFridaySet");

    if (!modalSet) {
      setShowModal(true);
    }
  }, []);

  const closeWarningModal = () => {
    CartService.clearCart();
    setShowModal(false);
    localStorage.setItem("blackFridaySet", "true");
  };

  return (
    <SweetAlert
      show={showModal}
      showCancel={false}
      title="Semana Black Friday"
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
      Essa semana teremos muitos produtos Gota de Cura com descontos especiais!
      <br />
      <br />
      Procure pelo selo especial nos nossos produtos e aproveite nossos
      descontos! É apenas até dia 27/11 ou enquanto durarem nossos estoques!{" "}
      <br />
      <br />
      Aproveite para fazer suas reservas agora!😉
    </SweetAlert>
  );
};
