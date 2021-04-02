import { GetStaticProps, GetStaticPaths } from "next";
import Head from "next/head";
import React from "react";
import { ProductItem, ProductType } from "../interfaces";
import { getAllProductsIds, getProductData } from "../lib/products";

import styles from "./../styles/products.module.scss";

const Product = ({ productData }: { productData: ProductType }) => {
  return (
    <>
      <Head>
        <title>Catálogo - {productData.type}</title>
      </Head>
      <div
        className={styles.productDetais}
        style={{
          backgroundImage: `url('/images/flower-backgrounds/${productData.image}')`,
        }}
      >
        <h1>{productData.type}</h1>
        <section className={styles.infoArea}>
          <p className={styles.description}>
            <span
              dangerouslySetInnerHTML={{ __html: productData.description }}
            />
          </p>
          <div className={styles.productItems}>
            {productData.items?.map((item: ProductItem) => (
              <div className={styles.itemContainer}>
                <div
                  className={styles.item}
                  style={{
                    background: `url('/images/products/${item.image}') no-repeat center / cover`,
                  }}
                ></div>
                <div className={styles.productText}>
                  <p className={styles.itemTitle}>{item.name}</p>
                  <p className={styles.itemDesc}>{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = getAllProductsIds();
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const productData = getProductData(params?.id as string);
  return {
    props: {
      productData,
    },
  };
};

export default Product;
