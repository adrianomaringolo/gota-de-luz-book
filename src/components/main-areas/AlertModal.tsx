import React, { useEffect, useState } from "react";
import SweetAlert from "react-bootstrap-sweetalert";
import { CartService } from "services/CartService";

export const AlertModal: React.FC = () => {
  const [showModal, setShowModal] = useState<boolean>(false);

  useEffect(() => {
    const modalSet = localStorage.getItem("blackFridayEndSet");

    if (!modalSet) {
      setShowModal(true);
    }
  }, []);

  const closeWarningModal = () => {
    CartService.clearCart();
    setShowModal(false);
    localStorage.setItem("blackFridayEndSet", "true");
  };

  return (
    <SweetAlert
      show={showModal}
      showCancel={false}
      title="🎄 Em breve, kits de Natal"
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
      A semana Black Friday acabou, mas em breve teremos muitos kits de Natal
      com preços especiais!
      <br />
      Fique ligado!😉
    </SweetAlert>
  );
};
