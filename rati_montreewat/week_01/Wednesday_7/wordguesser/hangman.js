var secretword = ['F', 'O', 'X'];
var wordguessed = ['_', '_', '_'];
var usedletter = [];
// Keep track of the state of the hangman as a number (starting at 0)
var stateHangman = 0;
var remainLetter = wordguessed.length;

var guessLetter = function(str) {
//Keep track of all the guessed letters (right and wrong) and
//only let the user guess a letter once. If they guess a letter twice, alert it.

  if ( isthisLetterused(str) ){
    alert("You used this word! Plese change it");
  } else {
      remainLetter_clone = remainLetter;
    for (var i = 0; i < secretword.length; i++) {
      if (secretword[i] === str) {
        wordguessed.splice(i, 1, secretword[i]);
        remainLetter --;
      }
    }
  // To keep track all of guess letter
    usedletter.push(str);

    if (remainLetter !== remainLetter_clone) {
      alert("Congratulation!, you found the new letter "+ str+", and your current guessed word is " + wordguessed)
    } else {
  //add to statehangman variable every time they make a wrong guess.
      stateHangman += 1;
      alert("Sorry, your hangman state increase by 1 to "+stateHangman+" ,and your current guessed word is " + wordguessed)
  //Once the number reaches 6 ,
  //inform the user that they lost and show a hangman on the log.
      if (stateHangman === 6) {
        alert("You loss ")
        console.log("hangman");
      }
    }

    if (remainLetter !== 0) {
      alert("There are "+remainLetter+" more letters needed to be guessed")
    } else {
      alert("congratulation!, you win the game ")
    }
  }
}

var isthisLetterused = function(str) {
  var result = false;
  for (var i = 0; i < usedletter.length; i++) {
    if (str === usedletter[i]) {
      result = true;
      break
    } else {
      result = false;
    }
  }
  return result;
}
