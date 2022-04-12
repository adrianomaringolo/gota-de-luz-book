import React, { ReactNode } from "react";
import Head from "next/head";
import { Navbar } from "./layout/Navbar";

type Props = {
  children?: ReactNode;
  title?: string;
};

const Layout = ({ title = "This is the default title", children }: Props) => (
  <div style={{ position: "relative", minHeight: "100%" }}>
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

    <Navbar />

    {children}
  </div>
);

export default Layout;

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
