$(document).ready(function() {
  $('button').on('click', function () {
    $('div').html('');
    $('body').attr('style', 'background: black');
    var url = 'http://hipsterjesus.com/api/';

    $.ajax({
      url: url,
    }).done(function(result) {

      var text = result.text.replace(/<p>|<\/p>/g, '');

      for (var i = 0; i < text.length; i++) {
        var $span = $('<span>').css({'top' : (Math.random() * innerHeight) + 'px', 'left' : (Math.random() * innerWidth) + 'px', 'font-size': Math.random() * 50 + 'px', 'color': '#'+(Math.random()*0xFFFFFF<<0).toString(16)}).text(text[i]).appendTo('body');
      }
    });
  });
});
