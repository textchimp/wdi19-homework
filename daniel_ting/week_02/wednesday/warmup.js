var anagram = function(word, list) {
  var w = word.split("").sort().join("");
  var l = [];
  for (var i = 0; i < list.length; i++) {
    l[i] = list[i].split("").sort().join("");
    if (w === l[i]) {
      return list[i];
    }
  }
  return false;
}
