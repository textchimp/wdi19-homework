/*
Create a function called DrEvil. It should take a single argument, an amount, and return ' dollars', except it will add '(pinky)' at the end if the amount is 1 million. For example:
*/

var drEvil = function(input){
  if (10000000 === input) {
    return input + " dollars (pinky)";
  } else {
    return input + " dollars"
  }

}

drEvil(2)
