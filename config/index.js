
const config = {
  password: process.env.SQL_KEY,
  username: "root",
  database: "bamazon",
  host: "localhost",
  port: 3306,
  dialect: "mysql"
}

module.exports = config;
