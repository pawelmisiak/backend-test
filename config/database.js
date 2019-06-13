const Sequelize = require("sequelize");

module.exports = new Sequelize("postgres", "postgres", "123", {
  connectionString: process.env.DATABASE_URL,
  // host: "postgresql-silhouetted-48671",
  ssl: true,
  dialect: "postgres"
});
