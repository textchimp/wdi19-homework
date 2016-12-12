/*
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
  length: 4,
  width: 4
};

var isSquare = function(shape) {
  if (shape.length === shape.width) {
    console.log("Is a square.");
  } else {
    console.log("Is not a square.");
  }
}
isSquare(rectangle);

var area = function (shape) {
  var total = shape.length * shape.width;
  console.log(total);
}

area(rectangle);

var perimeter = function (shape) {
  var total = (shape.length * 2) + (shape.width * 2);
  console.log(total);
}

perimeter(rectangle);
/*
Part 2, Triangle

Given the following a triangle object like the one below, write the following functions:

isEquilateral - Returns whether the triangle is equilateral or not
isIsosceles - Returns whether the triangle is isosceles or not
area - Returns the area of the Triangle
isObtuse - Returns whether the triangle is obtuse or not
var triangle = {
  sideA: 3,
  sideB: 4,
  sideC: 4
};
*/

var triangle = {
  sideA: 3,
  sideB: 4,
  sideC: 4
};

var isEquilateral = function(shape) {
  if(shape.sideA === shape.sideB && shape.sideB === shape.sideC) {
    console.log("Is an equilateral triangle."); //arghhh
    //return true;
  } else {
    console.log("Is not an equilateral triangle."); //arghhh
    //return false;
  }
} //how to make this so it works inside isObtuse!!!!!

isEquilateral(triangle);

var isIsosceles = function(shape) {
  if(shape.sideA === shape.sideB && shape.sideA !== shape.sideC || shape.sideA === shape.sideC && shape.sideA !== shape.sideB || shape.sideB === shape.sideC && shape.sideB !== shape.sideA) {
    console.log("Is an isosceles triangle.");
  } else {
    console.log("Is not an isosceles triangle.");
  }
}

isIsosceles(triangle);
/*
var isObtuse = function (shape) {
  if(isEquilateral()) { //is this correct arguemt?
    console.log("Is not an obtuse triangle.");
  }
  if (Math.pow(shape.sideA, 2)>(Math.pow(shape.sideB,  2)+Math.pow(shape.sideC, 2))) {
    console.log("Is an obtuse triangle.")
  }
}
isObtuse(triangle);
*/
