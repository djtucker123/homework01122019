// Requiring our models
const db = require('../models');

module.exports = function(app) {

  // GET route for retrieving all stock
  app.get('/api/stock', function(req, res) {

    // Here we add an 'include' property to our options in our findAll query
    // We set the value to an array of the models we want to include in a left outer join
    // In this case, just db.Article
    db.products.findAll({
      }).then(function(dbStock) {
      res.json(dbStock);
    
    }).catch(function(error) {
      res.json({ error: error });
    });
  });
 
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



// router.put(‘/book/:bookId’, function (req, res, next) {
//   Book.update(
//     {title: req.body.title},
//     {returning: true, where: {id: req.params.bookId} }
//   )
//   .then(function([ rowsUpdate, [updatedBook] ]) {
//     res.json(updatedBook)
//   })
//   .catch(next)
//  })

  // PUT route for updating authors
  app.put('/api/quantity/:id', function(req, res) {
    console.log(req.body);
    console.log(req.params.id);
    db.products.update(
      {stock_quantity: req.body.stock_quantity},
     
      {
        where: {
          id: req.params.id
        }
    }).then(function(qtyUpdate) {
      console.log('Hello there' , qtyUpdate);
      res.json(qtyUpdate);
    }).catch(function(error) {
      console.log('error side', error);
      res.json({ error: error });
    });
  });
}
// // PUT route for updating authors
// app.put('/api/stock/:id', function(req, res) {
//   db.products.update(
//     req.body,
//     {
//       where: {
//         id: req.params.id
//       }
//   }).then(function(dbAuthor) {
//     res.json(dbAuthor);
//   }).catch(function(error) {
//     res.json({ error: error });
//   });
// });
// }