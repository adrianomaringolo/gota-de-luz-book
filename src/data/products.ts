import { ProductType } from '../interfaces/products'

export const productTypes: ProductType[] = [
  // {
  //   id: "kits",
  //   type: "Semana de ofertas",
  //   description:
  //     "Kits com preços especiais para você aproveitar nossa semana de ofertas",
  //   image: "background-ofertas.jpg",
  //   seal: "https://firebasestorage.googleapis.com/v0/b/gota-de-luz.appspot.com/o/products%2Fseals%2Fseal-semanaofertas.png?alt=media&token=576422fb-912b-4602-9b44-2576e5d9e077",
  // },
  {
    id: 'hidrolatos',
    type: 'Hidrolatos - 120ml',
    typeLabel: 'Hidrolatos<br/><small>120ml</small>',
    description: `
      <b>Hidrolatos</b>, ou águas florais são também um produto do processo de destilação na extração dos óleos essenciais, onde o vapor d'água que atravessa a planta destilada arrasta também vários elementos da planta que, ao passarem ao estado líquido novamente, formam os hidrolatos. As embalagens padrão são de <b>120 ml</b>.
      <br/><br/>
      </div>
      `,
    image: 'hidrolatos.jpg',
    seal: '',
  },
  {
    id: 'oleos-essenciais',
    type: 'Óleos essenciais',
    description: `
      Os <b>óleos essenciais</b> são extratos naturais superconcentrados, extraídos principalmente por método de destilação a vapor ou por prensagem a frio das flores, plantas e frutas. Possuem propriedades terapêuticas e diversos benefícios para a saúde devido a sua alta concentração e, por isso, não devem ser usados puros diretamente na pele. Podem ser usados na aromaterapia em difusores pessoais, de ambiente e diluídos em óleos vegetais. São totalmente naturais, sem corantes e sem quaisquer aditivos químicos. 
      <br/>
      `,
    image: 'oleos-essenciais.jpg',
    seal: '',
  },
  {
    id: 'diluicoes-oleos-essenciais',
    type: 'Diluições',
    description:
      'As diluições de óleos essenciais são óleos vegetais (TCM) que servem para diluir os óleos essenciais, tornando-os seguros para uso na pele. São óleos vegetais puros, sem adição de conservantes ou corantes.<br/>Nossas diluições são a 2% (duas gotas de óleo essencial para cada 5ml de diluição)',
    image: 'diluicoes-oleos-essenciais.jpg',
    seal: '',
  },
  {
    id: 'sabonetes',
    type: 'Sabonetes artesanais',
    description: `<p>Óleos vegetais e óleos essenciais.</p>
      <p>Ao invés de água, usamos hidrolatos na confecção dos nossos sabonetes. Hidrolatos orgânicos destilados na chácara da Morada (melaleuca, lavanda, immortelle e os demais que destilamos)!</p>`,
    image: 'sabonetes.jpg',
    seal: '',
  },
  {
    id: 'sabonetes-argila',
    type: 'Sabonetes de argila',
    description: `<p>Com os tradicionais óleos vegetais já conhecidos por todos, porém sem os óleos essenciais.</p>
      <p>Uma linha apenas com o aroma dos óleos vegetais, predominando o aroma do azeite de oliva extra-virgem.</p>
      <p>Essa linha vem trazer a propriedade das argilas naturais. Enriquecidos com as argilas verde, vermelha, roxa, amarela, branca e preta.</p>`,
    image: 'sabonetes-argila.jpg',
    seal: '',
  },
  {
    id: 'sabonetes-manteiga',
    type: 'Sabonetes de manteiga',
    description: `<p>Feitos com azeite de oliva extra virgem, cada sabonete é cuidadosamente elaborado para proporcionar uma experiência única de cuidado com a pele.</p>
      <p>Ao invés de água, usamos hidrolatos na confecção dos nossos sabonetes. Hidrolatos orgânicos destilados na chácara da Morada (melaleuca, lavanda, immortelle e os demais que destilamos)!</p>`,
    image: 'sabonetes-manteiga.jpg',
    seal: 'https://firebasestorage.googleapis.com/v0/b/gota-de-luz.appspot.com/o/products%2Fseals%2Fseal-new.png?alt=media&token=9ad4fc11-08a0-43a9-b350-b20b57dbac92',
  },

  {
    id: 'hidrolatos-1l',
    type: 'Hidrolatos - 1 litro',
    typeLabel: 'Hidrolatos<br/><small>1 litro</small>',
    description: `
      <b>Hidrolatos</b>, ou águas florais são também um produto do processo de destilação na extração dos óleos essenciais, onde o vapor d'água que atravessa a planta destilada arrasta também vários elementos da planta que, ao passarem ao estado líquido novamente, formam os hidrolatos.</b>.
      `,
    image: 'hidrolatos-1l.jpg',
  },

  {
    id: 'sais',
    type: 'Sais de banho',
    description:
      'O uso de sais de banho e escaldapé são muitos relaxantes e terapêuticos. Ao deixar seus pés de molho numa água morna com sal, você vai sentir o alívio do estresse do dia a dia e das tensões acumuladas. <br/><br/>Aliando o aroma e o poder terapêuticodos óleos essenciais à esses sais, você verá os efeitos tranquilizantes ainda mais potencializados e ainda vai aproveitar das propriedades específicas que cada planta tem a oferecer.',
    image: 'sais.jpg',
    seal: '',
  },
  {
    id: 'sprays',
    type: 'Sprays',
    description:
      'Produtos feitos à base de óleos essenciais e álcool de cereais. Livre de essências sintéticas.',
    image: 'sprays.jpg',
  },
  {
    id: 'protetor-labial',
    type: 'Protetor labial',
    description:
      'Protetor labial feito com óleos vegetais e óleos essenciais. Livre de conservantes.',
    image: 'protetor-labial.jpg',
    seal: 'https://firebasestorage.googleapis.com/v0/b/gota-de-luz.appspot.com/o/products%2Fseals%2Fseal-new.png?alt=media&token=9ad4fc11-08a0-43a9-b350-b20b57dbac92',
  },
  {
    id: 'colonias',
    type: 'Colonias',
    typeLabel: 'Águas de Colônia',
    description:
      ' Produtos feitos à base de óleos essenciais e álcool de cereais. Livre de essências sintéticas.',
    image: 'colonias.jpg',
  },
  {
    id: 'tinturas',
    type: 'Tinturas',
    typeLabel: 'Tinturas',
    description:
      'Tinturas são extratos alcoólicos de substâncias naturais, como ervas ou princípios ativos de plantas medicinais. Elas são preparadas pela dissolução dessas substâncias em um veículo alcoólico, sendo uma forma comum de apresentação farmacêutica. O álcool é usado para extrair os compostos desejados, tornando as tinturas uma opção eficaz para o uso medicinal.',
    image: 'tinturas.jpg',
    seal: 'https://firebasestorage.googleapis.com/v0/b/gota-de-luz.appspot.com/o/products%2Fseals%2Fseal-new.png?alt=media&token=9ad4fc11-08a0-43a9-b350-b20b57dbac92',
  },
  {
    id: 'acessorios',
    type: 'Acessórios',
    description: '',
    image: 'acessorios.jpg',
  },
]
