// planTrip('N', 'Times Square', '6', '33rd');
// The N line has the following stops: Times Square, 34th, 28th, 23rd, Union Square, and 8th
// The L line has the following stops: 8th, 6th, Union Square, 3rd, and 1st
// The 6 line has the following stops: Grand Central, 33rd, 28th, 23rd, Union Square, and Astor Place.
// All 3 subway lines intersect ONLY at Union Square
// Tell the user the number of stops AND the stops IN ORDER that they will pass
// through or change at.
// // console.log() shows output similar to this:
// // "Your must travel through the following stops on the N line: 34th,
// 28th, 23rd, Union Square."
// // "Change at Union Square."
// // "Your journey continues through the following stops: 23rd, 28th, 33rd."
// // "7 stops in total."
window.onload = function() {
  var stops = [["Times Square", "N"], ["34th", "N"], ["28th", "N"], ["23rd", "N"], ["Union Square", "N"], ["8th", "N"],
               ["8th", "L"], ["6th", "L"], ["Union Square", "L"], ["3rd", "L"], ["1st", "L"],
               ["Grand Central", "6"], ["33rd", "6"], ["28th", "6"], ["23rd", "6"], ["Union Square", "6"], ["Astor Place", "6"]
              ];

  var findIndex = function(station, line) {                                       // Find the index of the station depending on the line
    var index;
    for (var i = 0; i < stops.length; i++) {
      if (stops[i][0] === station && stops[i][1] === line) {
        index = i;
      }
    }
    return index;
  };

  var findUSIndex = function(line) {                                              // Find the index of Union Square depending on the line
    var index;
    for (var i = 0; i < stops.length; i++) {
      if (stops[i][1] === line && stops[i][0] === "Union Square") {
        index = i;
      }
    }
    return index;
  }

  var stationsBefore = function(stations) {                                       // From the end array select the stations that are before union square
    var res = [];                                                                 // `some` function will stop iterating when the condition is true
    stations.some(function(station) {
      res.push(station[0]);
      return station[0] === "Union Square";
    });
    return res;
  }

  var stationsAfter = function(stations, line) {                                  // From the end array select the stations that are after union Square
    var res = [];                                                                 // shift the first station will always be Union Square
    for (var i = 0; i < stations.length; i++) {
      if (stations[i][1] === line) {
        res.push(stations[i][0]);
      }
    }
    res.shift()
    return res;
  }

  var goForward = function(start, end, pushArr) {
    for (var i = start; i <= end; i++) {
      pushArr.push(stops[i]);
    }
  }

  var goBackwards = function(start, end, pushArr) {
    for (var i = start; i >= end; i--) {
      pushArr.push(stops[i]);
    }
  }

  var planTrip = function(startLine, start, endLine, end) {
    var startingPosition = findIndex(start, startLine);
    var endingPosition = findIndex(end, endLine);
    var firstUnionSquare = findUSIndex(startLine);
    var lastUnionSquare = findUSIndex(endLine);
    var visited = [];
    if (typeof(startLine) !== 'string' || typeof(start) !== 'string' || typeof(endLine) !== 'string' || typeof(end) !== 'string') {
      console.log("You must enter a string as an argument.");                        // Basic type error handling
      return
    }
    if (startingPosition === endingPosition) {
      console.log("You are not travelling anywhere, please select another end station");
      return
    }
    if ((startLine === endLine) && (startingPosition < endingPosition)) {            // Same lines and first station is BEFORE second station
      goForward(startingPosition, endingPosition, visited);
    }
    if ((startLine === endLine) && (startingPosition > endingPosition)) {            // Same lines and first station is AFTER second station
      goBackwards(startingPosition, endingPosition, visited);
    }
    if ((startLine !== endLine) && (startingPosition < firstUnionSquare)) {          // Different lines and first station is BEFORE Union Square
      goForward(startingPosition, firstUnionSquare, visited);
      if (lastUnionSquare < endingPosition) {                                        // Union Square index change of direction forward
        goForward(lastUnionSquare, endingPosition, visited);
      } else {                                                                       // Union Square index change of direction backwards
        goBackwards(lastUnionSquare, endingPosition, visited);
      }
    }
    if ((startLine !== endLine) && (startingPosition > firstUnionSquare)) {          // Different lines and first station is AFTER Union Square
      goBackwards(startingPosition, firstUnionSquare, visited);
      if (lastUnionSquare < endingPosition) {                                        // Union Square index change of direction forward
        goForward(lastUnionSquare, endingPosition, visited);
      } else {                                                                       // Union Square index change of direction backwards
        goBackwards(lastUnionSquare, endingPosition, visited);
      }
    }
    console.log("You must travel the following stations on the " + startLine + " line:");
    if (startLine === endLine) {
      console.log(visited.map(function(station) { return station[0] } ).join(", "));
      console.log((visited.length - 1) + " stops in total.");
    } else {
      console.log(stationsBefore(visited).join(", "));
      console.log("Change at: Union Square");
      console.log("Continue through the following stops on the " + endLine + " line: " + stationsAfter(visited, endLine).join(", "));
      console.log((visited.length - 1) + " stops in total.");
    }
  }


  var firstline = document.getElementById("startLine");
  var start = document.getElementById("start");
  var endline = document.getElementById("endLine");
  var end = document.getElementById("end");
  var button = document.getElementById("submit");
  var info = document.getElementById("travel-info");

  firstline.addEventListener('change', function() {
    return this.value
  })

  start.addEventListener('change', function() {
    return this.value
  })

  endline.addEventListener('change', function() {
    return this.value
  })

  end.addEventListener('change', function() {
    return this.value
  })

  button.addEventListener('click', function() {
    planTrip(firstline.value, start.value, endline.value, end.value);
    info.innerHTML = "Check console for result!";
  })

}
