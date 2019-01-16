// declare dummy array to hold on hand stock - duplicate 
//for dbStock to avoid conflict between the two methods/functions (not good, but being cautious)
let onHand;
// retreive the inventory and render it to the screen in #inStock html class
const renderInventory = function(dbStock){

onHand = dbStock;

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

  
//console.log('submit is pressed.');
  // Save the shopper input in an object called 'order'

item = document.getElementById("Product ID").value;
qty = document.getElementById("Quantity").value;
let orderProduct = item-1;
let orderQuantity = qty;
let qtyInStock = onHand[orderProduct].stock_quantity;
alert('The order is for ' + qty + `   ${onHand[orderProduct].product_name}` + 's') ; 


//console.log(qtyInStock+ " "+ onHand.length);

if ( qtyInStock > orderQuantity) {
  Cost = (orderQuantity * onHand[orderProduct].price);
  alert('Yes we can service that order, your cost will be $'  + `${Cost}`);
  // update db to deplete the order quantity
  newQtyStock = parseInt(onHand[orderProduct].stock_quantity - orderQuantity);
  //  console.log(newQtyStock);
  // ajax call to api route to update available quantity on hand in database
  $.ajax({  
    url: `/api/quantity/${item}`,  
    type: 'PUT',  
    dataType: 'JSON',  
    data: {stock_quantity: `${newQtyStock}`},  

})

}else {
  alert('Sorry, we do not have sufficient stock to fulfil that order.');
}
    // Blank our inputs after POST
      $('#Product ID').val('');
      $('#Quantity').val('');
}
$('#article-btn').on('click', placeOrder);
