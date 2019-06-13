const Sequelize = require("sequelize");

module.exports = new Sequelize("postgres", "postgres", "123", {
  host: "postgresql-silhouetted-48671",
  dialect: "postgres"
});
