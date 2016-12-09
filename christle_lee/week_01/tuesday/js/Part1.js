/*Write a function called squareNumber that will take one argument (a number), square that number, and return the result. It should also log a string like "The result of squaring the number 3 is 9."*/

var squareNumber = function (a) {
  var result = a * a;
  console.log('The result of squaring the number ' + a + ' is the ' + result);
};

squareNumber(3);
squareNumber(9);
squareNumber(10);


/*Write a function called halfNumber that will take one argument (a number), divide it by 2, and return the result. It should also log a string like "Half of 5 is 2.5.".*/

var halfNumber = function (a) {
  var result = a / 2;
  console.log('Half of ' + a + ' is ' + result + '.');
};

halfNumber(5);
halfNumber(10);

/*Write a function called percentOf that will take two numbers, figure out what percent the first number represents of the second number, and return the result. It should also log a string like "2 is 50% of 4."*/

var percentOf = function (a, b) {
  var result = a / b * 100;
  console.log(a + ' is ' + result + '% of ' + b);
};

percentOf(2, 4);
percentOf(5, 10);

/*
Write a function called areaOfCircle that will take one argument (the radius), calculate the area based on that, and return the result. It should also log a string like "The area for a circle with radius 2 is 12.566370614359172.
*/

var areaOfCircle = function(radius) {
  var result = Math.PI * radius * radius;
  console.log("The area for a circle with radius " + radius + " is " + result + ".");
};

areaOfCircle(2);

/*
Bonus: Round the result so there are only two digits after the decimal.
*/
