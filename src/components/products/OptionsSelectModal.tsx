import { ProductItem } from "interfaces";
import React, { useState } from "react";
import SweetAlert from "react-bootstrap-sweetalert";
import styled from "styled-components";

const StyledModal = styled.div`
  p.item-name {
    font-size: 1.2rem;
    margin-bottom: 0;
  }

  select {
    font-size: 1.8rem;
    margin-bottom: 1rem;
    padding: 0.3rem;
  }
`;

type OptionsSelectModalProps = {
  item: ProductItem;
  displayModal: boolean;
  closeModal: () => void;
  addToCart: (selectedTypes: string[]) => void;
};

export const OptionsSelectModal = ({
  displayModal,
  closeModal,
  item,
  addToCart,
}: OptionsSelectModalProps) => {
  const [selectedValues, setSelectedValues] = useState<string[]>([]);

  const setValueToPosition = (position: number, value: string) => {
    const newArray = [...selectedValues];
    newArray[position] = value;
    setSelectedValues(newArray);
  };

  return (
    <StyledModal>
      <SweetAlert
        show={displayModal}
        showCancel={false}
        title={item.name}
        onConfirm={addToCart}
        customButtons={
          <React.Fragment>
            <button
              className="button-confirmation big"
              onClick={() => {
                addToCart(selectedValues);
                closeModal();
              }}
            >
              Pedir
            </button>
            <button
              className="button-confirmation inverse big"
              onClick={closeModal}
            >
              Cancelar
            </button>
          </React.Fragment>
        }
      >
        <p>Selecione os items do kit que você deseja</p>
        {item.optionsSet?.map((item, i) => (
          <div>
            <p className="item-name">{item.name}</p>
            <select
              value={selectedValues[i]}
              onChange={(e: any) => setValueToPosition(i, e.target.value)}
            >
              {item.values.map((value) => (
                <option value={value}>{value}</option>
              ))}
            </select>
          </div>
        ))}
      </SweetAlert>
    </StyledModal>
  );
};
