
var imageContainer = function(image){
  var changeImage = document.getElementById('poster');
  $('#poster').prepend('<img src=' + image +' class="image">');
  $('#imageh').attr("src",image);
  console.log('happy');
};

$(document).ready(function() {



document.getElementById("searchButton").onclick = function(){
  var input = document.getElementById('title').value;
  var url = 'http://omdbapi.com/?t=' + input;
  var searchUrl =  'http://omdbapi.com/?s=' + input;
  makeRequest(searchUrl);
};

function makeRequest(url) {

  var xhr = new XMLHttpRequest();

  xhr.onreadystatechange = function (){
    if (xhr.readyState < 4) {
      return;
    }
    var movieListJson = JSON.parse(xhr.responseText);
    movieList = movieListJson['Search']


    if (movieListJson['Response']=='False'){
      $('.list').html('');
      $('.list').append('<p class="lead">Sorry, there is no such title. Try again.</p>')
    }
    else if (movieList.length > 1){
      $('.list').html('');
      $('.list').append('<h3>Select a movie: </h3>')
      movieList.forEach(function(movie){
        movieTitle = movie['Title']
        movieId = movie['imdbID']
        moviePoster= movie['Poster']
        if (moviePoster == 'N/A'){
          $('.list').append('<p>'+ movieTitle +' (no poster available) <p>')
        } else {
          $('.list').append('<a href="javascript:void(0)" onclick="imageContainer(\''+moviePoster+'\')">'+ movieTitle +'</a><p>')
        }
      })
    }
    else {
      $('.list').html('');
      var poster = movieList[0]['Poster'];
      $('#poster').prepend('<img src=' + poster +' class="image">');
      $('#imageh').attr("src",poster);
    }
  }
  xhr.open('GET', url );

  xhr.send();
  }


});
