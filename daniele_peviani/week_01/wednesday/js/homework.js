/*
THE WORD GUESSER
*/

/*
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


// Bonus: Make it more like Wheel of Fortune:
//
// Start with a reward amount of $0
// Every time a letter is guessed, generate a random amount and reward the user if they found a letter (multiplying the reward if multiple letters found), otherwise subtract from their reward.
// When they guess the word, log their final reward amount.


// Bonus: Make it like Hangman:
//
// Keep track of all the guessed letters (right and wrong) and only let the user guess a letter once. If they guess a letter twice, do nothing.
// Keep track of the state of the hangman as a number (starting at 0), and subtract or add to that number every time they make a wrong guess.
// Once the number reaches 6 (a reasonable number of body parts for a hangman), inform the user that they lost and show a hangman on the log.


// Function to randomize the reward -- floor rounds a number, any number from 1 to 20 (including)
var randomReward = function() {
  return (Math.floor(Math.random() * (20-1+1) + 1));
}

// Global Variables
var wordToGuess = ["B", "A", "L", "L"];
var guessWord = ["_", "_", "_", "_"];
var alreadyEntered = []; // array of letters already entered
var totalReward = 0;
var livesLeft = 6


var guessLetter = function(guessedChar) {

  // first of all I check if the letter has been entered already. The method includes() returns a boolean if the parameter is found in the array
  if (alreadyEntered.includes(guessedChar)) {
      console.log("You've already tried " + guessedChar + ", pick another letter");
      return; // Exit function and don't do anything
  }

  // If not already entered, add to the alreadyEntered array
  alreadyEntered.push(guessedChar);

  // Local Variables
  var combo = 0; // Counter for multiple letters match
  var usrMsg = ""; // Message to the user -> found or not found + reward
  var reward = randomReward(); // Generate random reward once at the begining

  for (var i = 0; i < wordToGuess.length; i++) {
    if (guessedChar === wordToGuess[i]) {
      guessWord[i] = wordToGuess[i];
      combo++;
      if (combo > 1) { // More than 1 match in the wordToGuess
          usrMsg = "Wow, you're on fire! You've got a combo! And you win $" + reward + " x " + combo;
      } else {
        usrMsg = "Yes! you found a new letter! And you win $" + reward;
      }

      totalReward += reward; // Update final reward
    }
  }

  // Test outside loop!!!!!
  // If usrMsg is still empty --> no match
  if ("" === usrMsg ) {
    livesLeft--; // Lose 1 life and check how many left
    if (0 === livesLeft) {
      console.log("GAME OVER!!!!");
      console.log("__________   ");
      console.log("|        |   ");
      console.log("|       \\O/  ");
      console.log("|        |   ");
      console.log("|       / \\ ");
      console.log("|            ");
      return;
    }
    usrMsg = "Sorry, try another letter. You also lose $" + reward + "\nYou have " + livesLeft + " lives left!"
    totalReward -= reward; // Update final reward
  }

  console.log(guessWord); //Putting this at the end I get 1 output even if there are more instances of 1 letter. I get the whole array printed out again even if not found, which is still nice
  console.log(usrMsg);

  // If no underscore left in the array, the game is won
  if (!guessWord.includes("_")) {
    console.log("Congratulations, you got the whole word!");
    if (totalReward > 0) {
      console.log("You've also won $" + totalReward + " in total");
    } else if (totalReward < 0) {
      console.log("But unfortunately you've lost $" + Math.abs(totalReward));
    } else console.log("But unfortunately you've won $" + totalReward); //If totalReward balances out to 0
  }
}
