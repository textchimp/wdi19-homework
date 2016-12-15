var N = ['Times Square', '34th', '28th on N', '23rd on N', 'Union Square', '8th on N'];
var L = ['8th on L', '6th', 'Union Square', '3rd', '1st'];
var six = ['Grand Central', '33rd', '28th', '23rd on six', 'Union Square', 'Astor Place'];

var mtr = [N, L, six];
var mtr_s = ['N', 'L', 'six'];
var db = {};

var Station = function(name) {
  this.name = name
  this.adjacentStations = [];
  this.lines = [];
  this.distance = Infinity;
  this.parent = null;
}

var setUp = function() {
  for (var i = 0; i < mtr.length; i++) {
    for (var j = 0; j < mtr[i].length; j++) {
      if (!db[mtr[i][j]]) {
        db[mtr[i][j]] = new Station(mtr[i][j]);
      }
      db[mtr[i][j]].lines.push(mtr_s[i]);
      if (j > 0) {
        if (db[mtr[i][j]].adjacentStations.indexOf(mtr[i][j-1]) === -1) {
          db[mtr[i][j]].adjacentStations.push(mtr[i][j-1]);
        }
      }
      if (j < mtr[i].length - 1) {
        if (db[mtr[i][j]].adjacentStations.indexOf(mtr[i][j+1]) === -1) {
          db[mtr[i][j]].adjacentStations.push(mtr[i][j+1]);
        }
      }
    }
  }
}

var planTrip = function(src, dst) {
  var queue = [db[src]];
  var explored = {};
  var current;
  var res = {stations: [], 'src': src, 'dst': dst};
  db[src].distance = 0;
  while (queue.length > 0) {
    queue = queue.sort(function(a, b) {
      return b.distance - a.distance;
    });
    current = queue.pop();
    if (current.name === dst) {
      res.distance = current.distance;
      while (current !== db[src]) {
        res.stations.push(current.name);
        current = current.parent;
      }
      return res;
    }
    explored[current] = true;
    for (var i = 0; i < current.adjacentStations.length; i++) {
      if ((!explored[current.adjacentStations[i]] && queue.indexOf[current.adjacentStations[i]] === -1) ||
         (db[current.adjacentStations[i]].distance > current.distance + 1)) {
        queue.push(db[current.adjacentStations[i]]);
        db[current.adjacentStations[i]].distance = current.distance + 1;
        db[current.adjacentStations[i]].parent = current;
      }
    }
  }
}

var msg = function(res) {
  var stations = res.stations.reverse();
  stations.unshift(res.src);
  var stationLines = {'Src': db[res.src].lines}
  for (var i = 0; i < res.stations.length; i++) {
    stationLines[res.stations[i]] = db[res.stations[i]].lines;
  }
  var lineChanges = [];
  var currentLine = stationLines['Src'][0];
  var tmpLine = [currentLine];
  for (var i = 1; i < res.stations.length; i++) {
    if (stationLines[stations[i]].indexOf(currentLine) !== -1) {
      tmpLine.push(stations[i]);
    } else {
      lineChanges.push(tmpLine);
      currentLine = stationLines[stations[i]][0];
      tmpLine = [currentLine, stations[i]];
    }
  }
  lineChanges.push(tmpLine);
  // msg
  var transfer;
  var output = "Your must travel through the following stops on the " + lineChanges[0][0] + " line: "
  for (var i = 1; i < lineChanges[0].length; i++) {
    if (i === lineChanges[0].length - 1) {
      output += lineChanges[0][i] + '.\n';
      transfer = lineChanges[0][i];
    } else {
    output += lineChanges[0][i] + ', ';
    }
  }
  for (var i = 1; i < lineChanges.length; i++) {
    output += "Change at " + transfer + " for the " + lineChanges[i][0] + " line.\nYour journey continues through the following stops: ";
    for (var j = 1; j < lineChanges[i].length; j++) {
      if (j === lineChanges[i].length - 1) {
        output += lineChanges[i][j] + '.\n'
        transfer = lineChanges[i][j];
      } else {
      output += lineChanges[i][j] + ', ';
      }
    }
  }
  output += (res.stations.length - 1) + " stops in total."
  console.log(output);
}

setUp();
msg(planTrip('Times Square', '33rd'));
