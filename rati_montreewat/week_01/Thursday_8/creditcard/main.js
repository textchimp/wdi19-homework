// Credit Card Validation
//
// You're starting your own credit card business.
//You've come up with a new way to validate credit cards
//with a simple function called validateCreditCard that returns true or false.
//
// Here are the rules for a valid number:
//
// Number must be 16 digits, all of them must be numbers
// You must have at least two different digits represented (all of the digits cannot be the same)
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




//Functions :

//1st condition
// string -> boolean
//Interp. given the manipulated credit card number i( '9999-9999-8888-0000'),
//it will check whether :
// ---Number is 16 digits
// ---all of them are numbers

var isvalidChar = function(string) {
  if ((string.length === 16) && (areAllnum(string))) {
    return true;
  } else {
    return false;
  }
}

//2nd condition
// string -> boolean
//Interp. given the manipulated credit card number i( '9999999988880000'),
//it will check whether :
// ---Number is 16 digits
// ---all of them are numbers

var areAllnum = function (string) {
  for (var i = 0; i < string.length; i++) {
    if (isNaN(parseInt(string[i]))) {
      result = false;
      break;
    } else {
      result = true;
    }
  }
  return result;
}

console.log(areAllnum('a92332119c011112'));
console.log(areAllnum('4444444444444444'));

console.log(isvalidChar('a92332119c011112')); //since contain character
console.log(isvalidChar('4444444444444444'));
console.log(isvalidChar('444444444444'));    // since it is not 16 digits

//2nd condition
// string -> boolean
//Interp. given the manipulated credit card number ie( '9999999988880000'),
//it will check whether :
// ---You  have at least two different digits represented
// (all of the digits cannot be the same)


var isdifferrentDigit = function(string) {
  for (var i = 0; i < string.length; i++) {
    for (var j = 0; j < string.length; j++) {
      if (string[j] !== string[i]) {
        result = true;
        break;
      } else {
        result = false;
      }
    }
  }
  return result;
}

console.log(isdifferrentDigit('4144444444444444'));
console.log(isdifferrentDigit('4444444444444444'));

//3rd condition
// string -> boolean
//Interp. given the manipulated credit card number ie( '9999999988880000'),
//it will check whether :
// --- the final digit is even.

var isEven = function(string) {
  if ((parseInt(string.slice(-1)) % 2 ) === 0) {
    return true;
  } else {
    return false;
  }
}

console.log(isEven('6666666666666661'));
console.log(isEven('4444444444444444'));

//4th condition
// string -> boolean
//Interp. given the manipulated credit card number ie( '9999999988880000'),
//it will check whether :
// --- The sum of all the digits is greater than 16.

var issumgreaterthan16 = function (string) {
  var sum = 0;
  for (var i = 0; i < string.length; i++) {
    sum += parseInt(string[i]);
  }
  if (sum > 16) {
    return true;
  } else {
    return false;
  }
}

console.log(issumgreaterthan16('1111111111111110'));
console.log(issumgreaterthan16('1111111111111117'));


//combine all 4 conditions together
// string -> boolean
//Interp. given the string of credit card number ie( '9999-9999-8888-0000'),
//It will manipulate the string in easier form ie( '9999999988880000'),
//Next
//it will check all 4 conditions above and return true or false.


var validateCreditCard = function(string) {
  var new_string = string.split("-").join('');
  if (isvalidChar(new_string) && isdifferrentDigit(new_string) && isEven(new_string) && issumgreaterthan16(new_string)) {
    return true;
  } else {
    return false;
  }
}


console.log(validateCreditCard('9999-9999-8888-0000'));
console.log(validateCreditCard('6666-6666-6666-1666'));
console.log(validateCreditCard('a923-3211-9c01-1112'));
console.log(validateCreditCard('4444-4444-4444-4444'));
console.log(validateCreditCard('1111-1111-1111-1110'));
console.log(validateCreditCard('6666-6666-6666-6661'));

// Bonus: Return an object indicating whether the credit card is valid, and if not, what the error is

// string -> Object
//Interp. given the string of credit card number ie( '9999-9999-8888-0000'),
//It will manipulate the string in easier form ie( '9999999988880000'),
//Next,
//it will eeturn an object indicating whether the credit card is valid, and if not, what the error is.

var object_validateCreditCard = function(string) {
  if (validateCreditCard(string)) {
    return {
        valid : validateCreditCard(string),
        number : string}
      } else {
        var new_string = string.split("-").join('');
        whyerror = [];
        if (! isvalidChar(new_string)) {
            whyerror.push("invalid_charactor");
        }
        if (! isdifferrentDigit(new_string)) {
            whyerror.push("only_one_type_of_number");
        }
        if (! isEven(new_string)) {
            whyerror.push("odd_final_number");
        }
        if (! issumgreaterthan16(new_string)) {
            whyerror.push("sum_less_than_16");
        }
        return {
            valid : validateCreditCard(string),
            number : string,
            error : whyerror }
      }
    }

  console.log(object_validateCreditCard('9999-9999-8888-0000'));
