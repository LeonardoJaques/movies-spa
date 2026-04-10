# The Movies SPA 🎥

Uma aplicação Single Page Application (SPA) moderna para visualização de informações sobre os filmes mais populares. Desenvolvido com uma stack eficiente e modular de componentes e focado em boas práticas!

## 🎓 Objetivo Acadêmico - PUC Minas

Este projeto faz parte do portfólio acadêmico voltado a consolidar conhecimentos teóricos e práticos comumente ensinados nas disciplinas da **PUC Minas**. 
O foco do exercício envolve:
- **Criação de Single Page Applications (SPAs):** Entender como aplicações modernas atualizam a interface sem precisar recarregar páginas completas e como a navegação ocorre no lado do cliente.
- **Ecossistema React:** Estudar o ciclo de vida, gerenciamento de estado e estruturação de componentes.
- **Consumo de APIs Externas:** Exercitar o assincronismo, consumo de dados web (requests HTTP) focados no universo REST.
- **Boas práticas de Interface (UI/UX) e Estilos:** Aplicação e organização usando metodologias CSS escaláveis como o padrão BEM (Block Element Modifier).

## 🗄️ A API de Estudo (TMDB)

Os dados de filmes e sinopses não são "mockados", eles são fornecidos diretamente de uma API real e gratuita da [The Movie Database (TMDB)](https://www.themoviedb.org/). Ela se consolida não só como uma gigantesca base de dados mantida em formato de escopo pela comunidade, mas também é um excelente ambiente de estudo para desenvolvedores praticarem chamadas *RESTful*, mapeamento de JSON, roteamento de endpoints dinâmicos e paginação.

### 🛡️ Arquitetura Segura e Data Streaming (BFF)

Para garantir segurança de nível profissional, descartamos a injeção clássica no front-end e nossa aplicação adota o padrão **BFF (Backend For Frontend)** utilizando os recursos avançados de *Server-Side Rendering (SSR)* do React Router 7 (`loaders` somados à extensão rigorosa `.server.ts`).

- **Blindagem da API:** Em SPAs puras, tokens e chaves públicas ficam muito expostos no Client-Side através das injecções de ambiente originais (ex: prefixos `VITE_`). Aqui, ocultamos as lógicas do **Axios** estritamente no nosso servidor interno. O navegador do usuário não faz requests diretos à API da TMDB; ele recebe apenas os blocos de dados.
- **Data Streaming (Deferred Data):** Para mitigar o clássico "congelamento" causado por telas aguardando respostas demoradas antes de renderizar (um impencilho natural do SSR), aplicamos retorno de requisições de Promessas ("Data Streaming"). Combinando utilitários do próprio Router com blocos de layout `<Suspense>` + `<Await>`, a interface carrega rapidamente uma bela interface e, de forma assíncrona, desce os pacotes recém recuperados visualmente sem trancar a navegação do usuário.

## ⚡ Por que utilizar Vite?

Vite é uma revolucionária e moderna ferramenta de *build*. Ao invés das opções clássicas, optamos pelo Vite pelos seguintes motivos:
- **Build Incrivelmente Ágil:** Usa o ES Modules nativos pelo navegador no modo de desenvolvimento. Isso faz o tempo inicial e atualizações sob demanda (`Hot Module Replacement` - HMR) serem refletidos quase instantaneamente.
- **Out of the Box:** Fornece suporte imediato a Typescript, CSS modules, imports estáticos sem longas confugurações de webpack, nos permitindo focar diretamente na programação e entrega de valor.

## 🛠 Tecnologias Principais

- **React 19 & React Router 7 (SSR Loaders + Deferred Data)**
- **Vite** para empacotamento rápido.
- **Axios** para requisições unificadas no back-end.
- **CSS Vanilla (Metodologia BEM)**

## 📦 Requisitos e Como Rodar

### Versão do Node.js
Para a compatibilidade ideal da aplicação e conforme projetado no suporte dos tipos do ambiente, você está utilizando (e é necessário possuir) a **versão 22 ou superior do Node.js** instalada na máquina.

### Passo 1: Instalação das Dependências

Instale as dependências usando os instaladores comuns — você pode escolher entre `npm` ou o ambiente `yarn`:

**Via NPM:**
```bash
npm install
```

**Via Yarn:**
```bash
yarn install
```

### Passo 2: Executando no Modo Desenvolvimento

Com tudo resolvido, suba o servidor de desenvolvimento na porta e veja os arquivos refletirem as alterações de imediato.

**Via NPM:**
```bash
npm run dev
```

**Via Yarn:**
```bash
yarn dev
```

A aplicação estará disponível acessível em: [http://localhost:5173](http://localhost:5173).

### Gerando Build para Produção
Caso queira gerar uma versão miniaturizada e otimizada pronta para o deploy:

**NPM:** `npm run build && npm run start`  
**Yarn:** `yarn build && yarn start`
