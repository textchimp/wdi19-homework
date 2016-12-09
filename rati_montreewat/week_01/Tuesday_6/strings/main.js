// DrEvil
// Create a function called DrEvil. It should take a single argument, an amount, and return ' dollars',
// except it will add '(pinky)' at the end if the amount is 1 million. For example:

var  number;
var string;

var DrEvil = function (number) {
  if (number === 1000000) {
    return number+" dollars (pinky)"
  } else {
    return number+" dollars"
  }
}
console.log(DrEvil(1000));
console.log(DrEvil(1000000));

//MixUp
// Create a function called mixUp.
// It should take in two strings, and return the concatenation of the two strings
// (separated by a space) slicing out and swapping the first 2 characters of each.
// You can assume that the strings are at least 2 characters long.


var mixUp = function (string1, string2) {
  var first_two1 = string1.slice(0,2);
  var first_two2 = string2.slice(0,2);
  var rest_string = function(string) {
    rest_charactor = [];
    for (i = 2; i < string.length; i++) {
        rest_charactor += string[i];
      }
      return rest_charactor
    }
  return first_two2+rest_string(string1)+" "+first_two1+rest_string(string2);
}

console.log(mixUp('mix', 'pod'));
console.log(mixUp('dog', 'dinner'));

// FixStart
// Create a function called fixStart.
// It should take a single argument, a string, and return a version
// where all occurences of its first character have been replaced with '*',
// except for the first character itself. You can assume that the string is at least one character long.

var fixstart = function (string) {
  var first_charactor = string[0];
  var rest_charactor = [];
  for (i = 1; i < string.length; i++) {
    if (string[i] === first_charactor) {
      rest_charactor += "*";
    } else {
      rest_charactor += string[i];
    }
  }
  return first_charactor+rest_charactor;
}
console.log(fixstart('babble'));


//Verbing
// Create a function called verbing. It should take a single argument, a string.
// If its length is at least 3, it should add 'ing' to its end,
// unless it already ends in 'ing', in which case it should add 'ly' instead.
// If the string length is less than 3, it should leave it unchanged.
var verbing = function (string) {
  if (string.length >= 3) {
    if ( string.slice(-3) !== "ing") {
      return string+"ing";
    }
    else {
      return string+"ly";
    }

  } else {
    return string;
  }
}
console.log(verbing('swim'));
console.log(verbing('swimming'));
console.log(verbing('go'));

// Not Bad
//
// Create a function called notBad that takes a single argument, a string.
//
// It should find the first appearance of the substring 'not' and 'bad'.
// If the 'bad' follows the 'not', then it should replace the whole 'not'...'bad'
// substring with 'good' and return the result.
// If it doesn't find 'not' and 'bad' in the right sequence (or at all),
// just return the original sentence.

var notBad = function(string) {
  var index_not = string.indexOf("not");
  var index_bad = string.indexOf("bad");
  if (string.includes("not") && string.includes("bad") && index_bad > index_not) {
    return string.substring(0, index_not)+"good"+string.substring(index_bad+3, string.length)
    }
  else {
    return string
  }
}
console.log(notBad('This dinner is not that bad!'));
console.log(notBad('This movie is not so bad!'));
console.log(notBad('This dinner is bad!'));
