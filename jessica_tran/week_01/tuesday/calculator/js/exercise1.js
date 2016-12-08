/* Write a function called squareNumber that will take one argument (a number), square that number, and return the result. It should also log a string like "The result of squaring the number 3 is 9."*/


var squareNumber = function (num){
  var numberSquared = num*num;
  return numberSquared;
}

var myNum = 5;
console.log ("The result of squaring the number " + myNum + " is " + squareNumber(myNum) + ".");
