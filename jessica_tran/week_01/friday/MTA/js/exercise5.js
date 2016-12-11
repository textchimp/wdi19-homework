//MTA - multi line journey - Prompting user for data.

var lineName1 = prompt("Which line are you starting from?");
var stopName1 = prompt("Which line are you ending at?");
var lineName2 = prompt("Which stop are you starting from?");
var stopName2 = prompt("Which stop are you ending at");


var line = {
'N': ["Times Square", "34th", "28th", "23rd", "Union Square","8th"],
'L':  ["8th", "6th", "Union Square", "3rd", "1st"],
'6':["Grand Central", "33rd", "28th", "23rd", "Union Square", "Astor Place"]
}
//Plan 2 trips, one that takes you from the start to Union Square, the other from union square to the destination

// variables that contain the list of stops of the two trips
var stopsList1 = [];
var stopsList2 = [];


var planTrip = function (line1, stop1, line2, stop2){

  // If the line or station does not exist:
   if ((Object.keys(line)).indexOf(lineName1) < 0 ||  (Object.keys(line)).indexOf(lineName2) < 0 ){
    return(console.log("This line does not exist, please try again."));
  } else if (line1.indexOf(stop1) < 0 || line2.indexOf(stop2) < 0) {
    return (console.log ("This stop does not exist. Try again"))
    //If the line and station exists:
  } else {

  // Are we going backwards or forwards along the line?
  // If going backwards, reverse the array

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

  //calculate number of stops taken
  var numberOfStops = stopsList1.length  + stopsList2.length;
   console.log(numberOfStops + " stops in total");

   //reset the list of stops taken
      stopsList1 = [];
      stopsList2 = [];
 }
}
//Determines stops you will go through
var planTrip1 = function (lineStart, stopStart, stopFinish, stopsList){
 for (var i = lineStart.indexOf(stopStart) ; i<lineStart.length; i++){
   if(stopFinish !== lineStart[i]){
     stopsList.push(lineStart[i+1]);
   } else { break;
   }
 }
}

planTrip(line[lineName1], stopName1, line[lineName2], stopName2);
