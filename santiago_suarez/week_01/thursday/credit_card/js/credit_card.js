// You're starting your own credit card business. You've come up with a new way
// to validate credit cards with a simple function called validateCreditCard
// that returns true or false.
//
// Here are the rules for a valid number:
//
// Number must be 16 digits, all of them must be numbers
// You must have at least two different digits represented
// (all of the digits cannot be the same)
// The final digit must be even
// The sum of all the digits must be greater than 16
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
// Example
//
// validateCreditCard('9999-9999-8888-0000'); // Returns: true
// Hint: Remove the dashed from the input string before checking if
// the input credit card number is valid.
//
// Bonus: Return an object indicating whether the credit card is valid,
// and if not, what the error is
//
// { valid: true, number: 'a923-3211-9c01-1112' }
// { valid: false, number: 'a923-3211-9c01-1112', error: ‘wrong_length’ }
// Double Bonus: Make your credit card scheme even more advanced! What are the
// rules, and what are some numbers that pass or fail? Ideas: check expiration
// date! Check out the Luhn Algorithm for inspiration.

var buildJSON = function(valid, num, error) {
  console.log({ "valid": valid, "card": num, "error": error });
}

var errorCode = function(opts) {
  switch (opts) {
    case "num":
      return "Must be 16 numbers"
    case "nan":
      return "Only numbers accepted."
    case "dif":
      return "You must have at least two different digits represented."
    case "fin":
      return "The final digit must be even."
    case "sum":
      return "The sum of all the digits must be greater than 16."
    case "luh":
      return "The digits do not pass the Luhns algorithm."
    case "val":
      return null
  }
}
// Luhn Example:
// Step																	Total
// Original Number:	4	5	5	6	7	3	7	5	8	6	8	9	9	8	5	5
// Drop the last digit:	4	5	5	6	7	3	7	5	8	6	8	9	9	8	5
// Reverse the digits:	5	8	9	9	8	6	8	5	7	3	7	6	5	5	4
// Multiple odd digits by 2:	10	8	18	9	16	6	16	5	14	3	14	6	10	5	8
// Subtract 9 to numbers over 9:	1	8	9	9	7	6	7	5	5	3	5	6	1	5	8
// Add all numbers:	1	8	9	9	7	6	7	5	5	3	5	6	1	5	8		85
// Mod 10:	85 modulo 10 = 5 (last digit of card)

var luhnsAlgorithm = function(n) {
  var arr = n.split("");
  var checkNum = arr.pop();
  var reversed = arr.reverse();
  var cardNums = [];
  for (var i = 0; i < reversed.length; i++) {
    var temp = Number(reversed[i]);
    if (i % 2 === 0 || i === 0) {
      temp = reversed[i] * 2;
    }
    if (temp > 9) {
      temp -= 9;
    }
    cardNums.push(temp);
  }
  var modNum = cardNums.reduce(function(a,b) { return a + b },0);
  return modNum % 10 === Number(checkNum)
}

var twoDifferentNums = function(n) {
  var arr = n.split("");
  for (var i = 1; i < arr.length; i++) {
    if (arr[0] !== arr[i]) {
      return true;
    }
  }
  return false;
}

var lastIsEven = function(n) {
  return n[n.length - 1] % 2 === 0
}

var sumDigits = function(n) {
  var arr = n.split("");
  var sum = arr.reduce(function(a,b) { return Number(a) + Number(b) }, 0);
  return sum > 16;
}

var validateCreditCard = function(n) {
  var jsonData = {};
  var num = n.split("-").join("");
  if (isNaN(num)) {
    buildJSON(false, num, errorCode("nan"));
    return;
  }
  if (num.length !== 16) {
    buildJSON(false, num, errorCode("num"));
    return;
  }
  if (!twoDifferentNums(num)) {
    buildJSON(false, num, errorCode("dif"));
    return;
  }
  if (!lastIsEven(num)) {
    buildJSON(false, num, errorCode("fin"));
    return;
  }
  if (!sumDigits(num)) {
    buildJSON(false, num, errorCode("sum"));
    return;
  }
  buildJSON(true, num, errorCode("val"));
}

// Valid test cases:
// 4556737586899855
// 3540464678309815
// 376988248259600

// Must have a pair number of digits
var validateCreditCard2 = function(n) {
  var jsonData = {};
  var num = n.split("-").join("");
  if (!luhnsAlgorithm(num)) {
    buildJSON(false, num, errorCode("luh"));
    return;
  }
  buildJSON(true, num, errorCode("val"));
}
