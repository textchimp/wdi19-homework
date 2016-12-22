var n = ['8th','Union Square', "23rd", '28th', '34th'];
var l = ['8th', '6th', 'Union Square', '3rd', '1st'];
var s = ['Astor Place', 'Union Square', '23rd', '28th', '33rd', 'Grand Central'];

var endLine = ""
var startLine = ""
var tripStops = []
var tripLength = tripStops.length
var lineAnswer = ''   // Just defining all my globals.
var interchange = " change at Union Square. Your journey continues through the following stops: "

// Single Trip Function begins
var trip = function (a,b){    // Had this working for single line so i will call on it later for single line trips
  var start = startLine.indexOf(a);
  var end = startLine.indexOf(b);

    if (start < end){
    for (var i = start; i <= end; i++) {
    tripStops.push(startLine[i]);    //pushes my loop into a tripStops array to call on later
  }
} else {
  for (var i = start; i >= end; i--) {
    tripStops.push(startLine[i]);

   } //for
 }
 tripStops.pop();
 tripStops.shift();
 answer =("You must travel through the following stops on the " + lineAnswer + " line: " + tripStops.toString() + ' then arrive at your destination, '+ b +'. This is a total of '+ tripStops.length + ' stops') // creating an answer pulling all the results form this funcion
 } //trip function

// Single Trip Function Ends
// Main Function Begins

var totalTrip = function(a, startStation, e, endStation){
  lineAnswer = a;  // needed so i can output the line  before it becomes an array. Made it global for this reason.
  var endAnswer = endStation
  if (startStation === endStation){ return "You are already here dummy"}// just checks that you arent ending at the start
  // if (a !='N' ||a != 'L' ||a != '6'){ return "Invalid track selections a"}
  // if (e !='N' ||e != 'L' ||e != '6'){ return "Invalid track selections b"}    These kept returning true
  if (a === 'N'){ startLine = n }
  if (a === 'L'){ startLine = l } //this converts the input into a copy of the station arrays
  if (a === '6'){ startLine = s } // this means input needs to be capitalized.  I could fix this but restricting input for now.
  if (e === 'N'){ endLine = n}
  if (e === 'L'){ endLine = l }
  if (e === '6'){ endLine = s }


  var start = startLine.indexOf(startStation);  // these 4 lines just make it so i dont need to type out such long identifiers
  var end = endLine.indexOf(endStation);
  var unionStart = startLine.indexOf('Union Square');
  var unionEnd = endLine.indexOf('Union Square');

  if ( startLine.toString() === endLine.toString()) {//This checks if it is a single line trip, thus ignoring all the fancy pants Union Square coding. This was accidentally set to compare the same value
    trip(startStation, endStation);
    return answer//runs the function up top that i created for single line trips and breaks out of function

}  if (start < unionStart){    //this function will run if it is a multi line trip
     for (var i = start; i <= unionStart; i++) {  // loops as a single line trip betweeen start and union quare on that array
     tripStops.push(startLine[i]);

 }//for
}//if
  if (start > unionStart) {
     for (var i = start; i >= unionStart; i--) {
     tripStops.push(startLine[i]);
    //  console.log('for loop B') debuggin line
   }
 }//if
  tripStops.pop();   // i could have done this a different way but thought 2 quick lines to replace union square with the transition statement was all sweet
  tripStops.push(interchange)  // calls on a variable as it was a long sentence and made my code look ugly
  //REVERSE   STAGE two
  if (unionEnd < end) {    //we are now basically doing the same thing in reverse for the 2nd train line after switching
       for (var i = (unionEnd); i < end; i++) {  // loops as a single line trip betweeen start and union quare on that array
      // console.log(" reverse loop A"); debugging
       tripStops.push(endLine[i]); // believe i had problems here
    } //for
  }  //if
  else {
      for (var i = unionEnd; i > end; i--) {  // loops as a single line trip betweeen start and union quare on that array
        // console.log('reverse loop B'); debugging
        tripStops.push(endLine[i]);
        }     //for
      } //else
  tripStops.shift()  //removes the starting station off the array. A redundant step i believe, but dont want to mess up the code just yet
  tripStops.pop() // same as above but for destination
  tripStops.push("finally arriving at your destination " );
  tripStops.push(endStation);
  answer = "You must travel through the following stops on the " + a + " line:  " + tripStops.toString() + '. This is a total of '+ (tripStops.length - 1) + ' stops.'
  tripStops = [];  //just resetting this array to make testing or a second input possible
  return answer

}   //totaltrip function
