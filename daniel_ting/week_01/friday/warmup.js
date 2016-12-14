var SergeSays = function(input) {
  if (input[input.length - 1] === '?') {
    return 'Sure.';
  } else if (input === input.toUpperCase()) {
    return 'Woah, chill out!';
  } else if (input === 'Serge') {
    return 'Fine. Be that way!';
  } else {
    return 'Whatever';
  }
}
