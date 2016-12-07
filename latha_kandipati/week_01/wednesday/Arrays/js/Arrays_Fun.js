/*
Array and Functions Bonus Material

Define a function maxOfTwoNumbers that takes two numbers as arguments and
returns the largest of them. Use the if-then-else construct available in
Javascript. You'll have to remember your pre-work, or do some googling to
figure this out.
*/
function maxOfTwoNumbers(num1, num2)
{
  if ( num1>num2 )
  {
    console.log(num1,"is greater than ",num2);
    return num1;
  }
  else {
    console.log(num2,"is greater than ",num1);
    return num2;
  }
}
maxOfTwoNumbers(23,232);

/*
Define a function maxOfThree that takes three numbers as arguments and returns
the largest of them.
*/
function maxOfThree(num1, num2, num3)
{
  var greatest = num1;
  if ( num1 > greatest )
  {
     greatest = num1;
  }
  if ( num2 > greatest )
  {
    greatest = num2;
  }
  if ( num3 > greatest )
  {
    greatest = num3;
  }
  console.log("Greatest among "+num1+", "+num2+", "+num3+ " is: "+greatest);
  return greatest;
}
maxOfThree(56,345,76);

/*
Write a function that takes a character (i.e. a string of length 1) and returns
true if it is a vowel, false otherwise.
*/
function isVowel(char)
{
  var vowels = 'aeiou';
  if ( (vowels.indexOf(char)) >= 0 )
  {
    console.log(char+" is a Vowel.");
    return true;
  }
  else {
    console.log(char+" is not a Vowel.");
    return false;
  }
}
isVowel('i');
isVowel('g');
isVowel('a');
isVowel('o');
isVowel('u');

/*
Define a function sumArray and a function multiplyArray that sums and multiplies
(respectively) all the numbers in an array of numbers. For example,
sumArray([1,2,3,4]) should return 10, and multiplyArray([1,2,3,4]) should
return 24.
*/
function sumArray(numArray)
{
  var sum = 0;
  for ( var i=0; i<numArray.length; i++ )
  {
    sum += numArray[i];
  }
  console.log("Sum of : "+numArray+" is : "+sum);
  return sum;
}

var globalArray = [1,5,7,9,34];

sumArray(globalArray);

function multiplyArray(numArray)
{
  var result = 1;
  for ( var i=0; i<numArray.length; i++ )
  {
    result *= numArray[i];
  }
  console.log("Muliplying the numbers : "+numArray+" gives : "+result);
  return result;
}
multiplyArray(globalArray);
