import { GetStaticProps, GetStaticPaths } from "next";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { ProductItem, ProductType } from "../../interfaces";
import { getAllProductsIds, getProductData } from "lib/products";

import styles from "styles/products.module.scss";
import ProductItemDisplay from "components/products/ProductItemDisplay";
import { ProductsService } from "services/ProductsService";
import Layout from "components/Layout";
import { StyledProductItemDisplay } from "components/products/StyledProductItemDisplay";

const ProductItemDetails = ({ productData }: { productData: any }) => {
  const [products, setProducts] = useState<any[]>([]);

  return (
    <>
      <Layout title={process.env.NEXT_PUBLIC_COMPANY_NAME}>
        <Head>
          <title>Catálogo - {productData.type}</title>
        </Head>
        <div
          className={styles.productDetais}
          style={{
            backgroundImage: `url('/images/flower-backgrounds/background-9.jpg')`,
          }}
        >
          <Link href="/#produtos">
            <div style={{ padding: "10px" }}>
              <Image
                src={`/images/logos/logo-hidrolatos.png`}
                height={110}
                width={384}
                alt="Logo"
              />
            </div>
          </Link>
          <h1 className="text-3xl font-bold">{productData.name}</h1>
          <p>{productData.description}</p>
          <section className="max-w-[1200px] p-14 bg-white rounded-3xl mt-6 grid gap-10 grid-cols-1 md:grid-cols-2">
            <img src={productData.image} />
            <div
              className="detailedDescription"
              dangerouslySetInnerHTML={{
                __html: productData.detailedDescription || "",
              }}
            ></div>
          </section>
        </div>
      </Layout>
    </>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = (await ProductsService.getProducts())
    .map((p) => p.urlName)
    .filter((url) => url);
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const productData = await ProductsService.getProductByUrlName(
    `/${params?.type ?? ""}/${params?.productId ?? ""}`
  );
  return {
    props: {
      productData: productData ? productData : {},
    },
  };
};

export default ProductItemDetails;
