const Sequelize = require("sequelize");

// module.exports = new Sequelize(process.env.DATABASE_URL, {
//   dialect: "postgres",
//   protocol: "postgres",
//   dialectOptions: {
//     ssl: true
//   }
// });

module.exports = new Sequelize("postgres", "postgres", "123", {
  host: "localhost",
  dialect: "postgres"
});
