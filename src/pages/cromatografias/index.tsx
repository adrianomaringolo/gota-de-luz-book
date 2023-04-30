import styled from "styled-components";
import Layout from "../../components/Layout";

const StyledArea = styled.section`
  padding: 80px 10px;
  max-width: 600px;
  margin: 0 auto;
`;

const reports = [
  {
    name: "Lavanda e Capim limão",
    cientificName: "Lavandula dentata e Cymbopogon citratus",
    url: "https://firebasestorage.googleapis.com/v0/b/gota-de-luz.appspot.com/o/reports%2FRelat%C3%B3rio%20T%C3%A9cnico%20-%20Lavanda%20dentata%20e%20Pelargonium%20graveolens.pdf?alt=media&token=9289ec29-2ab2-4995-abc9-8d0270ec01cc",
  },
  {
    name: "Melaleuca",
    cientificName: "Melaleuca alternifolia",
    url: "https://firebasestorage.googleapis.com/v0/b/gota-de-luz.appspot.com/o/reports%2FRelat%C3%B3rio%20T%C3%A9cnico%20-%20Melaleuca%20alternifolia.pdf?alt=media&token=ecca7ff8-4534-49a0-a278-c20a771fa237",
  },
  {
    name: "Capim limão",
    cientificName: "Cymbopogon citratus",
    url: "https://firebasestorage.googleapis.com/v0/b/gota-de-luz.appspot.com/o/reports%2FRelat%C3%B3rio%20T%C3%A9cnico%20-%20Cymbopogon%20citratus.pdf?alt=media&token=66341630-2a54-4d6a-87af-b7a92ac958a8",
  },
  {
    name: "Gerânio",
    cientificName: "Pelargonium graveolens",
    url: "https://firebasestorage.googleapis.com/v0/b/gota-de-luz.appspot.com/o/reports%2FRelat%C3%B3rio%20T%C3%A9cnico%20-%20Pelargonium%20graveolens.pdf?alt=media&token=67365247-8a6b-40fe-a562-059a1d3eebc7",
  },
  {
    name: "Jambolão",
    cientificName: "Syzygium cumini",
    url: "https://firebasestorage.googleapis.com/v0/b/gota-de-luz.appspot.com/o/reports%2FRelat%C3%B3rio%20T%C3%A9cnico%20-%20Syzygium%20cumini.pdf?alt=media&token=6e80af9a-4f80-48af-86a2-e3dbc55f84e4",
  },
  {
    name: "Hidrolato de Guaçatonga",
    cientificName: "Casearia sylvestris",
    url: "https://firebasestorage.googleapis.com/v0/b/gota-de-luz.appspot.com/o/reports%2FRelat%C3%B3rio%20T%C3%A9cnico%20-%20Casearia%20sylvestris.pdf?alt=media&token=c9da6805-20b1-455b-94c4-e8f21a5536f5",
  },
  {
    name: "Manjericão",
    cientificName: "Ocimum basilicum",
    url: "https://firebasestorage.googleapis.com/v0/b/gota-de-luz.appspot.com/o/reports%2FRelato%CC%81rio%20Te%CC%81cnico%20-%20Ocimum%20basilicum.pdf?alt=media&token=15c58e8b-cb45-4a8d-ae48-f8c7970d4aef",
  },

  {
    name: "Palmarosa",
    cientificName: "Cymbopogon martini",
    url: "https://firebasestorage.googleapis.com/v0/b/gota-de-luz.appspot.com/o/reports%2FRelato%CC%81rio%20Te%CC%81cnico%20-%20Cymbopogon%20martini.pdf?alt=media&token=25f43f47-2a2b-4445-9c2a-94f31e32f6fe",
  },
  {
    name: "Immortelle",
    cientificName: "Helichrysum italicum",
    url: "https://firebasestorage.googleapis.com/v0/b/gota-de-luz.appspot.com/o/reports%2FRelato%CC%81rio%20Te%CC%81cnico%20-%20Helichrysum%20italicum.pdf?alt=media&token=80f8a211-435d-4b28-99c0-39201535bbd5",
  },
  {
    name: "Louro",
    cientificName: "Laurus nobilis",
    url: "https://firebasestorage.googleapis.com/v0/b/gota-de-luz.appspot.com/o/reports%2FRelato%CC%81rio%20Te%CC%81cnico%20-%20Laurus%20nobilis.pdf?alt=media&token=f550adaa-feae-4ed2-806f-86b8ed99eb2c",
  },
  {
    name: "Cipreste",
    cientificName: "Cupressus sempervirens",
    url: "https://firebasestorage.googleapis.com/v0/b/gota-de-luz.appspot.com/o/reports%2FRelato%CC%81rio%20Te%CC%81cnico%20-%20Cupressus%20sempervirens.pdf?alt=media&token=2cd405d2-bb39-47f5-8778-a131a61f455f",
  },
  {
    name: "Niaouli",
    cientificName: "Melaleuca quinquenervia",
    url: "https://firebasestorage.googleapis.com/v0/b/gota-de-luz.appspot.com/o/reports%2FRelato%CC%81rio%20Te%CC%81cnico%20-%20Melaleuca%20quinquenervia.pdf?alt=media&token=9c5fb8a0-9bd2-4f2b-9aeb-01185ae234cb",
  },
];

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
          {reports.map(({ name, url, cientificName }) => (
            <li>
              <a href={url} target="_blank">
                {name} (<i>{cientificName}</i>)
              </a>
            </li>
          ))}
        </ul>
      </StyledArea>
    </Layout>
  </>
);

export default Cromatografias;
