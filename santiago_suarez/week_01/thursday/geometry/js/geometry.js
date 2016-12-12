// Part 1, Rectangle
//
// Given the following a rectangle object like the one below, write the
// following functions:
//
// isSquare - Returns whether the rectangle is a square or not
// area - Returns the area of the rectangle
// perimeter - Returns the perimeter of the rectangle
// var rectangle = {
//   length: 4,
//   width: 4
// };

var isSquare = function(rec) {
  return req.length === req.width ? true : false;
}

var rectangleArea = function(rec) {
  return req.length * req.width;
}

var rectanglePerimeter = function(rec) {
  return (req.length * 2 + req.width * 2);
}

// Part 2, Triangle
//
// Given the following a triangle object like the one below, write the following
// functions:
//
// isEquilateral - Returns whether the triangle is equilateral or not
// isIsosceles - Returns whether the triangle is isosceles or not
// area - Returns the area of the Triangle
// isObtuse - Returns whether the triangle is obtuse or not
// var triangle = {
//   sideA: 3,
//   sideB: 4,
//   sideC: 4
// };

// All sides are equal
var isEquilateral = function(tr) {
  return (tr.sideA === tr.sideB) && (tr.sideB === tr.sideC) && (tr.sideA === tr.sideC) ? true : false;
}

// Two sides are equal
var isIsosceles = function(tr) {
  return (tr.sideA === tr.sideB) || (tr.sideB === tr.sideC) || (tr.sideA === tr.sideC) ? true : false;
}

var trArea = function(tr) {
  var halfPerimeter = (tr.sideA + tr.sideB + tr.sideC)/2;
  var inSqrt = (halfPerimeter - tr.sideA) * (halfPerimeter - tr.sideB) * (halfPerimeter - tr.sideC);
  return Math.sqrt(halfPerimeter * inSqrt);
}

// An obtuse triangle is a triangle in which one of the angles is an obtuse angle
// Formula: a^2+b^2<c^2 || b^2+c^2<a^2 || c^2+a^2<b^2
var isObtuse = function(tr) {
  var firstChoice = (Math.pow(tr.sideA, 2) + Math.pow(tr.sideB, 2)) < Math.pow(tr.sideC, 2);
  var secondChoice = (Math.pow(tr.sideB, 2) + Math.pow(tr.sideC, 2)) < Math.pow(tr.sideA, 2);
  var thirdChoice = (Math.pow(tr.sideC, 2) + Math.pow(tr.sideA, 2)) < Math.pow(tr.sideB, 2);
  return firstChoice || secondChoice || thirdChoice;
}
