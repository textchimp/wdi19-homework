//MTA - single line journey (BOTH DIRECTIONS)

//planTrip('N', 'Times Square', '6', '33rd');
// console.log() shows output similar to this:
// "You must travel through the following stops on the N line: 34th, 28th, 23rd, Union Square."
// "Change at Union Square."
// "Your journey continues through the following stops: 23rd, 28th, 33rd."
// "7 stops in total."

var lineN = ["Times Square", "34th", "28th", "23rd", "Union Square","8th"]
var lineL = ["8th", "6th", "Union Square", "3rd", "1st"]
var line6 = ["Grand Central", "33rd", "28th", "23rd", "Union Square", "Astor Place"]

var stops = [];
var numberOfStops;

// Are we going backwards or forwards along the line?
// If going backwards, reverse the array
var planTrip = function (line1, stop1, stop2){
  if ( line1.indexOf(stop1) < line1.indexOf(stop2) ){
    planTrip1(line1, stop1, stop2);
  } else {
      planTrip1(line1.reverse(), stop1, stop2);
  }
}


//single line trip
var planTrip1 = function (line1, stop1, stop2){

  //number of stops
numberOfStops = line1.indexOf(stop2) - line1.indexOf(stop1);
 //stops you will go through
 for (var i = line1.indexOf(stop1) ; i<line1.length; i++){
   if(stop2 !== line1[i]){
     stops.push(line1[i+1]);
   } else {
     break
   }
 }
 return stops;
}
// planTrip(line6, 'Grand Central', 'Union Square' );// going forwards on a line
planTrip(lineN, '8th', 'Times Square' ); // going backwards on a line
console.log(stops);
console.log("Number of stops: " + numberOfStops);
