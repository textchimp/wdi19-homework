//THE CASH REGISTER

/* Write a function called cashRegister that takes a shopping cart object. The object contains item names and prices (itemName: itemPrice). The function should return the total price of the shopping cart. Example */

// Input
var cartForParty = {
  banana: "1.25",
  handkerchief: ".99",
  Tshirt: "25.01",
  apple: "0.60",
  nalgene: "10.34",
  proteinShake: "22.36"
};

// var cashRegister = function(x){
//   console.log(Object.values(x));
// }

// take the object's property values in 'cartForParty' and turn it into an array
var listCosts = Object.values(cartForParty);

// make a variable 'total' to keep track the total cost of the cart
var total=0;

//create loop, to go through each item of the array, turning it into a floating number and then add each one into the 'total'. Then console.log the total cost.
var cashRegister = function (cartForParty){
  for (var i = 0 ; i < listCosts.length; i++){
    total += parseFloat(listCosts[i]);
  } console.log("Total price: $" + total);
}


// Output
cashRegister(cartForParty); // 60.55
