import Layout from 'components/Layout'
import { ProductCategories } from 'components/products/ProductCategories'
import ProductItemDisplay from 'components/products/ProductItemDisplay'
import { getAllProductsIds, getProductData } from 'lib/products'
import { GetStaticPaths, GetStaticProps } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { ProductsService } from 'services/ProductsService'
import styles from 'styles/products.module.scss'
import { ProductItem, ProductType } from '../../interfaces/products'

const Product = ({ productData }: { productData: ProductType }) => {
  const [products, setProducts] = useState<any[]>([])

  const getProducts = async () =>
    setProducts(
      productData.mode === 'type'
        ? await ProductsService.getProductsByType(productData.type)
        : await ProductsService.getProductsByCategory(productData.type),
    )

  useEffect(() => {
    getProducts()
  }, [productData.type])

  return (
    <>
      <Layout title={process.env.NEXT_PUBLIC_COMPANY_NAME}>
        <Head>
          <title>Catálogo - {productData.typeLabel ?? productData.type}</title>
        </Head>
        <div className={styles.productDetais}>
          <div className="my-8 max-w-[100%] md:max-w-6xl">
            <ProductCategories size="small" />
          </div>

          <section className={styles.infoArea}>
            <h1
              className="text-4xl text-bold mb-6"
              dangerouslySetInnerHTML={{
                __html: productData.typeLabel ?? productData.type,
              }}
            />
            <p className={styles.description}>
              <span dangerouslySetInnerHTML={{ __html: productData.description }} />
            </p>
            <div className={styles.productItems}>
              {products
                ?.filter((item: ProductItem) => !item.hidden)
                .map((item: ProductItem) => (
                  <ProductItemDisplay item={item} type={productData.type} key={item.id} />
                ))}
            </div>
            <Link href="/#produtos">
              <h3 className="link">&lt;&lt; Voltar para início</h3>
            </Link>
          </section>
        </div>
      </Layout>
    </>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = getAllProductsIds()
  return {
    paths,
    fallback: false,
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const productData = getProductData(params?.type as string)
  return {
    props: {
      productData,
    },
  }
}

export default Product
