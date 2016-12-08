/* Write a function that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise.*/

/*

var character = function (char){

  var vowel= ['a', 'e', 'i', 'o', 'u'];

  for (var i = 0; i< vowel.length; i++){
    if (char === vowel[i]){
    return true;
  } else {
    return false;
  }
}
}
console.log(character('u')); */

var vowel = function (char){
  if(char === 'a' || char === 'e' || char === 'i' || char === 'o' || char === 'u') {
    return true
  } else {return false
  }
}
console.log(vowel('a'));
console.log(vowel('m'));
console.log(vowel('i'));
