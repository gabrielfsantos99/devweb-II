const Sequelize = require('sequelize');
const sequelize =  new Sequelize('crud','root','fatec',{
    host: 'localhost',
    dialect: 'mysql'
});

module.exports = sequelize;

