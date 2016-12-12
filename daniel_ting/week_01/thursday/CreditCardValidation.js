var validateCreditCard = function(number) {
  var originalFormat = number;
  number = number.split('-').join('');
  if (!parseInt(number) ) {
    return {valid: false, 'number': originalFormat, error: 'invalid characters'}
  } else if (number.length !== 16) {
    return {valid: false, 'number': originalFormat, error: 'wrong length'}
  } else if (number.split('').reduce(function(a, b) { return a === b ? a : NaN; })) {
    return {valid: false, 'number': originalFormat, error: 'only one type of number'}
  } else if (number % 2 !== 0) {
    return {valid: false, 'number': originalFormat, error: 'odd final number'}
  } else if (number.split('').reduce(function(a, b) { return parseInt(a) + parseInt(b); }, 0) < 16) {
    return {valid: false, 'number': originalFormat, error: 'sum < 16'}
  }
  return { valid: true, 'number': originalFormat }
}
