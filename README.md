# Projeto Meli-Test

![Tela Home](https://github.com/user-attachments/assets/af985343-e637-46b0-a4a4-1ec483ef782b)

## Tecnologias Utilizadas

- **Next.js** 15
- **React** 19
- **Node.js** 22 (definido no arquivo `.nvmrc`)
- **Yarn** para gerenciamento de pacotes

## Escolha das ferramentas

Foi escolhido o Next.js pois temos a opção de reenderização via Server Side,
que possibilita que as informações das paginas sejam geradas no servidor e a página já venha
renderizada por completo, melhorando o SEO, porém às custas de tempo de carregamento.

Para verificar a usabilidade e performance foi utilizado o Google Lighthouse:
![Lighthouse](https://github.com/user-attachments/assets/9108f186-72f2-49c2-b96b-24fbf62aeb19)

## Configuração e Execução

### 1. Configurar a versão do Node

O projeto utiliza Node.js 22. Para garantir a versão correta, utilize:

```sh
nvm use
```

### 2. Instalar dependências

Execute o seguinte comando para instalar as dependências do projeto:

```sh
yarn
```

### 3. Rodar o projeto localmente

Para iniciar o servidor local, utilize:

```sh
yarn dev
```

## Estrutura do Projeto

O projeto segue a estrutura padrão do Next.js, onde:

- As páginas estão localizadas dentro da pasta `src/app`
- Cada página é definida pelo arquivo `page.tsx`

## Rotas

- `/` - Página Home
- `/items?search=:busca` - Página de listagem de busca
- `/items/:id` - Página de detalhe do item

## API - BFF (Backend For Frontend)

Os endpoints da API estão dentro da pasta `src/app/api`, seguindo o padrão do Next.js:

- `GET /api/items?q=:busca&offset=:offset` - Busca de itens
- `GET /api/items/:id` - Detalhe do item

## Testes

O projeto utiliza **Jest** e **Testing Library** para testes unitários. Para rodar os testes, utilize:

```sh
yarn test
```
