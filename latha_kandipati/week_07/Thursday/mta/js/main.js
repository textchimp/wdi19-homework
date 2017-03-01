$(document).ready(function(){

  //Global variables
  var allNRoutes = [];
  var allLRoutes = [];
  var all6Routes = [];
  var route = [];
  var allNStops = [];
  var allLStops = [];
  var all6Stops = [];

  $('#fromLine').change(updateStopMenu);
  $('#toLine').change(updateStopMenu);
  $('#go').on('click', getRoute);

  //Common function for both to and from stops menu list
  function updateStopMenu() {
    $("h2#no-input").hide();
    var selected = $(this).val();
    console.log(selected);
    console.log(linesObj[selected]);
    var list = linesObj[selected];
    console.log( $(this).attr('id') );
    var $stop;
    if ( $(this).attr('id') === "fromLine" ){
      $stop = $("#fromStop");
    }
    else{
      $stop = $("#toStop");
    }

    //Clearing previous data
    $stop.text('');

    // create new options
    for (var i=0; i<list.length; i++){
      // add the new option
      $stop.append($('<option>', {
        value: list[i],
        text: list[i]
      }));
    }
  }

  //Get the route
  function getRoute(){
    var fromLine = $('#fromLine').val();
    var fromStop = $('#fromStop').val();
    var toLine = $('#toLine').val();
    var toStop = $('#toStop').val();
    if ( (fromLine === "Choose From Line") || (toLine === "Choose From Line") ||
         (fromStop === "Please choose from below") || (toStop === "Please choose from below") ) {
           $("h2#no-input").show();
           return;
    }
    planTrip(fromLine, fromStop, toLine, toStop);
    drawRoute();
  }

  function drawRoute(){
    var routeMap = document.createElement('canvas');
    var canvasContext = routeMap.getContext('2d');
    routeMap.width = window.innerWidth;
    // routeMap.height = window.innerHeight;
    routeMap.height = 500;

    $('body').append(routeMap);
    populateAllroutes();
    canvasContext.beginPath();
    drawStops(canvasContext);
    for (var i = 0; i< allNRoutes.length-1; i++){
      canvasContext.moveTo(allNRoutes[i].x, allNRoutes[i].y);
      canvasContext.lineTo(allNRoutes[i+1].x, allNRoutes[i+1].y);
      canvasContext.stroke();
    }
    for (var i = 0; i< allLRoutes.length-1; i++){
      canvasContext.moveTo(allLRoutes[i].x, allLRoutes[i].y);
      canvasContext.lineTo(allLRoutes[i+1].x, allLRoutes[i+1].y);
      canvasContext.stroke();
    }
    for (var i = 0; i< all6Routes.length-1; i++){
      canvasContext.moveTo(all6Routes[i].x, all6Routes[i].y);
      canvasContext.lineTo(all6Routes[i+1].x, all6Routes[i+1].y);
      canvasContext.stroke();
    }

  }

  function populateAllroutes(){
    //Populate N line
    for (var i=0; i<linesObj["N"].length; i++){
      allNRoutes.push({
        x: 100 + (30*i),
        y: 100 + (30*i)
      });
    }
    //Populate L line
    for (var i=0; i<linesObj['L'].length; i++){
      allLRoutes.push({
        x: 350 - (33*i),
        y: 100 + (30*i)
      });
    }
    //Populate 6 line
    for (var i=0; i<linesObj['6'].length; i++){
      all6Routes.push({
        x: 218,
        y: 220 + (30*i)
      });
    }
  }

  function drawStops(canvasContext){
    var width = 5;
    var height = 5;
    for (var i=0; i< allNRoutes.length; i++){
      canvasContext.fillRect(allNRoutes[i].x, allNRoutes[i].y, width, height);
    }
    for (var i=0; i< allLRoutes.length; i++){
      canvasContext.fillRect(allLRoutes[i].x, allLRoutes[i].y, width, height);
    }
    for (var i=0; i< all6Routes.length; i++){
      canvasContext.fillRect(all6Routes[i].x, all6Routes[i].y, width, height);
    }
  }

});
