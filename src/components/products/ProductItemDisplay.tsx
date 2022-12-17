import React, { useState } from "react";
import { useDisclosure } from "utils/hooks/useDisclosure";
import { ProductItem } from "../../interfaces";
import { CartService } from "../../services/CartService";
import { formatCurrency } from "../../utils/format";
import { OptionsSelectModal } from "./OptionsSelectModal";
import { StyledProductItemDisplay } from "./StyledProductItemDisplay";

const ProductItemDisplay = ({
  item,
  type,
}: {
  item: ProductItem;
  type: string;
}) => {
  const [viewMode, setViewMode] = useState("");
  const { close, open, isOpen } = useDisclosure();

  const handleOrderClick = () => {
    if (item.optionsSet && item.optionsSet.length > 0) {
      open();
    } else {
      addToCart();
    }
  };

  const addToCart = (selectedTypes?: string[]) => {
    CartService.addItemToCart({
      ...item,
      name: item.name + (selectedTypes ? ` (${selectedTypes.join(", ")})` : ""),
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
        <p
          className="itemDesc"
          dangerouslySetInnerHTML={{
            __html: item.description || "",
          }}
        ></p>
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
              onClick={handleOrderClick}
              className="moreButton"
            >
              <img
                src="/images/shopping-bag.png"
                style={{ width: 20, marginRight: "5px" }}
              />{" "}
              {item.optionsSet ? "Selecionar kit" : "Pedir"}
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
      <OptionsSelectModal
        item={item}
        displayModal={isOpen}
        closeModal={close}
        addToCart={addToCart}
      />
    </StyledProductItemDisplay>
  );
};

export default ProductItemDisplay;
