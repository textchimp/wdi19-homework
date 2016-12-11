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
//Checks if the rectangle is square or not based on the properties passed.
function isSquare(l, w)
{
  var square = false;
  if (l === w)
  {
    square = true;;
  }
  return square;
}

//Calculates the rectangle area based on the given properties.
function calculateRecArea(l, w)
{
  return (l*w);
}

//Calculates the perimeter of the rectangle
function calcRecPerimeter(l, w)
{
  return (2*(l+w));
}
var recLength = 6;
var recWidth = 10;
console.log("Rectangle properties: Length: ",recLength+ " Width: ",recWidth);
console.log("Is the rectangle a square: ",isSquare(recLength, recWidth));
console.log("Area of the rectangle: ",calculateRecArea(recLength,recWidth));
console.log("Permeter of the rectangle: ",calcRecPerimeter(recLength,recWidth));

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
//Finds if the given triangle is equilateral or not based on its properties.
function isEquilateral(sideA, sideB, sideC)
{
  var equilateral = false;
  if ( (sideA === sideB) && (sideA === sideC ) )
  {
    equilateral = true;
  }
  return equilateral;
}

//Finds if the given triangle is an isosceles triangle based on its properties.
function isIsosceles(sa, sb, sc)
{
  var isosceles = false;
  if ( (sa === sb) || (sa === sc) || (sb === sc) )
  {
    isosceles = true;
  }
  return isosceles;
}

//Calculates area of the triangle
function calculateTriArea(sideA, sideB, sideC)
{
  var p = (sideA + sideB + sideC);
  var area = Math.sqrt(p*(p-sideA)*(p-sideB)*(p-sideC));
  return area;
}

//Finds if the triangle is Obtuse or not, this one is tricky
function isObtuse(sideA, sideB, sideC)
{
  var obtuse = false;
  //Finding 2 smallest sides
  var sidesArr = [sideA, sideB, sideC]; //Putting the element in a array made my life easier
  var largestSide = Math.max.apply(null,sidesArr);
  var smallSide1 = Math.min.apply(null,sidesArr);
  sidesArr.splice((sidesArr.indexOf(smallSide1)),1); //Removing the small side from the array.
  var smallSide2 = Math.min.apply(null,sidesArr);

  //Phew! finally got the two smallest sides.
  //Now, lets calculate the hypotenuse using Pythagorean theorum
  //i.e.sqrt( (smallSide1^2)+(smallSide2^2) )
  var hypotenuse = Math.sqrt( (smallSide1*smallSide1) + (smallSide2*smallSide2) );

  // Hmm, Thats easy.
  //Check if the longest side is greater than hypotenuse, if so it is obtuse otherwise it is acute
  if (largestSide > hypotenuse)
  {
    obtuse = true;
  }
  return obtuse;
}

var sideA = 4;
var sideB = 4;
var sideC = 4;
console.log("Triangle sides: ",sideA+", ",sideB+", ",sideC);
console.log("Is the triangle Equilateral: ",isEquilateral(sideA,sideB,sideC));
console.log("Is the triangle Isosceles: ",isIsosceles(sideA,sideB,sideC));
console.log("Area of the triangle: ",calculateTriArea(sideA,sideB,sideC));
console.log("Is the triangle Obtuse: ",isObtuse(sideA,sideB,sideC));
