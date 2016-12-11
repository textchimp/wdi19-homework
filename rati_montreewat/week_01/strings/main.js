var  number;
var string;

var DrEvil = function (number) {
  if (number === 1000000) {
    return number+" dollars (pinky)"
  } else {
    return number+" dollars"
  }
}
console.log(DrEvil(1000));
console.log(DrEvil(1000000));

var mixUp = function (string1, string2) {
  var first_two1 = string1.slice(0,2);
  var first_two2 = string2.slice(0,2);
  var rest_string = function(string) {
    rest_charactor = [];
    for (i = 2; i < string.length; i++) {
        rest_charactor += string[i];
      }
      return rest_charactor
    }
  return first_two2+rest_string(string1)+" "+first_two1+rest_string(string2);
}

console.log(mixUp('mix', 'pod'));
console.log(mixUp('dog', 'dinner'));

var fixstart = function (string) {
  var first_charactor = string[0];
  var rest_charactor = [];
  for (i = 1; i < string.length; i++) {
    if (string[i] === first_charactor) {
      rest_charactor += "*";
    } else {
      rest_charactor += string[i];
    }
  }
  return first_charactor+rest_charactor;
}
console.log(fixstart('babble'));

var verbing = function (string) {
  if (string.length >= 3) {
    if ( string.slice(-3) !== "ing") {
      return string+"ing";
    }
    else {
      return string+"ly";
    }

  } else {
    return string;
  }
}
console.log(verbing('swim'));
console.log(verbing('swimming'));
console.log(verbing('go'));

var notBad = function(string) {
  var index_not = string.indexOf("not");
  var index_bad = string.indexOf("bad");
  if (string.includes("not") && string.includes("bad") && index_bad > index_not) {
    return string.substring(0, index_not)+"good"+string.substring(index_bad+3, string.length)
    }
  else {
    return string
  }
}
console.log(notBad('This dinner is not that bad!'));
console.log(notBad('This movie is not so bad!'));
console.log(notBad('This dinner is bad!'));
