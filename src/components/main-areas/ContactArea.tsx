import styles from "styles/layout.module.scss";
import cn from "classnames";
import Image from "next/image";
import styled from "styled-components";

const ContactAreaStyled = styled.div`
  .info-area {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;

    .img-area {
      max-width: 350px;
    }

    .social-area {
      flex: 1;
      margin-left: 20px;
    }
  }

  .social-link {
    display: flex;
    align-items: center;
    img {
      margin-right: 10px;
    }
  }
`;

export const ContactArea: React.FC = () => {
  return (
    <ContactAreaStyled
      id="contato"
      className={cn("section", styles.section, styles.sectionContact)}
    >
      <div className={styles.contentArea}>
        <h2 className="fancy-title">Entre em contato</h2>
        <div className="info-area">
          <div className="img-area">
            <a href="https://www.instagram.com/p/CbaM_GvAs4U/" target="_blank">
              <Image
                src="https://firebasestorage.googleapis.com/v0/b/gota-de-luz.appspot.com/o/assets%2Fabraroma-certificacao.jpg?alt=media&token=596598f6-d74a-42af-a049-8ea82fae4399"
                height={400}
                width={400}
                alt="Logo"
              />
            </a>
          </div>
          <div className="social-area">
            <p
              className={styles.highlight}
              style={{ textAlign: "left", marginTop: 0 }}
            >
              <strong>Aromaterapeuta responsável</strong>
              <br />
              Marcelo Soares Mattar - Profissional CertAroma (
              <a
                href="https://www.instagram.com/p/CbaM_GvAs4U/"
                target="_blank"
              >
                Ver mais
              </a>
              )
            </p>
            <p className={styles.highlight}>
              <a
                href="https://www.facebook.com/gotadeluz.artesanais"
                className="social-link"
                target="_blank"
              >
                <img src="/images/icons/facebook-logo.png" width={50} />
                @gotadeluz.artesanais
              </a>
              <a
                href="https://www.instagram.com/gotadeluz_artesanais/"
                className="social-link"
                target="_blank"
              >
                <img src="/images/icons/instagram-logo.png" width={50} />
                @gotadeluz_artesanais
              </a>
            </p>
            {/* <p className={styles.highlight}>
              Nos deixe um{" "}
              <a
                href="https://docs.google.com/forms/d/e/1FAIpQLSetBUhLfPUyn-AAaeZFSluLuB3BEzrpEX0yirA2CPk6LklYWg/viewform"
                target="blank"
              >
                depoimento
              </a>{" "}
              👋❤️
            </p> */}
          </div>
        </div>
      </div>
    </ContactAreaStyled>
  );
};
