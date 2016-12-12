/*
The Cash Register
Write a function called cashRegister that takes a shopping cart object.
The object contains item names and prices (itemName: itemPrice).
The function should return the total price of the shopping cart. Example

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
  banana: "1.25",
  handkerchief: ".99",
  Tshirt: "25.01",
  apple: "0.60",
  nalgene: "10.34",
  proteinShake: "22.36"
};

function cashRegister(shoppingCart)
{
  var totalPrice = 0;
  console.log("Shopping cart items are: ");
  for (var i in shoppingCart)
  {
    console.log("Item: ",i+" : "+"price: ",shoppingCart[i]);
    totalPrice += parseFloat(shoppingCart[i]);
  }
  return totalPrice;
}
console.log("Total price of the shopping cart: ",cashRegister(cartForParty));
