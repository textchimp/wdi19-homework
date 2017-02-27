$(document).ready(function(){

var xhr = new XMLHttpRequest();

var search = function () {
  var title = $('#title').val();
  console.log(title);

  xhr.onreadystatechange = function () {

    if(xhr.readyState < 4) {return;}

    var movieInfo = JSON.parse(xhr.responseText);
    console.log(movieInfo);

    var poster = movieInfo['Poster'];
    console.log(poster);

    $("#poster").attr("src", poster)


  }
  xhr.open('GET', 'http://omdbapi.com/?t=' + title);
  xhr.send();



};

$('#searchButton').on('click', search)
});
