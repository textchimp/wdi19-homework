$(document).ready(function () {

  var $loading = $('#loadingDiv').hide();
  $(document)
    .ajaxStart(function () {
      $loading.show();
    })
    .ajaxStop(function () {
      $loading.fadeOut();
      $('.bar-value').animate({width:'toggle'},1000);
  });


  $.ajax({
    url: 'https://nomadlist.com/api/v2/cities/near',
  }).done(function (cities) {
    for (var i = 0; i < cities.length; i++) {
      if (cities[i].name === "Cairns" || cities[i].name === "Darwin") { continue; }
      var $option = $('<option>').attr('value', cities[i].url);
      $option.text(cities[i].name);
      $option.appendTo('#form__select');
    }
  });


  $('form').on('submit', function (event) {
    event.preventDefault();
    var city = $('#form__select').val();
    var url = 'https://nomadlist.com/api/v2/list/cities/' + city;

    $.ajax({
      url: url,
    }).done(function (cityInfo) {
      $('#image').css('background-image', 'url("https://nomadlist.com' + cityInfo.result[0].media.image[500] + '")');
      $('#name').text(cityInfo.result[0].info.city.name);
      $('#airbnb-daily').text("Airbnb median daily cost: $" + cityInfo.result[0].cost.airbnb_median.AUD);
      $('#nomad-monthly').text("Monthly cost of living for a digital nomad: $" + cityInfo.result[0].cost.nomad.AUD);
      $('#friendly').html("<p>Friendly</p><div class='bar-container'><div class='bar-value' style='width: " + cityInfo.result[0].scores.friendly_to_foreigners * 100 + "%'></div></div>");
      $('#life').html("<p>Life quality</p><div class='bar-container'><div class='bar-value' style='width: " + cityInfo.result[0].scores.life_score * 100 + "%'></div></div>");
      $('#nightlife').html("<p>Nightlife</p><div class='bar-container'><div class='bar-value' style='width: " + cityInfo.result[0].scores.nightlife * 100 + "%'></div></div>");
      $('#safety').html("<p>Safety</p><div class='bar-container'><div class='bar-value' style='width: " + cityInfo.result[0].scores.safety * 100 + "%'></div></div>");
    });

  });

});
