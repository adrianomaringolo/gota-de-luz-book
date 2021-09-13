import React, { ReactNode, useEffect, useState } from "react";
import Head from "next/head";
import { useRouter } from "next/dist/client/router";
import { Toaster } from "react-hot-toast";
import Link from "next/link";

type Props = {
  children?: ReactNode;
  title?: string;
};

const AdminLayout = ({ title = "Admin - Gota de Luz", children }: Props) => {
  const router = useRouter();
  const [user, setUser] = useState<any>();

  useEffect(() => {
    const userLS = localStorage.getItem("adminLogged")
      ? JSON.parse(localStorage.getItem("adminLogged") || "")
      : undefined;

    if (!userLS) {
      router.push("/admin/login");
    } else {
      setUser(userLS);
    }
  }, []);

  const logout = () => {
    localStorage.removeItem("adminLogged");
    router.push("/admin/login");
  };

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

        <link rel="stylesheet" href="/css/bulma.checkbox.min.css" />
      </Head>

      <div>
        <Toaster />
      </div>

      {user && (
        <nav
          className="navbar has-background-light"
          role="navigation"
          aria-label="main navigation"
        >
          <div id="navbarBasicExample" className="navbar-menu">
            <div className="navbar-start">
              <Link href="/admin/pedidos">
                <a className="navbar-item has-text-weight-bold">Pedidos</a>
              </Link>
              <Link href="/admin/produtos">
                <a className="navbar-item has-text-weight-bold">Produtos</a>
              </Link>
            </div>

            <div className="navbar-end">
              <div className="navbar-item">
                <p className="mr-3">Olá {user?.name}!</p>
                <div className="buttons">
                  <a className="button is-danger" onClick={logout}>
                    Sair
                  </a>
                </div>
              </div>
            </div>
          </div>
        </nav>
      )}

      <section className="section">
        <div className="container">{children}</div>
      </section>
    </div>
  );
};

export default AdminLayout;
