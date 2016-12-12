/* Keep track of all the guessed letters (right and wrong) and only let the user guess a letter once. If they guess a letter twice, do nothing.
Keep track of the state of the hangman as a number (starting at 0), and subtract or add to that number every time they make a wrong guess.
Once the number reaches 6 (a reasonable number of body parts for a hangman), inform the user that they lost and show a hangman on the log.*/


var wordArray = ['F','O', 'O', 'D'];
var guessArray = ['_', '_', '_', '_'];
var hangman= 0;
var guesses = [];


var guessLetter = function (letter){


  //push the letter into the guesses array, to keep a list of letters that were guessed.
  guesses.push(letter.toUpperCase());
  //cycle through the wordArray to see if the letter matches any of the letters. Print out hangman score.
  for (var i = 0; i<wordArray.length; i++){
    if (letter.toUpperCase() === wordArray[i]){
      guessArray[i] = letter.toUpperCase();
    }
  };

//test to to see if 'letter' is NOT inside the wordArray and guesses, if not, that means the user guessed wrong and their hangman score will increase by 1.
  if( wordArray.indexOf(letter.toUpperCase()) === -1
  //  && guesses.indexOf(letter.toUpperCase()) === -1
 ) {
    hangman += 1;
    console.log ("Sorry, your hangman is: " + hangman +". Get a total of 6 wrong guesses and you lose.");
    };

  if (hangman === 6){
    console.log("You lost!!")
    console.log ("_______________")
    console.log ("|             |")
    console.log ("|             O")
    console.log ("|             +")
    console.log ("|             ^")
    console.log ("_")
  };

  if (wordArray.toString() === guessArray.toString()){
    console.log ("Congratulations, you have found the word and have won the game!");
  };

  console.log(guessArray);
};

console.log(guessArray + " Type in guessLetter('x') and replace x with your guess");


// guessLetter('O');
// guessLetter('F');
// guessLetter('D');
