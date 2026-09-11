---
name: "Deepy · Câmera Jovi"
description: "Sistema visual da landing acadêmica da Câmera Jovi."
colors:
  brand: "#ffc107"
  brand-hover: "#ffd24e"
  paper: "#000000"
  surface: "#101010"
  foreground: "#f5f5f7"
  ink: "#202020"
  muted: "#a1a1a6"
  line: "#303030"
  focus: "#ffc107"
  input-background: "#151515"
  input-border: "#737373"
typography:
  display:
    fontFamily: "Manrope Variable, sans-serif"
    fontSize: "clamp(3rem, 7vw, 6rem)"
    fontWeight: 600
    lineHeight: 1.04
    letterSpacing: "-0.04em"
  headline:
    fontFamily: "Manrope Variable, sans-serif"
    fontSize: "clamp(2.6rem, 4.3vw, 4rem)"
    fontWeight: 600
    lineHeight: 1.04
    letterSpacing: "-0.025em"
  body:
    fontFamily: "Manrope Variable, sans-serif"
    lineHeight: 1.8
  button:
    fontFamily: "Manrope Variable, sans-serif"
    fontSize: "14px"
    fontWeight: 800
rounded:
  field: "6px"
  button: "9999px"
  portrait: "12px"
  screen: "16px"
spacing:
  feature-section: "96px"
  feature-section-mobile: "64px"
  label-gap: "8px"
components:
  button-primary:
    backgroundColor: "{colors.brand}"
    textColor: "{colors.ink}"
    typography: "{typography.button}"
    rounded: "{rounded.button}"
    padding: "16px 22px"
  button-primary-hover:
    backgroundColor: "{colors.brand-hover}"
  field:
    backgroundColor: "{colors.input-background}"
    textColor: "white"
    rounded: "{rounded.field}"
    padding: "12px"
---

# Design System: Deepy · Câmera Jovi

## Overview

A landing acadêmica apresenta o produto sobre preto, com títulos amplos, capturas reais e explicações dedicadas a cada recurso. A estrutura inspirada nas apresentações de produto da Apple combina hero centralizado e seções alternadas de texto e imagem. O amarelo original identifica ações e recursos.

**Key Characteristics:**

- Fundo preto, superfícies discretas e texto claro.
- Manrope em toda a hierarquia e amplo espaço entre conteúdos.
- Capturas reais acompanhadas de explicações e legendas.

Fontes de verdade: `tailwind.config.mjs`, `app/globals.css`, `components/*.js` e `PRODUCT.md`.

## Colors

`paper` define o fundo preto; `surface` distingue seções alternadas. `foreground` atende títulos e texto principal, `muted` às descrições e `line` aos divisores. `brand` marca ações e interações; `ink` é o texto escuro dos botões amarelos. O foco usa `focus`. Campos têm fundo e borda próprios. O documento declara esquema de cores escuro.

## Typography

Manrope Variable, servida localmente, cobre títulos, corpo, navegação e controles. O hero usa o token display; os h2 usam headline. Os h3 com chamadas de cada recurso variam de 2.25rem a 3.75rem, com entrelinha 1.08 e peso 600. Descrições usam 16–18px; textos auxiliares, 12–14px. Títulos usam quebra balanceada e parágrafos, `text-wrap: pretty`.

## Layout

O contêiner Tailwind é centralizado, com padding de 20px, 24px a partir de 640px e 48px a partir de 1024px. O limite configurado para 2xl é 1336px.

O hero centraliza texto, ações e três capturas. A galeria começa com navegação por âncoras e apresenta seis artigos completos. `FeatureSection.js` organiza texto e captura em duas colunas a partir de 768px, alternando a ordem e o fundo; no celular, o texto precede a imagem. Cada recurso tem chamada, descrição, detalhes, legenda e link para a aplicação.

O cabeçalho permanece no topo; abaixo de 1024px usa menu expansível. O contato centraliza as ações e limita o formulário a 576px. As verificações de responsividade cobrem 320, 390, 768 e 1440px.

## Elevation & Depth

A profundidade vem das capturas reais e da alternância entre preto e superfície. No hero, as capturas laterais giram seis graus em sentidos opostos e usam opacidade 80%; a captura central ganha destaque. O botão de contorno usa sombra interna como borda. Evitar adicionar sombras decorativas a todas as seções.

## Shapes

Botões e links de navegação dos recursos têm formato de cápsula. Capturas usam cantos de 16px e preservam a proporção com `object-fit: contain`; retratos têm cantos de 12px. Campos usam cantos de 6px e bordas discretas.

## Components

- **Botões:** variantes principal e contorno em `Button.js`, altura mínima de 48px, hover de cor e escala 0.98 ao pressionar. Transições duram 160ms. `AppLink.js` especializa o acesso à Jovi.
- **Navegação:** links de âncora com foco visível. O menu móvel fecha ao selecionar um link, usar Escape ou retornar ao desktop; Escape devolve foco ao botão. A navegação dos recursos quebra em linhas conforme o espaço disponível.
- **Hero:** composição de três telas reais. A animação `product-enter` desloca a composição de 24px até sua posição final em 900ms, com curva `cubic-bezier(0.16,1,0.3,1)`.
- **Recursos:** seis instâncias de `FeatureSection.js`, renderizadas por `Gallery.js` a partir de `lib/content.js`. Todo o conteúdo permanece disponível na página.
- **Contato:** demonstração local recolhível com `details` e `summary`. O chevron gira 180 graus em 180ms. Campos têm rótulos visíveis; a mensagem de validação usa `role="status"`. Nenhum dado é enviado ou armazenado.

O foco global tem contorno de 3px, afastado 5px. Há link para pular ao conteúdo. A preferência de movimento reduzido remove animações, transições e rolagem suave.

## Do's and Don'ts

- **Do** preservar o fundo preto, o amarelo original e a família Manrope.
- **Do** usar capturas, retratos e identidade reais do projeto.
- **Do** explicar cada recurso com conteúdo acessível por rolagem e âncoras.
- **Do** manter componentes `.js` e estilos de layout, estados e responsividade nas classes Tailwind; reservar `globals.css` para a base global e movimento reduzido.
- **Don't** transformar a demonstração de formulário em promessa de envio.
- **Don't** acrescentar métricas, preços, depoimentos ou garantias sem fonte no projeto.

