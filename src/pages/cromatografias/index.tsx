import styled from 'styled-components'
import Layout from '../../components/Layout'

const StyledArea = styled.section`
  padding: 80px 10px;
  max-width: 600px;
  margin: 0 auto;
`

const reports = [
  {
    name: 'Lavanda e Capim limão - Óleo essencial',
    cientificName: 'Lavandula dentata e Cymbopogon citratus',
    url: 'https://firebasestorage.googleapis.com/v0/b/gota-de-luz.appspot.com/o/reports%2FRelat%C3%B3rio%20T%C3%A9cnico%20-%20Lavanda%20dentata%20e%20Pelargonium%20graveolens.pdf?alt=media&token=9289ec29-2ab2-4995-abc9-8d0270ec01cc',
  },
  {
    name: 'Melaleuca - Óleo essencial',
    cientificName: 'Melaleuca alternifolia',
    url: 'https://firebasestorage.googleapis.com/v0/b/gota-de-luz.appspot.com/o/reports%2FRelat%C3%B3rio%20T%C3%A9cnico%20-%20Melaleuca%20alternifolia.pdf?alt=media&token=ecca7ff8-4534-49a0-a278-c20a771fa237',
  },
  {
    name: 'Capim limão - Óleo essencial',
    cientificName: 'Cymbopogon citratus',
    url: 'https://firebasestorage.googleapis.com/v0/b/gota-de-luz.appspot.com/o/reports%2FRelat%C3%B3rio%20T%C3%A9cnico%20-%20Cymbopogon%20citratus.pdf?alt=media&token=66341630-2a54-4d6a-87af-b7a92ac958a8',
  },
  {
    name: 'Gerânio - Óleo essencial',
    cientificName: 'Pelargonium graveolens',
    url: 'https://firebasestorage.googleapis.com/v0/b/gota-de-luz.appspot.com/o/reports%2FRelat%C3%B3rio%20T%C3%A9cnico%20-%20Pelargonium%20graveolens.pdf?alt=media&token=67365247-8a6b-40fe-a562-059a1d3eebc7',
  },
  {
    name: 'Jambolão - Óleo essencial',
    cientificName: 'Syzygium cumini',
    url: 'https://firebasestorage.googleapis.com/v0/b/gota-de-luz.appspot.com/o/reports%2FRelat%C3%B3rio%20T%C3%A9cnico%20-%20Syzygium%20cumini.pdf?alt=media&token=6e80af9a-4f80-48af-86a2-e3dbc55f84e4',
  },
  {
    name: 'Jambolão - Hidrolato',
    cientificName: 'Syzygium cumini',
    url: 'https://firebasestorage.googleapis.com/v0/b/gota-de-luz.appspot.com/o/reports%2FRelato%CC%81rio%20Te%CC%81cnico%20-%20Syzygium%20cumini%20-%20Hidrolato.pdf?alt=media&token=9b2b34d7-a1ae-4e98-971c-34972c0886bf',
  },
  {
    name: 'Guaçatonga - Hidrolato',
    cientificName: 'Casearia sylvestris',
    url: 'https://firebasestorage.googleapis.com/v0/b/gota-de-luz.appspot.com/o/reports%2FRelat%C3%B3rio%20T%C3%A9cnico%20-%20Casearia%20sylvestris.pdf?alt=media&token=c9da6805-20b1-455b-94c4-e8f21a5536f5',
  },
  {
    name: 'Manjericão doce - Óleo essencial',
    cientificName: 'Ocimum basilicum',
    url: 'https://firebasestorage.googleapis.com/v0/b/gota-de-luz.appspot.com/o/reports%2FRelato%CC%81rio%20Te%CC%81cnico%20-%20Ocimum%20basilicum.pdf?alt=media&token=15c58e8b-cb45-4a8d-ae48-f8c7970d4aef',
  },

  {
    name: 'Palmarosa - Óleo essencial',
    cientificName: 'Cymbopogon martini',
    url: 'https://firebasestorage.googleapis.com/v0/b/gota-de-luz.appspot.com/o/reports%2FRelato%CC%81rio%20Te%CC%81cnico%20-%20Cymbopogon%20martini.pdf?alt=media&token=25f43f47-2a2b-4445-9c2a-94f31e32f6fe',
  },
  {
    name: 'Immortelle - Óleo essencial',
    cientificName: 'Helichrysum italicum',
    url: 'https://firebasestorage.googleapis.com/v0/b/gota-de-luz.appspot.com/o/reports%2FRelato%CC%81rio%20Te%CC%81cnico%20-%20Helichrysum%20italicum.pdf?alt=media&token=80f8a211-435d-4b28-99c0-39201535bbd5',
  },
  {
    name: 'Louro - Óleo essencial',
    cientificName: 'Laurus nobilis',
    url: 'https://firebasestorage.googleapis.com/v0/b/gota-de-luz.appspot.com/o/reports%2FRelato%CC%81rio%20Te%CC%81cnico%20-%20Laurus%20nobilis.pdf?alt=media&token=f550adaa-feae-4ed2-806f-86b8ed99eb2c',
  },
  {
    name: 'Cipreste - Óleo essencial',
    cientificName: 'Cupressus sempervirens',
    url: 'https://firebasestorage.googleapis.com/v0/b/gota-de-luz.appspot.com/o/reports%2FRelato%CC%81rio%20Te%CC%81cnico%20-%20Cupressus%20sempervirens.pdf?alt=media&token=2cd405d2-bb39-47f5-8778-a131a61f455f',
  },
  {
    name: 'Malaleuca Branca - Óleo essencial',
    cientificName: 'Melaleuca armillaris',
    url: 'https://firebasestorage.googleapis.com/v0/b/gota-de-luz.appspot.com/o/reports%2FRelato%CC%81rio%20Te%CC%81cnico%20-%20Melaleuca%20armillaris.pdf?alt=media&token=078c66c3-0e22-4e58-98f5-e38b4e3adde2',
  },
  {
    name: 'Erva Baleeira - Óleo essencial',
    cientificName: 'Cordia verbenacea',
    url: 'https://firebasestorage.googleapis.com/v0/b/gota-de-luz.appspot.com/o/reports%2FRelato%CC%81rio%20Te%CC%81cnico%20-%20Cordia%20verbenacea%20-%20OE.pdf?alt=media&token=95fca0b6-9d28-499a-bf14-0170419c2431',
  },
  {
    name: 'Erva Baleeira - Hidrolato',
    cientificName: 'Cordia verbenacea',
    url: 'https://firebasestorage.googleapis.com/v0/b/gota-de-luz.appspot.com/o/reports%2FRelato%CC%81rio%20Te%CC%81cnico%20-%20Cordia%20verbenacea%20-%20HID.pdf?alt=media&token=32ec37de-7844-4bb1-bdab-5841441c74ab',
  },
  {
    name: 'Laranja sanguínea - Hidrolato',
    cientificName: 'Citrus sinensis',
    url: 'https://firebasestorage.googleapis.com/v0/b/gota-de-luz.appspot.com/o/reports%2FRelato%CC%81rio%20Te%CC%81cnico%20-%20Hidrolato%20de%20laranja%20sanguinea.pdf?alt=media&token=65a07f95-2dda-41f1-9f14-3f1f23d36941',
  },
  {
    name: 'Laranja sanguínea - Óleo essencial',
    cientificName: 'Citrus sinensis',
    url: 'https://firebasestorage.googleapis.com/v0/b/gota-de-luz.appspot.com/o/reports%2FRelato%CC%81rio%20Te%CC%81cnico%20-%20OE%20de%20laranja%20sanguinea.pdf?alt=media&token=795dba99-473c-4f76-8c5b-49ffccf545f6',
  },
  {
    name: 'Manjericão cravo - Óleo essencial',
    cientificName: 'Ocimum gratissimum',
    url: 'https://firebasestorage.googleapis.com/v0/b/gota-de-luz.appspot.com/o/reports%2FRelato%CC%81rio%20Te%CC%81cnico%20-%20OE%20de%20Ocimum%20gratissimum.pdf?alt=media&token=5c14caa6-fadf-418c-a36b-1cdf125c89ad',
  },
]

const Cromatografias = () => (
  <>
    <Layout title={process.env.NEXT_PUBLIC_COMPANY_NAME}>
      <StyledArea>
        <h1 className="text-2xl font-bold my-5">Cromatografias</h1>

        <p className="mb-5">
          Cromatografia é um processo de separação e identificação de componentes de uma
          mistura.
        </p>
        <p className="mb-5">
          A cromatografia serve para identificação de substâncias, purificação de
          compostos e separação de componentes de misturas.
        </p>

        <p className="mb-5 pt-5 border-t">
          Confira abaixo as cromatografias realizadas a partir dos óleos essenciais
          destilados com as plantas cultivadas na Chácara da Mãe Luzia.
        </p>
        <div className="gap-3 grid sm:grid-cols-1 md:grid-cols-2 mt-5">
          {reports
            .sort((a, b) => a.name.localeCompare(b.name))
            .map(({ name, url, cientificName }) => (
              <div key={`croma-${url}`} className="border rounded hover:bg-gray-200">
                <a href={url} target="_blank" className="p-4 block text-center">
                  {name}
                  <br />(<i>{cientificName}</i>)
                </a>
              </div>
            ))}
        </div>
      </StyledArea>
    </Layout>
  </>
)

export default Cromatografias
