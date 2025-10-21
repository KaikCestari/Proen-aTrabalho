# Supermercado Proença

Aplicação Angular que apresenta a experiência digital do Supermercado Proença. O projeto usa componentes standalone, estilização customizada e simula fluxos comuns do e-commerce (busca de produtos, carrinho compartilhado e checkout via PIX fictício).

## Visão geral

- **Front-end** em Angular 17 com roteamento client-side e componentes desacoplados.
- **Layout responsivo** construído com SCSS modular.
- **Carrinho unificado** via `CartService`, acessível tanto na listagem de produtos quanto na página dedicada.
- **Busca global** no cabeçalho, sincronizando com a rota `/produtos?busca=...`.
- **Checkout PIX fictício** com geração de QR code e payload meramente ilustrativos.

## Arquitetura rápida

```
src/
├── app/
│   ├── app.routes.ts             # Configuração principal de rotas
│   ├── layout/                   # Cabeçalho e rodapé compartilhados
│   ├── home/                     # Landing page
│   ├── products/                 # Catálogo com carrinho lateral
│   ├── cart/                     # Página de resumo e checkout PIX
│   └── contact/                  # Página de contato
└── assets/                       # Logos e ícones
```

## Funcionalidades

- **Menu de busca**: formulário no cabeçalho que envia o usuário para `/produtos` com o termo em `?busca=`; o valor permanece sincronizado ao navegar.
- **Catálogo filtrável**: `/produtos` aplica o termo da busca em categorias e itens, exibindo aviso quando nada é encontrado.
- **Carrinho lateral**: adiciona produtos rapidamente, atualiza total de itens/valor e permite alterar quantidades.
- **Serviço de carrinho**: `CartService` mantém estado reativo disponível em qualquer rota.
- **Página `/carrinho`**: mostra resumo detalhado, checkout PIX demonstrativo e links para continuar comprando.
- **Acessibilidade básica**: uso de `aria-label`, `role`, botões com descrição e foco visual coerente.

## Começando

### Pré-requisitos

- Node.js 18+
- npm 9+

### Instalação

```bash
npm install
```

### Desenvolvimento local

```bash
npm start
```

O cliente ficará disponível em `http://localhost:4200/`, com recompilação automática a cada alteração.

### Build de produção

```bash
npm run build
```

Os artefatos ficam em `dist/proenca-supermercado`. Sirva a pasta com qualquer servidor estático.

### Testes

```bash
npm test
```

Executa a suíte do Karma/Jasmine em modo interativo.

## Fluxos sugeridos para validação manual

1. **Busca por produto**: pesquise “manga” no cabeçalho e confirme que `/produtos?busca=manga` é carregado com resultado filtrado.
2. **Adicionar ao carrinho**: na listagem, adicione itens variados, aumente/diminua a quantidade e remova para garantir que o estado acompanha.
3. **Navegar ao resumo**: clique em “Finalizar compra” para abrir `/carrinho` e confira se os itens migraram corretamente.
4. **Gerar pagamento**: acione “Gerar pagamento PIX” e copie o código gerado; o QR exibido é fictício e destinado apenas a demonstração.

## Boas práticas adotadas

- Componentes standalone com imports explícitos, evitando módulos globais.
- Observables finalizados com `takeUntilDestroyed`.
- Estilos organizados por componente, priorizando seletores coesos.
- Formulários sem template-driven/form modules extras: uso direto dos elementos HTML quando possível.

## Próximos passos (ideias)

- Persistir o carrinho no `localStorage` para manter o estado entre sessões.
- Implementar catálogo dinâmico via API e paginação.
- Adicionar feedback visual ao copiar o código PIX no cabeçalho (toast global).
- Cobrir fluxos críticos com testes end-to-end (Playwright ou Cypress).

---

Projeto educativo inspirado no Supermercado Proença para demonstrar conceitos de Angular moderno, design system enxuto e integração UX entre páginas.
