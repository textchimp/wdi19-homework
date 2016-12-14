//MTA - multi line journey - Putting in a string character for the line name.

//planTrip('N', 'Times Square', '6', '33rd');
// console.log() shows output similar to this:
// "You must travel through the following stops on the N line: 34th, 28th, 23rd, Union Square."
// "Change at Union Square."
// "Your journey continues through the following stops: 23rd, 28th, 33rd."
// "7 stops in total."

var line = {
'N': ["Times Square", "34th", "28th", "23rd", "Union Square","8th"],
'L':  ["8th", "6th", "Union Square", "3rd", "1st"],
'6':["Grand Central", "33rd", "28th", "23rd", "Union Square", "Astor Place"]
}
//Plan 2 trips, one that takes you from the start to Union Square, the other from union square to the destination

// variables that contain the list of stops of the two trips
var stopsList1 = [];
var stopsList2 = [];

var lineName1;
var lineName2;
// Are we going backwards or forwards along the line?
// If going backwards, reverse the array

var planTrip = function (line1, stop1, line2, stop2){

lineName1 = line1;
lineName2 = line2;
var line1 = line[line1];
var line2 = line[line2];

  if ( line1.indexOf(stop1) < line1.indexOf("Union Square") ){
    planTrip1(line1, stop1, "Union Square", stopsList1);
  } else {
    planTrip1(line1.reverse(), stop1, "Union Square", stopsList1);
  }

  if ( line2.indexOf("Union Square") < line2.indexOf(stop2)){
    planTrip1(line2, "Union Square", stop2, stopsList2);
  } else {
    planTrip1(line2.reverse(), "Union Square", stop2, stopsList2);
  }


//console.log section
   //does the user need to change at Union Square?
   //no
   if (line1 === line2 ){console.log("You must travel through the following stops on line "+ lineName1 + ": " + stopsList1.join(", ") + ", " + stopsList2.join(", ") )};

   //yes
  if (line1 !== line2 ) {console.log("You must travel through the following stops on line "+ lineName1 + ": " + stopsList1.join(", ") + ". Change at Union Square. Your journey continues through the following stops on line "+ lineName2 + ": " + stopsList2.join(", "))};

  //number of stops
  var numberOfStops = stopsList1.length  + stopsList2.length;
   console.log(numberOfStops + " stops in total");

//reset the list of stops taken
   stopsList1 = [];
   stopsList2 = [];
}

//Determines stops you will go through
var planTrip1 = function (lineStart, stopStart, stopFinish, stopsList){
 for (var i = lineStart.indexOf(stopStart) ; i<lineStart.length; i++){
   if(stopFinish !== lineStart[i]){
     stopsList.push(lineStart[i+1]);
   } else { break;}
 }
}


planTrip('N', 'Times Square', 'N', '8th' ); //change required
planTrip('N', 'Times Square', 'L', '8th' ); //change required
planTrip('N', 'Times Square', '6', '33rd');// no change needed
