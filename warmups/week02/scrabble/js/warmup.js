
var scrabble = {

  letterScores: {
    1: "AEIOULNRST".split(''),
    2: ["D", "G"],
    3: "BCMP".split(''),
    4: "FHVWY".split(''),
    5: "K",
    8: ["J", "X"],
    10: ["Q", "Z"]
  },

  score: function( word ){

    // Make the word uppercase so we can easily compare it to the values in our letterScores arrays.
    word = word.toUpperCase();
    // Create an initial value for the variable "sum", which we will add scores to and return at the end.
    var sum = 0;

    // Iterate over the word, looking at each character in the word in turn.
    for (var i = 0; i < word.length; i++) {

      // Every iteration, declare a variable called 'letter', which is the character in the word we're looking at.
      var letter = word[i];

      // Iterate over each key (ie,  1, 2, 3, 4, 5, 8, 10)
      for(var key in this.letterScores){
        // Check to see if this letter in the word is present in the array of tiles that have this score.
        if( this.letterScores[key].includes(letter) ){
          // If so, add that score to the sum.
          sum += parseInt(key);
          console.log(letter + " gets a " + key);
        }
      } // for..in
    } // word letters

    return sum;

  }, // end score()



  // SECOND APPROACH: USING AN OBJECT WHERE EACH TILE CHARACTER IS A KEY WITH A SINGLE CORRESPONDING SCORE VALUE.
  // While it takes longer to set up the data structure, the resulting code is a lot cleaner.

  letterScoresAlternative: {
    'a' : 1, 'e' : 1, 'i' : 1, 'o' : 1,
    'u' : 1, 'l' : 1, 'n' : 1, 'r' : 1,
    's' : 1, 't' : 1, 'd' : 2, 'g' : 2,
    'b' : 3, 'c' : 3, 'm' : 3, 'p' : 3,
    'f' : 4, 'h' : 4, 'v' : 4, 'w' : 4,
    'y' : 4, 'k' : 5, 'j' : 8, 'x' : 8,
    'q' : 10, 'z' : 10
  },

  scoreAlternative: function( word ) {

    word = word.toLowerCase();
    var sum = 0;

    for (var i = 0; i < word.length; i++) {
      var letter = word[i];
      var letterScore = this.letterScoresAlternative[letter];
      sum += letterScore;
      console.log(letter.toUpperCase() + " gets a " + letterScore);
    }

      return sum;
  }

};

// console.log( scrabble.score("cabbage") );
console.log( scrabble.scoreAlternative("cabbage") );
console.log( scrabble.score("cabbage") );
