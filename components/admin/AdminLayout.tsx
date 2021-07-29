import React, { ReactNode } from "react";
import Head from "next/head";

type Props = {
  children?: ReactNode;
  title?: string;
};

const AdminLayout = ({ title = "Admin - Gota de Luz", children }: Props) => (
  <div style={{ position: "relative" }}>
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <link rel="icon" href="/favicon.ico" />
      <meta name="description" content="Administração Gota de Luz" />
      <meta name="og:title" content={title} />
      <meta name="twitter:card" content="summary_large_image" />
      <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/bulma@0.9.3/css/bulma.min.css"
      ></link>
    </Head>

    <section className="section">
      <div className="container">{children}</div>
    </section>
  </div>
);

export default AdminLayout;
