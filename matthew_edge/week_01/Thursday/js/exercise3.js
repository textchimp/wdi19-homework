// Write a function called cashRegister that takes a shopping cart object. The object contains item names and prices (itemName: itemPrice). The function should return the total price of the shopping cart. Example
//
// // Input
//
// };
//
// // Output
// cashRegister(cartForParty)); // 60.55

var cartForParty = {
    banana: "1.25",
    handkerchief: ".99",
    Tshirt: "25.01",
    apple: "0.60",
    nalgene: "10.34",
    proteinShake: "22.36"
  }
var total = 0;
var a = Object.values(cartForParty)
var stringMaker = function(a){
  for (var i = 0; i < a.length; i++) {
  var b = parseFloat(a[i]);
  total = total + b;
}
}
stringMaker(a)
console.log('Total price of cart = $ ' + total)
//total += item;

//var calculate= function()
