/*
Define a function maxOfTwoNumbers that takes two numbers as arguments and returns the largest of them. Use the if-then-else construct available in Javascript. You'll have to remember your pre-work, or do some googling to figure this out.
*/

var maxOfTwoNumbers = function (x, y) {
  if(x > y) {
    return x;
  } else {
    return y;
  }
}
console.log(maxOfTwoNumbers(5,24));

/*
 Define a function maxOfThree that takes three numbers as arguments and returns the largest of them.
*/
var maxOfThree = function (a, b, c) {
  var max = Math.max(a, b, c);
  return max;
}
console.log(maxOfThree(65, 83, 9));

/*
Write a function that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise.
*/



var isVowel = function (letter) {
var vowels = ['a', 'e', 'i', 'o', 'u'];
for (var i = 0; i < vowels.length; i++) {
  if(letter === vowels[i]) {
    return true;
  }
}
return false;
}

console.log(isVowel('c'));
console.log(isVowel('t'));
console.log(isVowel('e'));
console.log(isVowel('o'));

/*
Define a function sumArray and a function multiplyArray that sums and multiplies (respectively) all the numbers in an array of numbers. For example, sumArray([1,2,3,4]) should return 10, and multiplyArray([1,2,3,4]) should return 24.
*/

var sumArray = function (array) {
  var total = 1;
  for (var i = 1; i < array.length; i++) {
    total += array[i]
    }
    return total;
}
console.log(sumArray([1,2,3,4]));

//var multiplyArray = function () {

var multiplyArray = function (array) {
  var total = 1;
  for (var i = 1; i < array.length; i++) {
    total *= array[i]
    }
    return total;
}
console.log(multiplyArray([1,2,3,4]));

/*
Define a function reverseString that computes the reversal of a string. For example, reverseString("jag testar") should return the string "ratset gaj".
*/

var reverseString = function ( string ) {
  var newString = '';
  for (var i = string.length - 1; i >= 0; i--) {
    newString += string[i];
  }
  return newString;
}
console.log(reverseString("naomi"));

/*
Write a function findLongestWord that takes an array of words and returns the length of the longest one.
*/

var findLongestWord = function (array) {
    var longestWord = array.sort(function(a, b) {
      return b.length - a.length;
    });
    return longestWord[0].length;
}
console.log(findLongestWord(['chocolate', 'pizza', 'icecream', 'cookies']));

/*
Write a function filterLongWords that takes an array of words and an number i and returns the array of words that are longer than i.
*/

var filterLongWords = function (array, x) {
    var longWord = array.reduce(function(i, currentWord) {
      if(currentWord.length > i) {
        return currentWord;
      } else {        //NEED FOR LOOP SOMEHWHERE?
      return
    }
    });
    return longWord;
}
console.log(filterLongWords(['chocolate', 'pizza', 'icecream', 'cookies'], 5));
