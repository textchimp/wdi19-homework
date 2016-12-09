// Write a function filterLongWords that takes an array of words and an number i and returns the array of words that are longer than i.

var array = ['blue', 'pink', 'yellow', 'blue', 'orange'];

var newArray=[];

var filterLongWords =  function (i){
  for (var a = 0; a < array.length; a++){
    if( array[a].length > i ){
      newArray.push(array[a]);
    }
  }
  return newArray;
}

console.log(filterLongWords(5)); // answer: yellow, orange
