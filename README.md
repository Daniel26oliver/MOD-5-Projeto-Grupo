# MOD-5-Projeto-Grupo
Projeto em Grupo - módulo 5


## Como usar

Clone este repositório para sua máquina local.

- Instale as dependências necessárias através do seguinte comando no terminal:
```
- npm install
```
- Crie uma copia do nosso banco de dados em sua máquina, utilizar o script loja.sql para alimentação do banco:
```
- CREATE DATABASE loja
```
- Utilize um software de teste de API Clients para fazer as requisição HTTP:
``
  Software recomendados: insomnia ou postman
``
## Métodos de requisição HTTP Possíveis


| Método | Rota | Descrição |
| ------ | ----- | ----------- |
| **`GET`** | **/produtos** | Retorna todos os produtos. |
|  **`GET`** | **/produtos/id** | Retorna um produtos pelo ID. |
|  **`POST`** | **/produtos** | Cria um novo produto.  |
|  **`PUT`** | **/produtos/id** | Altera os dados do produto.
|  **`DELETE`** | **/produtos/id** | deleta o produto.

## Exemplos de consultas. 

### Método GetALL

-- Retorna conjuntos de dados disponíveis

![GET ALL]()

### Método GetByID

-- Retorna dado pelo id referenciado

![GET BY ID]()

### Método CREATE

--Cria um novo dado

![CREATE]()


### Método UPDATE

-- Atualiza um dado existente pelo id referenciado

![UPDATE]()

### Método DELETE

-- Excliur um dado pelo id referenciado

![DELETE]()





