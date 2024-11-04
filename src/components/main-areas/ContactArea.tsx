import cn from 'classnames'
import Image from 'next/image'
import styled from 'styled-components'
import styles from 'styles/layout.module.scss'

const ContactAreaStyled = styled.div`
  .info-area {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;

    .img-area {
      max-width: 350px;
      margin: 0 10px;
    }

    .social-area {
      flex: 1;
      margin: 0 10px;
    }
  }

  .social-link {
    display: flex;
    align-items: center;
    img {
      margin-right: 10px;
    }
  }
`

export const ContactArea: React.FC = () => {
  return (
    <ContactAreaStyled
      id="contato"
      className={cn('section', styles.section, styles.sectionContact)}
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
            <p className={styles.highlight} style={{ textAlign: 'left', marginTop: 0 }}>
              <strong>Aromaterapeuta responsável</strong>
              <br />
              Marcelo Soares Mattar - Profissional CertAroma (
              <a href="https://www.instagram.com/p/CbaM_GvAs4U/" target="_blank">
                Ver mais
              </a>
              )
            </p>
            <p className={styles.highlight}>
              <a
                href="https://www.facebook.com/gotadecura.artesanais"
                className="social-link"
                target="_blank"
              >
                <img src="/images/icons/facebook-logo.png" width={50} />
                @gotadecura.artesanais
              </a>
              <a
                href="https://www.instagram.com/gotadecura_artesanais/"
                className="social-link"
                target="_blank"
              >
                <img src="/images/icons/instagram-logo.png" width={50} />
                @gotadecura_artesanais
              </a>
            </p>
          </div>

          <div>
            <strong>Loja física</strong>
            <br />
            Rua José Paulino, 1916, Campinas - SP
            <br />
            <br />
            <strong>Horário de funcionamento</strong>
            <br />
            Segunda das 9h às 13h | Terça a sexta das 9h às 17h | Sábado das 8h às 17h
            <br />
          </div>
        </div>
      </div>
    </ContactAreaStyled>
  )
}
