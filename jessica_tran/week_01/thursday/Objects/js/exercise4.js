//CREDIT CARD VALIDATION

// You're starting your own credit card business. You've come up with a new way to validate credit cards with a simple function called validateCreditCard that returns true or false.
//
// The following credit card numbers are valid:
//
// 9999-9999-8888-0000
// 6666-6666-6666-1666
// The following credit card numbers are invalid:
//
// a923-3211-9c01-1112 invalid characters
// 4444-4444-4444-4444 only one type of number
// 1111-1111-1111-1110 sum less than 16
// 6666-6666-6666-6661 odd final number

var cardSplit;
var cardString;
var cardArray;


var validateCreditCard = function (cardNumber) {
  // turn cardNumber into an array and string
  cardSplit= cardNumber.split('-'); //["9999", "9999", "8888", "0000"]
  cardString = cardSplit.join(''); //"9999999988880000"
  cardArray = cardString.split('');// ["9", "9", "9", "9", "9", "9"...]

 //Functions for criteria
 // The sum of all the digits must be greater than 16
    var sumOfDigits = function(){
      var total=0;
        for (var i = 0; i < cardArray.length ; i++){
          total += parseInt(cardArray[i]);
        }
        if (total > 16){
          return true;
        } else {
          return false
        }
    };

// Number must be 16 digits, all of them must be numbers
    var sixteenDigits = function (){
      if (cardArray.length === 16){
        return true
      } else {return false}
    };

    var allNumbers = function (){
      if ( Number.isNaN(Number(cardString)) === false){
        return true
      } else {return false}
    };

// The final digit must be even
    var finalDigitEven = function () {
      if ( (cardArray[cardArray.length -1] ) % 2 ===0 ){
        return true;
      } else {return false}
    };

// You must have at least two different digits represented (all of the digits cannot be the same)
    var differentDigits = function (){
      for (var i = 0 ; i < cardArray.length; i++){
        if (cardArray[i] !== cardArray[0]){
          return true; // if all numbers are the same, this function becomes undefined (ie, will not equal to true), however we cannot put return false, as this will make the for loop stop if two numbers are the same. We need it to cycle to a point where the numbers are different OR until we reach the end of the array.
        }
      }
    };

// final 'if statement'; if all the functions above hold true, then the card is valid.
    if (
      differentDigits() === true &&
      allNumbers() === true &&
      sumOfDigits() === true &&
      sixteenDigits() === true &&
      finalDigitEven() === true
    ){ return true;
    }else {return false
    }

}

console.log (validateCreditCard('9999-9999-8888-0000')); //true
console.log (validateCreditCard('6666-6666-6666-1666')); //true
console.log (validateCreditCard('a923-3211-9c01-1112')); //false
console.log (validateCreditCard('4444-4444-4444-4444'));//false
console.log (validateCreditCard('1111-1111-1111-1110'));//false
console.log (validateCreditCard('6666-6666-6666-6661'));//false
