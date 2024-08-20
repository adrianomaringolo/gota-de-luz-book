import Layout from 'components/Layout'
import ProductItemDisplay from 'components/products/ProductItemDisplay'
import { getAllProductsIds, getProductData } from 'lib/products'
import { GetStaticPaths, GetStaticProps } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { ProductsService } from 'services/ProductsService'
import styles from 'styles/products.module.scss'
import { ProductItem, ProductType } from '../../interfaces/products'

const Product = ({ productData }: { productData: ProductType }) => {
  const [products, setProducts] = useState<any[]>([])

  const getProducts = async () =>
    setProducts(await ProductsService.getProductsByType(productData.type))

  useEffect(() => {
    getProducts()
  }, [])

  return (
    <>
      <Layout title={process.env.NEXT_PUBLIC_COMPANY_NAME}>
        <Head>
          <title>Catálogo - {productData.typeLabel}</title>
        </Head>
        <div
          className={styles.productDetais}
          style={{
            backgroundImage: `url('/images/flower-backgrounds/${productData.image}')`,
          }}
        >
          <Link href="/#produtos">
            <div style={{ padding: '10px' }}>
              <Image
                src={`/images/logos/logo-${productData.id}.png`}
                height={110}
                width={384}
                alt="Logo"
              />
            </div>
          </Link>
          <h1 className="text-4xl text-bold mb-6">{productData.typeLabel}</h1>
          <section className={styles.infoArea}>
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
