// MTA Lab

                              //subway system

/* The program takes the line and stop that a user is getting on at and the line and stop that user is getting off at and prints the journey and the total number of stops for the trip in the console:*/

//All 3 subway lines intersect at Union Square, but there are no other intersection points.
/*For example, this means the 28th stop on the N line is different than the 28th street stop on the 6 line, so you'll have to differentiate this when you name your stops in the arrays.*/



//
// var planTrip1 = function (Line, firstStop, lastStop){
//
//   var firstStopIndex= 0;
//   var lastStopIndex= 0;
//
//   for (var i = 0; i < Line.length; i++) {
//     //console.log(startLine[i]);
//     if (Line[i] === firstStop) {
//       //console.log(Line[i]);
//       firstStopIndex = Line.indexOf(firstStop);
//
//       console.log(firstStopIndex);
//     }
//     if(Line[i] === lastStop){
//       //console.log(Line[i]);
//       lastStopIndex = Line.indexOf(lastStop);
//         console.log(lastStopIndex);
//     }
//   }
//       console.log(lastStopIndex - firstStopIndex);
// }
//
//
// var palnTrip2 = function (Line1, firstStop, Line2, lastStop) {
//
//   var firstStopIndex= 0;
//   var lastStopIndex= 0;
//
//     for (var i = 0; i < Line1.length; i++) {
//
//         if (Line1[i] === firstStop) {
//
//             firstStopIndex = Line1.indexOf(firstStop);
//             console.log(firstStopIndex);
//
//
//         }
//         if (Line1[i] === lastStop) {
//
//           lastStopIndex = Line1.indexOf(lastStop);
//           console.log(lastStopIndex);
//
//         }
//
//         console.log(lastStopIndex-firstStopIndex);
//     }
//     for (var i = 0; i < Line2.length; i++) {
//
//         if (Line2[i] === firstStop) {
//
//             firstStopIndex = Line2.indexOf(firstStop);
//
//         }
//
//         if (Line2[i] === lastStop) {
//
//             lastStopIndex = Line2.indexOf(lastStop);
//         }
//     }
//   console.log(lastStopIndex - firstStopIndex);
// }


//planTrip('N', 'Times Square', '6', '33rd'); // This is only a suggested function name and signature.
// console.log() shows output similar to this:
// "Your must travel through the following stops on the N line: 34th, 28th, 23rd, Union Square."
// "Change at Union Square."
// "Your journey continues through the following stops: 23rd, 28th, 33rd."
// "7 stops in total."

var N = ['Times Square', '34th', '28th', '23rd', 'Union Square',  '8th' ];
var L =  ['8th', '6th', 'Union Square', '3rd',  '1st'];
var six = ['Grand Central', '33rd', '28th', '23rd', 'Union Square', 'Astor Place'];

function planTrip(startLine, firstStop, stopLine, lastStop){

    var startLineTotalStops = startLine.lenght;
    var stopLineTotalStops = stopLine.lenght;
    var start = startLine.indexOf(firstStop);
    var stop = stopLine.indexOf(lastStop);
    var startLineUnionSquare = startLine.indexOf('Union Square');
    var stopLineUnionSquare = stopLine.indexOf('Union Square');
    var startLineBeforeUS = true; //start line befor Union Square
    var stopLineBeforeUS = true; //stop line befor Union Square
    var totalStopedTraveledInStartLine = 0;
    var totalStopedTraveledInStopLine = 0;

    if (startLineUnionSquare < start) {
        startLineBeforeUS = false;
    }

    if (stopLineUnionSquare > stop) {
        stopLineBeforeUS = false;

    }

    if (startLineBeforeUS) {
        totalStopedTraveledInStartLine = startLineUnionSquare - start;

    }
    else {
      totalStopedTraveledInStartLine = start - startLineUnionSquare;
    }

    if (stopLineBeforeUS) {
    
        totalStopedTraveledInStopLine = stopLineUnionSquare - stop;
    }
    else {
        totalStopedTraveledInStopLine = stop - stopLineUnionSquare;
    }

    console.log(totalStopedTraveledInStartLine - totalStopedTraveledInStopLine);

}

//Tell the user the number of stops AND the stops IN ORDER that they will pass through or change at.


// Hints:

// Work out how you would do it on paper first! Then start to explain that process in Javascript.
// Get the program to work for a single line before trying to tackle multiple lines.
// Don't worry about prompting the user for input. Hard code some values to get it working. You can use prompt() later to make it more interactive.
// Consider diagramming the lines by sketching out the subway lines and their stops and intersection.
// The key to the lab is finding the index positions of each stop. (hint: indexOf())
// Make sure the stops that are the same for different lines have different names (i.e. 23rd on the N and on the 6 need to be differentiated)
