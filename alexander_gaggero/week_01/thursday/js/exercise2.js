/*
Geometry Function Lab

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

// equilateral a === b === c;

// isosceles (a === b != c || a === c != b || b === c != a)

// area (sqrt ( (((a+b+c)/2)-a) * (((a+b+c)/2)-b) = (((a+b+c)/2)-c) ) )

// obtuse  ( ((a * a) + (b * b)) > (c * c) ) || ( ((a * a) + (c * c)) > (b * b) ) || ( ((b * b) + (c * c)) > (a * a) )
