$(document).ready(function(){
var doMTA = function(line1, stop1, line2, stop2){
  //MTA - multi line journey - Prompting user for data, invalid stations/ line, start and end at the same station.

  var line = {
  'N': ["Times Square", "34th", "28th", "23rd", "Union Square","8th"],
  'L':  ["8th", "6th", "Union Square", "3rd", "1st"],
  '6':["Grand Central", "33rd", "28th", "23rd", "Union Square", "Astor Place"]
  }
  //Plan 2 trips, one that takes you from the start to Union Square, the other from union square to the destination

  // variables that contain the list of stops of the two trips
  var stopsList1 = [];
  var stopsList2 = [];

  //turn the line into an array
  var line1a = line[line1];
  var line2a = line[line2];

  //Check to see if the line / stops are valid
  var planTrip = function (line1, stop1, line2, stop2){

    // If the line does not exist:
     if ((Object.keys(line)).indexOf(line1) < 0 ||  (Object.keys(line)).indexOf(line2) < 0 ){
      return "This line does not exist. Try again."

      // If the station does not exist:
    } else if (line1a.indexOf(stop1) < 0 || line2a.indexOf(stop2) < 0) {
      return "This stop does not exist. Try again."

      // If the destination is the same as the starting point
    } else if (line1 === line2 && stop1 === stop2){
      return "Starting point = Destination. Try again."

      //If the line and station exists:
    } else {
        direction("Union Square");
        print = print();
        numberOfStops= numberOfStops();
        total = print + numberOfStops;
        return total;

    }



  }

  // Are we going backwards or forwards along the line?
  // If going backwards, reverse the array
  var direction = function (change){
    //Trip1
    if ( line1a.indexOf(stop1) < line1a.indexOf(change) ){
      planTrip1(line1a, stop1, change, stopsList1);
    } else {
      planTrip1(line1a.reverse(), stop1, change, stopsList1);
    }

    //Trip 2
    if ( line2a.indexOf(change) < line2a.indexOf(stop2)){
      planTrip1(line2a, change, stop2, stopsList2);
    } else {
      planTrip1(line2a.reverse(), change, stop2, stopsList2);
    }
  }

  //Determines stops you will go through
  var planTrip1 = function (lineStart, stopStart, stopFinish, stopsList){
   for (var i = lineStart.indexOf(stopStart) ; i<lineStart.length; i++){
     if(stopFinish !== lineStart[i]){
       stopsList.push(lineStart[i+1]);
     } else {
        break;
      }
   }
  }

  //console.log section: Does the user need to change at Union Square?
  var print = function (){
    //no
     if (line1 === line2 ){
       return "<p>You must travel through the following stops on line "+ line1 + ": " + stopsList1.join(", ") + ", " + stopsList2.join(", ") +"</p>"
     };
    //yes
    if (line1 !== line2 ) {
      return "<p>You must travel through the following stops on line "+ line1 + ": " + stopsList1.join(", ") + ".</p>" + "<p>Change at Union Square.</p>" + "<p>Your journey continues through the following stops on line "+ line2 + ": " + stopsList2.join(", ") + "</p>"
    };
  };

  //number of stops
  var numberOfStops = function (){
    number = stopsList1.length  + stopsList2.length;
     return "<p>" + number + " stops in total</p>";
  }

  planTrip = planTrip(line1, stop1, line2, stop2);
  $('#info').append(planTrip);
}

$('#form').on('submit', function(){
  event.preventDefault();
  $('#info').html('');
  var line1 = $('#line1').val();
  var stop1 = $('#stop1').val();
  var line2 = $('#line2').val();
  var stop2 = $('#stop2').val();

  doMTA(line1, stop1, line2, stop2);

})


})//documentready
