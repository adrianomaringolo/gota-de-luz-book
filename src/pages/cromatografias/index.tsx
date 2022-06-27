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
            <a
              href="https://firebasestorage.googleapis.com/v0/b/gota-de-luz.appspot.com/o/reports%2FRelat%C3%B3rio%20T%C3%A9cnico%20-%20Lavanda%20dentata%20e%20Pelargonium%20graveolens.pdf?alt=media&token=9289ec29-2ab2-4995-abc9-8d0270ec01cc"
              target="_blank"
            >
              Lavanda (<i>Lavandula dentata</i> e <i>Cymbopogon citratus</i>)
            </a>
          </li>
          <li>
            <a
              href="https://firebasestorage.googleapis.com/v0/b/gota-de-luz.appspot.com/o/reports%2FRelat%C3%B3rio%20T%C3%A9cnico%20-%20Melaleuca%20alternifolia.pdf?alt=media&token=ecca7ff8-4534-49a0-a278-c20a771fa237"
              target="_blank"
            >
              Melaleuca (<i>Melaleuca alternifolia</i>)
            </a>
          </li>
          <li>
            <a
              href="https://firebasestorage.googleapis.com/v0/b/gota-de-luz.appspot.com/o/reports%2FRelat%C3%B3rio%20T%C3%A9cnico%20-%20Melaleuca%20alternifolia.pdf?alt=media&token=ecca7ff8-4534-49a0-a278-c20a771fa237"
              target="_blank"
            >
              Melaleuca (<i>Melaleuca alternifolia</i>)
            </a>
          </li>
          <li>
            <a
              href="https://firebasestorage.googleapis.com/v0/b/gota-de-luz.appspot.com/o/reports%2FRelat%C3%B3rio%20T%C3%A9cnico%20-%20Cymbopogon%20citratus.pdf?alt=media&token=66341630-2a54-4d6a-87af-b7a92ac958a8"
              target="_blank"
            >
              Capim limão (<i>Cymbopogon citratus</i>)
            </a>
          </li>
          <li>
            <a
              href="https://firebasestorage.googleapis.com/v0/b/gota-de-luz.appspot.com/o/reports%2FRelat%C3%B3rio%20T%C3%A9cnico%20-%20Pelargonium%20graveolens.pdf?alt=media&token=67365247-8a6b-40fe-a562-059a1d3eebc7"
              target="_blank"
            >
              Gerânio (<i>Pelargonium graveolens</i>)
            </a>
          </li>
        </ul>
      </StyledArea>
    </Layout>
  </>
);

export default Cromatografias;
