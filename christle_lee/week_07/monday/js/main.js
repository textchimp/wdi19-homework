
$(document).ready(function() {

    $('#search-button').on('click', function(){
      var xhr = new XMLHttpRequest(); //A javascript web browser request info from another server
      xhr.onreadystatechange = function() {
      if (xhr.readyState < 4) {return; } //Request is still in progress, so abort.
      //console.log('the ready state changed', xhr.readyState, xhr.responseText);
      var movieInfo = JSON.parse(xhr.responseText);
      var poster = movieInfo['Poster'];
      var title = movieInfo['Title'];
      // console.log(movieInfo);
      // console.log(poster);
      $('.title').html(title);
      $('.poster').attr("src", poster);
      };
      var searchOmbd = function(input) {
        var url = "http://omdbapi.com?t=" + input;
        xhr.open('GET', url);
        xhr.send(); //asynchronous

      };
      // console.log('clicked')
      var input = $('#search').val();
      searchOmbd(input);

    });
});
