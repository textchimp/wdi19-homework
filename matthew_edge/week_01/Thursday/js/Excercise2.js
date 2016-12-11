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


var isEquilateral = function (t){
  var a = (t.sideA === t.sideB && t.sideA === t.sideC)
  if (a) { a = ""}
  else {a ="not "}
    console.log('Triangle is ' + a + 'equilateral')
  }


var isIsosceles = function(t){
    var a = (t.sideA === t.sideB || t.sideC == t.sideA || t.sideC === t.sideB);
    if (a) { a = ""}
    else {a ="not "}
      console.log('Triangle is ' + a + 'isosceles');
    }
isEquilateral(triangle);
isIsosceles(triangle);

// isIsosceles - Returns whether the triangle is isosceles or not
