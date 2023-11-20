import React, { useEffect, useState } from "react";
import SweetAlert from "react-bootstrap-sweetalert";
import { CartService } from "services/CartService";

const WARNING_KEY = "black-friday23";

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
      title="Semana de ofertas 🤑"
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
      Aproveite nossa semana de ofertas para garantir seus kits (dois sprays
      energéticos, dois sais de banho ou um spray e um sais de banho) por um
      preço espcial.
      <br />
      Confira nosso catálogo e aproveite!😉
    </SweetAlert>
  );
};
