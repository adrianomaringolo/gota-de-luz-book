import React, { useEffect, useState } from "react";
import SweetAlert from "react-bootstrap-sweetalert";

export const AlertModal: React.FC = () => {
  const [showModal, setShowModal] = useState<boolean>(false);

  useEffect(() => {
    const modalSet = true;

    if (!modalSet) {
      setShowModal(true);
    }
  }, []);

  const closeWarningModal = () => {
    setShowModal(false);
    localStorage.setItem("priceWarningSet", "true");
  };

  return (
    <SweetAlert
      show={showModal}
      showCancel={false}
      title="Alteração de preços"
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
      Em abril, vamos precisar fazer alterações nos preços dos produtos!
      <br />
      <br />
      Aproveite para fazer suas reservas agora!😉
    </SweetAlert>
  );
};
