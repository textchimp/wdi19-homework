var lines = {n: ['8th','Union Square', "23rd", '28th', '34th'],
             l: ['8th', '6th', 'Union Square', '3rd', '1st'],
             s: ['Astor Place', 'Union Square', '23rd', '28th', '33rd', 'Grand Central']};

var tripStops = [];
var tripStopsSecond = [];
var oneLine = false  //flag so final result doesnt spit out if single trip triggered. break statement waant doing the

var trip = function (a,b){    //small function to handle single line trips
  var start = startLine.indexOf(a);
  var end =  startLine.indexOf(b);

  if (start < end){
    for (var i = start; i <= end; i++) {
    tripStops.push(startLine[i]);}
  }//if
  if (start > end){
    for (var i = start; i >= end; i--) {
    tripStops.push(startLine[i]);}//for
  }//if
  console.log("You must travel through the following stops on the " + answerStart + " line:  " + tripStops.toString() + '. This is a total of '+ (tripStops.length - 1) + ' stops.')
  oneLine = true
}//trip
      var totalTrip = function(a, startStation, e, endStation){  //main function
          if ((startStation === endStation) && (a === e)){ return "You are already here dummy";}// checks trip isnt redundant
          if (a === "n") {startLine = lines.n; answerStart = "N";} //selecting our lines, there has to be a better way.
          if (a === "l") {startLine = lines.l; answerStart = "L";}
          if (a === "s") {startLine = lines.s; answerStart = "6";}
          if (e === "n") {endLine = lines.n; answerEnd = "N";}
          if (e === "l") {endLine = lines.l; answerEnd = "L";}
          if (e === "6") {endLine = lines.s; answerEnd = "6";}
          if (startLine === endLine) { trip(startStation, endStation);}

          var start = startLine.indexOf(startStation);  // these 4 lines just make it so i dont need to type out such long identifiers
          var end = endLine.indexOf(endStation);
          var unionStart = startLine.indexOf('Union Square');
          var unionEnd = endLine.indexOf('Union Square');

          if (start < unionStart){//first conditional loop to take us to interchange
               for (var i = start; i <= unionStart; i++) {
               tripStops.push(startLine[i]);}//for
          }//if
            if (start > unionStart) { //other direction
               for (var i = start; i >= unionStart; i--) {
               tripStops.push(startLine[i]);}//for
           }// if
           if (unionEnd < end){ // 2nd leg of trip in ascending direction
                for (var i = unionEnd; i <= end; i++) {
                tripStopsSecond.push(endLine[i]);}//for
           }//if
             if (unionEnd > end){ //2nd leg of trip in descending direction
                for (var i = unionEnd; i >= end; i--) {
                tripStopsSecond.push(endLine[i]);}//for
            }// if
            tripStops.pop(); tripStopsSecond.shift(); //removing interchange from our answers
            if (oneLine === false) {console.log("You must travel through the following stops on the " + answerStart + " line:  " + tripStops.toString() + ' , then interchange at Union Square to the ' + answerEnd + " line and travel through " + tripStopsSecond.toString() + ' This is a total of ' + (tripStops.length+tripStopsSecond.length+1) + " stops.")}
        } //totaltrip
