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
  banana: "1.25",
  handkerchief: ".99",
  Tshirt: "25.01",
  apple: "0.60",
  nalgene: "10.34",
  proteinShake: "22.36"
};

var prices = Object.values(cartForParty); //turn object to array
//console.log(prices);
//console.log(filterInt(x));
// var x = parseInt(prices, 10);
// console.log(x);
var toBeAdded = [];
//var prices = ['4', '6', '11'];
var strgToNum = function (array) {
  for (var i = 0; i < prices.length; i++) { //iterates thru array
  var num = parseFloat(+prices[i], 10); //and turns to numbers
  //console.log(num);
  toBeAdded.push(num);
  }
  console.log(toBeAdded);

  //return num;

};
strgToNum(prices);
//console.log(strgToNum(prices));

var sum = function (array) {
  var total = 0;
  for (var i = 0; i < prices.length; i++) {
    total += array[i]
    }
    //return total;
    console.log(total);
}
sum(toBeAdded);
