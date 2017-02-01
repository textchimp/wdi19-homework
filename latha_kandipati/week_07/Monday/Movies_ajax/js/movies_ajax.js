$(document).ready(function(){
  $('#btnGo').on('click', getMovieInfo );
  $('#movie').keypress( getMovieInfoOnKeyPress );
  $('.images').on('click', 'img', displaySingleMovie );

  function getMovieInfoOnKeyPress(event){
    if (event.which === 13){
      getMovieInfo();
    }
  }

  function getMovieInfo(){
    var inpString = $('#movie').val();
    if (inpString === "" )
    {
      var noInput = document.createElement('h1');
      noInput.textContent = "Please enter the input string.";
      noInput.className = "center";
      $('.images').append(noInput);
      return;
    }
    console.log(inpString);
    var xhr = new XMLHttpRequest();
    httpUrl = 'http://omdbapi.com/?s='+inpString;
    console.log(httpUrl);
    xhr.open('GET',httpUrl); //Getting the url
    xhr.send();

    xhr.onreadystatechange = function (){
      if (xhr.readyState !== XMLHttpRequest.DONE) {return; }
      var movieInfo = JSON.parse(xhr.responseText);
      displayMovie(movieInfo, inpString);
    }
  }

  function displayMovie(movieInfo, searchString){
    // debugger;
    //Clean the prev page
    $('.images').html("");
    $('#movie-details').html("");

    if (movieInfo["Error"] === "Movie not found!"){
      // Title
      var notFound = document.createElement('h1');
      notFound.textContent = "There is no matching movie title with '"+searchString+
                              "'. Try giving shorter word.";
      notFound.className = "center";
      $('.images').append(notFound);
      return;
    }

    for (var i=0; i < movieInfo["Search"].length; i++)
    {
      //Get movie info
      var movie = movieInfo["Search"][i]

      //Poster
      if (movie["Poster"] === "N/A"){
        movie["Poster"] = "http://donnaplay.us/images/movie-poster.jpg"
      }
      var image = document.createElement('IMG')
      image.src = movie["Poster"]
      image.alt = movie["Title"] + " Image"
      image.className = "slides"
      $(image).attr('id', movie["imdbID"]);
      $('.images').append(image);
    }

    var div = document.createElement('div');
    div.className = "center"
    $(div).attr('id',"wrapper");
    $('.container').append(div);

    var imageDiv = $('.images');
    $("#wrapper").append(imageDiv);
  }

  function displaySingleMovie(){
    var imdbId = $(this).attr('id');
    console.log(imdbId);

    var xhr = new XMLHttpRequest();
    httpUrl = 'http://omdbapi.com/?i='+imdbId;
    console.log(httpUrl);
    xhr.open('GET',httpUrl); //Getting the url
    xhr.send();

    xhr.onreadystatechange = function (){
      if (xhr.readyState !== XMLHttpRequest.DONE) {return; }
      var movieInfo = JSON.parse(xhr.responseText);
      displaySingleMovieDetails(movieInfo);
    }
  }

  function displaySingleMovieDetails(movieInfo){
    //Clean the prev results
    $('#movie-details').html("");

    var justSpace = document.createElement('div');
    justSpace.className = "just-space";
    $('.container').append(justSpace);

    var div = document.createElement('div');
    div.className = "center";
    $(div).attr('id',"movie-details");
    $('.container').append(div);

    // Title
    var title = document.createElement('h1');
    title.textContent = movieInfo["Title"];
    $('#movie-details').append(title);

    //Actors
    var actors = document.createElement('h2');
    actors.textContent = "Starring : "+movieInfo["Actors"];
    $('#movie-details').append(actors);

    //Released on:
    var released = document.createElement('h2');
    released.textContent = "Released: "+movieInfo["Released"];
    $('#movie-details').append(released);

    //Genre
    var genre = document.createElement('h2');
    genre.textContent = "Genre: "+movieInfo["Genre"];
    $('#movie-details').append(genre);

    //Rating:
    var imdbRating = document.createElement('h2');
    imdbRating.textContent = "Rating: "+movieInfo["imdbRating"];
    $('#movie-details').append(imdbRating);

    //Directed by: Written by:
    var staff = document.createElement('h2');
    staff.textContent = "Directed by: "+movieInfo["Director"]+
                        " , Written by: "+movieInfo["Writer"];
    $("#movie-details").append(staff);

    //Plot
    var plot = document.createElement('h3');
    plot.textContent = "Plot: "+movieInfo["Plot"];
    $("#movie-details").append(plot);
  }


});
