
/*
Write a function called squareNumber that will take one argument (a number), square that number, and return the result. It should also log a string like "The result of squaring the number 3 is 9."
*/
var squareNumber = function (x) {
  var result = x * x;
  console.log("The result of squaring " + x + " is " + result + ".")
}
/*
Write a function called halfNumber that will take one argument (a number), divide it by 2, and return the result. It should also log a string like "Half of 5 is 2.5.".
*/
var halfNumber = function (y) {
  var result = y / 2;
  console.log("Half of " + y + " is " + result);
}
/*
Write a function called percentOf that will take two numbers, figure out what percent the first number represents of the second number, and return the result. It should also log a string like "2 is 50% of 4."
*/
var percentOf = function (a, b) {
  var result = a / b * 100;
  console.log(a + " is " + result + "% of " + b);
}
/*
Write a function called areaOfCircle that will take one argument (the radius), calculate the area based on that, and return the result. It should also log a string like "The area for a circle with radius 2 is 12.566370614359172."
Bonus: Round the result so there are only two digits after the decimal.
*/
var areaOfCircle = function (radius) {
  var result = (Math.PI * radius * radius).toFixed(2);
  console.log("The area for a circle with a radius of "+ radius + " is " + result);
}
