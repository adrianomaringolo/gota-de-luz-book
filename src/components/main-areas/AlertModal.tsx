import React, { useEffect, useState } from "react";
import SweetAlert from "react-bootstrap-sweetalert";
import { CartService } from "services/CartService";

export const AlertModal: React.FC = () => {
  const [showModal, setShowModal] = useState<boolean>(false);

  const WARNING_KEY = "blackFridayEndSet";

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
      title="Recesso de fim de ano"
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
      Na semana entre o Natal e o Ano Novo, faremos um pequeno recesso. Os
      pedidos podem ser feitos normalmente, mas serão atendidos apenas na
      primeira semana de janeiro. Agradecemos a compreensão!
      <br />
      <br />
      Além disso, em 2023 será necessário fazer alguns reajustes nos preços dos
      nossos produtos, mas ainda dá pra garantir os preços de 2022!
      <br />
      <br />
      Venha aproveitar!😉
    </SweetAlert>
  );
};
