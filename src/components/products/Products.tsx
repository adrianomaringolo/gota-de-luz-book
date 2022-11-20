import React from "react";
import { ProductType } from "../../interfaces";

import { productTypes } from "../../data/products";

import styles from "./../../styles/products.module.scss";
import Link from "next/link";

const Products = () => (
  <div className={styles.productTypes}>
    {productTypes.map((type: ProductType) => (
      <Link href={`/${type.id}`} key={type.id}>
        <div className={styles.typeContainer}>
          <div
            className={styles.productTypeCard}
            style={{
              backgroundImage: `url('/images/flower-backgrounds/${type.image}')`,
            }}
          >
            <h3
              className="hvr-underline-from-center"
              dangerouslySetInnerHTML={{
                __html: type.typeLabel || type.type,
              }}
            ></h3>
          </div>
        </div>
      </Link>
    ))}
  </div>
);

export default Products;
