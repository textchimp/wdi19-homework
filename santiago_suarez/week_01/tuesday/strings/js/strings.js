// DrEvil
//
// Create a function called DrEvil. It should take a single argument, an amount,
// and return ' dollars', except it will add '(pinky)' at the end if the amount
// is 1 million. For example:
//
//   DrEvil(10): 10 dollars
//   DrEvil(1000000): 1000000 dollars (pinky)

var drEvil = function(amount) {
  return amount === 1000000 ? amount + " dollars (pinky)" : amount + " dollars";
}

// MixUp
//
// Create a function called mixUp. It should take in two strings,
// and return the concatenation of the two strings (separated by a space)
// slicing out and swapping the first 2 characters of each. You can assume that
// the strings are at least 2 characters long. For example:
//
//   mixUp('mix', 'pod'): 'pox mid'
//   mixUp('dog', 'dinner'): 'dig donner'

var mixUp = function(a, b) {
  var first = b.substring(0,2).concat(a.substr(2,a.length));
  var second = a.substring(0,2).concat(b.substr(2,b.length));
  var result = first + " " + second;
  return result;
}

// FixStart
//
// Create a function called fixStart. It should take a single argument, a string,
// and return a version where all occurences of its first character have been
// replaced with '*', except for the first character itself. You can assume that
// the string is at least one character long. For example:
//
// fixStart('babble'): 'ba**le'

var fixStart = function(str) {
  var arr = str.split("");
  for (var i = 1; i < arr.length; i++) {
    if (arr[i] === arr[0]) {
      arr[i] = "*";
    }
  }
  return arr.join("");
}


// Verbing
//
// Create a function called verbing. It should take a single argument, a string.
// If its length is at least 3, it should add 'ing' to its end, unless it
// already ends in 'ing', in which case it should add 'ly' instead. If the
// string length is less than 3, it should leave it unchanged. For example:
//
//   verbing('swim'): 'swimming'
//   verbing('swimming'): 'swimmingly'
//   verbing('go'): 'go'

var verbing = function(str) {
  if (str.length < 3) {
    return str;
  } else if (str.substr(str.length - 3, str.length) === "ing") {
    return str.concat("ly");
  } else {
    return str.concat("ing");
  }
}


// Not Bad
//
// Create a function called notBad that takes a single argument, a string.
//
// It should find the first appearance of the substring 'not' and 'bad'.
// If the 'bad' follows the 'not', then it should replace the whole 'not'...
// 'bad' substring with 'good' and return the result.
// If it doesn't find 'not' and 'bad' in the right sequence (or at all),
// just return the original sentence.
// For example:
//
//   notBad('This dinner is not that bad!'): 'This dinner is good!'
//   notBad('This movie is not so bad!'): 'This movie is good!'
//   notBad('This dinner is bad!'): 'This dinner is bad!'

var notBad = function(str) {
  if (str.indexOf("not") < str.indexOf("bad")) {
    var first = str.substr(0, str.indexOf("not"))
    var second = str.substr(str.indexOf("bad") + 3, str.length)
    return first + "good" + second;
  } else {
    return str;
  }
}
