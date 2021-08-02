import React, { ReactNode, useEffect, useState } from "react";
import Head from "next/head";
import { useRouter } from "next/dist/client/router";

type Props = {
  children?: ReactNode;
  title?: string;
};

const AdminLayout = ({ title = "Admin - Gota de Luz", children }: Props) => {
  const router = useRouter();

  useEffect(() => {
    const user = localStorage.getItem("adminLogged")
      ? JSON.parse(localStorage.getItem("adminLogged") || "")
      : undefined;

    if (!user) {
      router.push("/admin/login");
    }
  }, []);

  return (
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
        <script
          src="https://kit.fontawesome.com/819538a1d6.js"
          crossOrigin="anonymous"
        ></script>
      </Head>

      <section className="section">
        <div className="container">{children}</div>
      </section>
    </div>
  );
};

export default AdminLayout;
