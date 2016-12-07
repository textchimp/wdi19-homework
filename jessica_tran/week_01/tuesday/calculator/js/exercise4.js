/* Write a function called areaOfCircle that will take one argument (the radius), calculate the area based on that, and return the result. It should also log a string like "The area for a circle with radius 2 is 12.566370614359172."*/
var areaOfCircle = function (radius){
  var area = Math.round(Math.PI*radius*radius*100)/100;
  return area;
}

var radius = 5;
console.log("The area for a circle with radius " + radius + " is " + areaOfCircle(radius) + ".");
