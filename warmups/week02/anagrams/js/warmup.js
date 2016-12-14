
var anagram = {

  anagrams: [],  // Empty array for our matching candidates

  customSort: function ( str ) {

    // Our trick will be to use the Array.sort method, in conjunction with String.split and Array.join. If we sort the characters of a word's anagram, the word and the anagram will be ===. The problem is: (1) we cannot sort a string, so we have to 'split' it into an array of characters; (2) we can't compare two arrays to see if the elements within those arrays match, since one array will never === another array (since they are different JavaScript objects), so we need to "join" the sorted array of characters back into a string before comparing them.

    // Longer version with temporary variable
    // var temp = str.split('');
    // temp = temp.sort();
    // temp = temp.join();
    // return temp;

    // One-liner with chaining of functions
    return str.split('').sort().join();
  },

  checkForAnagrams: function ( word, wordArray ) {

    word = word.toLowerCase(); // avoid case-sensitivity problems

    // Get a sorted version of the main word, so we don't have the computational
    // expense of running our customSort() on it each time we compare it to our
    // current array element, inside the loop.
    var sortedWord = this.customSort( word );

    for (var i = 0; i < wordArray.length; i++) {

      // process the current word in the array we're iterating over
      var potentialAnagram = this.customSort( wordArray[i] );

      // compare the sorted and re-joined version of the words
      if( sortedWord === potentialAnagram ){
      // optional checking for duplicates: && !this.anagrams.includes( wordArray[i] )){
        this.anagrams.push( wordArray[i] );
      }
    } // for

    return this.anagrams;
  }

};

var result = anagram.checkForAnagrams( "listens", ["enlists", "enlists", "google", "slisten", "inlets", "banana"] );

console.log( result );
