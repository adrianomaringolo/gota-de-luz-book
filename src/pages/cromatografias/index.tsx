import styled from "styled-components";
import Layout from "../../components/Layout";

const StyledArea = styled.section`
  padding: 80px 10px;
  max-width: 600px;
  margin: 0 auto;
`;

const Cromatografias = () => (
  <>
    <Layout title={process.env.NEXT_PUBLIC_COMPANY_NAME}>
      <StyledArea>
        <h1>Cromatografias</h1>

        <p>
          Cromatografia é um processo de separação e identificação de
          componentes de uma mistura.
        </p>
        <p>
          A cromatografia serve para identificação de substâncias, purificação
          de compostos e separação de componentes de misturas.
        </p>

        <hr />
        <p>
          Confira abaixo as cromatografias realizadas a partir dos óleos
          essenciais destilados com as plantas cultivadas na Chácara da Mãe
          Luzia.
        </p>
        <ul>
          <li>
            <a href="/pdf/cromatografia-lavanda.pdf" target="_blank">
              Lavanda (<i>Lavandula dentata</i>)
            </a>
          </li>
          <li>
            <a href="/pdf/cromatografia-melaleuca.pdf" target="_blank">
              Melaleuca (<i>Melaleuca alternifolia</i>)
            </a>
          </li>
        </ul>
      </StyledArea>
    </Layout>
  </>
);

export default Cromatografias;
