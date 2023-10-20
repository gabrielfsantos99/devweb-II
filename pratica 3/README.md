# Atividade-03


Crud usando Node


## Senha do MYSQL

É necessário alterar a senha no codigo para que a aplicação funcione

```js
const con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "insira sua senha aqui" // neste ponto da aplicação, voce deve apagar o conteudo entre aspas e colocar a senha do seu usuario root no mysql.
});

```