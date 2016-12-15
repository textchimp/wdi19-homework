console.log("Hello new")

var subway = {
    N: ['Time Square', '34th', '28th', '23rd', 'Union Square', '8th'],
    L: ['8th', '6th', 'Union Square', '3rd', '1st'],
    6: ['Grand Central', '33rd', '28th', '23rd', 'Union Square', 'Astor Place']
}


//Function of single line journey :(:( reverse doesn't work D: D:
function findStations (line, from, to) {
  var currentLine = subway[line]
  var fromIndex = currentLine.indexOf(from);
  var toIndex = currentLine.indexOf(to);
  //var sliced = currentLine.slice(fromIndex + 1, toIndex + 1);

  // console.log('sliced:', sliced, currentLine)
  if (fromIndex < toIndex) {
  var sliced = currentLine.slice(fromIndex + 1, toIndex + 1);
  console.log('sliced', sliced, currentLine)
    return sliced;
  }
  else {
    var sliced = currentLine.slice(toIndex + 1, fromIndex + 1);
    console.log('from==larger case', sliced, sliced.reverse())
    return sliced.reverse();
  }
};


function planTrip(fromLine, fromStation, toLine, toStation) {

  if (fromLine === toLine) {
    console.log("You must travel through the following stops on the " + fromLine + " Line: " + findStations(fromLine, fromStation, toStation + "."));
  } else { //different line
    console.log("You must travel through the following stops on the " + fromLine + " Line: " + findStations(fromLine, fromStation, "Union Square"));
    console.log("Change at Union Square");
    console.log("Your journey continues through the following stops: " + findStations(toLine, "Union Square", toStation));
    console.log( "somthing" + " stops in total")
  }
};
