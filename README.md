# Câmera Jovi

Da foto da lousa ao material de revisão.

A Jovi conecta a captura de conteúdo ao estudo. Com a câmera, o estudante registra uma página de caderno, uma explicação na lousa ou um exercício e utiliza esse conteúdo para criar resumos, revisar com flashcards e acompanhar resoluções matemáticas.

Este repositório reúne o site de apresentação do produto, desenvolvido pela Deepy. A página apresenta os recursos da Jovi com capturas da aplicação e permite explorar a proposta antes de acessá-la.

[Conhecer o site](https://landingpage-iota-indol.vercel.app/) · [Abrir a Jovi](https://front-camera-jovi.vercel.app/) · [Repositório da aplicação](https://github.com/CameraJovi/FrontCameraJovi)

## O site

Uma experiência responsiva para celular, tablet e desktop, com navegação por seções, telas dos recursos e apresentação da equipe. O menu móvel e as etapas interativas também podem ser usados pelo teclado, e as animações respeitam a preferência por movimento reduzido.

O formulário de contato é uma demonstração de validação local e não envia mensagens.

## Tecnologias

| Tecnologia | Uso |
| --- | --- |
| Next.js 16 e React 19 | Estrutura da página e componentes interativos |
| Tailwind CSS 3 e PostCSS | Estilização e layouts responsivos |
| Lucide React | Ícones da interface |
| Manrope | Tipografia |

## Executar localmente

É necessário ter **Node.js 20.9 ou superior** e **npm** instalados.

Clone o repositório e instale as dependências:

```sh
git clone https://github.com/CameraJovi/Landingpage.git
cd Landingpage/my-app
npm ci
```

Se você já baixou o projeto, abra o terminal na raiz e execute `cd my-app` antes de instalar as dependências.

Inicie o servidor de desenvolvimento:

```sh
npm run dev
```

Acesse [localhost:3000](http://localhost:3000). Para encerrar o servidor, pressione `Ctrl+C`.

## Comandos

Execute os comandos dentro de `my-app`:

| Comando | Descrição |
| --- | --- |
| `npm run dev` | Inicia o ambiente de desenvolvimento |
| `npm run build` | Gera a versão de produção |
| `npm run start` | Executa a versão de produção após o build |
| `npm run lint` | Analisa o código com ESLint |

## Estrutura do projeto

```text
my-app/
├── app/                Página principal, layout e estilos globais
├── components/         Seções e componentes interativos
├── lib/content.js      Textos, recursos, equipe e links
├── public/assets/      Imagens e capturas da aplicação
└── tailwind.config.mjs Configuração visual do Tailwind
```

## Publicação
Site publicado: [landingpage-iota-indol.vercel.app](https://landingpage-iota-indol.vercel.app/).
