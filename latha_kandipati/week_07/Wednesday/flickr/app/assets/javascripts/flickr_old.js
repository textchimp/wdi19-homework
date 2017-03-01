$(document).ready(function(){
  //Global data
  var app = {
    ajaxOngoing: false,
    pageCntr: 0,
    lastPage: 1
  };


  //Event handlers
  //Search
  $('#search').on('submit', getFlickr);
  //On scroll
  $(window).on('scroll', updateWindow);
  //Scroll to top
  $("#to-top").on('click',scrollUp);


  function getFlickr(event){
    event.preventDefault();
    app.pageCntr = 0;

    $('h2#finished').hide();
    $('h2#no-match-found').hide();
    $('h2#empty-string').hide();

    //Clear previous results
    $('#images').html("");

    //retrieve the search field input
    var query = $('#query').val();
    if(query === ""){
      $('h2#empty-string').show();
      return;
    }
    //Search flickr for that term
    getFlikrUrl(query);
  }

  function getFlikrUrl(query){
    // app.ajaxOngoing = true;
    console.log("Calling flickr");
    if (app.lastPage <= app.pageCntr){
    // if (app.pageCntr === 5){
      app.pageCntr = -1;
    }

    if (app.pageCntr !== -1){

      // console.log("Searching flickr for: ",query);
      if (app.pageCntr === 1){
        $('h2#first-msg').show();
      }
      else {
        $('h2#msg').show();
      }
// debugger;
      var flickrURL = 'https://api.flickr.com/services/rest/?jsoncallback=?';

      //Similar to $.ajax get request
      $.getJSON(flickrURL, {
        method: 'flickr.photos.search',
        api_key: '2f5ac274ecfac5a455f38745704ad084',
        text: query,
        format: 'json',
        page: ++app.pageCntr
      }).done(displayPhotos);
    }
    else {
      $('h2#finished').show();
    }
  }

  function displayPhotos(results){
    $('h2#first-msg').hide();
    $('h2#msg').hide();
    console.log(results);
    app.lastPage = results.photos.pages;
    if(results.photos.photo.length === 0){
      $('h2#no-match-found').show();
      return;
    }

    _(results.photos.photo).each(function(p){
      // console.log(p);
      var url = generateURL(p);

      var $img = $('<img>', {src: url});
      $img.addClass("small-img");
      $('#images').append($img);
    });
    // app.ajaxOngoing = false;
  }

  function generateURL(photo){
    return [
      'http://farm',
      photo.farm,
      '.static.flickr.com/',
      photo.server,
      '/',
      photo.id,
      '_',
      photo.secret,
      '_q.jpg' //Change q for different sizes
    ].join('');
  }

  var debounceSearchFlickr = _.debounce(getFlikrUrl, 2000, true);

  function updateWindow(){
    var documentHeight = $(document).height();
    var windowHeight = $(window).height();
    var scrollTop = $(window).scrollTop();
    var scrollBottom = documentHeight - (scrollTop + windowHeight);

    if (scrollBottom < (documentHeight*0.03)){
      // console.log("Nearing the scroll bottom");
      // if (!app.ajaxOngoing){
        // $('#images').append("Loading more images...")
        var query = $('#query').val();
        debounceSearchFlickr(query);
      // }
    }

  }

  function scrollUp() {
    $("html, body").animate({ scrollTop: 0 }, "slow");
  }


});
