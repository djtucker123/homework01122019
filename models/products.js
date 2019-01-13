module.exports = function(connection, Sequelize) {
    const products = connection.define('products', {
      item_id: Sequelize.INTEGER,
      product_name: Sequelize.STRING,
      department_name: Sequelize.STRING,
      price: Sequelize.INTEGER,
      stock_quantity: Sequelize.INTEGER,
   
    });
  
    return products;
  };


//   -- define table (products) and declare columns/properties
// CREATE TABLE products (
//     id INTEGER AUTO_INCREMENT NOT NULL, -- unique id, next number row declaration also use as primary key
//     item_id INTEGER NOT NULL,
//     product_name VARCHAR(15) NOT NULL, -- product declaration (15 char for now)
//     department_name VARCHAR(15) NOT NULL, -- grocery department declaration (15 char for now)
//     price float(4, 2) NOT NULL, -- capping price at 99.99 (not targeting units for cost)
//     stock_quantity INTEGER, --iniital stock on hand quantities
//     createdAt Date,
//     updatedAt Date,
//     PRIMARY KEY (id)
// );