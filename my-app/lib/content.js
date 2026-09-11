export const appUrl = "https://camerajovi-kappa.vercel.app";
export const repoUrl = "https://github.com/CameraJovi/studentmodeapi";
export const asset = (name) => `/assets/${name}`;

export const features = [
  {
    id: "captura",
    caption: "Modo Estudante: câmera e ferramentas de estudo.",
    details: [
      {
        title: "Tudo começa no enquadramento",
        text: "Abra a câmera no navegador, permita o acesso e selecione Estudante. Aponte para a lousa, uma página de caderno ou o exercício que você quer revisar.",
      },
      {
        title: "Uma captura, diferentes caminhos",
        text: "Depois de registrar, escolha o que faz sentido para aquele conteúdo: um resumo para retomar a matéria, perguntas para revisar ou uma resolução matemática.",
      },
    ],
    title: "Captura de conteúdo",
    short: "Capture o que importa.",
    description:
      "Abra o modo Estudante e enquadre a lousa, o caderno ou um exercício. O registro é o ponto de partida para a revisão.",
    image: "imagem_1.png",
    alt: "Câmera Jovi com o modo Estudante e as opções Scan, Flashcard, Math e Caderno",
  },
  {
    id: "resumo",
    caption: "Exemplo real: resumo de um sistema de equações.",
    details: [
      {
        title: "Retome a ideia central",
        text: "O Scan interpreta o registro e apresenta o conteúdo em um resumo. É uma forma de voltar ao assunto sem depender apenas da foto original.",
      },
      {
        title: "Da leitura para o caderno",
        text: "Confira o texto gerado com suas anotações e salve a análise no Caderno Inteligente. Na tela ao lado, o resumo acompanha a resolução de um sistema de equações.",
      },
    ],
    title: "Resumo inteligente",
    short: "Encontre o fio da matéria.",
    description:
      "A partir da imagem, a Jovi apresenta um resumo organizado. Leia o conteúdo e confira os pontos que você precisa retomar.",
    image: "imagem_2.png",
    alt: "Resumo real de um sistema de equações com a opção de salvar no caderno",
  },
  {
    id: "flashcards",
    caption: "Perguntas geradas a partir do conteúdo capturado.",
    details: [
      {
        title: "Coloque a memória para trabalhar",
        text: "Em vez de reler toda a matéria, use as perguntas para tentar lembrar a resposta. Os flashcards transformam o conteúdo capturado em pequenos momentos de revisão.",
      },
      {
        title: "Descubra o que precisa retomar",
        text: "Responda no seu ritmo e volte ao material da aula quando surgir uma dúvida. O conjunto pode ser salvo no caderno para continuar o estudo depois.",
      },
    ],
    title: "Flashcards",
    short: "Troque a releitura por perguntas.",
    description:
      "Transforme o registro em perguntas e respostas para exercitar a memória e descobrir o que ainda precisa de atenção.",
    image: "imagem_3.png",
    alt: "Tela real de flashcards sobre sistemas de equações e cálculo integral",
  },
  {
    id: "matematica",
    caption: "Resolução matemática apresentada passo a passo.",
    details: [
      {
        title: "Entenda o caminho até o resultado",
        text: "O modo Math identifica expressões na imagem e apresenta uma resolução detalhada. Acompanhe as operações para entender como uma etapa leva à seguinte.",
      },
      {
        title: "Um apoio para conferir o raciocínio",
        text: "Compare a explicação com o exercício e com o método usado em aula. O conteúdo é gerado automaticamente e pode conter erros: use a resolução como apoio, não como resposta definitiva.",
      },
    ],
    title: "Resolução matemática",
    short: "Acompanhe cada etapa.",
    description:
      "Veja a resolução de uma expressão matemática, passo a passo. Use o resultado como apoio e confira o raciocínio com o material da aula.",
    image: "imagem_4.png",
    alt: "Tela de resolução matemática passo a passo da Câmera Jovi",
  },
  {
    id: "caderno",
    caption: "Imagens e análises reunidas por matéria.",
    details: [
      {
        title: "Dê um lugar para cada assunto",
        text: "O Caderno Inteligente reúne os registros e os materiais salvos, organizados por matéria. A foto deixa de ficar solta entre outras imagens do celular.",
      },
      {
        title: "Continue de onde parou",
        text: "Abra o conteúdo salvo para retomar a leitura, consultar uma análise ou voltar às perguntas. A organização conecta a captura de hoje com a revisão de depois.",
      },
    ],
    title: "Caderno inteligente",
    short: "Volte ao conteúdo depois.",
    description:
      "Reúna imagens e análises por matéria no caderno. Assim, o registro da aula tem um lugar para ser consultado na próxima revisão.",
    image: "imagem_5.png",
    alt: "Caderno Inteligente com os conteúdos salvos por matéria",
  },
  {
    id: "smartpix",
    caption: "SmartPix: reconhecimento e ações demonstrativas.",
    details: [
      {
        title: "Informações que a câmera pode reconhecer",
        text: "O SmartPix procura possíveis endereços de e-mail e números de telefone no enquadramento. A tela apresenta o reconhecimento e opções relacionadas à informação encontrada.",
      },
      {
        title: "Um recurso em demonstração",
        text: "Nesta versão do projeto, as ações são demonstrativas. O reconhecimento de um dado não significa que uma mensagem foi enviada ou que uma ligação foi realizada.",
      },
    ],
    title: "SmartPix",
    short: "Reconheça informações na imagem.",
    description:
      "O recurso procura possíveis e-mails e telefones pela câmera. Nesta versão, as ações são demonstrativas.",
    image: "imagem_6.png",
    alt: "Demonstração do SmartPix reconhecendo um possível endereço de e-mail",
  },
];

export const members = [
  { name: "Vitor de Castro Buzato", rm: "569720", image: "Variant8.png" },
  { name: "Joao Pedro Ferreira Pinheiro", rm: "570569", image: "Variant2.png" },
  { name: "Joao Pedro Gomes de Matos", rm: "569934", image: "Variant4.png" },
  { name: "Davi Pereira", rm: "572337", image: "Default.png" },
  { name: "Gabriel Palmieri", rm: "570508", image: "Variant6.png" },
];
