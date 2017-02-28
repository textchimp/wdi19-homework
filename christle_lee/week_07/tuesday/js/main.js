$(document).ready(function(){

  $('form').on('submit', function(event) {
    event.preventDefault();
    console.log('click');

    var paragraphs = $('#paragraphs').val();
    var url = "https://baconipsum.com/api/?type=all-meat&paras=" + paragraphs + "&start-with-lorem=1";

    $.ajax({
      url: url,
    }).done(function (baconise) {
      var $p = $('<p>').text(baconise);
      $p.appendTo('body');
    })

  });
});
