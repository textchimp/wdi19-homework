//1

// Write a function called squareNumber that will take one argument (a number),
// square that number, and return the result. It should also log a string
//like "The result of squaring the number 3 is 9."

var  number
var squareNumber = function (number) {
  return "The result of squaring the number "+number+" is "+Math.pow(number, 2)+".";
}

console.log(squareNumber(3));

// Write a function called halfNumber that will take one argument (a number),
// divide it by 2, and return the result.
// It should also log a string like "Half of 5 is 2.5.".

var halfNumber = function (number) {
  return "Half of  "+number+" is "+(number / 2)+".";
}

console.log(halfNumber(5));

// Write a function called percentOf that will take two numbers,
// figure out what percent the first number represents of the second number,
// and return the result. It should also log a string like "2 is 50% of 4."

var percentOf = function (number1, number2) {
  return number1+" is "+((number1 / number2)*100)+"% of " +number2;
}

console.log(percentOf(2, 4));

// Write a function called areaOfCircle that will take one argument (the radius),
// calculate the area based on that, and return the result.
// It should also log a string like "The area for a circle with radius 2 is 12.566370614359172."

var radius
var areaOfCircle = function(radius) {
  var area = radius*radius*Math.PI;
  // Bonus: Round the result so there are only two digits after the decimal.
  return "The area for a circle with radius 2 is "+round(area)+" .";
}

var round = function(number) {
  return Math.round(number*100)/100 ;
}

console.log(areaOfCircle(2));

//2

// Write a function that will take one argument (a number) and
// perform the following operations, using the functions you wrote earlier1:
//
// Take half of the number and store the result.
// Square the result of #1 and store that result.
// Calculate the area of a circle with the result of #2 as the radius.
// Calculate what percentage that area is of the squared result (#3).

var all_operations = function(number) {
  var half_value = (number / 2);
  var square_result = Math.pow(half_value, 2);
  var area_Circle = square_result*square_result*Math.PI;
  return "The area for a circle is "+round(area_Circle)+" and is "+round((area_Circle / square_result)*100)+"% of the squared result";
}

console.log(all_operations(5));
