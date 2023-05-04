import styled from "styled-components";
import Layout from "../../components/Layout";

const StyledArea = styled.section`
  padding: 80px 10px;
  max-width: 600px;
  margin: 0 auto;
`;

const Sobre = () => (
  <Layout title={process.env.NEXT_PUBLIC_COMPANY_NAME}>
    <StyledArea>
      <h1>Sobre nós</h1>

      <p>
        O Gota de Cura nasceu em 2017 através da iniciativa do nosso
        aromaterapeuta Marcelo Mattar. O catálogo inicialmente contava com os
        sabonetes artesanais e com o tempo foi se ampliando para os sabonetes,
        óleos, sprays e sais e continua se ampliando.
      </p>

      <p>
        Desde o princípio, quando se chamava Gota de Luz, o propósito sem foi o
        de levar a cura e as propriedades das plantas através dos produtos e que
        toda a renda fosse revertida aos trabalhados assistenciais da Morada
        Espírita Professor Lairi Hans.
      </p>

      <p>
        Hoje já contamos com uma grande equipe de voluntários e um grande
        catálogo de produtos e pretendemos continuar crescendo e levando muita
        cura a todos.
      </p>

      <p>
        Com isso em mente, queremos que nos conheçam melhor através de nossa
        missão, visão e nossos valores!
      </p>

      <p>
        <strong>🎯 Missão</strong>
        <br />
        Proporcionar bem-estar e qualidade de vida aos nossos clientes, através
        de produtos para aromaterapia, promovendo a saúde e o equilíbrio físico,
        mental, emocional e espiritual.
      </p>

      <p>
        <strong>👁️ Visão</strong>
        <br />
        Ser reconhecida como uma marca de referência em produtos para
        aromaterapia, no tocante a sua qualidade terapêutica e vibracional,
        evidenciando práticas voltadas para a sustentabilidade, o respeito à
        natureza e ao próximo.
      </p>

      <p>
        <strong>🌟 Valores</strong>
        <ol>
          <li>
            Responsabilidade social: Contribuir para o desenvolvimento da
            sociedade através de ações de responsabilidade social (destinando
            toda a renda oriunda da comercialização dos produtos para os
            trabalhos assistenciais da Morada Espírita Prof. Lairi Hans, em
            Campinas/SP)
          </li>
          <li>
            Sustentabilidade: Comprometimento com a preservação do meio
            ambiente, utilizando apenas ingredientes naturais e sustentáveis em
            nossos produtos.
          </li>
          <li>
            Qualidade: Oferecer produtos de alta qualidade, pureza e eficácia,
            com foco na satisfação e bem-estar dos nossos clientes.
          </li>
          <li>
            Transparência: Agir de forma transparente e honesta com nossos
            clientes, fornecendo informações claras e precisas sobre nossos
            produtos e processos.
          </li>
          <li>
            Inovação: Estar sempre atentos às novas tendências e tecnologias,
            buscando aprimorar nossos produtos e serviços e proporcionar
            experiências únicas aos nossos clientes.
          </li>
        </ol>
      </p>
    </StyledArea>
  </Layout>
);

export default Sobre;
