var six = ['Astor Place', 'Union Sq6', '23rd6', '28th6', '33rd', 'Grand Central'];

var theSix = function (start, finish, line) {
  var stopsArray = [];
//for loop
if (start < finish) { //w/out positive loop works with neg loop works
  for (var i = line.indexOf(start); i <= line.indexOf(finish) ; i++) {
    if(start !== finish ) {
    stopsArray.push(line[i]);
    // //console.log(stopsArray.length); working as expected
    // console.log(start);
    // console.log(finish);
    }
    //need if or else if or else here
  }

  //return stopsArray;
console.log("You will pass through " + stopsArray.length + " stations. They are: " + stopsArray.join(' '));
}
else {
//if (start > finish) {
  for (var i = line.indexOf(start); i >= line.indexOf(finish); i--) {
    if(start !== finish) {
      stopsArray.push(line[i]);
    }

  }
  console.log("You will pass through " + stopsArray.length + " stations. They are: " + stopsArray.join(' '));
     //return stopsArray;
//}
}
};
theSix( "Astor Place", "Grand Central", six);
theSix( "Grand Central", "28th6", six);
theSix( "33rd", "Union Sq6", six);


// console.log("You will pass through " + stopsArray + " stations. They are: " + stopsArray.join());
//
// var six = ['Astor Place', 'Union Sq6', '23rd6', '28th6', '33rd', 'Grand Central'];
// var theSix = function (start, finish, line) {
// var stopsArray = [];
//
//   for (var i = line.indexOf(start); i >= line.indexOf(finish); i--) {
//     if(start !== finish) {
//       stopsArray.push(line[i])
//   }
//       return stopsArray
//     }
// }
// console.log(theSix( "Grand Central", "28th6", six));
/*
var theSix = function (start, finish, line) {
  var stopsArray = [];
//for loop
if (start[i] < finish[i]) {
  for (var i = line.indexOf(start); i <= line.indexOf(finish) ; i++) {
    if(start !== finish ) {
    stopsArray.push(line[i]);
    }
  }

}
return stopsArray;
};

console.log(theSix( "Astor Place", "Grand Central", six));
console.log(theSix( "Union Sq6", "28th6", six));
*/

// if (true) {
//   console.log("Why aren't you working?!")
// };

// var theSix = function (start, finish, line) {
//   var stopsArray = [];
// //for loop
// if (start < finish){
//   for (var i = line.indexOf(start); i <= line.indexOf(finish) ; i++) {
//     if(start !== finish ) {
//     stopsArray.push(line[i]);
//     }
//   }
// }
// return stopsArray;
//
// };
// console.log(theSix( "Union Sq6", "28th6", six));
