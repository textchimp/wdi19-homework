// Homework: The Word Guesser
//
// You'll create a simple word guessing game where the user gets infinite
//  tries to guess the word (like Hangman without the hangman, or like Wheel
//     of Fortune without the wheel and fortune).
//
// Create two global arrays: one to hold the letters of the word
// (e.g. 'F', 'O', 'X'), and one to hold the current guessed letters
// (e.g. it would start with '_', '_', '_' and end with 'F', 'O', 'X').
// Write a function called guessLetter that will:
// Take one argument, the guessed letter.
// Iterate through the word letters and see if the guessed letter is in there.
// If the guessed letter matches a word letter, changed the guessed letters
//  array to reflect that.
// When it's done iterating, it should log the current guessed letters ('F__')
// and congratulate the user if they found a new letter.
// It should also figure out if there are any more letters that need to be guessed,
//  and if not, it should congratulate the user for winning the game.
// Pretend you don't know the word, and call guessLetter multiple times with
// various letters to check that your program works.

var secretWord = ['S','E','C','R','E','T'];
var userInput = ['_','_','_','_','_','_'];

var wordGuesser = function(input) {
  var flag = false;
  for(var i = 0; i < secretWord.length; i++) {
    if (input === secretWord[i]) {
      flag = true;
      userInput[i] = input;
    }
  }
  console.log(userInput);
  flag ? console.log("You found a new letter!") : true
  if (!userInput.includes('_')) {
    console.log("You won the game!");
    return
  }
}

// Bonus: Make it more like Wheel of Fortune:
//
// Start with a reward amount of $0
// Every time a letter is guessed, generate a random amount and reward the user
// if they found a letter (multiplying the reward if multiple letters found),
// otherwise subtract from their reward.
// When they guess the word, log their final reward amount.

var reward = 0;

var wheelOfFortune = function(input) {
  var pos = Math.ceil(Math.random() * 100);
  var neg = Math.ceil(Math.random() * 100);
  var flag2 = false;
  for(var i = 0; i < secretWord.length; i++) {
    if (input === secretWord[i]) {
      reward += pos
      flag2 = true;
      userInput[i] = input;
    }
  }
  console.log(userInput);
  if (flag2) {
    console.log("You found a new letter!, you win $" + pos);
    console.log("Your total is $" + reward);
  } else {
    reward -= neg;
    console.log("Bad guess, you loose $" + neg);
    console.log("Your total is $" + reward);
  }
  if (!userInput.includes('_')) {
    console.log("You won the game! and $" + reward);
    console.log(reward);
    return
  }
}


// Bonus: Make it like Hangman:
//
// Keep track of all the guessed letters (right and wrong) and only let the user
// guess a letter once. If they guess a letter twice, do nothing.
// Keep track of the state of the hangman as a number (starting at 0), and
// subtract or add to that number every time they make a wrong guess.
// Once the number reaches 6 (a reasonable number of body parts for a hangman),
// inform the user that they lost and show a hangman on the log.

var guessed = [];
var bodyParts = 0;

var hangMan = function(input) {
  var flag3 = false;
  guessed.push(input);
  var sorted = guessed.sort();
  for(var i = 0; i < sorted.length; i++) {
    if (sorted[i] === sorted[i+1]) {
      guessed.pop();
      return
    }
  }
  for(var i = 0; i < secretWord.length; i++) {
    if (input === secretWord[i]) {
      flag3 = true;
      userInput[i] = input;
    } else {
      flag3 = false;
    }
  }
  flag3 ? bodyParts-- : bodyParts++;
  if (bodyParts === 6) {
    console.log("You lost :(")
    console.log(`
                    0000000000000
                 0           0
                 0           1
                 0          1 1
                 0           1
                 0          324
                 0         3 2 4
                 0        3  2  4
                 0          5 6
                 0         5   6
                 0        5     6
                 0       5       6
                 0
                 0
                 0`
               );
  }
  if (!userInput.includes('_')) {
    console.log("You won the game!");
    return
  }
}
