// Part 1, Rectangle
//
// Given the following a rectangle object like the one below, write the following functions:
//
// isSquare - Returns whether the rectangle is a square or not
// area - Returns the area of the rectangle
// perimeter - Returns the perimeter of the rectangle

var rectangle = {
  length: 4,
  width: 4
};

var isSquare = function(object) {
  if (object.length === object. width) {
    return true;
  } else {
    return false;
  }
}

var area = function(object) {
  return object.length*object.width;
}

var perimeter = function(object) {
  return 2*(object.length + object.width);
}

console.log(isSquare(rectangle));
console.log(area(rectangle));
console.log(perimeter(rectangle));
