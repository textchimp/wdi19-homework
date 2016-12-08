/* MIX UP

Create a function called mixUp. It should take in two strings, and return the concatenation of the two strings (separated by a space) slicing out and swapping the first 2 characters of each. You can assume that the strings are at least 2 characters long. For example:

  mixUp('mix', 'pod'): 'pox mid'
  mixUp('dog', 'dinner'): 'dig donner'
Look up the JavaScript string reference to find methods which may be useful! */

var mixUp = function (string1, string2){
  var beginstring1 = string1.slice(0,2);
  var beginstring2 = string2.slice(0,2);

  var newstr1 = string1.replace(beginstring1, beginstring2);
  var newstr2 = string2.replace(beginstring2, beginstring1);

  return (newstr1.concat(" ", newstr2));
};

console.log(mixUp('mix', 'pod'));
console.log(mixUp('dog', 'dinner'));
