import { GetStaticProps, GetStaticPaths } from "next";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { ProductItem, ProductType } from "../interfaces";
import { getAllProductsIds, getProductData } from "../lib/products";

import styles from "./../styles/products.module.scss";
import ProductItemDisplay from "../components/ProductItemDisplay";
import { CartButton } from "../components/Cart/CartButton";
import { ProductsService } from "../services/ProductsService";

const Product = ({ productData }: { productData: ProductType }) => {
  const [products, setProducts] = useState<any[]>([]);

  const getProducts = async () =>
    setProducts(await ProductsService.getProductsByType(productData.type));

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <>
      <CartButton />
      <Head>
        <title>Catálogo - {productData.type}</title>
      </Head>
      <div
        className={styles.productDetais}
        style={{
          backgroundImage: `url('/images/flower-backgrounds/${productData.image}')`,
        }}
      >
        <Link href="/#produtos">
          <div style={{ padding: "10px" }}>
            <Image
              priority
              src={`/images/logos/logo-${productData.id}.png`}
              height={123}
              width={400}
              alt="Logo"
            />
          </div>
        </Link>
        <h1>{productData.type}</h1>
        <section className={styles.infoArea}>
          <p className={styles.description}>
            <span
              dangerouslySetInnerHTML={{ __html: productData.description }}
            />
          </p>
          <div className={styles.productItems}>
            {products?.map((item: ProductItem) => (
              <ProductItemDisplay
                item={item}
                type={productData.type}
                key={item.id}
              />
            ))}
          </div>
          <Link href="/#produtos">
            <h3 className="link">&lt;&lt; Voltar para início</h3>
          </Link>
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
