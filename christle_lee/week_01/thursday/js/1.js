console.log("Hello 1")

/*
Geometry Function Lab

Part 1, Rectangle

Given the following a rectangle object like the one below, write the following functions:

isSquare - Returns whether the rectangle is a square or not
area - Returns the area of the rectangle
perimeter - Returns the perimeter of the rectangle
*/

var rectangle = {
  length: 4,
  width: 4
};

function area(shape) {
 console.log('Area of rectangle is ' + rectangle.length * rectangle.width + '.');
}
area(rectangle);

function perimeter(shape) {
 console.log('Perimeter of rectangle is '+ (2 * (rectangle.length + rectangle.width + '.')));
}
perimeter(rectangle);

function isSquare(shape) {
  if (rectangle.length === rectangle.width) {
    console.log('The rectangle is a square.')
  } else {
    console.log('The rectangle is not a square.')
  }
};
isSquare(rectangle);
