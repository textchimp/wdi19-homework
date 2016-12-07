// Main
var answer = ['H', 'A', 'I', 'R', 'C', 'U', 'T'];
var check = ['H', 'A', 'I', 'R', 'C', 'U', 'T'];
var guess = ['_', '_', '_', '_', '_', '_', '_'];

var guesser = function(letter) {
  if (guessed.includes(letter)) {
    return;
  }
  letter = letter.toUpperCase();
  guessed.push(letter);
  if (answer.includes(letter)) {
    while (check.includes(letter)) {
      reward += reward_function();
      var i = check.indexOf(letter);
      check[i] = '_';
      guess[i] = answer[i];
    }
  } else {
    console.log("Wrong!")
    reward -= reward_function();
    hangman--;
  }

  if (answer.toString() === guess.toString()) {
    console.log("Hey, you won this stupid game! Here is $", reward);
  } else {
    console.log(guess);
  }

  if (hangman === 0) {
    console.log("You lost, hommie. Here is a JS sticker");
    console.log("_______\n|/      |\n|      (_)\n|      \|/\n|       |\n|      / \\\n|\n|___\n");
  }

}

// reward feature
var reward = 0;
var reward_function = function() {
  return Math.random() * 100;
}

// hangman
var hangman = 6;
var guessed = [];
