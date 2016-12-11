/*
Write a function that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise.
*/



var findVowel = function(letter) {

    var vowels = ["a", "e", "i", "o", "u"];

    for(var i = 0; i < vowels.length ; i++){

      if (letter === vowels[i]) {

      return true;

    } else {

      return false;
}
}
}

console.log(findVowel("e"));
