
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
    username: process.env.U,
    password: process.env.P,
    database: process.env.D,
    host: process.env.H,
    port: 3306,
    dialect: "mysql"
  }
};
