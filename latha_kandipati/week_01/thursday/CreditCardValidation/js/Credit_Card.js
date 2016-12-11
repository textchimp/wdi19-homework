/*
You're starting your own credit card business. You've come up with a new way
to validate credit cards with a simple function called validateCreditCard that
returns true or false.

Here are the rules for a valid number:

Number must be 16 digits, all of them must be numbers
You must have at least two different digits represented
(all of the digits cannot be the same)
The final digit must be even
The sum of all the digits must be greater than 16
The following credit card numbers are valid:

9999-9999-8888-0000
6666-6666-6666-1666
The following credit card numbers are invalid:

a923-3211-9c01-1112 invalid characters
4444-4444-4444-4444 only one type of number
1111-1111-1111-1110 sum less than 16
6666-6666-6666-6661 odd final number
*/
console.log("Call the function validateCreditCard(<With your credit card num>)");
var creditCardLength = 16; //Fixed length for credit card number
var numInString = "";
var cardObject = {};
function validateCreditCard(num)
{
  numInString = num.split('-').join('');
  if (!isValidLength())
  {
    // console.log("Your card with number: ",num+" is not 16 digits");
    updateCardObject(num,"Wrong_Length");
    console.log(cardObject);
    return false;
  }
  if (!isNumber())
  {
    // console.log("You card with number: ",num+" contains other characters");
    updateCardObject(num,"Is not a number");
    console.log(cardObject);
    return false;
  }
  if (areAllDigitsSame())
  {
    // console.log("You card with number: ",num+" has same number");
    updateCardObject(num,"Has same number");
    console.log(cardObject);
    return false;
  }
  if (!isLastDigitEven())
  {
    // console.log("You card with number: ",num+" does not have last number as even");
    updateCardObject(num,"Does not have last digit as even");
    console.log(cardObject);
    return false;
  }
  if ( calculateSumOfAll() < creditCardLength )
  {
    // console.log("You card with number: ",num+" does not sum up to 16");
    updateCardObject(num,"Does not sum up to 16");
    console.log(cardObject);
    return false;
  }
  cardObject.valid = true;
  cardObject.number = num;
  console.log(cardObject);
  return true;
}

//Funciton to check the length of credit card number
function isValidLength()
{
  var validLength = false;
  if ( numInString.length === 16 )
  {
    validLength = true;
  }
  return validLength;
}

//Function to check if the credit card number contains all numbers
function isNumber()
{
  var validNum = false;
  if ( parseInt(numInString) )
  {
    validNum = true;
  }
  return validNum;
}

//Function to check if there are two different digits in the credit card number
function areAllDigitsSame()
{
  var sameDigits = true;
  for (var i=0; i<numInString.length; i++)
  {
    if (numInString[0] != numInString[i])
    {
      sameDigits = false;
    }
  }
  return sameDigits;
}

//Function to check if the final digit is even or not
function isLastDigitEven()
{
  var lastDigitEven = false;
  var numAsArray = numInString.split('');
  var lastDigit = parseInt(numAsArray[numAsArray.length-1]);
  if ( lastDigit%2 === 0)
  {
    lastDigitEven = true;
  }
  return lastDigitEven;
}

//Calculates the sum of all the digits must be greater than 16
function calculateSumOfAll()
{
  var totalSum = 0;
  var numAsArray = numInString.split('');
  for (var i=0; i<numAsArray.length; i++ )
  {
    totalSum += parseInt(numAsArray[i]);
  }
  return totalSum;
}

//Updates the card object with details
function updateCardObject(num,msg)
{
  cardObject.valid = false;
  cardObject.number = num;
  cardObject.error = msg;
}
