//BONUS :
//Start with a reward amount of $0
// Every time a letter is guessed, generate a random amount and reward the user if they found a letter (multiplying the reward if multiple letters found), otherwise subtract from their reward.
// When they guess the word, log their final reward amount.


var wordArray = ['F','O', 'O', 'D'];
var guessArray = ['_', '_', '_', '_'];
var reward= 0;

var guessLetter = function (letter){
  for (var i = 0; i<wordArray.length; i++){
    if (letter.toUpperCase() === wordArray[i] ){
      guessArray[i] = letter.toUpperCase();
      // add $1 to the reward for every correct letter, at every index of the wordArray when it is equal to the 'letter' guessed
      reward += 1;
      console.log ("Congratulations, you found a new letter!")
    }
  }
//test to see if the 'letter' is inside the wordArray, if not, minus $1 from the reward.
if( wordArray.indexOf(letter.toUpperCase()) === -1){ reward = reward-1;}

console.log(guessArray);

if (wordArray.toString() === guessArray.toString()){
  console.log ("Congratulations, you have found the word and have won the game! Your total reward is : $" + reward );

  }
}

console.log(guessArray + " Type in guessLetter('x') and replace x with your guess");


// guessLetter('O');
// guessLetter('F');
// guessLetter('D');
