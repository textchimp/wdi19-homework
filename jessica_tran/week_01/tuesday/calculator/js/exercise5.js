//Part 2
/*Write a function that will take one argument (a number) and perform the following operations, using the functions you wrote earlier1:

Take half of the number and store the result.
Square the result of #1 and store that result.
Calculate the area of a circle with the result of #2 as the radius.
Calculate what percentage that area is of the squared result (#3).*/
var halfNumber;
var numberSquared;

var part2 = function (myNum){
  halfNumber = myNum/2;
  numberSquared = halfNumber*halfNumber;
  var area = Math.round(Math.PI*numberSquared*numberSquared*100)/100;
  var percent = (area/numberSquared)*100;
  return percent;
}
var myNum = 2
console.log(part2(myNum));
