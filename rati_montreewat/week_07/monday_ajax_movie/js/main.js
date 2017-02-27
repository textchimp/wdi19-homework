$(document).ready(function(){

  function getImage(title) {
    // debugger;
    $.ajax({
        type: "GET",
        dataType: "json",
        url: "http://www.omdbapi.com/?s=" + title,
        success: function(data){
          // Alien, Satantango
          console.log(data);
          if (data.Search === undefined) {
            $('#main').append(" <p>Image not found</p> ");
          } else if (data.totalResults === '1') {
            $('#main').append(' <img src="'+data.Search[0].Poster+'" alt=""> ');
          } else {
            for (var i = 0; i < data.Search.length; i++) {
              $('#main').append(' <img src="'+data.Search[i].Poster+'" alt=""> ');
            }
          }
        },
        error: function() {

          $('#main').append(" <p>Image not found</p> ");
        }
    });


}

   $('#searchmovie').click(function(event){
     event.preventDefault()
    //  debugger;
     $('#main > img').remove()
     $('#main > p').remove()
      var title = $('#form').val()
      getImage(title);
   });


 });
