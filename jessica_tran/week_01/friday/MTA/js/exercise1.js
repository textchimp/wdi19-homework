//MTA - single line journey (ONE DIRECTION ONLY)

//planTrip('N', 'Times Square', '6', '33rd');
// console.log() shows output similar to this:
// "You must travel through the following stops on the N line: 34th, 28th, 23rd, Union Square."
// "Change at Union Square."
// "Your journey continues through the following stops: 23rd, 28th, 33rd."
// "7 stops in total."

var lineN = ["Times Square", "34th", "n28th", "23rd", "Union Square","8th"]
var lineL = ["8th", "6th", "Union Square", "3rd", "1st"]
var line6 = ["Grand Central", "33rd", "28th", "23rd", "Union Square", "Astor Place"]

var stops = [];
// var planTrip = function (line1, stop1, line2, stop2){
//
// planTrip('N', 'Times Square', '6', '33rd');

var numberOfStops;

//single line trip
var planTrip = function (line1, stop1, stop2){

  //number of stops
numberOfStops = line1.indexOf(stop2) - line1.indexOf(stop1);
 //stops you will go through
 for (var i = line1.indexOf(stop1) ; i<line1.length; i++){
   if(stop2 !== line1[i]){
     stops.push(line1[i+1]);
   } else {break}
 }
 return stops;
}
console.log(planTrip(lineN, 'Times Square', '8th'));
console.log("Number of stops: " + numberOfStops);
