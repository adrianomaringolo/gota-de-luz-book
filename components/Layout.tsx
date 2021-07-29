import React, { ReactNode } from "react";
import Head from "next/head";

type Props = {
  children?: ReactNode;
  title?: string;
};

const Layout = ({ title = "This is the default title", children }: Props) => (
  <div style={{ position: "relative", height: "100%" }}>
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <link rel="icon" href="/favicon.ico" />
      <meta
        name="description"
        content="Catálogo virtual dos produtos Gota de Luz"
      />
      <meta name="og:title" content={title} />
      <meta name="twitter:card" content="summary_large_image" />
    </Head>

    {children}
  </div>
);

export default Layout;
