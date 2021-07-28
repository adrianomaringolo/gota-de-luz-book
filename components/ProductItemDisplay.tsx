import React, { useState } from "react";
import { ProductItem } from "../interfaces";
import { CartService } from "../services/CartService";
import styles from "./../styles/products.module.scss";

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
    <>
      <div className={styles.itemContainer} key={item.name}>
        <div
          className={styles.item}
          style={{
            background: `url('/images/products/${item.image}') no-repeat center / cover`,
          }}
        ></div>
        <div className={styles.productText}>
          <p className={styles.itemTitle}>{item.name}</p>
          <p>
            <strong>R$ {item.price}</strong>
          </p>
          <p className={styles.itemDesc}>{item.description}</p>
          <div style={{ display: "flex" }}>
            {item.detailedDescription && (
              <button
                style={{ margin: "0 5px" }}
                onClick={() => setViewMode(styles.expanded)}
                className={styles.moreButton}
              >
                Saiba mais
              </button>
            )}
            <button
              style={{ margin: "0 5px", display: "flex" }}
              onClick={() => addToCart()}
              className={styles.moreButton}
            >
              <img
                src="/images/shopping-bag.png"
                style={{ width: 16, marginRight: "5px" }}
              />{" "}
              Pedir
            </button>
          </div>
        </div>
      </div>
      <div className={`${styles.modal} ${viewMode}`}>
        <div className={`${styles.detailedItem} ${styles.modalItem}`}>
          <p className={styles.itemTitle}>
            {type}: {item.name}
          </p>
          <div className={styles.infoOverflowArea}>
            <div
              className={styles.image}
              style={{
                background: `url('/images/products/${item.image}') no-repeat center / contain`,
                backgroundPosition: "top",
              }}
            ></div>
            <div
              className={styles.detailedDescription}
              dangerouslySetInnerHTML={{
                __html: item.detailedDescription || "",
              }}
            ></div>
          </div>
          <div className={styles.buttonArea}>
            <button onClick={() => setViewMode("")}>Entendi, obrigado!</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductItemDisplay;
