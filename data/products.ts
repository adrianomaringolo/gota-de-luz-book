import { ProductType } from "../interfaces";

export const productTypes: ProductType[] = [
  {
    id: "sabonetes",
    type: "Sabonetes artesanais",
    description: "Óleos vegetais e óleos essenciais",
    image: "background-8.jpg",
    items: [
      { name: "Lavanda", description: "", image: "sabonete-lavanda-min.jpg" },
      { name: "Alecrim", description: "", image: "sabonete-alecrim-min.jpg" },
      {
        name: "Laranja com limão siciliano cravo com canela",
        description: "",
        image: "sabonete-laranja-limao-min.jpg",
      },
      {
        name: "Hortelã com alecrim",
        description: "",
        image: "sabonete-hortela-alecrim-min.jpg",
      },
      { name: "Cedro", description: "", image: "sabonete-cedro-min.jpg" },
      {
        name: "Cravo e canela",
        description: "",
        image: "sabonete-cravo-canela-min.jpg",
      },
      {
        name: "Linha facial",
        description: "",
        image: "sabonete-linha-facial-min.jpg",
      },
    ],
  },
  {
    id: "sprays",
    type: "Sprays Energéticos",
    description: `<p>Receba a energia das plantas através dos óleos essenciais.</p>
    <p>A finalidade do spray não é manter o ambiente perfumado como fazem os aromatizadores de ambiente (aqueles com varetas de madeira). O aroma desse spray é suave e passageiro.</p>
    <p>O efeito está na vibração que os óleos essenciais deixam, beneficiando a todos os que convivem e passam pelo ambiente.</p>
    <p>Fazer 2 ou 3 borrifadas no ambiente. Uma vez ao dia é suficiente.</p>
    <p>Produto 100% natural à base de álcool de cereais e óleos essenciais.</p>`,
    image: "background-2.jpg",
    items: [
      {
        name: "Limpeza",
        description:
          "Auxilia na remoção das vibrações negativas e paradas do ambiente. Estimula comportamentos e pensamentos positivos nas pessoas.",
        image: "spray-limpeza.jpg",
      },
      {
        name: "Prosperidade",
        description:
          'Traz "movimento" para o ambiente. Auxilia no fluxo contínuo das energias e na renovação das vibrações, ao mesmo tempo em que promove entusiasmo e alegria para o ambiente. Muito adequado para a época do Natal, mas pode ser usado durante todo o ano, pois traz as vibrações de renovação.',
        image: "spray-prosperidade.jpg",
      },
      {
        name: "Respire bem",
        description:
          "Atua na limpeza e desbloqueio das vias respiratórias. Auxilia no combate de alergias respiratórias. Traz sensação de frescor e alívio na respiração.",
        image: "spray-respire-bem.jpg",
      },
      {
        name: "Concentração",
        description:
          "Auxilia na limpeza mental, trazendo um frescor para a mente, facilitando o foco e a concentração. Ideal para ser usado no período da manhã, no estudo ou no trabalho.",
        image: "spray-concentracao.jpg",
      },
      {
        name: "Relaxamento",
        description:
          "Ideal para preparar o ambiente para uma atmosfera de relaxamento, calma, tranquilidade. Traz as vibrações naturalmente sedativas dos óleos essenciais. Bom para ser usado no fim do dia, à noite antes de dormir ou para fazer meditação",
        image: "spray-relaxamento.jpg",
      },
      {
        name: "Aconchego",
        description:
          "Harmoniza o ambiente familiar ou no trabalho. Melhora o padrão vibratório na convivência entre as pessoas, estimulando a empatia, trazendo uma sensação de acolhimento e harmonia.",
        image: "spray-aconchego.jpg",
      },
    ],
  },
  {
    id: "cosmeticos",
    type: "Cosméticos artesanais",
    description:
      "Produtos feitos à base de óleos vegetais prensados a frio e óleos essenciais. Livre de essências sintéticas. Livre de produtos de origem animal.",
    image: "background-3.jpg",
  },
  {
    id: "sais",
    type: "Sais de banho",
    description:
      "Produtos feitos à base de óleos essenciais. Livre de essências sintéticas. Livre de produtos de origem animal.",
    image: "background-4.jpg",
    items: [
      {
        name: "Lavanda",
        description:
          "Aliviar o estresse do dia-a-dia, com efeito calmante e sedativo natural. Antifúngico, bactericida e cicatrizante. Sem contraindicação, sendo o óleo essencial mais usado no mundo.",
        image: "sais-lavanda.jpg",
      },
      {
        name: "Alecrim",
        description:
          "Aliviar dores musculares, tensões, torcicolos, dores de cabeça, estafa mental. Estimular o sistema circulatório, combatendo a fadiga. Estimular a memória e a concentração. Uso contraindicado para hipertensos, grávidas e crianças menores de 8 anos de idade.",
        image: "sais-alecrim.jpg",
      },
    ],
  },
  {
    id: "hidrolatos",
    type: "Hidrolatos",
    description:
      "Produtos feitos à base de óleos essenciais. Livre de essências sintéticas. Livre de produtos de origem animal.",
    image: "background-9.jpg",
  },
];
