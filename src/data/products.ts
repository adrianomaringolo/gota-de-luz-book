import { ProductType } from "../interfaces";

export const productTypes: ProductType[] = [
  {
    id: "sabonetes",
    type: "Sabonetes artesanais",
    description:
      "<p>Óleos vegetais e óleos essenciais.</p><p>Todos os sabonetes são feitos com hidrolato de melaleuca orgânica destilada por nós!</p>",
    image: "background-8.jpg",
  },
  {
    id: "sabonetes-argila",
    type: "Sabonetes de argila",
    description: `<p>Com os tradicionais óleos vegetais já conhecidos por todos, porém sem os óleos essenciais.</p>
      <p>Uma linha apenas com o aroma dos óleos vegetais, predominando o aroma do azeite de oliva extra-virgem.</p>
      <p>Essa linha vem trazer a propriedade das argilas naturais. Enriquecidos com as argilas verde, vermelha, roxa, amarela, branca e preta.</p>`,
    image: "background-7.jpg",
  },
  {
    id: "sais",
    type: "Sais de banho",
    description:
      "Produtos feitos à base de óleos essenciais. Livre de essências sintéticas. Livre de produtos de origem animal.",
    image: "background-4.jpg",
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
  },
];
