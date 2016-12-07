/*
Strings
*/

/*
DrEvil

Create a function called DrEvil. It should take a single argument, an amount,
and return ' dollars', except it will add '(pinky)' at the end if the amount
is 1 million. For example:

  DrEvil(10): 10 dollars
  DrEvil(1000000): 1000000 dollars (pinky)

*/

var DrEvil = function(amount) {
  var amountInDollars = amount + " dollars";
  if (1000000 === amount) {
    amountInDollars += " (pinky)";
  }
  return amountInDollars
}

console.log(DrEvil(1000));
console.log(DrEvil(1000000));


/*

MixUp

Create a function called mixUp. It should take in two strings, and return the
concatenation of the two strings (separated by a space) slicing out and swapping
the first 2 characters of each. You can assume that the strings are at least
2 characters long. For example:

  mixUp('mix', 'pod'): 'pox mid'
  mixUp('dog', 'dinner'): 'dig donner'
Look up the JavaScript string reference to find methods which may be useful!

*/

var mixUp = function(string1, string2) {
    var newString1 = string2.substring(0,2) + string1.substring(2); //string.substring(0,2) returns a string starting from 0, and 2 character long.
    var newString2 =  string1.substring(0,2) + string2.substring(2); // string.substring(2) returns all characters after the 2nd.
    return newString1 + " " + newString2
}

console.log(mixUp("dog", "dinner"));


/*

FixStart

Create a function called fixStart. It should take a single argument, a string,
and return a version where all occurences of its first character have been
replaced with '*', except for the first character itself. You can assume that
the string is at least one character long. For example:

fixStart('babble'): 'ba**le'

*/

var fixStart = function(string1) {
  var firstChar = string1.charAt(0);
  var otherChars = string1.substring(1); //return all characters after the first
  var myNewExp = new RegExp(firstChar, 'gi'); //new regular expression - 'g' means global and 'i' means ignore case
  return firstChar + otherChars.replace(myNewExp, "*");
}

console.log(fixStart("world wide web"));


/*

Verbing

Create a function called verbing. It should take a single argument, a string.
If its length is at least 3, it should add 'ing' to its end, unless it already
ends in 'ing', in which case it should add 'ly' instead. If the string length
is less than 3, it should leave it unchanged. For example:

  verbing('swim'): 'swimming'
  verbing('swimming'): 'swimmingly'
  verbing('go'): 'go'

*/

var verbing = function(string1) {
  var newString = string1;
  if (string1.length >= 3) {
    if (string1.endsWith("ing")) {
      newString += "ly";
    } else newString+= "ing"
  }
  return newString
}

console.log(verbing("swim"));
console.log(verbing("swimming"));
console.log(verbing("go"));

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

var notBad = function(string1) {
  var newString = string1;
  //check if "not" is found & "bad" is found & the index of "not" is lower than the index of "bad" --> all three expressions have to be true
  if ((string1.search("not") != -1) && (string1.search("bad") != -1) && (string1.indexOf("not") < string1.indexOf("bad"))) {
    var stringToBeReplaced = string1.slice(string1.indexOf("not"), (string1.indexOf("bad") + 3)); //slice returns all the characters from the index of "not" till the index of "bad" (+3 to include the whole word)
    var myNewExp = new RegExp(stringToBeReplaced, 'gi'); //new regular expression - 'g' means global and 'i' means ignore case
    newString = string1.replace(myNewExp, "good");
  }
  return newString;
}

console.log(notBad("This dinner is not that bad!"));
