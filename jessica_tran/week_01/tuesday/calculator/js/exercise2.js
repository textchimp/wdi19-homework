/* Write a function called halfNumber that will take one argument (a number), divide it by 2, and return the result. It should also log a string like "Half of 5 is 2.5.".*/

var halfNumber = function (num){
  return(num/2);
}

var myNum = 5;
console.log("Half of " + myNum + " is " + halfNumber(myNum));
