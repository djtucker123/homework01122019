// *****************************************************************************
// Server.js - This file is the initial starting point for the Node/Express server.
//
// ******************************************************************************
// *** Dependencies
// =============================================================
const express = require('express');
const path = require("path");


// Sets up the Express App
// =============================================================
const app = express();
const PORT = process.env.PORT || 8100;

// Requiring our models for syncing
const db = require('./models');


// db.sequelize.sync().then(function(){
//   db.products.find({
//     where: {
//       item_id: '6'
//     }
//   }).then(function(data){
//     console.log('------------PRINTING DB DATA-----------------');
//     console.log(JSON.stringify(data, null, 2));
//     console.log(data.product_name, data.stock_quantity);
//   });
//   });






// Sets up the Express app to handle data parsing

// parse application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));
// parse application/json
app.use(express.json());
app.use(express.static(path.join(__dirname, './public')));


// Routes
// =============================================================
require('./routes/api-routes.js')(app);
require('./routes/html-routes.js')(app);

// Syncing our sequelize models and then starting our Express app
// =============================================================
db.sequelize.sync().then(function() {
  app.listen(PORT, function() {
    console.log('App listening on PORT ' + PORT);
  });
});
