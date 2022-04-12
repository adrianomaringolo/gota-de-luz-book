import styles from "./../../styles/layout.module.scss";
import cn from "classnames";

export const ContactArea: React.FC = () => {
  return (
    <div
      id="contato"
      className={cn("section", styles.section, styles.sectionContact)}
    >
      <div className={styles.contentArea}>
        <h2 className="fancy-title">Entre em contato</h2>
        <p className={styles.highlight}>
          Via WhatsApp: <span style={{ color: "#000" }}>(19) 99135-5414</span> -
          Marcelo
        </p>
        <p className={styles.highlight}>
          Nos siga no Instagram:{" "}
          <a
            href="https://www.instagram.com/gotadeluz_artesanais/"
            target="blank"
          >
            gotadeluz_artesanais
          </a>
        </p>
        <p className={styles.highlight}>
          Nos deixe um{" "}
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSetBUhLfPUyn-AAaeZFSluLuB3BEzrpEX0yirA2CPk6LklYWg/viewform"
            target="blank"
          >
            depoimento
          </a>{" "}
          👋❤️
        </p>
      </div>
    </div>
  );
};
