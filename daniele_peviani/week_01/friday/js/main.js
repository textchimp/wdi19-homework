/******   MTA Lab   **********

Create a program that models a simple subway system.

The program takes the line and stop that a user is getting on at and the line and stop that user is getting off at and prints the journey and the total number of stops for the trip in the console:

planTrip('N', 'Times Square', '6', '33rd'); // This is only a suggested function name and signature.

// console.log() shows output similar to this:
// "Your must travel through the following stops on the N line: 34th, 28th, 23rd, Union Square."
// "Change at Union Square."
// "Your journey continues through the following stops: 23rd, 28th, 33rd."
// "7 stops in total."

There are 3 subway lines:
All 3 subway lines intersect at Union Square, but there are no other intersection points.

Tell the user the number of stops AND the stops IN ORDER that they will pass through or change at.

Hints:

Work out how you would do it on paper first! Then start to explain that process in Javascript.

Get the program to work for a single line before trying to tackle multiple lines.

The key to the lab is finding the index positions of each stop. (hint: indexOf())

Make sure the stops that are the same for different lines have different names (i.e. 23rd on the N and on the 6 need to be differentiated)

*/

var subway = {
  N: "Times Square, 34th, 28th, 23rd, Union Square, 8th".split(", "),
  L: "8th, 6th, Union Square, 3rd, 1st".split(", "),
  6: "Grand Central, 33rd, 28th, 23rd, Union Square, Astor Place".split(", ")
};

var planTrip = function(lineA, stopA, lineB, stopB) {

  var usrInputError = checkUserInput(lineA, stopA, lineB, stopB);

  if (usrInputError) {
    console.log(usrInputError);
    return;
  }

  var indexFirstStop = subway[lineA].indexOf(stopA);
  var indexLastStop = subway[lineB].indexOf(stopB);
  var numberOfStops = 0;

  var changeLine = (lineA !== lineB);

  if (changeLine) {

    indexLastStop = subway[lineA].indexOf("Union Square");
    console.log("You must travel through the following stops on the " + lineA + " line: " + getStops(lineA, indexFirstStop, indexLastStop) + ".");
    numberOfStops += Math.abs(indexLastStop - indexFirstStop);
    console.log("Change at Union Square.");
    indexFirstStop = subway[lineB].indexOf("Union Square");
    indexLastStop = subway[lineB].indexOf(stopB);
    numberOfStops += Math.abs(indexLastStop - indexFirstStop);
    console.log("Your journey continues through the following stops: " + getStops(lineB, indexFirstStop, indexLastStop) + ".");

  } else {

    numberOfStops += Math.abs(indexLastStop - indexFirstStop);
    console.log("You must travel through the following stops on the " + lineA + " line: " + getStops(lineA, indexFirstStop, indexLastStop) + ".");

  }
  console.log(numberOfStops + " stops in total");
}

var getStops = function(line, indexFirstStop, indexLastStop) {
  var stopNames = [];
  if (indexFirstStop < indexLastStop) {
    for (var i = indexFirstStop + 1; i < indexLastStop + 1; i++) {
      stopNames.push(subway[line][i]);
    }
  } else {
    for (var i = indexFirstStop - 1; i > indexLastStop - 1; i--) {
      stopNames.push(subway[line][i]);
    }
  }
  return stopNames.join(", ");
}

var checkUserInput = function(lineA, stopA, lineB, stopB) {
  var errorMsg = "";
  if (lineA === lineB && stopA === stopB) {
    errorMsg = "Turn around and get out!"
    return errorMsg;
  }

  if (!(lineA in subway) || !(lineB in subway))  {
    errorMsg = "Check if the lines you entered are correct";
    return errorMsg;
  }

  if ((subway[lineA].indexOf(stopA) === -1) || (subway[lineB].indexOf(stopB) === -1))  {
      errorMsg = "Check if the stops you entered are correct";
      return errorMsg;
  }
}
