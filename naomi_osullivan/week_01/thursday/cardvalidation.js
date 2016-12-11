/*
Credit Card Validation

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
Example

validateCreditCard('9999-9999-8888-0000'); // Returns: true
Hint: Remove the dashed from the input string before checking if the input credit card number is valid.
*/

var card1 = '9999-9999-8888-0000';
var card2 = '6666-6666-6666-1666';
var card3 = '6666-6666-6666-6661';
var card4 = '1111-1111-1111-1110';
var card5 = 'a923-3211-9c01-1112';

//do i need booleans to make function to keep running?

var validateCreditCard = function (cardNumber) {
  var total = 0;
  var newNumber = cardNumber.split('-').join('');
  //console.log(newNumber.length)}
  for (var i = 0; i < newNumber.length; i++) {
    if(newNumber.length === 16){
      return true;
    }}
    /*if(!isNan(newNumber[i])) {
      return true;  //why not working
    }
    if ((total += newNumber[i] > 16)) {
      return true;
    }
    if(newNumber[15] % 2 === 0)
    //console.log(cardNumber[i]);
    return true;
    // how to check for at least 2 diff numbers????
  }

  //console.log(newNumber);
}
console.log(validateCreditCard(card1));
console.log(validateCreditCard(card2));
console.log(validateCreditCard(card3));
console.log(validateCreditCard(card4));
console.log(validateCreditCard(card5));
*/
console.log(validateCreditCard(card1));
