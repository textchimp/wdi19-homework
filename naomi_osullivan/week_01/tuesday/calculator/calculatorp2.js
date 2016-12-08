/*
Write a function that will take one argument (a number) and perform the following operations, using the functions you wrote earlier1:

Take half of the number and store the result.
Square the result of #1 and store that result.
Calculate the area of a circle with the result of #2 as the radius.
Calculate what percentage that area is of the squared result (#3).
*/


var part2 = function (z) {
  var l = halfNumber(z);
  var m = squareNumber(l);
  var n = areaOfCircle(m);
  var o = percentOf(n, m);
  console.log(l, m, n, o);
}

var squareNumber = function (x) {
  return  x * x;
}
var halfNumber = function (y) {
    return  y / 2;
}
var percentOf = function (a, b) {
  return (a / b * 100).toFixed(2);
}
var areaOfCircle = function (radius) {
  return (Math.PI * radius * radius).toFixed(2);
}
