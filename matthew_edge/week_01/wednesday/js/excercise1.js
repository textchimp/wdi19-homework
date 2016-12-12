//guessLetter('')


//arrays outside functions
// win when arrays match
//Array and Functions Bonus Material
//
// Define a function maxOfTwoNumbers that takes two numbers as arguments and returns the largest of them. Use the if-then-else construct available in Javascript. You'll have to remember your pre-work, or do some googling to figure this out.


var maxOfTwoNumbers = function(i,j){
  if(i > j) {
    return console.log(i + " is greater than " + j)
  } else {
    return console.log(j + " is greater than " + i)
  }
}

// Define a function maxOfThree that takes three numbers as arguments and returns the largest of them.

var maxOfThree = function(i,j,k){
  if(i > j && i > k) {
    return console.log(i);
  } else if(j > i && j > k){
    return console.log(j);
  } else {
    return console.log(k)
  }
}

// Write a function that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise.

var vowels = ['a', 'e', 'i', 'o', 'u']
var isVowel= function(input){
  var found = false;
  for (var i = 0; i < vowels.length; i++) {
  if (input === vowels[i]){  // this line causing me drama. Can only get A to return true. I suspect issues with i
    found = true;
    return console.log('true')
  } //if
} //for
if (found === false) {
console.log('false')
  }
} //function isVowel

  // ['a', 'e', 'i', 'o', 'u'].indexOf( 'i' )

  // / Define a function sumArray and a function multiplyArray that sums and multiplies (respectively) all the numbers in an array of numbers. For example, sumArray([1,2,3,4]) should return 10, and multiplyArray([1,2,3,4]) should return 24.

//var numbers=[1,4,66,2,3,5]
var sumArray = function(input){
  var x = 0
  for (var i = 0; i < input.length; i++) {
  x = x + input[i]
  }
  x = (x * x)  // just retruning x * x didnt seem to work
  return x
}
// Realised i reasd the question wrong and multiplied the result DOH!
// Write a function findLongestWord that takes an array of words and returns the length of the longest one.

//var findLongestWord = function([]); {
//  Math.max
 //i.length


}



// Array.prototype.reverse()
//Reverses the order of the elements of an array in place — the first becomes the last, and the last becomes the first.
