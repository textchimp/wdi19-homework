console.log("Hello 2")

// Part 2, Triangle
//
// Given the following a triangle object like the one below, write the following functions:
//
// isEquilateral - Returns whether the triangle is equilateral or not
// isIsosceles - Returns whether the triangle is isosceles or not
// area - Returns the area of the Triangle
// isObtuse - Returns whether the triangle is obtuse or not



var triangle = {
  sideA: 4,
  sideB: 4,
  sideC: 4
};

// function p (shape) { //perimeter
//   return (shape.sideA + shape.sideB + shape.sideC) / 2;
// }

function isEquilateral(shape) {
  if (shape.sideA === shape.sideB && shape.sideB === shape.sideC) {
    console.log('Triangle is equilateral.')
  } else {
    console.log('Triangle is not equilateral.')
  }
};
 isEquilateral(triangle);


//-----------------------------------------------------------------------------------
 function isIsosceles(shape) {

   if ( (shape.sideA === shape.sideB) || (shape.sideC === shape.sideB) || (shape.sideC === shape.sideA)) {
     console.log('Triangle is isosceles.')
   } else {
     console.log('Triangle is not isosceles.')
   }
 };
 isIsosceles(triangle);

 //-----------------------------------------------------------------------------------

 function area(shape) {

   var s = ( shape.sideA + shape.sideB + shape.sideC) / 2;
   var area = Math.sqrt( s * (s-shape.sideA) * (s - shape.sideB) * (s - shape.sideC) );
   return area;
 };
 area(triangle); //= 4.47213595499958

  //-----------------------------------------------------------------------------------

  function isObtuse(triangle) {
    var a = triangle.sideA
    var b = triangle.sideB
    var c = triangle.sideC

    if ( (a^2 + b^2 < c^2 )|| (b^2 + c^2 < a^2) || (c^2 + a^2 < b^2) ) {
      console.log('Triangle is obtuse.')
    } else {
      console.log('Triangle is not obtuse.')
    }
  };
  isObtuse(triangle);
