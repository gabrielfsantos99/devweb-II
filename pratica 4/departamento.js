const Sequelize = require('sequelize');
const database = require('./db');

const Departamento = database.define('departamento', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    dep_nome: {
        type: Sequelize.STRING,
        allowNull: false
    },
    dep_local: {
        type: Sequelize.DATE,
        allowNull: false
    }
});

try {
    Pessoas.sync({force: true});
    console.log('Tabela criada com sucesso!');
} catch (error) {
    console.error('Erro ao criar tabela:', error);
}
module.exports = Departamento;

