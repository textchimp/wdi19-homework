/* FIX START

Create a function called fixStart. It should take a single argument, a string, and return a version where all occurences of its first character have been replaced with '*', except for the first character itself. You can assume that the string is at least one character long. For example:

fixStart('babble'): 'ba**le' */
/*
var fixStart = function (string1) {
  var firstChar = string1.charAt(0);
  var string2 = string1.slice(1);
  var modString2 = string2.replace(firstChar, "*");

  return (firstChar + modString2);
};

console.log(fixStart('babble'));
*/

var fixStart = function (string1) {
  var firstChar = string1.charAt(0);
  var string2 = string1.slice(1);
  var modString2 = function (string2){
    for ( var i = 0; i<string2.length; i++){
      if (string2.substring(i, i+1) == firstChar) {
        string2= string2.substring(0, i) + "*" + string2.substring(i+1, string2.length);
      }
  }

  return (firstChar + modString2);
};

console.log(fixStart('babble'));
