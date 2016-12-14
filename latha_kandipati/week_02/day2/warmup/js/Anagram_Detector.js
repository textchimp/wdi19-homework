/*
Anagram Detector

Write a program that, given a word and a list of possible anagrams, selects the anagrams of the first word.

In other words, given: "listen" and ["enlists" "google" "inlets" "banana"] the program should return "inlets".

Suggestions

Start out by getting this working with discrete functions.
If you feel comfortable with that, try to put all your functions, collections, etc, into an object.
*/
// function anagramDetector(word, list)
// {
//   word = word.toLowerCase();
//   var anagramList = [];
//   var tempCntr = 0;
//   for (var i=0; i<list.length; i++){
//     list[i] = list[i].toLowerCase();
//     if (word.length === list[i].length){
//       console.log("word: ",word);
//       console.log("list["+i+"]: ",list[i]);
//       for (var j=0; j<word.length; j++){
//         for (var k=0; k<list[i].length;k++){
//           if (word[j] === list[i][k]){
//             console.log("Letter matched: updating counter");
//             tempCntr++;
//           }
//         }
//       }
//       if (tempCntr === word.length)
//       {
//         console.log("Seems like we have an anagram.");
//         var isInTheList = false;
//         for (var j=0; j<anagramList.length; j++)
//         {
//           if (list[i] === anagramList[j]){
//             console.log("Already in the Anagram list");
//             isInTheList = true;
//           }
//         }
//         if(!isInTheList){
//           console.log("New Anagram found: ",word, list[i]);
//           anagramList.push(list[i]);
//         }
//       }
//       tempCntr = 0;
//     }
//     else {
//       console.log("Word length does not match.");
//     }
//   }
//   if( anagramList.length != 0 ){
//   console.log("List of possible anagrams: ",anagramList);
//   return anagramList;
//   }
//   else {
//   console.log("No anagrams found.");
//   return false;
//   }
// }

function customSort(str){
  return str.split('').sort().join();
}
function anagramDetector(word, list)
{
  var anagramList = [];
  var sortedWord = customSort(word);
  for (var i=0; i<list.length; i++){
    var sortedList = customSort(list[i]);
    if( (sortedWord === sortedList) && (!anagramList.includes(list[i])) )
    {
      anagramList.push(list[i]);
    }
  }
  console.log("Anagram list: ",anagramList);
}

var word = "listens";
var list = ["enlists", "google", "inlets", "banana","slisten", "enlists"];
anagramDetector(word, list);
