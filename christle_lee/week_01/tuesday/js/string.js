console.log("Hello strings")

// Dr Evil
/*Create a function called DrEvil. It should take a single argument, an amount, and return ' dollars', except it will add '(pinky)' at the end if the amount is 1 million. For example: */

function drEvil(amount) {
  if (amount === 1000000) {
    return amount + ' dollars (pinky)';
  } else {
    return amount + ' dollars';

  }
}
console.log(drEvil(1000000));
console.log(drEvil(10000));

/*MixUp

Create a function called mixUp. It should take in two strings, and return the concatenation of the two strings (separated by a space) slicing out and swapping the first 2 characters of each. You can assume that the strings are at least 2 characters long.*/


  function mixUp(a, b) {
    //return b.slice(0, 2) + a.slice(2) + " " + a.slice(0, 2) + b.slice(2);
      return b.slice(0, 2) + a.slice(2) + a.slice(0, 2) + b.slice(2);
  }
  console.log(mixUp('mix', 'pod'));
  console.log(mixUp('tic', 'tac'));

/*Create a function called fixStart. It should take a single argument, a string, and return a version where all occurences of its first character have been replaced with '*', except for the first character itself. You can assume that the string is at least one character long.
*/
