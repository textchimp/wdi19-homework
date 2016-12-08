/* Write a function called percentOf that will take two numbers, figure out what percent the first number represents of the second number, and return the result. It should also log a string like "2 is 50% of 4."*/

var percentOf = function (num1, num2) {
  var percent = (num1/num2)*100;
  return percent;
}

var myNum1 = 5;
var myNum2 = 10;

console.log( myNum1 + " is " + percentOf (myNum1, myNum2) + "% of " + myNum2 + "." );
