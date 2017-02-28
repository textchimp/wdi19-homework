

$(document).ready(function() {
  $('form').on('submit', function(event){

    event.preventDefault();
    $('#listHolder').html('');
    var startDate = $('#startDate').val();

    var url = 'https://api.nasa.gov/neo/rest/v1/feed?start_date=' + startDate + '&end_date=' + startDate + '&api_key=IgBenehT2M0TDhHIUjPKnfv1HqaztAp4IkdTwnXU';

    $.ajax({
      url: url,
    }).done( function(asteroids){
      var astr= asteroids['near_earth_objects'][startDate]
      console.log(asteroids);
      var $count = $( "<p>" ).text("Asteroid Count: " +  asteroids['element_count']);
      $count.appendTo('#listHolder')
      astr.forEach(function(asteroid){
        var $name = $('<p>').text(asteroid['name']);

        $name.appendTo('#listHolder');
        $name.on('click', function () {
          $('#asteroidHolder').html('');
          var $asteroidName = $('<h2>').text(asteroid['name']);
          var $height =$('<p>').text("Absolute Magnitude (magnitude at 1AU from sun and observer): " + asteroid['absolute_magnitude_h'] + " mags")
          var $diameter= $('<p>').text("Diameter: " + asteroid['estimated_diameter']['meters']['estimated_diameter_min'].toFixed(2) + " - " + asteroid['estimated_diameter']['meters']['estimated_diameter_max'].toFixed(2) + " meters")
          var $orbitingBody = $('<p>').text("Orbiting body: " + asteroid['close_approach_data'][0]['orbiting_body'])
          $asteroidName.appendTo('#asteroidHolder');
          $height.appendTo('#asteroidHolder');
          $diameter.appendTo('#asteroidHolder');
          $orbitingBody.appendTo('#asteroidHolder');
        });

      })


      console.log(astr)

    }); //function(asteroids)

  }); //onsubmit
}); //documentready
