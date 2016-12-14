/*** Credit Card Validation ***

You're starting your own credit card business. You've come up with a new way to validate credit cards with a simple function called validateCreditCard that returns true or false.

Here are the rules for a valid number:

Number must be 16 digits, all of them must be numbers
You must have at least two different digits represented (all of the digits cannot be the same)
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

var validateCreditCard = function(cardNumber) {
   // Clean the card number - number only
   var numberToValidate = cleanNumbersOnly(cardNumber);
   var usrMsg = {
      valid: true,
      number: cardNumber,
      error: []
   }

   //Checks
   if (numberToValidate.length !== 16) {
      usrMsg.valid = false;
      usrMsg.error.push("The number must be 16 numbers");
   }
   if (!twoDifferentDigits(numberToValidate)) {
      usrMsg.valid = false;
      usrMsg.error.push("The number must contain at least 2 different numbers");
   }
   if (!lastDigitEven(numberToValidate)) {
      usrMsg.valid = false;
      usrMsg.error.push("The last number must be even");
   }
   if (sumOfNumbers(numberToValidate) < 16) {
      usrMsg.valid = false;
      usrMsg.error.push("The sum of all the numbers must be at least 16");
   }

   return usrMsg;
}

var cleanNumbersOnly = function(cardNo) {
   var cleaned = cardNo.split("-").join("");
   return cleaned;
}


var twoDifferentDigits = function(cardNo) {
   var check = cardNo[0];
   for (var i = 1; i < cardNo.length; i++) {
      if (cardNo[i] !== check) {
         return true;
      }
   }
   return false;
}

var lastDigitEven = function(cardNo) {
   var output = false;
   var lastNo = cardNo.length - 1;
   if (cardNo[lastNo] % 2 === 0) {
      output = true;
   }
   return output;
}

var sumOfNumbers = function(cardNo) {
   var totalSum = 0;
   for (var i = 0; i < cardNo.length; i++) {
      totalSum += parseInt(cardNo[i]);
   }
   return totalSum;
}

console.log(validateCreditCard("1111-1111-1111-0400"));
