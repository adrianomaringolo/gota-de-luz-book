import React, { useState } from "react";
import { ProductItem } from "../interfaces";
import Image from "next/image";
import styles from "./../styles/products.module.scss";

const ProductItemDisplay = ({ item }: { item: ProductItem }) => {
  const [viewMode, setViewMode] = useState("");
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
          <p className={styles.itemDesc}>{item.description}</p>
          {item.detailedDescription && (
            <button
              onClick={() => setViewMode(styles.expanded)}
              className={styles.moreButton}
            >
              Saiba mais
            </button>
          )}
        </div>
      </div>
      <div className={`${styles.modal} ${viewMode}`}>
        <div className={`${styles.detailedItem} ${styles.modalItem}`}>
          <p className={styles.itemTitle}>{item.name}</p>
          <div className={styles.infoOverflowArea}>
            <div
              className={styles.image}
              style={{
                background: `url('/images/products/${item.image}') no-repeat center / contain`,
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
