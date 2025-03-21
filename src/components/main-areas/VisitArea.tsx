import cn from 'classnames'
import { VisitCTA } from 'components/visitas/VisitCTA'
import { VisitListDisplayer } from 'components/visitas/VisitListDisplayer'
import Link from 'next/link'
import styles from './../../styles/layout.module.scss'

const OPEN_VISITS: boolean = true

export const VisitArea: React.FC = () => {
  return (
    <div id="visitacao" className={cn('section', styles.section, styles.sectionVisit)}>
      <div className={styles.contentArea}>
        <h2 className="fancy-title">VISITA GUIADA À CHÁCARA MÃE LUZIA</h2>

        <div className="my-5">
          <VisitListDisplayer isOpened={OPEN_VISITS} />
        </div>

        <p className="mb-4">
          É nessa chácara que são cultivadas as plantas que são destiladas para a obtenção
          dos insumos dos produtos Gota de Cura.
        </p>

        <p className="mb-4">
          <b>Local</b>: Santo Antônio de Posse, próxima à Holambra (cerca de 40 minutos de
          Campinas/SP)
          <br />
          <b>Duração</b>: cerca de 4 horas (das 8h às 12h)
          <br />
          <b>Atividades</b>: café da manhã + destilação de uma planta aromática e
          explicação do processo + visita guiada à propriedade
          <br />
          <br />
          <b>Valor</b>: R$ 120,00 por pessoa
          <br />
          <br />
          <big>
            <b>Vagas limitadas!</b>
          </big>
        </p>

        <div className="my-5 flex flex-wrap  justify-center gap-4">
          <Link href="/visitas">
            <div className="cta-button hover:cursor-pointer">Veja mais detalhes</div>
          </Link>

          {OPEN_VISITS && <VisitCTA />}
        </div>
      </div>
    </div>
  )
}
