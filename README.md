# Projeto Meli-Test

![Tela Home](https://private-user-images.githubusercontent.com/16689908/417405274-af985343-e637-46b0-a4a4-1ec483ef782b.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3NDA2MjQ2NjEsIm5iZiI6MTc0MDYyNDM2MSwicGF0aCI6Ii8xNjY4OTkwOC80MTc0MDUyNzQtYWY5ODUzNDMtZTYzNy00NmIwLWE0YTQtMWVjNDgzZWY3ODJiLnBuZz9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFWQ09EWUxTQTUzUFFLNFpBJTJGMjAyNTAyMjclMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjUwMjI3VDAyNDYwMVomWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPTIwZDBhZDI0MmI2NzkwNTg0OWVkZWE5ZjI2NzM4MzZjZmJhNTRkNDBlY2ZiNTZlZDQ1NzFmZWVkMjA2YmI0ZDcmWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0In0.Ribi8Wk9trHb6gUXEaoYMgybqW0hw7Y-06eWm-DaubE)

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
![Lighthouse](https://private-user-images.githubusercontent.com/16689908/417405560-9108f186-72f2-49c2-b96b-24fbf62aeb19.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3NDA2MjQ2NjEsIm5iZiI6MTc0MDYyNDM2MSwicGF0aCI6Ii8xNjY4OTkwOC80MTc0MDU1NjAtOTEwOGYxODYtNzJmMi00OWMyLWI5NmItMjRmYmY2MmFlYjE5LnBuZz9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFWQ09EWUxTQTUzUFFLNFpBJTJGMjAyNTAyMjclMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjUwMjI3VDAyNDYwMVomWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPWQ5MmYzNmEzM2RlNTY0OTdkZGNlM2MwYzRmYWJiMjY0MTAwMjYyNzEzODAwZWMzNzJlN2I5OWQ2YjI4ZTFkNDMmWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0In0.NEX_NLAj0WUocjPJfoEWfGEQCX5mJ-zKls7eZ5CoRFg)

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
