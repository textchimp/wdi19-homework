var $links = $('ul a');

var thumbnailify = function(e) {
  var $l = $(this);
  var href = $l.attr('href');
  var thumbnailURL = youtube.generateThumbnailUrl(href);
  var $img = $('<img>');
  $img.attr('src', thumbnailURL);
  $l.append($img);
  $l.on('click', function(event) {
    event.preventDefault();
    var href = $(this).attr('href');
    var embed = '<iframe width="560" height="315" src="' + youtube.generateEmbedUrl(href) + '" frameborder="0" allowfullscreen></iframe>';
    $('#player').hide().html(embed).fadeIn(4000);
  });
}

$links.each(thumbnailify);
