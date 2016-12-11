/*
You'll create a simple word guessing game where the user gets infinite tries to
guess the word (like Hangman without the hangman, or like Wheel of Fortune
without the wheel and fortune).

Create two global arrays: one to hold the letters of the word
(e.g. 'F', 'O', 'X'), and one to hold the current guessed letters
(e.g. it would start with '_', '_', '_' and end with 'F', 'O', 'X').
Write a function called guessLetter that will:
Take one argument, the guessed letter.
Iterate through the word letters and see if the guessed letter is in there.
If the guessed letter matches a word letter, changed the guessed letters array
to reflect that.
When it's done iterating, it should log the current guessed letters ('F__')
and congratulate the user if they found a new letter.
It should also figure out if there are any more letters that need to be guessed,
 and if not, it should congratulate the user for winning the game.
Pretend you don't know the word, and call guessLetter multiple times with
various letters to check that your program works.

Bonus: Make it more like Wheel of Fortune:

Start with a reward amount of $0
Every time a letter is guessed, generate a random amount and reward the user if
they found a letter (multiplying the reward if multiple letters found),
otherwise subtract from their reward.
When they guess the word, log their final reward amount.

Bonus: Make it like Hangman:
Keep track of all the guessed letters (right and wrong) and only let the user
guess a letter once. If they guess a letter twice, do nothing.
Keep track of the state of the hangman as a number (starting at 0), and
subtract or add to that number every time they make a wrong guess.
Once the number reaches 6 (a reasonable number of body parts for a hangman),
inform the user that they lost and show a hangman on the log.
*/
var gameWord = ['W','O','W'];
var guessWord = ['_','_','_'];
// Fixed amount to be decremented from the totalRewardAmount if the
//letter guessed is wrong.
var penalityAmount = 2
// Randomly generated amount to be added to totalRewardAmount per right
//letter guessed.;
var randomAmount = 0;
var guessedLetters = []; //To keep track of the wrong letters guessed.
//Keeps on increasing or descreasing as the letlers are guessed.
var totalRewardAmount = 0;
//Keeps track of wrong guesses
var hangMan = 0;

//Generates a random number from 1 to 30 to reward for the right guess
function generateRandomNumber()
{
  rewardAmount = Math.floor(Math.random() * 30);
}

//Main function for guessing
function guessLetter(guessedLetter)
{
  if ( guessedLetters.includes(guessedLetter))
  {
    return;
  }
  guessedLetters.push(guessedLetter);
  var guessedRight = false;
  //Checks for the guessed letter in all the array.
  //This covers multiple occorances too.
  gameWord.forEach(
  function(stringElement,index)
  {
    if (stringElement === guessedLetter.toUpperCase())
    {
      console.log("Congratualtions you have guessed the letter right.");
      guessWord[index] = stringElement;
      // Generates random whole number from 1 to 30 and updates the global variable rewardAmount
      generateRandomNumber();
      totalRewardAmount += rewardAmount;
      guessedRight = true;
    }
  }
  );

  //Display log only if the guessed letter does not match in the whole array.
  if ( !guessedRight )
  {
    hangMan++;
    //Deducts penalty for a wrong guess
    totalRewardAmount -= penalityAmount;
    //Prints the number of lives to try again: 6 is the maximum lives
    console.log("Oops, thats not quite right, You have now "
                +(6-hangMan)+" lives to try.");

    if( hangMan >= 6 )
    {
      console.log("You have lost the game.");
      //Prints hangman
      console.log("-----");
      console.log("|   |");
      console.log("|   0");
      console.log("| /-+-\\ ");
      console.log("|   |");
      console.log("|   |");
      console.log("|  | |");
      console.log("|  | |");
      console.log("|");
      console.log("--------");
      return;
    }
  }
  //Checking to see if there are still more letters to guess
  if ( guessWord.indexOf('_') >= 0 )
  {
    if(guessedRight)
    {
      console.log("You still need to guess some more letters.");
    }
  }
  else //This means all the character have been guessed
  {
    console.log("Hooray! You have guessed them all.");
    console.log("Your reward is: ",totalRewardAmount);
  }
  // Prints the guessed word for every guess for reference
  console.log("Guessed word now is: "+guessWord);
  return guessedRight; //returns true if the guess is right and false if the guess is wrong
}
