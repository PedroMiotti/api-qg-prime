<p align="center">
  <img src="https://khipo.com.br/wp-content/uploads/2019/09/khipologo.png" />
</p>


# API QG Prime 

Essa API tem como objetivo gerenciar os visitantes e realizar o check-in nas atrações.

## Rodando localmente

Clone o projeto

```bash
  git clone <repo-url>
```

Entre no diretório do projeto

```bash
  cd api-qg-prime
```

Instale as dependências

```bash
  npm install
```

Inicie a function

```bash
  npm run start
```


## Documentação da API

#### Retorna todos os visitantes

```http
  GET api/api-fetch-all-users
```

#### Retorna todas as atrações

```http
  GET /api/api-fetch-all-stands
```

#### Criar um visitante

```http
  POST /api/api-user-register
```

| Body   | Tipo       | Descrição                                   |
| :---------- | :--------- | :------------------------------------------ |
| `name`      | `string` | **Obrigatório**. O nome do visitante |
| `lastname`      | `string` | **Obrigatório**. O sobrenome do visitante |
| `cellphone`      | `string` | **Obrigatório**. O telefone do visitante |
| `email`      | `string` | **Obrigatório**. O e-mai; do visitante |


#### Cria uma atração

```http
  POST /api/api-stand-register
```

| Body   | Tipo       | Descrição                                   |
| :---------- | :--------- | :------------------------------------------ |
| `name`      | `string` | **Obrigatório**. nome da atração |
| `description` | `string` | **Obrigatório**. Descrição da atração |



## Variáveis de Ambiente

Para rodar esse projeto, você vai precisar adicionar a seguinte variável de ambiente no seu local.settings.json

`DATABASE_URL`


## Autores

- [@PedroMiotti](https://www.github.com/PedroMiotti)