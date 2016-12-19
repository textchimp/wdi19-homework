var button = document.getElementById('lib-button');

var lib = function () {
  var noun = document.getElementById("noun").value;
  var adjective = document.getElementById("adjective").value;
  var person = document.getElementById("person").value;
  var out = person + " really likes " + adjective + " " + noun + ".";
  document.getElementById('story').innerHTML = out;
};

button.addEventListener('click', lib);
