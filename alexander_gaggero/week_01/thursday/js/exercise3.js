/*
The Cash Register

Write a function called cashRegister that takes a shopping cart object. The object contains item names and prices (itemName: itemPrice). The function should return the total price of the shopping cart. Example

// Input
var cartForParty = {
  banana: "1.25",
  handkerchief: ".99",
  Tshirt: "25.01",
  apple: "0.60",
  nalgene: "10.34",
  proteinShake: "22.36"
};

// Output
cashRegister(cartForParty)); // 60.55
*/

var cartForParty = {
  skittles: "0.50",
  smarties: "0.50",
  maltesers: "0.60",
  crips: "1.80",
  coke: "2.50",
  lemonade: "2.50",
  beer: "4.50",
  wine: "9.00",
  vodka: "10.00",

// var cashRegister = function(shoppingCart) {
//   var items =
//   for (var i = 0; i < itemsList.length; i++) {
//     shoppingCart[i]
//
//   }
//   return sum;
// }





function cashRegister(cart){
  var items = Object.keys(cart); // array of items by key
  var sum = 0;

  for (var i = 0; i < items.length; i++) {
    var itemName = items[i]; // get the name of the key for the item
    var itemPrice = cart[itemName]; // get the price for the item
    sum += Number.parseFloat(itemPrice); // convert the price to a float and add it to the sum
  }

  return sum;
}
