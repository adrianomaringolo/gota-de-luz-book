import React, { ReactNode } from "react";
import Head from "next/head";
import Fullpage from "./Fullpage";

type Props = {
  children?: ReactNode;
  title?: string;
};

const Layout = ({ title = "This is the default title" }: Props) => (
  <div>
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
    <Fullpage></Fullpage>
  </div>
);

export default Layout;
