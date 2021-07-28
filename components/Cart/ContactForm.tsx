import { ChangeEvent } from "react";
import styled from "styled-components";

const StyledContactForm = styled.div`
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
  const changeInfo = (e: ChangeEvent<HTMLInputElement>, field: string) => {
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
      <input
        name="phone"
        required
        value={contactInfo?.phone}
        onChange={(e: ChangeEvent<HTMLInputElement>) => changeInfo(e, "phone")}
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
    </StyledContactForm>
  );
};
