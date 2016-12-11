// Part 2, Triangle
//
// Given the following a triangle object like the one below, write the following functions:
//
// isEquilateral - Returns whether the triangle is equilateral or not
// isIsosceles - Returns whether the triangle is isosceles or not
// area - Returns the area of the Triangle
// isObtuse - Returns whether the triangle is obtuse or not

var triangle = {
  sideA: 3,
  sideB: 4,
  sideC: 4
};

// Ex of equilateral is triangle with sides of 4, 4 ,4
// Ex of isIsosceles is triangle with sides of 3, 4 ,4
// Ex of isIsosceles is triangle with sides of 3, 4 ,6

var isEquilateral = function(object) {
  if (object.sideA === object.sideB && object.sideA === object.sideC) {
    return true;
  } else {
    return false;
  }
}

var isIsosceles = function(object) {
  if ((object.sideA === object.sideB && object.sideA !== object.sideC) ||
      (object.sideA === object.sideC && object.sideA !== object.sideB) ||
      (object.sideB === object.sideC && object.sideB !== object.sideA))  {
        return true;
  } else {
    return false;
  }
}
var area = function (object) {
  var perimeter = ((object.sideA + object.sideB + object.sideC)/2);
  return Math.sqrt(perimeter*(perimeter-object.sideA)*(perimeter-object.sideB)*(perimeter-object.sideC));
}

var isObtuse = function (object) {
  if (object.sideA > Math.sqrt(Math.pow(object.sideB, 2)+Math.pow(object.sideC, 2)) ||
      object.sideB > Math.sqrt(Math.pow(object.sideA, 2)+Math.pow(object.sideC, 2)) ||
      object.sideC > Math.sqrt(Math.pow(object.sideA, 2)+Math.pow(object.sideB, 2)))  {
    return true;
  } else {
    return false;
  }
}

console.log(isEquilateral(triangle));
console.log(isIsosceles(triangle));
console.log(area(triangle));
console.log(isObtuse(triangle));
