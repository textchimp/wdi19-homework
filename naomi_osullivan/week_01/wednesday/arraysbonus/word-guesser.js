/*
Homework: The Word Guesser

You'll create a simple word guessing game where the user gets infinite tries to guess the word (like Hangman without the hangman, or like Wheel of Fortune without the wheel and fortune).

Create two global arrays: one to hold the letters of the word (e.g. 'F', 'O', 'X'), and one to hold the current guessed letters (e.g. it would start with '_', '_', '_' and end with 'F', 'O', 'X').
Write a function called guessLetter that will:
Take one argument, the guessed letter.
Iterate through the word letters and see if the guessed letter is in there.
If the guessed letter matches a word letter, changed the guessed letters array to reflect that.
When it's done iterating, it should log the current guessed letters ('F__') and congratulate the user if they found a new letter.
It should also figure out if there are any more letters that need to be guessed, and if not, it should congratulate the user for winning the game.
Pretend you don't know the word, and call guessLetter multiple times with various letters to check that your program works.
*/

/*
var letters = ['c','h','i','c','k'];
var blank = ['_','_','_','_','_'];

var guessLetter = function (guess) {
  //need var like total to save guess
  var total = 0;
  for (var i = 0; i < letters.length; i++ ) {
    if(guess === letters[i]) {
      blank.fill(guess,i,(i+1));
      //blank[i] = guess(letters[i]); make new //function
      console.log("You got a letter! " + blank.join(''));
    }

     else {
      console.log('try again');
    }
  }
}
console.log(guessLetter('c'));
*/

      var letters = ['c', 'h', 'i', 'c', 'k'];
      var blank  = ['_', '_', '_', '_', '_'];

      function guessLetter(guess) {
          var goodGuess = false;
          var moreToGuess = false;
          for (var i = 0; i < letters.length; i++) {
              if (letters[i] === guess) {
                  blank[i] = guess;
                  goodGuess = true;
              }
              if (blank[i] === '_') {
                  moreToGuess = true;
              }
          }
          if (goodGuess) {
              console.log('You got a letter');
              console.log(blank.join(''));
              if (!moreToGuess) {
                  console.log('You won');
              }
          } else {
              console.log('Try again');
          }
      }
