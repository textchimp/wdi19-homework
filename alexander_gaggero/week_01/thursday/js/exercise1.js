/*
Geometry Function Lab

Part 1, Rectangle

Given the following a rectangle object like the one below, write the following functions:

isSquare - Returns whether the rectangle is a square or not
area - Returns the area of the rectangle
perimeter - Returns the perimeter of the rectangle
var rectangle = {
  length: 4,
  width: 4
};
*/

  var rectangle = {
  height : 4,
  width: 5
};

 var isSquare = function(rectangle) {
  if (rectangle.height === rectangle.width) {
    return true
  } else {
    return false
  }
};

var perimeter = function(rectangle){
  return 2*(rectangle.height + rectangle.width)
};

var area = function(rectangle){
  return (rectangle.height*rectangle.width)
};

console.log(rectangle());
// var circ10A, circ10P;
// console.log(circ10P=perimCirc(10),circ10A=areaCirc(10));
// // 62.83185307179586 314.1592653589793
