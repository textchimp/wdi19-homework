/*
Write a function filterLongWords that takes an array of words and an number i and returns the array of words that are longer than i.
*/

var filterLongWords = function(words,j){
  var range = words.length;
  var longestWords = ['President', 'Premier', 'Chief', 'Boss'];
  for (i = 0; i < range; i++) {
    if (words[i].length > j) {
      longestWords[longestWords.length] = words[i];
    }
  }
  return longestWords;
}

console.log(filterLongWords(longestWords));
