//Array and Functions Bonus Material

/* 1 . Define a function maxOfTwoNumbers that takes two numbers as arguments and returns the largest of them. Use the if-then-else construct available in Javascript. You'll have to remember your pre-work, or do some googling to figure this out.*/

var maxOfTwoNumbers = function (a, b){

    if (a>b) {

        return a;

  } else {

        return b;


  }

}



/* 2 . Define a function maxOfThree that takes three numbers as arguments and returns the largest of them.*/

var maxOfThree = function (a, b, c) {

  if (a > b && a > c) {

      return a;

  } else if (b > a && b > c) {

      return b;

  } else {

      return c;
  }
}


/* 3 . Write a function that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise*/


var myWord = function ( a ){

    var vowels = ['a', 'e', 'i', 'o', 'u'];

      if (vowels.includes(a)) {
cd

          return true;

      } else {

        return false;
      }
    }










/* 4 . Define a function sumArray and a function multiplyArray that sums and multiplies (respectively) all the numbers in an array of numbers. For example, sumArray([1,2,3,4]) should return 10, and multiplyArray([1,2,3,4]) should return 24.*/

var sumArray = function (num){
  var sum = 0;
    for (var i = 0; i < num.length; i++) {
      sum += num[i]
    }
   return sum;
}

var multiplyArray = function( num ){
    var multiply = 1;
      for (var i = 0; i < num.length; i++) {
        multiply *= num[i]
      }
        return multiply;
}




// Bonus

/* 1 . Define a function reverseString that computes the reversal of a string. For example, reverseString("jag testar") should return the string "ratset gaj".*/

function reverseString(str){
    var reverse = '';
      for (var i = str.length - 1; i >= 0; i--) {
        reverse += str[i];
      }
      return reverse;
}



/* 2 . Write a function findLongestWord that takes an array of words
and returns the length of the longest one.*/
function findLongestWord (str) { //first try to make an array with .split
 var array = str.split(" ");
 // Initiate a variable to hold the length of the longest word.
 var longestWord = 0;
 var word = ""
 //Create a FOR loop
 for (var i = 0; i < array.length; i++) {
  if (array[i].length > longestWord) { //If array[i] is greater than the word it is compared with.
   longestWord = array[i].length;
   word = array [i];
  }
 }
   return word;

}







/* 3 . Write a function filterLongWords that takes an array of words and an number i and returns the array of words that are longer than i.*/
function filterLongWords(input, number){
  for (var i=0; i< input.length; i++){
    if(input[i].length > number){
      console.log(input[i] + " is greater than " + number);
    }
  }
}


// Homework: The Word Guesser
var randomReward=function(){


}
var totalReward = 0
var

var letters = ['F', 'O', 'X'];
var guessed = ['_','_','_','F','O','X'];
var guessLetters=[];
 function guessLetter (guessedletterInput){
  for (var i = 0;  i< letters.length; i++){
   if(letters[i] === guessedletterInput){


    if(guessed.includes(guessedletterInput)){
     console.log("Congrats!!! you have found a matching letter: " + guessedletterInput);

     if(letters.indexOf(guessedletterInput)){
      var pos = letters.indexOf(guessedletterInput);
      letters.splice(pos,1);

      console.log("Congrats!!! you have found a matching letter: " + guessedletterInput);
      console.log("There a 2 more letters to guess");

     }else{
      console.log("There are no more letters left")
     }
      break;

    }
   }
  }
}
