
//
// Bonus: Return an object indicating whether the credit card is valid, and if not, what the error is.
//
// { valid: true, number: 'a923-3211-9c01-1112' }
// { valid: false, number: 'a923-3211-9c01-1112', error: ‘wrong_length’ }
//
// Double Bonus: Make your credit card scheme even more advanced! What are the rules, and what are some numbers that pass or fail? Ideas: check expiration date! Check out the Luhn Algorithm for inspiration.

var cardSplit;
var cardString;
var cardArray;


var validateCreditCard = function (cardNumber) {

var validity ="";
  var goodCard = new Object();
  goodCard.valid = "true";
  goodCard.number = cardNumber;

  var badCard = new Object();
  badCard.valid = "false";
  badCard.number = cardNumber;
  badCard.error = "";



  // turn cardNumber into an array and string
  cardSplit= cardNumber.split('-'); //["9999", "9999", "8888", "0000"]
  cardString = cardSplit.join(''); //"9999999988880000"
  cardArray = cardString.split('');// ["9", "9", "9", "9", "9", "9"...]

 //Functions for criteria

 // You must have at least two different digits represented (all of the digits cannot be the same)
     var differentDigits = function (){
       for (var i = 0 ; i < cardArray.length; i++){
         if (cardArray[i] !== cardArray[0]){
           return true; // if all numbers are the same, this function becomes undefined (ie, will not equal to true), however we cannot put return false, as this will make the for loop stop if two numbers are the same. We need it to cycle to a point where the numbers are different OR until we reach the end of the array.
         }
         badCard.error = "all_digits_same"
       }
     };


 // The sum of all the digits must be greater than 16
 var sumOfDigits = function(){
    var total = 0;
     for (var i = 0; i < cardArray.length ; i++){
      total += parseInt(cardArray[i]);
     }
     if (total > 16){
       total=0;
       return true;
     } else {
       badCard.error = "incorrect_sum";
       total=0;
       return false;
     }
 };

// Number must be 16 digits, all of them must be numbers
    var sixteenDigits = function (){
      if (cardArray.length === 16){
        return true
      } else {badCard.error = "wrong_length";
      return false;}
    };

    var allNumbers = function (){
      if ( Number.isNaN(Number(cardString)) === false){
        return true
      } else {badCard.error = "not_all_numbers";
          return false;}
    };

// The final digit must be even
    var finalDigitEven = function () {
      if ( (cardArray[cardArray.length -1] ) % 2 ===0 || (cardArray[cardArray.length -1]) === 0){
        return true;
      } else {badCard.error = "end_digit_odd";
        return false;}
    };


// final 'if statement'; if all the functions above hold true, then the card is valid.
    if (

      differentDigits() === true &&
      allNumbers() === true &&
      sumOfDigits() === true &&
      sixteenDigits() === true &&
      finalDigitEven() === true
    ){ validity = "true";
  }

if(validity==="true"){
  console.log(goodCard);
} else {console.log(badCard)}


}

console.log (validateCreditCard('9999-9999-8888-0000')); //true
console.log (validateCreditCard('6666-6666-6666-1666')); //true
console.log (validateCreditCard('a923-3211-9c01-1112')); //false
console.log (validateCreditCard('4444-4444-4444-4444'));//false
console.log (validateCreditCard('1111-1111-1111-1110'));//false
console.log (validateCreditCard('6666-6666-6666-6661'));//false
