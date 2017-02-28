var page = 1;
var ready = true;

var searchFlickr = function(q) {
  console.log('Searching flickr for', q);
  var flickrURL = 'https://api.flickr.com/services/rest/?jsoncallback=?';

  $.getJSON(flickrURL, {
    method: 'flickr.photos.search',
    api_key: '2f5ac274ecfac5a455f38745704ad084',
    text: q,
    format: 'json',
    page: page
  }).done(function(results) {
    page++;
    console.log(results);
    _(results.photos.photo).each(function(p) {
      var url = generateURL(p);
      var $img = $('<img>').attr('src', url);
      $img.appendTo('#images');
    })
    if (page < results.photos.pages) {
      ready = true;
    }
  });
};

var generateURL = function(photo) {
  return ['http://farm',
          photo.farm,
          '.static.flickr.com/',
          photo.server,
          '/',
          photo.id,
          '_',
          photo.secret,
          '_q.jpg'].join('');
}

$(document).ready(function() {
  $('#search').on('submit', function(event) {
    $('#images').html('');
    page = 1;
    event.preventDefault();
    var query = $('#query').val();
    searchFlickr(query);
  })

  $(window).on('scroll', function() {
    var documentHeight = $(document).height();
    var windowHeight = $(window).height();
    var scrollTop = $(window).scrollTop();
    var scrollBottom = documentHeight - windowHeight - scrollTop;

    if (scrollBottom < 800) {
      if (ready) {
        var query = $('#query').val();
        searchFlickr(query);
        ready = false;
      }
    }
  })
});
