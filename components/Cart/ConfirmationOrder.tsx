import styled from "styled-components";
import { CartItemType } from "../../services/CartService";

const StyledContactForm = styled.div``;

export const ConfirmationOrder = ({
  cart,
  contactInfo,
}: {
  cart: any;
  contactInfo: any;
}) => {
  const getTotal = () => {
    let total = 0;
    cart?.items.forEach((element: CartItemType) => {
      total += element.price * (element.amount || 0);
    });

    return total;
  };

  return (
    <StyledContactForm>
      {cart?.items
        ?.filter((item: CartItemType) => item.amount)
        .map((item: CartItemType) => (
          <div key={`${item.id}`} style={{ display: "flex" }}>
            <div
              className="item-price"
              style={{ width: "80px", textAlign: "right" }}
            >
              R$ {item.price * (item.amount || 0)}
            </div>
            <div
              style={{ width: "50px", textAlign: "right", marginRight: "10px" }}
            >
              {item.amount} x
            </div>
            <span>
              [{item.type}] {item.name}
            </span>
          </div>
        ))}

      <div className="total-value">Valor total: R$ {getTotal()}</div>

      <p>
        <b>Nome:</b> {contactInfo?.name}
        <br />
        <b>Telefone:</b> {contactInfo?.phone}
        <br />
        <b>Email:</b> {contactInfo?.email}
        <br />
        <b>Cidade:</b> {contactInfo?.city} | <b>CEP:</b> {contactInfo?.zipcode}
        <br />
        <b>Observações:</b> {contactInfo?.observations || "-"}
        <br />
      </p>
    </StyledContactForm>
  );
};
