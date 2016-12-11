/* The Cash Register
Write a function called cashRegister that takes a shopping cart object. The object contains item names and prices (itemName: itemPrice). The function should return the total price of the shopping cart. Example
*/

// given
var cartForParty = {
  banana: "1.25",
  handkerchief: ".99",
  Tshirt: "25.01",
  apple: "0.60",
  nalgene: "10.34",
  proteinShake: "22.36"
};
// Write a function called cashRegister that takes a shopping cart object.

function cashRegister(cart) {

  var sum = 0;
  var items = Object.keys(cart); // array of items without the price
//use for loop so we can access each item
//go through the items and add it
  for (var i = 0; i < items.length; i++) {

      var itemName = items[i]; //show itemName only.... but we need the itemPrice
      var itemPrice = cart[itemName];
      //console.log(itemPrice); //-----> but price is in strings
      sum += parseFloat(itemPrice);  // Could use '+' sign to convert a string containing a number into a number(when string contains numbers only)
    }
       //format to add currency from MDN
       var formatter = new Intl.NumberFormat('en-AUS', {
       style: 'currency',
       currency: 'AUD',
       minimumFractionDigits: 2,
       });

    console.log(formatter.format(sum));
    //console.log(new Intl.NumberFormat('en-AUS', { style: 'currency', currency: 'AUD'}).format(sum));
  };

cashRegister(cartForParty); // $60.55
