// Array and Functions Bonus Material
//
// Define a function maxOfTwoNumbers that takes two numbers as arguments and
// returns the largest of them. Use the if-then-else construct available
// in Javascript. You'll have to remember your pre-work, or do some googling
// to figure this out.
// Define a function maxOfThree that takes three numbers as arguments and
// returns the largest of them.
// Write a function that takes a character (i.e. a string of length 1) and
// returns true if it is a vowel, false otherwise.
// Define a function sumArray and a function multiplyArray that sums and
// multiplies (respectively) all the numbers in an array of numbers.
// For example, sumArray([1,2,3,4]) should return 10, and
// multiplyArray([1,2,3,4]) should return 24.
// Bonus
//
// Define a function reverseString that computes the reversal of a string.
// For example, reverseString("jag testar") should return the string "ratset gaj".
// Write a function findLongestWord that takes an array of words and
// returns the length of the longest one.
// Write a function filterLongWords that takes an array of words and
// an number i and returns the array of words that are longer than i.
//

var maxOfTwoNumbers = function(a,b) {
  return a > b ? a : b
}

var maxOfThree = function(a,b,c) {
  return Math.max(a,b,c);
}

// ES6 
var isVowel = function(chr) {
  ["a","e","i","o","u"].includes(chr)
}

var isVowel2 = function(chr) {
  ["a","e","i","o","u"].indexOf(chr) != -1
}

var sumArray = function(arr) {
  return arr.reduce(function(a,b) {
    return a + b 
  }, 0);
}

var multiplyArray = function(arr) {
  return arr.reduce(function(a,b) { 
    return a * b 
  });
}

var reverseString = function(str) {
  var arr = str.split("");
  var res = [];
  for(var i = arr.length -1; i >= 0; i--) {
    res.push(arr[i]);
  }
  return res.join("");
}

var findLongestWord = function(arr) {
  var res = [];
  for(var i = 0; i < arr.length; i++) {
    res.push(arr[i].length);
  }
  return Math.max.apply(null, res);
}

var filterLongWords = function(arr, num) {
  return lazyFilter(function(a) {
    return a.length > num;
  }, arr);
}

var lazyFilter = function(callback, arr) {
  var res = [];
  for(var i = 0; i < arr.length; i++) {
    if (callback(arr[i])) {
      res.push(arr[i]);
    }
  }
  return res;
}
