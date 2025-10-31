## Web CV — Rafael Farsura

Aplicação em Next.js que apresenta o portfólio e currículo de Rafael Farsura (Full Stack Developer) com foco em Nest.js, Next.js e Blockchain.

### Funcionalidades
- Navegação com âncora para a seção `Projetos`.
- Botão “Ver Currículo” que abre o PDF local via rota `GET /api/cv`.
- Botões rápidos para contato: WhatsApp, E‑mail e GitHub.
- UI com Tailwind CSS 4 + shadcn/ui (componentes `Button`, `Card`, `Badge`).

### Requisitos
- Node.js 18+ (recomendado 20+)
- npm, yarn, pnpm ou bun

### Instalação e execução
```bash
# instalar dependências
npm install

# ambiente de desenvolvimento
npm run dev

# build de produção
npm run build

# iniciar em produção (após build)
npm start
```

A aplicação ficará disponível em http://localhost:3000.

### Docker
```bash
# build da imagem
docker build -t web-cv .

# executar o container
docker run -p 3000:3000 --name web-cv web-cv
```

### Estrutura relevante
- `src/components/header.tsx`: navegação e CTA de contato.
- `src/components/section.tsx`: herói, habilidades e “Projetos em Destaque”.
- `src/app/api/cv/route.ts`: rota que serve o PDF do currículo.
- `rafael-farsura-outubro-2025.pdf`: arquivo do currículo (servido por `/api/cv`).

### Atualizar currículo (PDF)
Substitua o arquivo na raiz do projeto por uma versão mais recente mantendo o nome:

```
rafael-farsura-outubro-2025.pdf
```

Se mudar o nome do arquivo, atualize também o caminho em `src/app/api/cv/route.ts`.

### Personalizações rápidas
- Texto/títulos: edite `src/components/section.tsx`.
- Links de contato: WhatsApp, E‑mail e GitHub em `section.tsx` e `header.tsx`.
- Cores/tema: `src/app/globals.css` e `tailwind.config.ts`.

### Licença
Uso pessoal/portfólio. Ajuste conforme sua necessidade.
