const Sequelize = require('sequelize');

                            //databaseName, username, password
module.exports = new Sequelize('postgres', 'postgres', '123', {
    host: 'localhost',
    dialect:  'postgres' 
  });
