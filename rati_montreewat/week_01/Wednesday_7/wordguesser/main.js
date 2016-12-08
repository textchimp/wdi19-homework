var secretword = ['F', 'O', 'X'];
var wordguessed = ['_', '_', '_'];
// This global variable acts as a counter of word remaning
var remainLetter = wordguessed.length;

var guessLetter = function(str) {
// remainLetter_clone records value of its before interation.
// The value of its  will be given every time the function is called.
  remainLetter_clone = remainLetter;
  for (var i = 0; i < secretword.length; i++) {
    if (secretword[i] === str) {
      // array.splice(start, deleteCount, value, ...)
      wordguessed.splice(i, 1, secretword[i]);
      remainLetter --;
    }
  }
  // when the interation is done, if guess correctly, meaning that
  // there will be change in remainLetter , and we check it by comparing the scoped clone variavle.
  if (remainLetter !== remainLetter_clone) {
    alert("Congratulation!, you found the new letter "+ str+", and your current guessed word is " + wordguessed)
  } else {
    alert("Sorry, it does not match ,and your current guessed word is " + wordguessed)
  }
  // To check whether the player win
  if (remainLetter !== 0) {
    alert("There are "+remainLetter+" more letters needed to be guessed")
  } else {
    alert("congratulation!, you win the game ")
  }
}
