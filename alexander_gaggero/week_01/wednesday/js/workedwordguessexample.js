
var word = 'FOX'.split('');
var guesses = '___'.split('');

var correctGuess = false;

var guessLetter = function ( letter ) {
  letter = letter.toUpperCase() ;
  correctGuess = false ;
  for ( var i = 0 ; i < word.length ; i++ ) {
    if ( letter === word [ i ] ) {
      correctGuess = true ;
      guesses [ i ] = letter ;
    }
  }
  maybeCongratulate(correctGuess);
  checkForWinner();
};

var maybeCongratulate = function (correct) {
  if (correctGuess) {
    console.log ('You did it' , guesses ) ;
} else {
    console.log ('You done goofed') ;
  }
};

var checkForWinner = function () {
  if ( word.join('') === guesses.join('') ) {
    console.log ('You win!');
  }
};
