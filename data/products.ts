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
        name: "Laranja e limão",
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
        detailedDescription: "",
      },
      {
        name: "Prosperidade",
        description:
          'Traz "movimento" para o ambiente. Auxilia no fluxo contínuo das energias e na renovação das vibrações, ao mesmo tempo em que promove entusiasmo e alegria para o ambiente. Muito adequado para a época do Natal, mas pode ser usado durante todo o ano, pois traz as vibrações de renovação.',
        image: "spray-prosperidade.jpg",
        detailedDescription: "",
      },
      {
        name: "Respire bem",
        description:
          "Atua na limpeza e desbloqueio das vias respiratórias. Auxilia no combate de alergias respiratórias. Traz sensação de frescor e alívio na respiração.",
        image: "spray-respire-bem.jpg",
        detailedDescription: "",
      },
      {
        name: "Concentração",
        description:
          "Auxilia na limpeza mental, trazendo um frescor para a mente, facilitando o foco e a concentração. Ideal para ser usado no período da manhã, no estudo ou no trabalho.",
        image: "spray-concentracao.jpg",
        detailedDescription: "",
      },
      {
        name: "Relaxamento",
        description:
          "Ideal para preparar o ambiente para uma atmosfera de relaxamento, calma, tranquilidade. Traz as vibrações naturalmente sedativas dos óleos essenciais. Bom para ser usado no fim do dia, à noite antes de dormir ou para fazer meditação",
        image: "spray-relaxamento.jpg",
        detailedDescription: "",
      },
      {
        name: "Aconchego",
        description:
          "Harmoniza o ambiente familiar ou no trabalho. Melhora o padrão vibratório na convivência entre as pessoas, estimulando a empatia, trazendo uma sensação de acolhimento e harmonia.",
        image: "spray-aconchego.jpg",
        detailedDescription: "",
      },
    ],
  },
  {
    id: "cosmeticos",
    type: "Cosméticos artesanais",
    description:
      "Produtos feitos à base de óleos vegetais prensados a frio e óleos essenciais. Livre de essências sintéticas. Livre de produtos de origem animal.",
    image: "background-3.jpg",
    items: [
      {
        name: "Face e mãos",
        description:
          "Combater o envelhecimento e o aparecimento de rugas. Manter o tônus e a nutrição da pele, auxiliando no combate às manchas em geral. Nutrir e recompor a pele durante o período de descanso, atuando principalmente na redução dos melasmas.",
        image: "cosmetico-rosto.jpg",
        detailedDescription: `
          <u>FACE E MÃOS (DIA)</u><br/>
          Indicação:<br/>
          Combater o envelhecimento e o aparecimento de rugas. Manter o tônus e a nutrição da pele, auxiliando no combate às manchas em geral.<br/><br/>
          Uso:<br/>
          Espalhar 2 a 3 gotas na face limpa e mãos, 2 vezes ao dia. Após a aplicação, pode-se utilizar maquiagem e protetor solar normalmente.
          <br/><br/>
          <u>FACE E MÃOS (NOITE)</u><br/>
          Indicação:<br/>
          Nutrir e recompor a pele durante o período de descanso, atuando principalmente na redução dos melasmas.<br/><br/>
          Uso:<br/>
          Antes de dormir, espalhar 2 a 3 gotas na face limpa e mãos.
        `,
      },
      {
        name: "Cabelo",
        description:
          "Recompor e fechar as escamas dos fios quebradiços, hidratar e dar brilho aos cabelos. Ajuda a conter os fios arrepiados. No couro cabeludo, combate a queda, caspa e seborréia.",
        image: "cosmetico-cabelo.jpg",
        detailedDescription: `
          Indicação:<br/>
          Recompor e fechar as escamas dos fios quebradiços, hidratar e dar brilho aos cabelos. Ajuda a conter os fios arrepiados. No couro cabeludo, combate a queda, caspa e seborréia.<br/><br/>
          Uso:<br/>
          No couro cabeludo, colocar algumas gotas na ponta dos dedos e massagear. No cabelo, colocar por volta de 2 a 3 gotas na palma das mãos e passar no meio e pontas dos cabelos secos. Pentear normalmente. A quantidade de gotas poderá ser alterada dependendo do tipo e do volume.
        `,
      },
      {
        name: "Unhas",
        description:
          "Fortalecer, hidratar as unhas e combater os fungos. Eficaz no tratamento de ressecamento, micoses nas unhas e frieiras entre os dedos.",
        image: "cosmetico-unhas.jpg",
        detailedDescription: `
          Indicação:<br/>
          Fortalecer, hidratar as unhas e combater os fungos. Eficaz no tratamento de ressecamento, micoses nas unhas e frieiras entre os dedos.<br/><br/>
          Uso:<br/>
          Espalhar nas unhas e entre os dedos das mãos e pés, 2 vezes ao dia.
        `,
      },
      {
        name: "Hidratante",
        description:
          "Hidratar a pele, auxiliando na redução da perda de líquidos. Evita a flacidez e auxilia na cicatrização da pele. Fácil absorção sem engordurar a pele.",
        image: "cosmetico-hidratante.jpg",
        detailedDescription: `
          Indicação:<br/>
          Hidratar a pele, auxiliando na redução da perda de líquidos. Evita a flacidez e auxilia na cicatrização da pele. Fácil absorção sem engordurar a pele.<br/><br/>
          Uso:<br/>
          Aplicar 2 a 3 gotas em cada braço e espalhar bem até a absorção completa. A mesma quantidade nas mãos. A quantidade de gotas pode variar dependendo do tipo de pele.
        `,
      },
      {
        name: "Olhos",
        description:
          "Combater olheiras (atua na circulação da área dos olhos), clareando e mantendo a elasticidade da pele.",
        image: "cosmetico-olhos.jpg",
        detailedDescription: `
          Indicação:<br/>
          Combater olheiras (atua na circulação da área dos olhos), clareando e mantendo a elasticidade da pele.<br/><br/>
          Uso:<br/>
          Lavar bem o rosto antes da aplicação. Passar e massagear na região das olheiras. Aplicar de manhã e à noite, podendo intercalar no meio do dia.
        `,
      },
    ],
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
        detailedDescription: `
          Indicação:<br/>
          Aliviar o estresse do dia-a-dia, com efeito calmante e sedativo natural. Antifúngico, bactericida e cicatrizante. Sem contraindicação, sendo o óleo essencial mais usado no mundo.<br/><br/>
          Uso:<br/>
          Preparar água quente numa bacia a uma temperatura aproximada de 37 graus, suficiente para cobrir o tornozelo. Acrescentar uma colher de sopa cheia dos sais. Deixar os pés mergulhados por 15 ou 20 minutos. Secar bem os pés e aplicar um hidratante.
        `,
      },
      {
        name: "Alecrim",
        description:
          "Aliviar dores musculares, tensões, torcicolos, dores de cabeça, estafa mental. Estimular o sistema circulatório, combatendo a fadiga. Estimular a memória e a concentração. Uso contraindicado para hipertensos, grávidas e crianças menores de 8 anos de idade.",
        image: "sais-alecrim.jpg",
        detailedDescription: `
          Indicação:<br/>
          Aliviar dores musculares, tensões, torcicolos, dores de cabeça, estafa mental. Estimular o sistema circulatório, combatendo a fadiga. Estimular a memória e a concentração. Uso contraindicado para hipertensos, grávidas e crianças menores de 8 anos de idade.<br/><br/>
          Uso:<br/>
          Preparar água quente numa bacia a uma temperatura aproximada de 37 graus, suficiente para cobrir o tornozelo. Acrescentar uma colher de sopa cheia dos sais. Deixar os pés mergulhados por 15 ou 20 minutos. Secar bem os pés e aplicar um hidratante.
        `,
      },
    ],
  },
];
