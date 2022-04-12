import styles from "./../../styles/layout.module.scss";
import cn from "classnames";

export const DestinationArea: React.FC = () => {
  return (
    <div
      id="recursos"
      className={cn("section", styles.section, styles.sectionDestination)}
    >
      <div className={styles.contentArea}>
        <p className={styles.highlight}>
          Os recursos das vendas são revertidos para a{" "}
          <strong>
            <i>Morada Espírita Professor Lairi Hans</i>
          </strong>
          , e seu trabalho de assistência à famílias carentes da periferia de
          Campinas.
        </p>
        <p className={styles.more}>Conheça mais sobre o trabalho da Morada</p>
        <div className={cn(styles.more)}>
          <div>
            <a href="http://moradaespirita.org" target="blank">
              Site
            </a>
            <a href="https://www.facebook.com/moradaespirita" target="blank">
              Facebook
            </a>
            <a href="https://instagram.com/moradaespirita" target="blank">
              Instagram
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
