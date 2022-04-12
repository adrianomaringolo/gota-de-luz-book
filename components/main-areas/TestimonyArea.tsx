import Products from "../Products";
import styles from "./../../styles/layout.module.scss";
import cn from "classnames";

export const TestimonyArea: React.FC = () => {
  return (
    <div
      id="produtos"
      className={cn("section", styles.section, styles.sectionProducts)}
    >
      <div className={styles.contentArea}>
        <h2 className="fancy-title">Conheça nossos produtos</h2>
        <Products />
      </div>
    </div>
  );
};
