import { ProductType } from "../interfaces";

export const productTypes: ProductType[] = [
  {
    id: "kits",
    type: "Kits de Natal",
    description:
      "Kits com preços especiais para você presentear alguém muito querido e ainda ajudar a tornar mais farto o Natal de muitas famílias assistidas pelos trabalhos da Morada.",
    image: "background-christimas.jpg",
    seal: "https://firebasestorage.googleapis.com/v0/b/gota-de-luz.appspot.com/o/products%2Fseals%2Fseal-natal.png?alt=media&token=f4e18656-c522-4ff8-8b5b-344c628ca11f",
  },
  {
    id: "sabonetes",
    type: "Sabonetes artesanais",
    description:
      "<p>Óleos vegetais e óleos essenciais.</p><p>Todos os sabonetes são feitos com hidrolato de melaleuca orgânica destilada por nós!</p>",
    image: "background-8.jpg",
    seal: "",
  },
  {
    id: "sabonetes-argila",
    type: "Sabonetes de argila",
    description: `<p>Com os tradicionais óleos vegetais já conhecidos por todos, porém sem os óleos essenciais.</p>
      <p>Uma linha apenas com o aroma dos óleos vegetais, predominando o aroma do azeite de oliva extra-virgem.</p>
      <p>Essa linha vem trazer a propriedade das argilas naturais. Enriquecidos com as argilas verde, vermelha, roxa, amarela, branca e preta.</p>`,
    image: "background-7.jpg",
    seal: "",
  },

  {
    id: "hidrolatos",
    type: "Hidrolatos - 120ml",
    typeLabel: "Hidrolatos<br/><small>120ml</small>",
    description: `
      <b>Hidrolatos</b>, ou águas florais são também um produto do processo de destilação na extração dos óleos essenciais, onde o vapor d'água que atravessa a planta destilada arrasta também vários elementos da planta que, ao passarem ao estado líquido novamente, formam os hidrolatos. As embalagens padrão são de <b>120 ml</b>.
      <br/><br/>
      </div>
      `,
    image: "background-9.jpg",
    seal: "",
  },
  {
    id: "hidrolatos-1l",
    type: "Hidrolatos - 1 litro",
    typeLabel: "Hidrolatos<br/><small>1 litro</small>",
    description: `
      <b>Hidrolatos</b>, ou águas florais são também um produto do processo de destilação na extração dos óleos essenciais, onde o vapor d'água que atravessa a planta destilada arrasta também vários elementos da planta que, ao passarem ao estado líquido novamente, formam os hidrolatos.</b>.
      `,
    image: "background-2.jpg",
  },
  {
    id: "oleos-essenciais",
    type: "Óleos essenciais",
    description: `
      Os <b>óleos essenciais</b> são extratos naturais superconcentrados, extraídos principalmente por método de destilação a vapor ou por prensagem a frio das flores, plantas e frutas. Possuem propriedades terapêuticas e diversos benefícios para a saúde devido a sua alta concentração e, por isso, não devem ser usados puros diretamente na pele. Podem ser usados na aromaterapia em difusores pessoais, de ambiente e diluídos em óleos vegetais. São totalmente naturais, sem corantes e sem quaisquer aditivos químicos. 
      <br/>
      `,
    image: "background-3.jpg",
    seal: "",
  },
  {
    id: "sais",
    type: "Sais de banho",
    description:
      "O uso de sais de banho e escaldapé são muitos relaxantes e terapêuticos. Ao deixar seus pés de molho numa água morna com sal, você vai sentir o alívio do estresse do dia a dia e das tensões acumuladas. <br/><br/>Aliando o aroma e o poder terapêuticodos óleos essenciais à esses sais, você verá os efeitos tranquilizantes ainda mais potencializados e ainda vai aproveitar das propriedades específicas que cada planta tem a oferecer.",
    image: "background-4.jpg",
    seal: "",
  },
  {
    id: "sprays",
    type: "Sprays",
    description:
      "Produtos feitos à base de óleos essenciais e álcool de cereais. Livre de essências sintéticas.",
    image: "background-5.jpg",
  },
];
