# Agenda de Contatos - Frontend

Sistema de agenda de contatos usando React, TypeScript e TailwindCSS.

## Tecnologias

- React 19.2.0
- TypeScript 5.6.3
- Vite 5.4.11
- TailwindCSS 3.4.14
- React Router DOM 7.9.3
- TanStack Query 5.90.2
- Axios 1.12.2
- Zustand 5.0.8
- React Hook Form 7.63.0
- Zod 4.1.11

## Estrutura do Projeto

```
src/
├── app/                    # Configuração da aplicação
│   ├── App.tsx            # Componente raiz
│   └── router.tsx         # Configuração de rotas
├── assets/                # Recursos estáticos
│   └── styles/           # Estilos globais
├── core/                  # Componentes e lógica compartilhada
│   ├── components/       # Componentes genéricos
│   ├── lib/              # Configurações de bibliotecas
│   ├── utils/            # Funções utilitárias
│   ├── types/            # Tipos globais
│   └── constants/        # Constantes globais
├── domain/               # Domínios de negócio
└── pages/                # Páginas da aplicação
    └── layouts/          # Layouts compartilhados
```

## Configuração

1. Instale as dependências:
```bash
npm install
```

2. Configure as variáveis de ambiente:
```bash
cp .env.example .env
```

3. Inicie o servidor de desenvolvimento:
```bash
npm run dev
```

## Scripts Disponíveis

- `npm run dev` - Inicia o servidor de desenvolvimento
- `npm run build` - Gera build de produção
- `npm run preview` - Visualiza build de produção
- `npm run lint` - Executa linter

## Convenções

- Componentes em PascalCase
- Arquivos de implementação: `main.tsx`
- Arquivos de tipos: `types.ts`
- Arquivos de variantes: `variants.ts`
- Exports centralizados: `index.ts`
- Path alias: `@/` aponta para `src/`

## API

O frontend se comunica com a API REST através de dois clientes:

- `publicClient` - Endpoints públicos (`/api/v1/external`)
- `authenticatedClient` - Endpoints autenticados (`/api/v1/internal`)

Configuração em `src/core/lib/api.ts`