//const db = require('../models/index');
// const inquirer = require('inquirer');


// db.sequelize.sync().then(function(){
//   db.products.findAll({}).then(function(data){
//     // console.log('------------PRINTING DB DATA-----------------');
//     console.log('ITEM_ID     Product        Price');
//     console.log('===========================================');
//        for (let i=0; i < data.length; i++) {

//   console.log(data[i].item_id, " | ", data[i].product_name, " | ", data[i].price);
// }
//     // console.log(JSON.stringify(data, null, 2));

//   });

// });



// inquirer.prompt([
//   {
//     type: 'input',
//     name: 'product',
//     message: 'What product would you like to order (ID number please)?'
//   },
//   {
//     type: 'input',
//     name: 'quantity',
//     message: 'How many would you like?'
//   },
// ]).then(function(user) {
//   console.log(`ordering ${user.quantity} of ${user.product}  ${data[product]}`);
// });

let onHand;
// retreive the inventory and render it to the screen in #inStock html class
const renderInventory = function(dbStock){
  $('#articles').empty();
  console.log('render was launched');
console.log(dbStock);
onHand = dbStock;
console.log(onHand);

    $(document).ready(function() {
      $('#inStock').DataTable( {

        data: dbStock,    
          columns: [
              { data: "item_id" },
              { data: "product_name" },
              { data: "price" }

          ]
      } );
    });
  };
  
  

const retreiveInventory = function() {
  $.get('/api/stock').then(renderInventory);
}
retreiveInventory();



const placeOrder = function(event){
  event.preventDefault();
 // var item = 99;
  //var qty = 99;
  const order = [];
  console.log(onHand);
  //console.log(onHand[4]);
console.log('submit is pressed.');
  // Save the shopper input in an object called 'order'


  // item = $("#Product ID").text();
item = document.getElementById("Product ID").value;
// qty = $("#Quantity").text();
qty = document.getElementById("Quantity").value;
    console.log(item);
    console.log(qty);
alert('This is item ' + item + " " + qty ) ; 

//console.log(dbStock);
 //   item = $('#Product ID').val().trim();
 //   qty = $('#Quantity').val().trim();

  order.push( {
    'item': item,
    'qty': qty
  });

console.log(order);
let orderProduct = item-1;
let orderQuantity = qty;
let qtyInStock = onHand[orderProduct].stock_quantity;
console.log(qtyInStock+ " "+ onHand.length);

if ( qtyInStock > orderQuantity) {
  Cost = (orderQuantity * onHand[orderProduct].price);
  alert('Yes we can service that order, your cost will be $'  + `${Cost}`);
  // update db to deplete the order quantity
  newQtyStock = (onHand[orderProduct].stock_quantity - orderQuantity);
    console.log(newQtyStock);
    console.log('/api/stock/'+`${orderProduct}`);
    
//  $.put('/api/stock/'+`${orderProduct}`, newQtyStock).then(renderInventory);
$.put('/api/stock/').then(renderInventory);
}else {
  alert('Sorry, we do not have sufficient stock to fulfil that order.');
}


    // Blank our inputs after POST
      $('#Product ID').val('');
      $('#Quantity').val('');
}
$('#article-btn').on('click', placeOrder);



