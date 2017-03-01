$(document).ready(function () {

  var movies = {}

  var cleanResultsUI = function () {
    $('#results__message').html = "";
    $('#results__list').children().remove();
    $('#results__details').children().remove();
  };



  $('#search__button').on("click", function () {

    var titleToSearch = $('#search__title').val();

    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {
      if (xhr.readyState < 4) {return;};
      var searchResult = JSON.parse(xhr.responseText);
      cleanResultsUI();
      if (searchResult.Response === 'False') {
        $('#results__message').html('<p>'+ searchResult['Error'] +'</p>');
      }
      else {
        $('#results__message').html('<p> Search Result:</p>');
        movies = searchResult['Search'];
        moviesList = '<ul>'
        for (var i = 0; i < movies.length; i++) {
          moviesList += '<li>'+ movies[i]['Title'] +'</li>';
        };
        moviesList += '</ul>';
        $('#results__list').append(moviesList);
      };

    };

    xhr.open('GET', 'http://omdbapi.com/?s=' + titleToSearch);
    xhr.send();

  });


  $(document).on("click", "#results__list ul li", function () {
    var title = this.innerText;
    for (var i = 0; i < movies.length; i++) {
      if (movies[i]['Title'] === title) {
        $('#results__details').children().remove();
        $('#results__details').append('<img src="'+ movies[i]['Poster'] +'">');
      }
    }
  });


});
