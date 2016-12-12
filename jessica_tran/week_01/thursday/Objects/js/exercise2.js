/* Part 2, Triangle

Given the following a triangle object like the one below, write the following functions:
*/

var triangle = {
  sideA: 3,
  sideB: 4,
  sideC: 4
};

var a = triangle.sideA;
var b = triangle.sideB;
var c = triangle.sideC;


//isEquilateral - Returns whether the triangle is equilateral or not
var isEquilateral = function (){
  if(a === b && b === c){
    return true;
  } else {
    return false;
  }
};

//isIsosceles - Returns whether the triangle is isosceles or not
var isIsosceles = function () {
  if (a === b|| a === c || b === c){
    return true;
  } else{
    return false;
  }
};

//area - Returns the area of the Triangle
//Heron's formula
var s = (a + b + c)/2;

var area = function(){
  var t = s*(s-a)*(s-b)*(s-c);
  var u = Math.sqrt(t);
  return (Math.round(u*100)/100); // round area to 2 decimal places
}

// isObtuse - Returns whether the triangle is obtuse or not
// use converse pythagorean theorem: if a^2 > b^2 + c^2 then it is obtuse
var isObtuse = function (){
  if( (c*c) > (a*a + b*b) || (a*a) > (c*c + b*b) || (b*b) > (c*c + a*a)){
    return true;
  } else {
    return false;
  }
}

//console.log all functions:
console.log("Equilateral: " + isEquilateral()); //false
console.log("Isosceles: " + isIsosceles()); //true
console.log("Area: " + area()); //
console.log("Obtuse: " + isObtuse());// false
