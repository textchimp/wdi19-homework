/* Write a function findLongestWord that takes an array of words and returns the length of the longest one.*/

var array = ['yellow', 'blue', 'orange', 'violet', 'black','purple'];

var newArray=[];

var findLongestWord = function (){
  for (var i = 0; i< array.length; i++){
    newArray.push(array[i].length);
  }
  var longestLength = Math.max(...newArray);
  return longestLength;
}



console.log(findLongestWord(array)); //answer: 6
