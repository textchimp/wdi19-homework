//1

var  number
var squareNumber = function (number) {
  return "The result of squaring the number "+number+" is "+Math.pow(number, 2)+".";
}

console.log(squareNumber(3));

var halfNumber = function (number) {
  return "Half of  "+number+" is "+(number / 2)+".";
}

console.log(halfNumber(5));

var percentOf = function (number1, number2) {
  return number1+" is "+((number1 / number2)*100)+"% of " +number2;
}

console.log(percentOf(2, 4));

var radius
var areaOfCircle = function(radius) {
  var area = radius*radius*Math.PI;
  return "The area for a circle with radius 2 is "+round(area)+" .";
}

var round = function(number) {
  return Math.round(number*100)/100 ;
}

console.log(areaOfCircle(2));

//2

var all_operations = function(number) {
  var half_value = (number / 2);
  var square_result = Math.pow(half_value, 2);
  var area_Circle = square_result*square_result*Math.PI;
  return "The area for a circle is "+round(area_Circle)+" and is "+round((area_Circle / square_result)*100)+"% of the squared result";
}

console.log(all_operations(5));
