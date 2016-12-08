// Homework: The Word Guesser
//
// You'll create a simple word guessing game where the user gets infinite tries to guess the word (like Hangman without the hangman, or like Wheel of Fortune without the wheel and fortune).
//
// Create two global arrays: one to hold the letters of the word (e.g. 'F', 'O', 'X'), and one to hold the current guessed letters (e.g. it would start with '_', '_', '_' and end with 'F', 'O', 'X').
// Write a function called guessLetter that will:
// Take one argument, the guessed letter.
// Iterate through the word letters and see if the guessed letter is in there.
// If the guessed letter matches a word letter, changed the guessed letters array to reflect that.
// When it's done iterating, it should log the current guessed letters ('F__') and congratulate the user if they found a new letter.
// It should also figure out if there are any more letters that need to be guessed, and if not, it should congratulate the user for winning the game.
// Pretend you don't know the word, and call guessLetter multiple times with various letters to check that your program works.


var totalReward = 0
var rewardStreak = 0  //wants to always reset because its global??
var wordLetters = ['W','H','I','S','K','Y'];
var guessLetter = ['_','_','_','_','_','_'];
var guessedLetters =[];

var arraysEqual = function (word, guess) { // a little bit of google and stack overflow
    for(var i = word.length; i--;) {
        if(word[i] !== guess[i])
            return false;
    }
    return true;
}

var guess = function(letter){
  var found = false;
  for (var i = 0; i < wordLetters.length; i++) {
    if (letter === wordLetters[i]){
      found = true;
      rewardStreak += 1;
      var score = (Math.floor((Math.random() * 10) + 1))
      var reward = (score * rewardStreak);
      totalReward = totalReward + reward;
      guessLetter.splice(i, 1, letter);
      guessedLetters.push(letter);
      console.log("Nice guess! " + letter + " is in the word!")
      console.log(guessLetter)
      console.log('Your recent guesses, ' + guessedLetters)
      console.log('Super awesome streak bonus! Score X ' + rewardStreak
      + '. Total round score = ' + reward +'. Total score = ' + totalReward)
      if(arraysEqual(wordLetters, guessLetter) === true) {
        console.log('YOU WIN BEEEYATCH!')
      }
    }
  }//for
if (found === false) {
  rewardStreak = 0
  var score = (Math.floor((Math.random() * 10) + 1))
  totalReward -= score;
  console.log('Unlucky, ' + letter + ' is not in the word')
  console.log('Guess score = -' + score + '. Bonus multiplier is now ' + rewardStreak + ". Total score = " + totalReward)
// because this is ourside, it runs regardless and resets score

  }
}

// Bonus: Make it more like Wheel of Fortune:
//
// Start with a reward amount of $0
// Every time a letter is guessed, generate a random amount and reward the user if they found a letter (multiplying the reward if multiple letters found), otherwise subtract from their reward.
// When they guess the word, log their final reward amount.
