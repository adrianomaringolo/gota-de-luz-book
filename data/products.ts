import { ProductType } from "../interfaces";

export const productTypes: ProductType[] = [
  {
    id: "sabonetes",
    type: "Sabonetes artesanais",
    description: "Óleos vegetais e óleos essenciais",
    image: "background-8.jpg",
    items: [
      {
        id: "SAB-LAV",
        name: "Lavanda",
        price: 15,
        description: "",
        image: "sabonete-lavanda-min.jpg",
      },
      {
        id: "SAB-ALE",
        name: "Alecrim",
        price: 15,
        description: "",
        image: "sabonete-alecrim-min.jpg",
      },
      {
        id: "SAB-LAR",
        name: "Laranja e limão",
        price: 15,
        description: "",
        image: "sabonete-laranja-limao-min.jpg",
      },
      {
        id: "SAB-HOR",
        name: "Hortelã com alecrim",
        price: 15,
        description: "",
        image: "sabonete-hortela-alecrim-min.jpg",
      },
      {
        id: "SAB-CED",
        name: "Cedro",
        price: 15,
        description: "",
        image: "sabonete-cedro-min.jpg",
      },
      {
        id: "SAB-CRA",
        name: "Cravo e canela",
        price: 15,
        description: "",
        image: "sabonete-cravo-canela-min.jpg",
      },
      {
        id: "SAB-MAN",
        name: "Manjericão",
        price: 15,
        description: "",
        image: "sabonete-manjericao-min.jpg",
      },
      {
        id: "SAB-BAU",
        name: "Baunilha",
        price: 15,
        description: "",
        image: "sabonete-baunilha-min.jpg",
      },
      {
        id: "SAB-LIN",
        name: "Linha facial",
        price: 12,
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
        id: "SPR-LIM",
        name: "Limpeza",
        price: 29,
        description:
          "Auxilia na remoção das vibrações negativas e paradas do ambiente. Estimula comportamentos e pensamentos positivos nas pessoas.",
        image: "spray-limpeza.jpg",
        detailedDescription: "",
      },
      {
        id: "SPR-PRO",
        name: "Prosperidade",
        price: 29,
        description:
          'Traz "movimento" para o ambiente. Auxilia no fluxo contínuo das energias e na renovação das vibrações, ao mesmo tempo em que promove entusiasmo e alegria para o ambiente. Muito adequado para a época do Natal, mas pode ser usado durante todo o ano, pois traz as vibrações de renovação.',
        image: "spray-prosperidade.jpg",
        detailedDescription: "",
      },
      {
        id: "SPR-RES",
        name: "Respire bem",
        price: 29,
        description:
          "Atua na limpeza e desbloqueio das vias respiratórias. Auxilia no combate de alergias respiratórias. Traz sensação de frescor e alívio na respiração.",
        image: "spray-respire-bem.jpg",
        detailedDescription: "",
      },
      {
        id: "SPR-CON",
        name: "Concentração",
        price: 29,
        description:
          "Auxilia na limpeza mental, trazendo um frescor para a mente, facilitando o foco e a concentração. Ideal para ser usado no período da manhã, no estudo ou no trabalho.",
        image: "spray-concentracao.jpg",
        detailedDescription: "",
      },
      {
        id: "SPR-REL",
        name: "Relaxamento",
        price: 29,
        description:
          "Ideal para preparar o ambiente para uma atmosfera de relaxamento, calma, tranquilidade. Traz as vibrações naturalmente sedativas dos óleos essenciais. Bom para ser usado no fim do dia, à noite antes de dormir ou para fazer meditação",
        image: "spray-relaxamento.jpg",
        detailedDescription: "",
      },
      {
        id: "SPR-ACO",
        name: "Aconchego",
        price: 29,
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
        id: "COS-ROS",
        name: "Rosto",
        price: 85,
        description:
          "Combater o envelhecimento e o aparecimento de rugas. Manter o tônus e a nutrição da pele, auxiliando no combate às manchas em geral. Nutrir e recompor a pele durante o período de descanso, atuando principalmente na redução dos melasmas.",
        image: "cosmetico-rosto.jpg",
        detailedDescription: `
          <u>ROSTO (DIA)</u><br/>
          Indicação:<br/>
          Combater o envelhecimento e o aparecimento de rugas. Manter o tônus e a nutrição da pele, auxiliando no combate às manchas em geral.<br/><br/>
          Uso:<br/>
          Espalhar 2 a 3 gotas na face limpa e mãos, 2 vezes ao dia. Após a aplicação, pode-se utilizar maquiagem e protetor solar normalmente.
          <br/><br/>
          <u>ROSTO (NOITE)</u><br/>
          Indicação:<br/>
          Nutrir e recompor a pele durante o período de descanso, atuando principalmente na redução dos melasmas.<br/><br/>
          Uso:<br/>
          Antes de dormir, espalhar 2 a 3 gotas na face limpa e mãos.
        `,
      },
      {
        id: "COS-CAB",
        name: "Cabelo",
        price: 59,
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
        id: "COS-UNH",
        name: "Unhas",
        price: 49,
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
        id: "COS-HID",
        name: "Hidratante",
        price: 49,
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
        id: "COS-OLH",
        name: "Olhos",
        price: 45,
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
        id: "SAI-LAV",
        name: "Lavanda",
        price: 29,
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
        id: "SAI-ALE",
        name: "Alecrim",
        price: 29,
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
  {
    id: "hidrolatos",
    type: "Hidrolatos e óleos essenciais",
    description: `<div style="
        width: 100%; min-height: 300px;
        background: linear-gradient(rgb(255 255 255 / 75%), rgb(255 255 255 / 65%)),
        url(/images/products/hidrolatos.jpg) no-repeat center / cover;
        padding: 20px; margin-bottom: 20px;">
      Os <b>óleos essenciais</b> são extratos naturais superconcentrados, extraídos principalmente por método de destilação a vapor ou por prensagem a frio das flores, plantas e frutas. Possuem propriedades terapêuticas e diversos benefícios para a saúde devido a sua alta concentração e, por isso, não devem ser usados puros diretamente na pele. Podem ser usados na aromaterapia em difusores pessoais, de ambiente e diluídos em óleos vegetais. São totalmente naturais, sem corantes e sem quaisquer aditivos químicos. 
      <br/><br/>
      <b>Hidrolatos</b>, ou águas florais são também um produto do processo de destilação na extração dos óleos essenciais, onde o vapor d'água que atravessa a planta destilada arrasta também vários elementos da planta que, ao passarem ao estado líquido novamente, formam os hidrolatos.
      <br/><br/>
      </div>
      <big><strong>Produtos sazonais! Disponibilidade sob consulta!</strong></big>
      `,
    image: "background-9.jpg",
    items: [
      {
        id: "HID-MAN",
        name: "Hidrolato de Manjericão",
        price: 24,
        description: "Ocimum basilicum",
        image: "hidrolato-manjericao.jpg",
        detailedDescription: ``,
      },
      {
        id: "HID-MEL",
        name: "Hidrolato de Melaleuca",
        price: 24,
        description: "Melaleuca alternifolia",
        image: "hidrolato-melaleuca.jpg",
        detailedDescription: `
        <p><b>A história e a origem da Melaleuca</b></p>
        <p>A Melaleuca é uma planta nativa do sul da Austrália e da Nova Caledônia. É conhecida também como Tea Tree ou árvore-do- chá. Das folhas desta árvore é destilado o óleo de melaleuca. Ele é usado para desinfecções, cicatrizações e pequenas curas. O óleo de melaleuca era usado por aborígenes da Austrália há milhares de anos. Eles misturavam as folhas com lama e aplicavam diretamente na pele atingida, para tratamento de cortes e infecções da pele.</p>
        <p>Existem inclusive relatos de histórias em que esse povo aborígene banhava-se em uma lagoa “mágica” onde era possível curar ferimentos e afecções. O que acontecia de fato era que as folhas de melaleuca caíam sempre em um alagado próximo, e com o passar do tempo, era possível usufruir das suas propriedades medicinais que naquela água ficavam.</p>

        <p><b>Benefícios da melaleuca</b></p>
        <p>O óleo de melaleuca serve para uma série de problemas da pele. </p>
        <p>Combate fungos, bactérias, vírus.</p>
        <p>É antissépticas.</p>
        <p>Combate acnes.</p>
        <p>A ajuda no tratamento de problemas respiratórios, como dores de garganta, tosse, bronquite, asma;</p>
        <p>Combate micoses em unhas, reduzindo a multiplicação de fungos e bactérias nas unhas, ajudando a regeneração de unhas deformadas.</p>

        <p><b>Uso da melaleuca</b></p>
        <p>Todo óleo essencial deve ser utilizado com cuidado e com orientação de um terapeuta.</p>
        <p>O óleo jamais deve ser administrado por via oral a fim de evitar reação alérgica. </p>
        <p>Deve ser usado apenas externamente e, dependendo da aplicação, ele deverá ser diluído. </p>
        <p>Pode ser diluído em cremes neutros, gel e óleo vegetal.</p>
        <p>Nos casos de acne, pode-se pingar uma única gota no local.</p>
        <p>Pode ser usado em difusores de ambiente. Nesses casos, as moléculas aromáticas da melaleuca se dispersam no ambiente, beneficiando a todos da casa.</p>
        <p>Pode ser inalado diretamente no frasco por alguns segundos.</p><br/>

        </>Caso ingerido procure ajuda médica</p>
        <p>Este óleo não deve ser utilizado por pessoas que tenham alergia a terebintina. </p>
        <p>Ele também não deve ser aplicado diretamente em ferimentos abertos, nos olhos e nem sobre a pele rachada.</p>
              `,
      },
      {
        id: "HID-VET",
        name: "Hidrolato de Vetiver",
        price: 24,
        description: "Vetiveria zizanioides",
        image: "hidrolato-vetiver.jpg",
        detailedDescription: ``,
      },

      {
        id: "HID-LAV",
        name: "Hidrolato de Lavanda",
        price: 24,
        description: "Lavandula dentata",
        image: "hidrolato-lavanda.jpg",
        detailedDescription: ``,
      },
      {
        id: "HID-BRE",
        name: "Hidrolato de Breu branco",
        price: 24,
        description: "Protium heptaphyllum",
        image: "hidrolato-breu.jpg",
        detailedDescription: ``,
      },
      {
        id: "HID-HOR",
        name: "Hidrolato de Hortelã",
        price: 24,
        description: "Mentha spicata",
        image: "hidrolato-hortela.jpg",
        detailedDescription: ``,
      },
      {
        id: "HID-JAM",
        name: "Hidrolato de Jambolão",
        price: 24,
        description: "Syzygium cumini",
        image: "hidrolato-jambolao.jpg",
        detailedDescription: ``,
      },
      {
        id: "HID-GER",
        name: "Hidrolato de Gerânio",
        price: 24,
        description: "Pelargonium graveolens",
        image: "hidrolato-geranio.jpg",
        detailedDescription: ``,
      },
      {
        id: "HID-GUA",
        name: "Hidrolato de Guaçatonga",
        price: 24,
        description: "Casearia sylvestris - Edição limitada",
        image: "hidrolato-guacatonga.jpg",
        detailedDescription: ``,
        notAvailable: false,
      },

      {
        id: "HID-LOU",
        name: "Hidrolato de Louro",
        price: 24,
        description: "Laurus nobilis",
        image: "hidrolato-louro.jpg",
        detailedDescription: ``,
      },

      {
        id: "OLE-MEL",
        name: "Óleo essencial de melaleuca",
        price: 28,
        description: "Melaleuca alternifolia",
        image: "oleo-melaleuca.jpg",
        detailedDescription: ``,
      },
    ],
  },
];
