// GEOMETRY FUNCTION LAB
// Part 1, Rectangle
//
// Given the following a rectangle object like the one below, write the following functions:
//
// isSquare - Returns whether the rectangle is a square or not
// area - Returns the area of the rectangle
// perimeter - Returns the perimeter of the rectangle
// var rectangle = {
//   length: 4,
//   width: 4
// };

var rectangle = {
  length: 4,
  width: 4
};

var isSquare = function (x){
  if(x.length === x.width){
    return true;
  }
}

var area = function (x){
  var a = x.length * x.width;
  return a;
}

var perimeter = function (x){
  var p = 2 * (x.width + x.length);
  return p;
}

console.log(isSquare(rectangle));
console.log(area(rectangle));
console.log(perimeter(rectangle));
