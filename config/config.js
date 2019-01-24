module.exports = {
    "development": {
        "username": "root",
        "password": process.env.SQL_KEY,
        "database": "bamazon",
        "host": "localhost",
        "port": 3306,
        "dialect": "mysql"
    },
    
    "production": {
        "use_env_variable": "JAWSDB_URL",
        "dialect": "mysql"
    }
}
