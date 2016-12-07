/*
Define a function reverseString that computes the reversal of a string.
For example, reverseString("jag testar") should return the string "ratset gaj".
*/
function reverseString(str)
{
  var reversedString = str.split("").reverse().join("");
  console.log(str);
  console.log(reversedString);
}

reverseString("You are a genius");

/*
Write a function findLongestWord that takes an array of words and returns the
length of the longest one.
*/
function findLongestWord(stringArray)
{
  var maxLength = stringArray[0].length;
  var longestWord = stringArray[0];
  stringArray.forEach(
    function(stringElement)
    {
      if (stringElement.length > maxLength)
      {
        maxLength = stringElement.length;
        longestWord = stringElement;
      }
    }
  );
  console.log("Array of Strings: "+stringArray);
  console.log("Longest word is: "+longestWord+" and it is : "+maxLength+" long.");
  return longestWord;
}

var globalStringArray = ["Alexander",
                          "Christle",
                          "Daniel",
                          "Daniele",
                          "Jessica",
                          "Matthew",
                          "Mel",
                          "Naomi",
                          "Ram",
                          "Rati",
                          "Santiago",
                          "Vidyullatha"];
findLongestWord(globalStringArray);

/*
Write a function filterLongWords that takes an array of words and an number i
and returns the array of words that are longer than i.
*/
function filterLongWords(stringArray, i)
{
  var localArrayOfWords = [];
  stringArray.forEach(
    function(stringElement)
    {
      if (stringElement.length > i)
      {
        localArrayOfWords.push(stringElement);
      }
    }
  );
  console.log("Given array of words: "+stringArray);
  console.log("Array of words that are crossing : "+i+" length are: "+localArrayOfWords);
  return localArrayOfWords;
}
filterLongWords(globalStringArray,5);
