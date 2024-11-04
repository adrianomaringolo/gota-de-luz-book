import { Analytics } from '@vercel/analytics/react'
import Head from 'next/head'
import React, { ReactNode } from 'react'
import { Toaster } from 'react-hot-toast'
import { Navbar } from './layout/Navbar'

type Props = {
  children?: ReactNode
  title?: string
}

const Layout = ({ title = 'This is the default title', children }: Props) => (
  <div style={{ position: 'relative', minHeight: '100%' }}>
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <link rel="icon" href="/favicon.ico" />
      <meta
        name="description"
        content={
          'Catálogo virtual para os produtos ' + process.env.NEXT_PUBLIC_COMPANY_NAME
        }
      />
      <meta name="og:title" content={title} />
      <meta name="twitter:card" content="summary_large_image" />

      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link
        href="https://fonts.googleapis.com/css2?family=Raleway:ital,wght@0,100..900;1,100..900&display=swap"
        rel="stylesheet"
      ></link>
    </Head>

    <Navbar />

    <Toaster
      toastOptions={{
        duration: 5000,
      }}
    />

    <Analytics />
    {children}
  </div>
)

export default Layout

{
  /* <div style={{ textAlign: "center", paddingTop: "50px" }}>
      <h1 style={{ textAlign: "center", paddingTop: "50px" }}>
        Em manutenção!
      </h1>
      <h2 style={{ textAlign: "center", paddingTop: "50px" }}>
        Desculpe pelo transtorno, tente novamente mais tarde!
      </h2>
      <h4 style={{ textAlign: "center", paddingTop: "50px" }}>
        gotadeluz.net.br
      </h4>
    </div> */
}
