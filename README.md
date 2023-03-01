# MOD-5-Projeto-Grupo
Projeto em Grupo - módulo 5


## Como usar

Clone este repositório para sua máquina local.

- Instale as dependências necessárias através do seguinte comando no terminal:
```
- npm init -y
```
```
- npm install bcryptjs connect-flash express express-flash express-session express-handlebars mysql2 sequelize nodemon 
  cookie-parser cookie-session session-file-store 
```
- Crie uma copia do nosso banco de dados em sua máquina, utilizar o script loja.sql para alimentação do banco:
```
- CREATE DATABASE loja
```
```
- USE loja;
```
- Utilize um software de teste de API Clients para fazer as requisição HTTP:
``
  Software recomendados: insomnia ou postman
``
```
- npm start
```
## Métodos de requisição HTTP Possíveis


| Método | Rota | Descrição |
| ------ | ----- | ----------- |
| **`GET`** | **/produtos** | Retorna todos os produtos. |
|  **`GET`** | **/produtos/id** | Retorna um produtos pelo ID. |
|  **`POST`** | **/produtos** | Cria um novo produto.  |
|  **`PUT`** | **/produtos/id** | Altera os dados do produto.
|  **`DELETE`** | **/produtos/id** | deleta o produto.

