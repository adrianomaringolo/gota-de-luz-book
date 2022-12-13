import React, { useEffect, useState } from "react";
import SweetAlert from "react-bootstrap-sweetalert";
import { CartService } from "services/CartService";

const WARNING_KEY = "christimasSet";

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
      title="🎄 Kits de Natal"
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
      <div style={{ textAlign: "left" }}>
        🎄🎅🏻🎁 E começou a nossa promoção de Natal com kits muito especiais para
        você presentear aquela pessoa querida e ainda ajudar a tornar mais farto
        o Natal de muitas famílias assistidas pelos trabalhos da Morada.
        <br />
        <br />
        Os kits disponíveis são:
        <br />
        - 2 sais por R$40
        <br />
        - 2 sprays por R$40
        <br />
        - 1 spray + 1 sais por R$40
        <br />
        - 2 Hidrolatos* R$50
        <br />
        - 3 Hidrolatos* R$72
        <br />
        <br />
        * o hidrolato de immortelle não é válido para essa promoção
        <br />
        <br />
        <big>Como pedir?</big>
        <br />
        <br />
        1 - Acesse nosso site: gotadecura.com.br
        <br />
        2 - Procure a área "Kits de Natal"
        <br />
        3 - Escolha a melhor opção de kit para você e clique em "Selecionar kit"
        <br />
        4 - Escolha quais os itens que vão compor seu kit
        <br />
        5 - Clique em pedir (e peça outros produtos 😋)
        <br />
        6 - Veja seu carrinho, insira seus dados de contato e feche seu pedido
        <br />
        7 - Aguarde o contato de uma das nossas voluntárias para acertar o
        pagamento e envio
        <br />8 - Receba sua encomenda de carinho, amor e cura!
      </div>
    </SweetAlert>
  );
};
