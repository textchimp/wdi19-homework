/* Define a function sumArray and a function multiplyArray that sums and multiplies (respectively) all the numbers in an array of numbers. For example, sumArray([1,2,3,4]) should return 10, and multiplyArray([1,2,3,4]) should return 24.*/

var array = [1,2,3,4];
var total=0;
var total2=1;

var sumArray = function (){
  for (var i = 0; i<array.length; i++){
    total+= array[i];
  } return total;
}


var multiplyArray = function(){
  for (var i = 0; i<array.length; i++){
    total2= total2 * array[i];
  } return total2;
}

console.log(sumArray()); //answer:10
console.log(multiplyArray()); //answer: 24
