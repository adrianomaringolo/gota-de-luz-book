import styles from "./../../styles/layout.module.scss";
import cn from "classnames";
import { Carousel } from "react-responsive-carousel";
import Link from "next/link";

export const VisitArea: React.FC = () => {
  return (
    <div
      id="visitacao"
      className={cn("section", styles.section, styles.sectionVisit)}
    >
      <div className={styles.contentArea}>
        <Carousel
          showThumbs={false}
          autoPlay={true}
          infiniteLoop={true}
          showStatus={false}
          interval={15000}
          dynamicHeight={true}
        ></Carousel>
        <h2 className="fancy-title">
          VISITA GUIADA À CHÁCARA MÃE LUZIA - 12/11/22
        </h2>
        <p>Gostaria de conhecer a chácara da Morada?</p>

        <p>
          É nessa chácara que são cultivadas as plantas que são destiladas para
          a obtenção dos insumos dos produtos Gota de Cura.
        </p>

        <p>
          <b>Local</b>: Santo Antônio de Posse, próxima à Holambra (cerca de 40
          minutos de Campinas/SP)
          <br />
          <b>Duração</b>: cerca de 4 horas (das 8h às 12h)
          <br />
          <b>Atividades</b>: café da manhã + destilação de uma planta aromática
          e explicação do processo + visita guiada à propriedade
          <br />
          <br />
          <b>Valor</b>: R$ 90,00 por pessoa
          <br />
          <br />
          <big>
            <b>Vagas limitadas!</b>
          </big>
        </p>

        <div
          className={cn(styles.more)}
          style={{ justifyContent: "flex-start" }}
        >
          <div>
            <Link href="/visitas">+ Detalhes</Link>
            <a href="https://forms.gle/JeBEWFbrndTrdX7v9" target="blank">
              👉 Faça seu cadastro e garanta sua vaga
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
