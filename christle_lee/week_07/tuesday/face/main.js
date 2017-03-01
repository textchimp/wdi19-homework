$(document).ready(function(){

  $('form').on('submit', function(event) {
    event.preventDefault();
    var image = $('#image').val();
    var params = {
        // Request parameters
        "visualFeatures": "Faces, Description",
        "language": "en",
    };

    $.ajax({
        url: "https://westus.api.cognitive.microsoft.com/vision/v1.0/analyze?" + $.param(params),
        beforeSend: function(xhrObj){
            // Request headers
            xhrObj.setRequestHeader("Content-Type","application/json");
            xhrObj.setRequestHeader("Ocp-Apim-Subscription-Key","6e6274e7f61240cea5764d9e3bc16ad6 ");
        },
        type: "POST",
        // Request body
        data: '{ "Url": "' + image + '" }',
    })
    .done(function(data) {
      // console.log(data.description.captions[0].text)
      var $h1 = $('<h1>').text('You are ' + data.faces[0].age + ' years old!');
      var $img = $('<img>').attr('src', image);
      var $p = $('<p>').text('Caption: ' + data.description.captions[0].text);
      $("body").append($h1, $img, $p);
    })
    .fail(function() {
      var $img = $('<img>').attr('src', 'https://http.cat/402');
      $img.appendTo('body')
    });
  });
});
