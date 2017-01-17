$('img').on('click', function() {
  window.location = "https://www.google.com/search?q=" + $(this).attr('id');
});
