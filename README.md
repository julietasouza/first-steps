# First Steps

O **First Steps** é um protótipo de plataforma de carreira. A interface reúne páginas planejadas para apoiar a criação de currículo, busca de vagas, preparação para entrevistas e organização de um perfil profissional.

> O projeto ainda está em desenvolvimento. No estado atual, algumas páginas são protótipos e a busca filtra conteúdos estáticos da própria aplicação; não há integração com serviços de IA, vagas ou backend.

## Funcionalidades disponíveis

- Navegação entre as páginas de currículo, vagas, simulador de entrevista e perfil.
- Campo de pesquisa no cabeçalho, com resultados para os conteúdos cadastrados na aplicação.
- Layout e estilos feitos com `styled-components`.

## Tecnologias

- React
- Vite
- React Router
- styled-components

## Como executar

### Pré-requisitos

- Node.js e npm instalados.

### Instalação e desenvolvimento

```bash
npm install
npm run dev
```

O Vite exibirá no terminal o endereço local para abrir no navegador.

### Outros comandos

```bash
npm run build    # gera a versão de produção em dist/
npm run preview  # serve localmente a versão gerada
npm run lint     # verifica o código com ESLint
```

## Páginas

| Caminho | Página |
| --- | --- |
| `/` | Currículo Inteligente |
| `/Vagas` | Vagas Recomendadas |
| `/Simulador` | Simulador de Entrevista |
| `/Perfil` | Perfil Profissional |
| `/Buscar` | Resultados da pesquisa |

## Estrutura do projeto

```text
src/
├── App.jsx
├── main.jsx
├── Router/
│   └── Router.jsx
└── assets/
    ├── components/
    │   └── Header/
    ├── pages/
    │   ├── Buscar/
    │   ├── Home/
    │   ├── Perfil/
    │   ├── Simulador/
    │   └── Vagas/
    ├── fonts/
    ├── img/
    └── styles/
```
