const Sequelize = require('sequelize');
const database = require('./db');

const Pessoas = database.define('pessoas', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    nome: {
        type: Sequelize.STRING,
        allowNull: false
    },
    nascimento: {
        type: Sequelize.DATE,
        allowNull: false
    },
    cargo: {
        type: Sequelize.STRING,
        allowNull: false
    },
    salario: {
        type: Sequelize.DOUBLE,
        allowNull: false
    }
});

try {
    Pessoas.sync({force: true});
    console.log('Tabela criada com sucesso!');
} catch (error) {
    console.error('Erro ao criar tabela:', error);
}
module.exports = Pessoas;

