import React, { useState } from "react";
import { ProductItem } from "../../interfaces";
import { CartService } from "../../services/CartService";
import { formatCurrency } from "../../utils/format";
import { StyledProductItemDisplay } from "./StyledProductItemDisplay";

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
        onClick={() => setViewMode("expanded")}
        style={{
          background: `url('${item.image}') no-repeat center / cover`,
        }}
      >
        {item.seal && <img src={item.seal} className="seal-img" />}
        {item.priceDiscount && (
          <div className="price-discount">
            {item.priceDiscount}
            <br />
            <small>OFF</small>
          </div>
        )}
      </div>
      <div className="productText">
        <p className="itemTitle">{item.name}</p>
        {!item.available ? (
          <p>
            <big>
              <strong>Produto não disponível</strong>
            </big>
          </p>
        ) : (
          <>
            {item.oldPrice && (
              <p style={{ marginBottom: 0 }} className="old-price">
                De: <strong>{formatCurrency(item.oldPrice)}</strong>
              </p>
            )}
            <p style={{ marginBottom: 0 }}>
              {item.oldPrice && "Por: "}
              <strong>{formatCurrency(item.price)}</strong>
            </p>
          </>
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
