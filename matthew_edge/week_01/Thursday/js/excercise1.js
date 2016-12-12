// Part 1, Rectangle
//
// Given the following a rectangle object like the one below, write the following functions:
//
// isSquare - Returns whether the rectangle is a square or not
// area - Returns the area of the rectangle
// perimeter - Returns the perimeter of the rectangle


var rectangle = {
  length: 8,
  width: 9
};

var isSquare= function(i){
  var square = false;
  if (i.length === i.width){
    square = true;
  } console.log("Rectangle is a square -- " + square)
}

var area = function(i){
  var a = (i.length * i.width)
  console.log('Area is ' + a)
}

var perimeter = function(i){
  var p = (i.length + i.width) * 2;
  console.log('Perimeter is ' + p);
 }

isSquare(rectangle);
area(rectangle);
perimeter(rectangle);
