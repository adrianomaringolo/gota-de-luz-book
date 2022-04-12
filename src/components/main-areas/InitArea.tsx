import styles from "./../../styles/layout.module.scss";
import Image from "next/image";
import cn from "classnames";

export const InitArea: React.FC = () => {
  return (
    <div className={cn("section", styles.section, styles.sectionLogo)}>
      <div className={styles.contentArea}>
        <Image
          priority
          src="/images/logo.svg"
          height={200}
          width={100}
          alt="Logo"
          className={styles.svgLogo}
        />
        <p className={styles.highlight}>
          A marca Gota de Luz oferece produtos artesanais, feitos 100% à base de
          óleos vegetais nobres e óleos essenciais. Livres de conservantes. Toda
          a renda obtida é revertida para os trabalhos assistenciais da Morada
          Espírita Professor Lairi Hans.
        </p>
      </div>
    </div>
  );
};
