import Layout from 'components/Layout'
import ProductItemDisplay from 'components/products/ProductItemDisplay'
import { productTypes } from 'data/products'
import { getAllProductsIds, getProductData } from 'lib/products'
import { GetStaticPaths, GetStaticProps } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import { ProductsService } from 'services/ProductsService'
import { ProductItem } from '../../interfaces/products'

const Product = () => {
  const router = useRouter()
  const { type } = router.query

  const productData = productTypes.find((t) => t.id === type)

  const [products, setProducts] = useState<any[]>([])

  const getProducts = async () =>
    setProducts(
      productData?.mode === 'type'
        ? await ProductsService.getProductsByType(productData.type)
        : await ProductsService.getProductsByCategory(productData?.type as string),
    )

  useEffect(() => {
    getProducts()
  }, [productData?.type])

  return (
    <>
      <Layout title={process.env.NEXT_PUBLIC_COMPANY_NAME}>
        <Head>
          <title>Catálogo - {productData?.typeLabel ?? productData?.type}</title>
        </Head>
        <div
          className="w-full min-h-screen flex flex-col pt-16 items-center bg-no-repeat bg-cover bg-fixed"
          style={{
            backgroundImage: `url('${productData?.areaBackground}')`,
          }}
        >
          {/* <div className="my-8 w-full">
            <ProductCategories size="small" />
          </div> */}
          <h1
            className="text-4xl text-bold my-10 text-center"
            dangerouslySetInnerHTML={{
              __html: (productData?.typeLabel ?? productData?.type) as string,
            }}
          />

          <section className="bg-white/80 mb-24 p-10 space-y-3 min-w-[90vw] max-w-7xl shadow-2xl rounded-lg">
            <p className="m-0 text-gray-800 mb-6">
              <span
                dangerouslySetInnerHTML={{ __html: productData?.description as string }}
              />
            </p>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-3 text-center justify-center">
              {products
                ?.filter((item: ProductItem) => !item.hidden)
                .map((item: ProductItem) => (
                  <ProductItemDisplay
                    item={item}
                    type={productData?.type as string}
                    key={item.id}
                  />
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
