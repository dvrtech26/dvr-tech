# DVR Tech

Site institucional da DVR Tech desenvolvido em Angular 22. O projeto segue a identidade visual oficial da marca e foi pensado para apresentar serviços, projetos demonstrativos e converter visitantes em conversas pelo WhatsApp.

## Requisitos

- Node.js 22 ou superior
- npm 10 ou superior

## Desenvolvimento local

```bash
npm install
npm start
```

A aplicação estará disponível em `http://localhost:4200`.

## Validação

```bash
npm test -- --watch=false
npm run build
```

O build de produção é gerado em `dist/dvr-tech`.

## Identidade visual

- Grafite profundo: `#0D1215`
- Grafite secundário: `#161B1F`
- Verde DVR: `#00D67A`
- Branco: `#F5F5F5`
- Cinza: `#9AA3A8`
- Tipografia: Montserrat

## Estrutura principal

- `src/app/app.html`: conteúdo e seções da landing page
- `src/app/app.scss`: layout, componentes visuais e responsividade
- `src/app/app.ts`: menu responsivo e filtro do portfólio
- `public/logo-dvr-tech.png`: logo oficial extraído do manual de identidade

Este é um projeto local independente e não possui configuração de repositório ou pipeline do Azure DevOps.
