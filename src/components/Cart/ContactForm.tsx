import { ChangeEvent } from "react";
import styled from "styled-components";
import InputMask from "react-input-mask";

const StyledContactForm = styled.div`
  margin-bottom: 10px;
  label {
    color: #666;
  }
  input {
    display: block;
    width: 100%;
    padding: 10px !important;
    margin-bottom: 20px;
  }
`;

export const ContactForm = ({
  setContactInfo,
  contactInfo,
}: {
  setContactInfo: any;
  contactInfo: any;
}) => {
  const changeInfo = (
    e: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>,
    field: string
  ) => {
    setContactInfo({ ...contactInfo, [field]: e.target.value });
  };

  return (
    <StyledContactForm>
      <label htmlFor="name">
        Nome completo <small>(obrigatório)</small>
      </label>
      <input
        name="name"
        required
        value={contactInfo?.name}
        onChange={(e: ChangeEvent<HTMLInputElement>) => changeInfo(e, "name")}
      />
      <label htmlFor="phone">
        Telefone para contato (WhatsApp) <small>(obrigatório)</small>
      </label>
      <InputMask
        mask="(99) 99999-9999"
        name="phone"
        required
        value={contactInfo?.phone}
        onChange={(e: ChangeEvent<HTMLInputElement>) => changeInfo(e, "phone")}
      />
      <label htmlFor="email">
        E-mail <small>(obrigatório)</small>
      </label>
      <input
        name="email"
        required
        type="email"
        value={contactInfo?.email}
        onChange={(e: ChangeEvent<HTMLInputElement>) => changeInfo(e, "email")}
      />
      <label htmlFor="city">
        Cidade <small>(obrigatório)</small>
      </label>
      <input
        name="city"
        required
        value={contactInfo?.city}
        onChange={(e: ChangeEvent<HTMLInputElement>) => changeInfo(e, "city")}
      />
      <label htmlFor="zipcode">
        CEP <small>(obrigatório)</small>
      </label>
      <input
        name="zipcode"
        required
        value={contactInfo?.zipcode}
        onChange={(e: ChangeEvent<HTMLInputElement>) =>
          changeInfo(e, "zipcode")
        }
      />
      <label htmlFor="observations">
        Observações <small>(opcional)</small>
      </label>
      <textarea
        name="observations"
        className="textarea"
        placeholder="Gostaria de deixar algum comentário ou observação sobre o pedido para a equipe?"
        value={contactInfo?.observations}
        rows={4}
        style={{
          display: "block",
          width: "100%",
          fontSize: "1em",
          padding: 10,
        }}
        onChange={(e: ChangeEvent<HTMLTextAreaElement>) =>
          changeInfo(e, "observations")
        }
      />
    </StyledContactForm>
  );
};
