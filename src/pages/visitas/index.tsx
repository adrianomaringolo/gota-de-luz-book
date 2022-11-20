import Layout from "components/Layout";
import ImageGallery from "react-image-gallery";
import styled from "styled-components";
import { images, testimony } from "../../lib/data";

const StyledVisitasArea = styled.section`
  padding: 80px 10px;
  max-width: 800px;
  margin: 0 auto;

  .cta-button {
    padding: 2rem;
    margin: 1rem 0;
    display: inline-block;
    background-color: #f3eaf3;
    transition: all 0.4s;
    &:hover {
      color: #fff;
      background-color: #ac8fac;
      text-decoration: none;
    }
  }

  .testimony-item {
    font-size: 1rem;
    padding: 2rem;
    margin-bottom: 1rem;
    background-color: #f4eef2;
    .name {
      font-weight: bold;
      font-size: 1.1rem;
    }
    .date {
      margin-bottom: 1rem;
    }
  }
`;

const Visitas = () => {
  return (
    <>
      <Layout title={process.env.NEXT_PUBLIC_COMPANY_NAME}>
        <StyledVisitasArea>
          <h1>Visitação</h1>
          <h3 className="title">
            <big>
              Aguarde novas datas em <b>2023</b>
            </big>
            <br />
            VISITA GUIADA À CHÁCARA MÃE LUZIA
          </h3>
          {/* <a
            className="cta-button"
            href="https://forms.gle/JeBEWFbrndTrdX7v9"
            target="blank"
          >
            👉 Faça seu cadastro e garanta sua vaga
          </a>
          <p>Gostaria de conhecer a chácara da Morada?</p> */}

          <p>
            É nessa chácara que são cultivadas as plantas que são destiladas
            para a obtenção dos insumos dos produtos Gota de Cura.
          </p>

          <p>
            Localizada próxima à Holambra (cerca de 40 minutos de Campinas/SP),
            a propriedade é da Morada Espírita Prof. Lairi Hans, instituição
            localizada em Campinas, fundada em 1980.
          </p>

          <p>
            A programação, com previsão de 4 horas de duração, consiste em
            apresentar o funcionamento da chácara, uma pequena propriedade,
            cujas atividades visam única e exclusivamente apoiar os trabalhos
            assistenciais da Morada: criação de galinhas caipiras, cultivo de
            verduras e plantas aromáticas. Sem o uso de agrotóxicos, regadas com
            água de nascente, adubadas com fertilizantes naturais e com o uso de
            energia limpa.
          </p>

          <p>
            Todos são recebidos com um gostoso café da manhã, preparado com
            muito carinho.
          </p>

          <p>
            Além de conhecer o funcionamento da chácara, vamos acompanhar a
            destilação de uma planta aromática (para obtenção de óleo essencial
            e hidrolato), plantada, cultivada e colhida na chácara com todo o
            cuidado e respeito para que o produto final da destilação possa
            oferecer o melhor em temos de ativos terapêuticos e vibracionais.
          </p>

          <p>
            Teremos no dia da visitação, à disposição de todos dos interessados,
            os artesanatos feitos pelas voluntárias da Morada e os produtos Gota
            de Cura.
          </p>

          <p>
            <b>
              A programação se inicia pontualmente às 8h, com encerramento às
              12h.
            </b>
          </p>

          <p>
            O deslocamento é por conta de cada um. Após fecharmos o grupo,
            passaremos mais detalhes e opções de deslocamento, havendo,
            inclusive, a possibilidade de sairmos em “comboio” de um ponto de
            encontro em Campinas.
          </p>

          <p>
            <b>O valor é de R$ 90,00 por pessoa!</b>
          </p>

          <p>
            O número de vagas é limitado. Os interessados devem preencher o
            formulário e aguardar o contato de um voluntário da Morada para
            confirmar a reserva.
          </p>

          <p>
            A garantia da vaga se dá após o a confirmação e o pagamento da taxa.
          </p>

          <hr />

          <h3 className="title">Fotos das visitas anteriores</h3>
          <ImageGallery items={images} />
          <div style={{ display: "flex", justifyContent: "center" }}>
            <a
              href="https://photos.app.goo.gl/mUkLpDGD5DUaERqR9"
              target="blank"
              className="cta-button"
            >
              + Fotos
            </a>
          </div>

          <hr />

          <h3 className="title" style={{ marginBottom: 0, paddingBottom: 0 }}>
            Depoimentos
          </h3>
          <p style={{ marginTop: 0 }}>
            Confira os depoimentos muito especiais de quem já visitou a Chácara!
          </p>

          {testimony.map((item) => (
            <div className="testimony-item">
              <div className="name">{item.name}</div>
              <div className="date">{item.date}</div>
              {item.text}
            </div>
          ))}

          <hr />
          {/* <a
            className="cta-button"
            href="https://forms.gle/JeBEWFbrndTrdX7v9"
            target="blank"
          >
            👉 Faça seu cadastro e garanta sua vaga
          </a> */}
        </StyledVisitasArea>
      </Layout>
    </>
  );
};

export default Visitas;
