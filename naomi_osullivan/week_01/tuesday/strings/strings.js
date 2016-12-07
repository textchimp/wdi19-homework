/*
DrEvil

Create a function called DrEvil. It should take a single argument, an amount, and return ' dollars', except it will add '(pinky)' at the end if the amount is 1 million. For example:

  DrEvil(10): 10 dollars
  DrEvil(1000000): 1000000 dollars (pinky)

*/
var drEvil = function (amount) {
  if (1000000 === amount) {
    return amount + " dollars " + "(pinky)";
  }
  return amount + " dollars";
}

console.log(drEvil(10));
console.log(drEvil(1000000));

/*
MixUp

Create a function called mixUp. It should take in two strings, and return the concatenation of the two strings (separated by a space) slicing out and swapping the first 2 characters of each. You can assume that the strings are at least 2 characters long. For example:

  mixUp('mix', 'pod'): 'pox mid'
  mixUp('dog', 'dinner'): 'dig donner'
Look up the JavaScript string reference to find methods which may be useful!
*/
var mixUp = function (string1, string2) {
  var first = string1.slice(0,2) + string2.slice(-1);
  var second = string2.slice(0,2) + string1.slice(-1);

  return second + " " + first;
}
console.log(mixUp("cat", "dog")); //should say dot and cag
console.log(mixUp("dog", "dinner")); //only works for 3 letter words doh!


/*
FixStart

Create a function called fixStart. It should take a single argument, a string, and return a version where all occurences of its first character have been replaced with '*', except for the first character itself. You can assume that the string is at least one character long. For example:

fixStart('babble'): 'ba**le'
*/


var fixStart = function (string1) {
  var newString = '';
  for (var i = 1; i < string1.length; i++) {
    if(string1[0] === string1[i]) {
      (string1).replace(i,'*')
      return newString;
    } else {
      return newString;
    }
  }

}
console.log(fixStart('bubble'));
console.log(fixStart('bbbble'));


/*
Verbing

Create a function called verbing. It should take a single argument, a string. If its length is at least 3, it should add 'ing' to its end, unless it already ends in 'ing', in which case it should add 'ly' instead. If the string length is less than 3, it should leave it unchanged. For example:

  verbing('swim'): 'swimming'
  verbing('swimming'): 'swimmingly'
  verbing('go'): 'go'
  */

  var verbing = function (string1) {
    if (string1.endsWith('ing')) {
      return string1 +"ly";
    }
    else if(string1.length >= 3) {
      return string1 +"ing";
    }
    else {
      return string1
    }
  }
console.log(verbing('jog'));
console.log(verbing('singing'));
console.log(verbing('go'));

/*
Not Bad

Create a function called notBad that takes a single argument, a string.

It should find the first appearance of the substring 'not' and 'bad'.
If the 'bad' follows the 'not', then it should replace the whole 'not'...'bad' substring with 'good' and return the result.
If it doesn't find 'not' and 'bad' in the right sequence (or at all), just return the original sentence.
For example:

  notBad('This dinner is not that bad!'): 'This dinner is good!'
  notBad('This movie is not so bad!'): 'This movie is good!'
  notBad('This dinner is bad!'): 'This dinner is bad!'
  */

//STRUGGLE STREET, couldn't work out how to find slice without index of words
  var notBad = function (string1) {
    var good = ' good';
    if(string1.includes('not' && 'bad')) {
      string1.slice('not');
      return string1.concat(good)
    } else {
    return string1;
    }
  }
notBad("i'm not bad at sleeping yet"); //need to find indexOf(not) and indexOf(bad)
