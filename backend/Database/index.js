
//Fazer um file para config e jogar a connection do banco lá e exportar pra ca.
//Fazer um file para cada classe (?) que representa uma entidade no banco e exportar pra ca.
//Fazer o index.js do database ser de fato um commom place só para executar o que precisa ser executado aqui, sem lógica de negócio.
//Criar os métodos, de forma genérica, de criar, atualizar e deletar instancias no banco.


//Pra cada model, fazer os métodos.
//Fazer os endpoint de login.
require('dotenv/config');
const { sequelize } = require("./dbConnection");
const { Sequelize, Model, DataTypes } = require('sequelize');
const { User } = require("./model");
const userMethods = require('./userMethods');
const model = require('./model');


(async () => {
  await sequelize.sync({force: true});
})();




module.exports = {
    db_connection: sequelize,
}