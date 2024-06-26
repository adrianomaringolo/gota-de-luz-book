import styled from 'styled-components'
import Layout from '../../components/Layout'

const StyledArea = styled.section`
  padding: 80px 10px;
  max-width: 600px;
  margin: 0 auto;
`

const Sobre = () => (
  <Layout title={process.env.NEXT_PUBLIC_COMPANY_NAME}>
    <StyledArea>
      <h1 className="text-xl font-medium border-y py-2 mb-4">Sobre nós</h1>

      <p className="mb-3">
        A marca Gota de Cura nasceu em 2017 através da iniciativa do nosso aromaterapeuta
        Marcelo Mattar. Tudo começou com a elaboração dos primeiros sabonetes artesanais
        feitos com óleos vegetais nobres, predominando o azeite de oliva extra virgem,
        enriquecidos com óleos essenciais de alecrim e lavanda. Desde o início, os
        sabonetes já tinham como diferencial o uso de hidrolatos orgânicos de melaleuca
        (tea tree) ao invés de água na sua manipulação.
      </p>
      <p className="mb-3">
        Mais adiante, novas receitas foram elaboradas, acrescentando novos aromas
        terapêuticos, sempre com óleos essenciais de qualidade.
      </p>
      <p className="mb-3">
        Com o passar do tempo, nosso aromaterapeuta começou a destilar, de forma
        artesanal, plantas aromáticas para obter seus próprios óleos essenciais e
        hidrolatos.
      </p>
      <p className="mb-3">
        Com o tempo, além dos sabonetes, nosso catálogo ganhou espaço para os sprays
        energéticos, sais de banho, hidrolatos e óleos essenciais.
      </p>
      <p className="mb-3">
        Nunca perdemos o propósito de levar a cura e as propriedades terapêuticas e
        vibracionais das plantas através dos nossos produtos e que toda a renda fosse
        revertida aos trabalhados assistenciais da Morada Espírita Professor Lairi Hans.
      </p>
      <p className="mb-10">
        Hoje a família Gota de Cura cresceu e já contamos com uma grande equipe de
        voluntários e um catálogo de produtos sempre em expansão.
      </p>

      <p className="mb-5 italic">
        Com isso em mente, queremos que nos conheçam melhor através de nossa missão, visão
        e nossos valores!
      </p>

      <p className="mb-3">
        <strong>🎯 Missão</strong>
        <br />
        Proporcionar bem-estar e qualidade de vida aos nossos clientes, através de
        produtos para aromaterapia, promovendo a saúde e o equilíbrio físico, mental,
        emocional e espiritual.
      </p>

      <p className="mb-3">
        <strong>👁️ Visão</strong>
        <br />
        Ser reconhecida como uma marca de referência em produtos para aromaterapia, no
        tocante a sua qualidade terapêutica e vibracional, evidenciando práticas voltadas
        para a sustentabilidade, o respeito à natureza e ao próximo.
      </p>

      <p className="mb-3">
        <strong className="font-medium mb-2">🌟 Valores</strong>
        <ol className="list-disc pl-6">
          <li className="mb-3 list-item">
            Responsabilidade social: Contribuir para o desenvolvimento da sociedade
            através de ações de responsabilidade social (destinando toda a renda oriunda
            da comercialização dos produtos para os trabalhos assistenciais da Morada
            Espírita Prof. Lairi Hans, em Campinas/SP)
          </li>
          <li className="mb-3">
            Sustentabilidade: Comprometimento com a preservação do meio ambiente,
            utilizando apenas ingredientes naturais e sustentáveis em nossos produtos.
          </li>
          <li className="mb-3">
            Qualidade: Oferecer produtos de alta qualidade, pureza e eficácia, com foco na
            satisfação e bem-estar dos nossos clientes.
          </li>
          <li className="mb-3">
            Transparência: Agir de forma transparente e honesta com nossos clientes,
            fornecendo informações claras e precisas sobre nossos produtos e processos.
          </li>
          <li className="mb-3">
            Inovação: Estar sempre atentos às novas tendências e tecnologias, buscando
            aprimorar nossos produtos e serviços e proporcionar experiências únicas aos
            nossos clientes.
          </li>
        </ol>
      </p>
    </StyledArea>
  </Layout>
)

export default Sobre
