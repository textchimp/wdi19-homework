//BONUS

/*Define a function reverseString that computes the reversal of a string. For example, reverseString("jag testar") should return the string "ratset gaj".*/

//scan through string as an array, but get the last character and work backwards , then put that pulled character into the newString, adding one character at a time.

var newString="";

var reverseString = function (string) {
  for (var i = 0; i< string.length; i++ ){
    newString += string[string.length-(1+i)];
  }
  return newString;
}

console.log(reverseString('jag testar')); //answer: ratset gaj
