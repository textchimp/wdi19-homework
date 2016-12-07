// Part 1
var squareNumber = function(num) {
  console.log("The result of squaring the number " + num + " is " + num * num + ".")
  return num * num;
}

var halfNumber = function(num) {
  console.log("Half of " + num + " is " + num/2 + ".")
  return num/2;
}

var percentOf = function(num1, num2) {
  console.log(num1 + " is " + num1/num2 + " of " + num2 + ".");
  return num1/num2;
}

var areaOfCircle = function(radius) {
  var area = Math.pi * radius * radius;
  console.log("The area for a circle with radius " + radius + " is " + area.toFixed(2) + ".");
  return area.toFixed(2);
}

// Part 2
var part2 = function(num) {
  var half = num/2;
  var sq = half * half;
  var area = Math.pi * sq * sq;
  var per = area / (area * area)
}
