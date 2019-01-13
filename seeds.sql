
USE bamazon; -- use this db for subsequent use (make this primary/active) 

-- redo for mass update --can be compressed so only one set of commands and a list of payloads to follow and loop over

-- seed data to insert into products table -- 4 departments, 3 products in each of various cost per unit (unit undeclared)
-- deliver ID, name, department, price, and initial on hand stock
INSERT INTO products(item_id,product_name,department_name,price,stock_quantity) VALUES (1,'Apple','Produce',1.50,22);
INSERT INTO products(item_id,product_name,department_name,price,stock_quantity) VALUES (2,'Orange','Produce',2.00,14);
INSERT INTO products(item_id,product_name,department_name,price,stock_quantity) VALUES (3,'Lettuce','Produce',2.15,6);

INSERT INTO products(item_id,product_name,department_name,price,stock_quantity) VALUES (4,'Beef','Meat',5.22,10);
INSERT INTO products(item_id,product_name,department_name,price,stock_quantity) VALUES (5,'Chicken','Meat',4.00,14);
INSERT INTO products(item_id,product_name,department_name,price,stock_quantity) VALUES (6,'Shrimp','Meat',9.75,15);

INSERT INTO products(item_id,product_name,department_name,price,stock_quantity) VALUES (7,'Milk','Dairy',3.09,34);
INSERT INTO products(item_id,product_name,department_name,price,stock_quantity) VALUES (8,'Cheese','Dairy',3.80,9);
INSERT INTO products(item_id,product_name,department_name,price,stock_quantity) VALUES (9,'Yogurt','Dairy',0.75,24);

INSERT INTO products(item_id,product_name,department_name,price,stock_quantity) VALUES (10,'Bagle','Bakery',0.25,28);
INSERT INTO products(item_id,product_name,department_name,price,stock_quantity) VALUES (11,'Bread','Bakery',2.00,30);
INSERT INTO products(item_id,product_name,department_name,price,stock_quantity) VALUES (12,'Cupcake','Bakery',0.20,18);





