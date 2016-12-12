/**** Geometry Function Lab ***/


// Part 1, Rectangle
//
// Given the following a rectangle object like the one below, write the following functions:
//
// isSquare - Returns whether the rectangle is a square or not
// area - Returns the area of the rectangle
// perimeter - Returns the perimeter of the rectangle


var rectangle = {
  length: 8,
  width: 4
};

var isSquare = function(obj) {
  if(obj.length === obj.width) {
    return true;
  } else {
    return false;
  }
}

console.log(isSquare(rectangle));

var area = function(obj) {
  return obj.length * obj.width;
}

console.log(area(rectangle));

var perimeter = function(obj) {
  return (obj.length * 2) + (obj.width * 2);
}

console.log(perimeter(rectangle));


// Part 2, Triangle
//
// Given the following a triangle object like the one below, write the following functions:


var triangle = {
  sideA: 10,
  sideB: 6,
  sideC: 7
};


// isEquilateral - Returns whether the triangle is equilateral or not
var isEquilateral = function(obj) {
  if ((obj.sideA === obj.sideB) && (obj.sideB === obj.sideC)) {
    return true;
  }  else {
    return false;
  }
}

console.log(isEquilateral(triangle));


// isIsosceles - Returns whether the triangle is isosceles or not
var isIsosceles = function(obj) {
  if ((obj.sideA === obj.sideB) || (obj.sideB === obj.sideC) || (obj.sideA === obj.sideC)) {
    return true;
  }  else {
    return false;
  }
}

console.log(isIsosceles(triangle));


// area - Returns the area of the Triangle
var area = function(obj) {
  var a = obj.sideA;
  var b = obj.sideB;
  var c = obj.sideC;
  var perimeter = (a + b + c) / 2;
  return Math.sqrt(perimeter * (perimeter - a) * (perimeter - b) * (perimeter - c));
}

console.log(area(triangle));


// isObtuse - Returns whether the triangle is obtuse or not


var isObtuse = function(obj) {
  var a = obj.sideA;
  var b = obj.sideB;
  var c = obj.sideC;

  var angleA = radToDeg(Math.acos((b*b + c*c - a*a) / (2*b*c)));
  var angleB = radToDeg(Math.acos((c*c + a*a - b*b) / (2*c*a)));
  var angleC = 180 - angleA - angleB;

  console.log(angleA, angleB, angleC);
  if (angleA > 90 || angleB > 90 || angleC > 90) {
    return true
  } else {
    return false;
  }
}

function radToDeg(x) {
	return x / Math.PI * 180;
}

console.log(isObtuse(triangle));
