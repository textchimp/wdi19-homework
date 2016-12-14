var N = ['Times Square', '34th', '28th', '23rd', 'Union Square', '8th'];
var L = ['8th', '6th', 'Union Square', '3rd', '1st'];
var six = ['Grand Central', '33rd', '28th', '23rd', 'Union Square', 'Astor Place'];

var planTrip = function (srcLine, srcStation, dstLine, dstStation){
  var s = eval(srcLine);
  var d = eval(dstLine);
  if (srcLine === "6") { s = six; }
  if (dstLine === "6") { d = six; }
  var listOfStations_l1 = [];
  var listOfStations_l2 = [];
// Possiblity 1: if on the same line
  if (srcLine === dstLine) {
    if (s.indexOf(dstStation) < s.indexOf(srcStation)) {  s = s.reverse();  }
    for (var i = s.indexOf(srcStation) + 1; i <= s.indexOf(dstStation); i++) {
      if (d.indexOf(s[i]) > 0 ) { s[i] += (" on the " + srcLine); }
      listOfStations_l1.push(s[i]);
    }
    console.log("Your must travel through the following stops on the " + srcLine + " line: " +
    listOfStations_l1.join(', ')
    + ".\n" + (listOfStations_l1.length + listOfStations_l2.length) + " stops in total.");
  } else {
// Possiblity 2: not on the same line
    if (s.indexOf('Union Square') < s.indexOf(srcStation)) {  s = s.reverse();  }
    if (d.indexOf('Union Square') > d.indexOf(dstStation)) {  d = d.reverse();  }

    for (var i = s.indexOf(srcStation) + 1; i <= s.indexOf('Union Square'); i++) {
      if (d.indexOf(s[i]) > 0 && s[i] !== 'Union Square') {
        listOfStations_l1.push(s[i] + " on the " + srcLine);
      } else {
          listOfStations_l1.push(s[i]);
      }
    }
    for (var i = d.indexOf('Union Square') + 1; i <= d.indexOf(dstStation); i++) {
      if (s.indexOf(d[i]) > 0 && d[i] !== 'Union Square') {
        listOfStations_l2.push(d[i] + " on the " + dstLine);
      } else {
          listOfStations_l2.push(d[i]);
      }
    }
    console.log("Your must travel through the following stops on the " + srcLine + " line: " +
    listOfStations_l1.join(', ')
    + "\nChange at Union Square.\n"
    + "Your journey continues through the following stops: "
    + listOfStations_l2.join(', ')
    + ".\n" + (listOfStations_l1.length + listOfStations_l2.length) + " stops in total.");
  }
}
