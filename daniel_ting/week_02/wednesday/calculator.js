var squareButton = document.getElementById('square-button');

var square = function() {
  var squareInput = document.getElementById("square-input").value;
  return squareInput * squareInput;
}

squareButton.addEventListener('click', square);
