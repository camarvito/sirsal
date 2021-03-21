# Projeto SIRSAL - Sistema para reserva de Salas
## Trabalho Final da Disciplina de Banco de Dados - 2020.2

![Modelagem Conceitual](https://i.imgur.com/UB6U3Vk.png)

## Instruções para execução local

Através de sua interface de interação com o PostgreSQL, crie um banco de dados com o nome **victor_camargo_471419**

Crie na pasta raiz do projeto um arquivo chamado ".env" e preencha-o com:

```
module.exports = {
    authSecret: 'seu_segredo_jwt',
    db: {
        host : '127.0.0.1',
        port: 5432,
        database: 'victor_camargo_471419',
        user: 'seu_usuario_no_postgres',
        password: 'sua_senha_no_postgres'
    }
}
```

Após se certificar que o banco e o arquivo _.env_ foi criado corretamente, rode os seguintes comandos na pasta raiz do projeto:

```
npm install
npm start
```

Com o comando **start**, as migrations serão automaticamente executadas e a base de dados já estará pronta para executar novas operações. A aplicação roda por padrão na porta 5000. O arquivo **HTTP_Routes.json** contém as rotas disponíveis e pode ser importado no software Insomnia.