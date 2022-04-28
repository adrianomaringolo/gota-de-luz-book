import React, { useState } from "react";
import styled from "styled-components";
import { ProductItem } from "../interfaces";
import { CartService } from "../services/CartService";
import { formatCurrency } from "../utils/format";

const StyledProductItemDisplay = styled.div`
  @media only screen and (min-width: 768px) {
    min-width: 300px;
  }

  position: relative;
  overflow: hidden;
  flex: 1;
  min-width: 200px;
  max-width: 500px;
  width: 100%;
  height: 300px;
  margin: 3px;
  border: 1px solid #ccc;

  &:hover {
    .productText {
      opacity: 1;
    }
  }

  .productText {
    position: absolute;
    //opacity: 0;
    right: 0;
    left: 0;
    bottom: 0;
    background: rgba(255, 255, 255, 0.8);
    transition: all 0.5s;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    padding: 10px;
  }

  .moreButton {
    font-size: 1em;
    border: 1px solid #444;
    color: #444;
    background-color: transparent;
    padding: 10px;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.5s;
    &:hover {
      background-color: rgba(255, 255, 255, 0.4);
    }
  }

  .item {
    height: 100%;
  }

  .itemTitle {
    font-weight: 500;
    font-size: 1.3rem;
    border-width: 1px 0;
    border-style: solid;
    border-color: #000;
    line-height: 1.2rem;
    padding: 10px 0;
  }

  .itemDesc {
    font-size: 1rem;
    line-height: 1.1rem;
  }

  .modal {
    visibility: hidden;
    opacity: 0;
    background-color: rgba(0, 0, 0, 0.5);
    transition: all 0.5s;
    overflow: auto;
    position: absolute;
    left: 0;
    .modalItem {
      display: none;
      position: absolute;
      top: 0;
    }
    &.expanded {
      opacity: 1;
      visibility: visible;
      display: flex;
      flex-wrap: wrap;
      position: fixed;
      z-index: 10;
      justify-content: center;
      align-items: center;
      width: 100%;
      height: 100%;
      top: 0;
      .modalItem {
        display: block;
      }
    }
  }
  .detailedItem {
    background-color: #fff;
    max-width: 1000px;
    width: 100%;
    padding: 25px;

    @media only screen and (min-width: 768px) {
      padding: 50px;
      .infoOverflowArea {
        max-height: 80vh;
      }
    }
    .infoOverflowArea {
      display: flex;
      flex-wrap: wrap;
      overflow-x: auto;
      max-height: 400px;
    }
    .itemTitle {
      margin-bottom: 50px;
    }
    .image {
      min-width: 300px;
      min-height: 300px;
      flex: 1;
      margin-top: 25px;
    }
    .detailedDescription {
      flex: 1;
      margin-top: 25px;
      text-align: left;
      min-width: 300px;
      @media only screen and (min-width: 768px) {
        margin-left: 25px;
      }
    }
    .buttonArea {
      text-align: right;
      margin-top: 20px;
    }
    button {
      padding: 15px;
      border: 1px solid #333;
      background-color: transparent;
      cursor: pointer;
      border-radius: 5px;
      font-size: 1rem;
      transition: background-color 0.5s;
      &:hover {
        background-color: rgba(0, 0, 0, 0.1);
      }
    }
  }
`;

const ProductItemDisplay = ({
  item,
  type,
}: {
  item: ProductItem;
  type: string;
}) => {
  const [viewMode, setViewMode] = useState("");

  const addToCart = () => {
    CartService.addItemToCart({
      ...item,
      id: item.id,
      type,
      price: item.price,
    });
  };

  return (
    <StyledProductItemDisplay key={item.name}>
      <div
        className="item"
        style={{
          background: `url('${item.image}') no-repeat center / cover`,
        }}
      ></div>
      <div className="productText">
        <p className="itemTitle">{item.name}</p>
        {!item.available ? (
          <p>
            <big>
              <strong>Produto não disponível</strong>
            </big>
          </p>
        ) : (
          <p style={{ marginBottom: 0 }}>
            <strong>{formatCurrency(item.price)}</strong>
          </p>
        )}
        <p className="itemDesc">{item.description}</p>
        <div style={{ display: "flex" }}>
          {item.detailedDescription && (
            <button
              style={{ margin: "0 5px" }}
              onClick={() => setViewMode("expanded")}
              className="moreButton"
            >
              Saiba mais
            </button>
          )}
          {item.available && (
            <button
              style={{ margin: "0 5px", display: "flex" }}
              onClick={() => addToCart()}
              className="moreButton"
            >
              <img
                src="/images/shopping-bag.png"
                style={{ width: 20, marginRight: "5px" }}
              />{" "}
              Pedir
            </button>
          )}
        </div>
      </div>

      <div className={`modal ${viewMode}`}>
        <div className={`detailedItem modalItem`}>
          <p className="itemTitle">
            {type}: {item.name}
          </p>
          <div className="infoOverflowArea">
            <div
              className="image"
              style={{
                background: `url('${item.image}') no-repeat center / contain`,
                backgroundPosition: "top",
              }}
            ></div>
            <div
              className="detailedDescription"
              dangerouslySetInnerHTML={{
                __html: item.detailedDescription || "",
              }}
            ></div>
          </div>
          <div className="buttonArea">
            <button onClick={() => setViewMode("")}>Entendi, obrigado!</button>
          </div>
        </div>
      </div>
    </StyledProductItemDisplay>
  );
};

export default ProductItemDisplay;
