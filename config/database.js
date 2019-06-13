const Sequelize = require("sequelize");

module.exports = new Sequelize(process.env.DATABASE_URL, {
  dialect: "postgres",
  protocol: "postgres",
  dialectOptions: {
    ssl: true
  }
});

// module.exports = new Sequelize("dbname=dmaki2o2lbn4t host=ec2-174-129-242-183.compute-1.amazonaws.com port=5432 user=djvqhhrzxfxixs password=ee646956a5f59a98caddcb8bbc8aa71b92e775cb636f215f38783b03a74d3529 sslmode=require", {
//   // host: process.env.DATABASE_URL,
//   host: process.env.HEROKU_POSTGRESQL_BRONZE_URL,
//   // "dbname=dmaki2o2lbn4t host=ec2-174-129-242-183.compute-1.amazonaws.com port=5432 user=djvqhhrzxfxixs password=ee646956a5f59a98caddcb8bbc8aa71b92e775cb636f215f38783b03a74d3529 sslmode=require"),
//   // host: "postgresql-silhouetted-48671",
//   ssl: true,
//   dialect: "postgres"
// });
