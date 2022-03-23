import React, { useEffect, useState } from "react";
import ReactFullpage from "@fullpage/react-fullpage";
import Image from "next/image";
import cn from "classnames";

import styles from "./../styles/layout.module.scss";
import Products from "./Products";
import Photos from "./Photos";
import { CartButton } from "./Cart/CartButton";

import SweetAlert from "react-bootstrap-sweetalert";

const Fullpage = () => {
  const [showModal, setShowModal] = useState<boolean>(false);

  useEffect(() => {
    const modalSet = localStorage.getItem("priceWarningSet");

    if (!modalSet) {
      setShowModal(true);
    }
  }, []);

  const closeWarningModal = () => {
    setShowModal(false);
    localStorage.setItem("priceWarningSet", "true");
  };

  return (
    <>
      <SweetAlert
        show={showModal}
        showCancel={false}
        title="Alteração de preços"
        onConfirm={closeWarningModal}
        customButtons={
          <React.Fragment>
            <button
              className="button-confirmation big"
              onClick={closeWarningModal}
            >
              OK
            </button>
          </React.Fragment>
        }
      >
        Em abril, vamos precisar fazer alterações nos preços dos produtos!
        <br />
        <br />
        Aproveite para fazer suas reservas agora!😉
      </SweetAlert>
      <CartButton />
      <ReactFullpage
        scrollingSpeed={1000}
        anchors={["", "produtos", "recursos", "galeria", "contato"]}
        render={() => {
          return (
            <ReactFullpage.Wrapper>
              <div
                className={cn("section", styles.section, styles.sectionLogo)}
              >
                <div className={styles.contentArea}>
                  <Image
                    priority
                    src="/images/logo.svg"
                    height={400}
                    width={600}
                    alt="Logo"
                    className={styles.svgLogo}
                  />
                  <p className={styles.highlight}>
                    A marca Gota de Luz oferece produtos artesanais, feitos à
                    base de óleos vegetais e óleos essenciais. Livres de
                    conservantes, sem produtos de origem animal e sem testes em
                    animais.
                  </p>
                </div>
              </div>
              <div
                className={cn(
                  "section",
                  styles.section,
                  styles.sectionProducts
                )}
              >
                <div className={styles.contentArea}>
                  <h2 className="fancy-title">Conheça nossos produtos</h2>
                  <Products />
                </div>
              </div>
              <div
                className={cn(
                  "section",
                  styles.section,
                  styles.sectionDestination
                )}
              >
                <div className={styles.contentArea}>
                  <p className={styles.highlight}>
                    Os recursos das vendas são revertidos para a{" "}
                    <strong>
                      <i>Morada Espírita Professor Lairi Hans</i>
                    </strong>
                    , e seu trabalho de assistência à famílias carentes da
                    periferia de Campinas.
                  </p>
                  <p className={styles.more}>
                    Conheça mais sobre o trabalho da Morada
                    <div>
                      <a href="http://moradaespirita.org" target="blank">
                        Site
                      </a>
                      <a
                        href="https://www.facebook.com/moradaespirita"
                        target="blank"
                      >
                        Facebook
                      </a>
                      <a
                        href="https://instagram.com/moradaespirita"
                        target="blank"
                      >
                        Instagram
                      </a>
                    </div>
                  </p>
                </div>
              </div>
              <div
                className={cn("section", styles.section, styles.sectionPhotos)}
              >
                <div className={styles.contentArea}>
                  <h2 className="fancy-title">Galeria</h2>
                  <Photos />
                </div>
              </div>
              <div
                className={cn("section", styles.section, styles.sectionContact)}
              >
                <div className={styles.contentArea}>
                  <h2 className="fancy-title">Entre em contato</h2>
                  <p className={styles.highlight}>
                    Via WhatsApp:{" "}
                    <span style={{ color: "#000" }}>(19) 99135-5414</span> -
                    Marcelo
                  </p>
                  {/* <p className={styles.highlight}>
                  <a
                    className="link"
                    href="https://drive.google.com/file/d/1dxLJ6MORxJV-QCBUdDX6OEsMsvd6xth1/view?usp=sharing"
                    target="_blank"
                  >
                    Clique aqui
                  </a>{" "}
                  para baixar o catálogo em pdf
                </p> */}
                  <p className={styles.highlight}>
                    Nos siga no Instagram:{" "}
                    <a
                      href="https://www.instagram.com/gotadeluz_artesanais/"
                      target="blank"
                    >
                      gotadeluz_artesanais
                    </a>
                  </p>
                </div>
              </div>
            </ReactFullpage.Wrapper>
          );
        }}
      />
    </>
  );
};

export default Fullpage;
