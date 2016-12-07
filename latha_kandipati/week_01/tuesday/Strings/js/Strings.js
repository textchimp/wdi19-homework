/*
Dr.Evil
Create a function called DrEvil. It should take a single argument, an amount,
and return ' dollars', except it will add '(pinky)' at the end if the
amount is 1 million. For example:

  DrEvil(10): 10 dollars
  DrEvil(1000000): 1000000 dollars (pinky)
  */
function DrEvil(amount)
{
  var returnValue;
  if (1000000 === amount)
  {
    returnValue = amount + " dollars" + " (pinky)";
    console.log("DrEvil("+amount+"): "+returnValue);
  }
  else {
    returnValue = amount + " dollars";
    console.log("DrEvil("+amount+"): "+returnValue);
  }
}

DrEvil(1000000);

/*
MixUp

Create a function called mixUp. It should take in two strings, and return the
concatenation of the two strings (separated by a space) slicing out and
swapping the first 2 characters of each. You can assume that the strings are
at least 2 characters long. For example:

  mixUp('mix', 'pod'): 'pox mid'
  mixUp('dog', 'dinner'): 'dig donner'
Look up the JavaScript string reference to find methods which may be useful!
*/

function mixUp(str1, str2)
{
  var firstChar1 = str1.slice(0,1);
  var firstChar2 = str2.slice(0,1);
  var replace1 = str1.replace(firstChar1, firstChar2);
  var replace2 = str2.replace(firstChar2, firstChar1);
  var returnValue = replace1 + " " + replace2;
  return returnValue;
}

console.log(mixUp('cat','dog'));
console.log(mixUp('breakfast','Dinner'));

/*
FixStart

Create a function called fixStart. It should take a single argument, a string,
and return a version where all occurences of its first character have been
replaced with '*', except for the first character itself. You can assume that
the string is at least one character long. For example:

fixStart('babble'): 'ba**le'
*/
function fixStart(str)
{
  //var firstChar = str.slice(0,1);
  var str1 = str.split("");
  // var re = new RegExp(/(?!^)${firstChar}/,"g");
  // var str1 =  str.replace(re,'*');
  for (var i = 1; i < str.length; i+=1)
  {
    if (str[i] === str[0])
    {
      str1[i] = '*';
    }
  }
  str1 = str1.join("");
  console.log(str," is replaced : ",str1);
  return str1;
}

fixStart('dayyyddd'); //output : da**y

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
  function verbing(str)
  {
    var len = str.length;
    var substring = str.substr(-3, len);
    var returnString;
    console.log(substring);
    if ( (len >= 3) && (substring === 'ing') )
    {
      returnString = str+'ly';
    }
    else if ( len >= 3 )
    {
      returnString = str+'ing';
    }
    else
    {
      returnString = str;
    }
    console.log(str+" String is verbed to : "+returnString);
    return returnString;
  }

  verbing('swimming');
  verbing('garden');
  verbing('go');

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
 function notBad(str)
 {
   var returnString;
   if ( (str.indexOf('not') > 0) && (str.indexOf('bad') > str.indexOf('not')) )
   {
     var splitString1 = str.slice(0,str.indexOf('not'));
     var splitString2 = str.slice((str.indexOf('bad')+3),str.length);
     returnString = splitString1 + "good" + splitString2;
   }
   else
   {
     returnString = str;
   }
   console.log("String before notBad conversion: ", str);
   console.log("notBad converted string: ", returnString);
   return returnString;
 }

notBad("The dinner is not that bad.");
notBad("The breakfast was bad.");
notBad("Wow, who would say this is not amazing");
notBad("Thats enough examples for now.");
notBad("My bad. lets not say good bye yet.")
