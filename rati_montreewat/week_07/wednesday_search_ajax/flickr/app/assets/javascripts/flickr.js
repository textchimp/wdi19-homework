var app = {
  currentPage: 1,
  lastPage: false
  //requestInProgress: false
};



var searchFlickr = function (q) {
  if (app.lastPage) {
  return;
}
  console.log('Searching flickr for', q);

  var flickrURL = 'https://api.flickr.com/services/rest/?jsoncallback=?';

  $.getJSON(flickrURL, {
    method: 'flickr.photos.search',
    api_key: '2f5ac274ecfac5a455f38745704ad084',
    text: q,
    format: 'json'
  }).done(function (results) {
    console.log(results);
    _(results.photos.photo).each(function (p) {
      var url = generateURL(p);
      var $img = $('<img/>', {src: url});
      $img.appendTo('#images');
    });
  });

};

var generateURL = function (photo) {
  return [
    'http://farm',
    photo.farm,
    '.static.flickr.com/',
    photo.server,
    '/',
    photo.id,
    '_',
    photo.secret,
    '_q.jpg' // Change the q for different sizes
  ].join('');
}

$(document).ready(function () {
  $('#search').on('submit', function (event) {
    event.preventDefault();

    var query = $('#query').val();
    searchFlickr( query );
  });

  var kinderSearchFlickr = _.debounce(searchFlickr, 3000, true);


  $(window).on('scroll', function () {
    var documentHeight = $(document).height();
    var windowHeight = $(window).height();
    var scrollTop = $(window).scrollTop();

    var scrollBottom = documentHeight - (scrollTop + windowHeight);

    if (scrollBottom < 800) {
      var query = $('#query').val();
      searchFlickr( query );
    }

  });
});
