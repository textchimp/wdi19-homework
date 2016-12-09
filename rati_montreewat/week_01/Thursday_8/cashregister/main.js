// The Cash Register
//
// Write a function called cashRegister that takes a shopping cart object.
//The object contains item names and prices (itemName: itemPrice).
//The function should return the total price of the shopping cart. Example

// Data definition
// cartForParty is
// - objectarray of accounts, object of the stuffs with their prices.

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
// cashRegister(cartForParty)); 60.55

//Function :
// object -> number
//Interp. given item names and prices ,
//it will return the total sum of money in the accounts.



var cashRegister = function (object) {
  var result = 0;
  for (var key in object) {
    result += Number(object[key]);
  }
  return result;
}

console.log(cashRegister(cartForParty));
