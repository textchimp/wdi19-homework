// Array and Functions Bonus Material

// Define a function maxOfTwoNumbers that takes two numbers as arguments and
//  returns the largest of them.
// Use the if-then-else construct available in Javascript.
//   You'll have to remember your pre-work, or do some googling to figure this out.
var maxOfTwoNumbers = function (num1, num2) {
  if (num1 > num2) {
    return num1;
  } else {
    return num2;
  }
}
console.log(maxOfTwoNumbers(5, 10));

// Define a function maxOfThree that takes three numbers as arguments
// and returns the largest of them.

var maxOfThree = function (num1, num2, num3) {
// define max variable to record the current maximum value
    var max = 0;
    if (num1 >= num2 && num1 >= num3) {
      max = num1;
    } else if (num2 >= num3 && num2 >= num3) {
      max = num2;
    } else {
      max = num3;
    }
    return max
  }
console.log(maxOfThree(5, 10, 7));

// Write a function that takes a character (i.e. a string of length 1)
// and returns true if it is a vowel, false otherwise.

function isVowel(str){
  var vowels = ['a', 'e', 'u', 'i', 'o'];
  for (var i = 0; i < vowels.length; i++) {
    if (vowels[i] === str) {
      result = true;
      break
    } else {
      result = false;
    }
  }
  return result
}


console.log(isVowel('a'));
console.log(isVowel('n'));

// Define a function sumArray and a function multiplyArray
// that sums and multiplies (respectively) all the numbers
// in an array of numbers.
// For example, sumArray([1,2,3,4]) should return 10,
// and multiplyArray([1,2,3,4]) should return 24.
var sumArray = function ( Array ) {
  var result = 0;
  for (var i = 0; i < Array.length; i++) {
    result = result + Array[i];
  }
  return result
 }

 var multiplyArray = function ( Array ) {
   var result = 1;
   for (var i = 0; i < Array.length; i++) {
     result *= Array[i];
   }
   return result
  }

console.log(sumArray([5, 10, 7]));
console.log(multiplyArray([5, 10, 7]));

// Bonus
// Define a function reverseString that computes the reversal of a string.
// For example, reverseString("jag testar") should return the string "ratset gaj".

var reverseString = function (str) {
  var result = [];
  for (var i = str.length -1; i >= 0; i--) {
    result += str[i];
  }
  return result;
}
console.log(reverseString("jag testar"));

// Write a function findLongestWord that takes an array of words and
// returns the length of the longest one.

var findLongestWord = function(array) {
  var max = 0;
  for (var i = 0; i < array.length; i++) {
    if (array[i].length >= max) {
      max = array[i].length;
    }
  }
  return max;
}
console.log(findLongestWord(['dog', 'cat', 'chicken', 'worm']));

// Write a function filterLongWords that takes an array of words
// and an number i and returns the array of words that are longer than i.

var filterLongWords = function(array, num) {
  var result = [];
  for (var i = 0; i < array.length; i++) {
// longer than num, so add it to the result (array)
    if (array[i].length > num) {
      result.push(array[i]);
    } else {
      result = result;
    }
  }
  return result;
}
console.log(filterLongWords(['dog', 'cat', 'chicken', 'worm'],3));
