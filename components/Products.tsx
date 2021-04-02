import React from "react";
import { ProductType } from "../interfaces";

import { productTypes } from "../data/products";

import styles from "./../styles/products.module.scss";
import Link from "next/link";

const Products = () => (
  <div className={styles.productTypes}>
    {productTypes.map((product: ProductType) => (
      <Link href={`/${product.id}`} key={product.id}>
        <div className={styles.typeContainer}>
          <div
            className={styles.productTypeCard}
            style={{
              backgroundImage: `url('/images/flower-backgrounds/${product.image}')`,
            }}
          >
            <h3 className="hvr-underline-from-center">{product.type}</h3>
          </div>
        </div>
      </Link>
    ))}
  </div>
);

export default Products;
