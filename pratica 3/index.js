const mysql = require("mysql2");

const con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "insira sua senha aqui"
});

con.connect((err) => {
    if (err) throw err;
    
    // Criando banco de dados
    con.query("DROP DATABASE IF EXISTS crud", (err, result) => {
        if (err) throw err;
    });

    con.query("CREATE DATABASE IF NOT EXISTS crud", (err, result) => {
        if (err) throw err;
        console.log("BANCO DE DADOS CRIADO COM SUCESSO!");
    });

    con.query("USE crud", (err, result) => {
        if (err) throw err;
        console.log(result);
    });


    // CRIANDO A TABELA CLIENTE
    con.query("CREATE TABLE IF NOT EXISTS Cliente (id INT NOT NULL AUTO_INCREMENT, nome VARCHAR(255) NOT NULL, idade INT NOT NULL, uf VARCHAR(20) NOT NULL, PRIMARY KEY (id))", (err, result) => {
        if (err) throw err;
        console.log("TABELA CLIENTE CRIADA COM SUCESSO!");
    });

    // CRIANDO A TABELA COMPRA
    con.query("CREATE TABLE IF NOT EXISTS Compra (id INT NOT NULL AUTO_INCREMENT, nome_produto VARCHAR(255) NOT NULL, data_compra DATE NOT NULL, qtd_produto INT NOT NULL, id_cliente INT NOT NULL, PRIMARY KEY (id), FOREIGN KEY (id_cliente) REFERENCES Cliente (id))", (err, result) => {
        if (err) throw err;
        console.log("TABELA COMPRA CRIADA COM SUCESSO!");
    });

    // CADASTRANDO CLIENTES
    con.query("INSERT INTO Cliente (nome, idade, uf) VALUES ('Gabriel', 24, 'SP')", (err, result) => {
        if (err) throw err;
        console.log("CLIENTE Gabriel CRIADO COM SUCESSO!");
    });

    con.query("INSERT INTO Cliente (nome, idade, uf) VALUES ('Maria', 22, 'SP')", (err, result) => {
        if (err) throw err;
        console.log("CLIENTE Maria CRIADO COM SUCESSO!");
    });


    // CADASTRANDO COMPRAS
    con.query("INSERT INTO Compra (nome_produto, data_compra, qtd_produto, id_cliente) VALUES ('Pastel de carne', CURDATE(), 1, 1)", (err, result) => {
        if (err) throw err;
        console.log("COMPRA CRIADA COM SUCESSO!");
    });

    con.query("INSERT INTO Compra (nome_produto, data_compra, qtd_produto, id_cliente) VALUES ('Coxinha com catupiry', CURDATE(), 2, 1)", (err, result) => {
        if (err) throw err;
        console.log("COMPRA CRIADA COM SUCESSO!");
    });

    // UPDATE NO NOME DO CLIENTE DE ID = 1
    con.query("UPDATE Cliente set nome = 'Gabriel Felipe dos Santos' WHERE id = 1", (err, result) => {
        if (err) throw err;
        console.log("UPDATE DO NOME PARA Gabriel Felipe dos Santos DO CLIENTE DE ID = 1 REALIZADO COM SUCESSO!");
    });

    // DELETANDO CLIENTE DE ID = 2
    con.query("DELETE FROM Cliente WHERE id = 2", (err, result) => {
        if (err) throw err;
        console.log("CLIENTE DE ID = 2 DELETADO COM SUCESSO!");
    });

    // LISTANDO TODAS AS COMPRAS REALIZADAS
    con.query("SELECT * FROM Compra", (err, result) => {
        if (err) throw err;
        console.log("LISTANDO TODAS AS COMPRAS");
        console.log(result);
    });

    // LISTANDO COM INNER JOIN
    con.query("SELECT Cliente.nome, Compra.nome_produto,Compra.data_compra, Compra.qtd_produto FROM Cliente INNER JOIN Compra ON Cliente.id = Compra.id_cliente", (err, result) => {
        if (err) throw err;
        console.log("LISTANDO CLIENTES E SUAS COMPRAS");
        console.log(result);
    });
});
