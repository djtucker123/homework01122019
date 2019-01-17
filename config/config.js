
module.exports = {
  development: {
    password: process.env.SQL_KEY,
    username: "root",
    database: "bamazon",
    host: "localhost",
    port: 3306,
    dialect: "mysql"
  },
  production: {
    "use_env_variable": "JAWSDB_URL",
    dialect: "mysql"
  }
};
