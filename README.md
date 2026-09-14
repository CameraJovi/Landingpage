# Câmera Jovi — Deepy

Landing page acadêmica em Next.js App Router, React e Tailwind CSS 3. Apresenta a proposta, seis recursos com telas reais, público, integrantes e links do projeto. O visual usa fundo preto, Manrope e amarelo, com hero de três capturas e seções amplas de texto e imagem.

## Executar

Requer Node.js 20.9 ou superior. Execute nesta pasta `my-app`:

```sh
npm install
npm run dev
```

Abra http://localhost:3000.

## Verificar

```sh
npm run lint
npm run build
npx playwright install chromium
npm test
```

Os testes iniciam o servidor de produção em localhost:3100; o build deve existir antes de `npm test`. Verificam navegação por âncoras, seis recursos, fundo preto, menu móvel, validação local, imagens e ausência de rolagem horizontal em 320, 390, 768 e 1440px. Capturas de desktop e celular são gravadas em `.impeccable/review/`. Para usar um navegador instalado, defina `PLAYWRIGHT_CHANNEL` como `chrome` ou `msedge`.

## Organização

- `app/page.js`: composição da página.
- `app/layout.js`: idioma, metadados e fonte local.
- `app/globals.css`: diretivas Tailwind, base tipográfica, foco e movimento reduzido.
- `tailwind.config.mjs`: cores, família tipográfica, contêiner e animação do hero.
- `components/*.js`: componentes funcionais separados por responsabilidade; Header e ContactForm concentram as interações locais.
- `components/Gallery.js` e `components/FeatureSection.js`: navegação por âncoras e seis seções completas com explicações e capturas.
- `lib/content.js`: recursos, detalhes, integrantes e links.
- `public/assets/`: imagens originais do projeto.
- `tests/landing.spec.js`: testes de navegação e responsividade.
- `DESIGN.md` e `.impeccable/design.json`: documentação visual e exemplos de componentes.

As imagens são capturas e retratos fornecidos. O menu móvel fecha com Escape. O formulário demonstra validação local e não envia nem armazena dados. Os links da aplicação e do GitHub abrem uma nova aba.

## Editar

Altere textos e integrantes em `lib/content.js`; preserve nomes e RMs conforme `../INTEGRANTES.TXT`. Mantenha componentes em `.js` e use classes Tailwind para layout, espaçamento, estados e responsividade. `Button.js` compartilha variantes de botões e links; `AppLink.js` especializa o acesso à Jovi. `globals.css` permanece restrito à base global.

O projeto usa Webpack e Tailwind 3 para compatibilidade com ambientes Windows que bloqueiam módulos nativos. O Next.js pode usar seu compilador WebAssembly automaticamente.

### Animação da abertura e estrutura do botão

Na primeira seção, título, descrição e ações usam `animate-hero-enter`. O Tailwind anima transparência e deslocamento de 32 pixels por 1100 ms, com pequenos atrasos de 150 e 300 ms. A abertura espera fontes e imagens, executa ao entrar na tela e repete ao retornar. Respeita `prefers-reduced-motion`.

`Button.js` usa uma função com um `if`: quando recebe `href`, renderiza `<a>`; caso contrário, renderiza `<button>`. A constante `buttonClasses` reúne os estilos compartilhados. `const` é apenas uma declaração JavaScript; a semântica vem das tags HTML. Sem `type` informado, o botão usa `type="button"` para não enviar um formulário por acidente.


### Repetição durante a rolagem

`Reveal` usa `repeat = true` por padrão. Quando o elemento sai da janela, o observador remove a classe de animação. Quando ele volta a aparecer, adiciona a classe novamente. Assim, o efeito funciona ao descer e ao subir, tanto na abertura quanto nas telas das funcionalidades. Para animar um elemento apenas uma vez, use `repeat={false}`.

### Apresentação das etapas

`StudyJourney.js` substitui as três colunas por um painel interativo com as etapas Capturar, Preparar e Revisar. Cada opção mostra uma explicação e uma tela real da aplicação. Usa apenas `useState`, `useRef` e Tailwind; as setas do teclado, Home e End também alternam as etapas. A troca tem uma transição curta e respeita movimento reduzido.
