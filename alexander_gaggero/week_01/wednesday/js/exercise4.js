/*
Define a function sumArray and a function multiplyArray that sums and multiplies (respectively) all the numbers in an array of numbers. For example, sumArray([1,2,3,4]) should return 10, and multiplyArray([1,2,3,4]) should return 24.
*/

function sumArray(numbers) {
  var sum = 0;

  for (var i = 0; i < numbers.length; i++){
    sum += numbers[i];
  }

  return sum;
};

var numbers = [ 1, 2, 3, 4];

console.log( sumArray(numbers));

//

function multiplyArray (numbers) {
    var sum=1;
    for (var i=0; i<numbers.length; i++) {
        sum = sum * numbers[i];
    }
    return sum;
}

console.log(multiplyArray([ 1, 2, 3, 4]));
