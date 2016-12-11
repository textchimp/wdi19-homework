// Create a program that models a simple subway system.
//
// The program takes the line and stop that a user is getting on at
// and the line and stop that user is getting off at and prints the journey
// and the total number of stops for the trip in the console:


// There are 3 subway lines:
// The N line has the following stops: Times Square, 34th, 28th, 23rd, Union Square, and 8th
// The L line has the following stops: 8th, 6th, Union Square, 3rd, and 1st
// The 6 line has the following stops: Grand Central, 33rd, 28th, 23rd, Union Square, and Astor Place.
// All 3 subway lines intersect at Union Square, but there are no other intersection points.
//(For example, this means the 28th stop on the N line is different than the 28th street stop on the 6 line,
//so you'll have to differentiate this when you name your stops in the arrays.)
// Tell the user the number of stops AND the stops IN ORDER that they will pass through or change at.
// Hints:
//
// Work out how you would do it on paper first! Then start to explain that process in Javascript.
// Get the program to work for a single line before trying to tackle multiple lines.
// Don't worry about prompting the user for input. Hard code some values to get it working.
//You can use prompt() later to make it more interactive.
// Consider diagramming the lines by sketching out the subway lines and their stops and intersection.
// The key to the lab is finding the index positions of each stop. (hint: indexOf())
// Make sure the stops that are the same for different lines have different names
//(i.e. 23rd on the N and on the 6 need to be differentiated)






//###########################
// Data definition

//stop is string

//stops is Array of string
//[ stop1, stop2,....]

var stops_N = [
                "Times_Square_N",
                "34th_N" ,
                "28th_N",
                "23rd_N",
                "Union_Square",
                "8th_N"
              ]

var stops_L = [
                  "8th_L",
                  "6th_L",
                  "Union_Square",
                  "3rd_L",
                  "1st_L"
                ]
var stops_6 = [
                  "Grand_Central_6",
                  "33rd_6",
                  "28th_6",
                  "23rd_6",
                  "Union_Square",
                  "Astor_Place_6"
                ]

//Line is object
//_____Key_____________||________
//-- name               : string
//--stops               : Array of stop

//Lines is Array of Objects
//[ line1, line2,....]

var lines = [
  { name : 'N', stops : stops_N},
  { name : 'L', stops : stops_L},
  { name : '6', stops : stops_6},
]

//journey is object
// Interp. journey has an array of ---
//_____Key_____________________||________
//-- stops_before_intersection  : ArrayofStop    ie[1st stop, 2nd stop, 3rd stop]
//--intersection?               : boolean
//-- stops_after_intersection  : ArrayofStop    ie[5st stop, 6nd stop, 7rd stop]
//-- Totalstops                 : number




//###########################
//Functions :

// stops, string, string -----> stops
//Interp. given the stop getting on and off as well as the line of them,
//        if the stop getting on and off are in the same line,
//       It will produce array of all stops that the train pass

var stp_nochangeline = function(line, begin_stp, desti_stp) {
  var stp = [];
  if (line.indexOf(begin_stp) < line.indexOf(desti_stp)) {
// +1 since the first stop getting on is omitted
    for (var i = line.indexOf(begin_stp)+1; i < line.indexOf(desti_stp)+1; i++) {
      stp.push(line[i]);
    }
  } else {
// -1 since the first stop getting on is omitted
    for (var i = line.indexOf(begin_stp)-1; i > line.indexOf(desti_stp)-1; i--) {
      stp.push(line[i]);
    }
  }
  return stp;
}

console.log("Test for stp_nochangeline")
console.log(stp_nochangeline(stops_N ,"Times_Square_N" ,"34th_N"));
console.log(stp_nochangeline(stops_N ,"34th_N" ,"Times_Square_N"));
console.log(stp_nochangeline(stops_N ,"8th_N" ,"34th_N"));
console.log(stp_nochangeline(stops_N ,"34th_N" ,"8th_N"));
console.log(stp_nochangeline(stops_L ,"1st_L" ,"8th_L"));
//_________________________________________

// stops stops ----> number
// Interp. given the two arrays of stop,
//         It will produce the index of the intersect stop in the first rray

var index_intersect = function ( line1, line2) {
  var num = 0;
  for (var i = 0; i < line1.length; i++) {
    for (var j = 0; j < line1.length; j++) {
      if (line2[j] === line1[i]) {
        return num;
      }
    }
    num += 1
  }
}

console.log("Test for index_intersect");
console.log(index_intersect(stops_N ,stops_L));
console.log(index_intersect(stops_6 ,stops_N));
console.log(index_intersect(stops_L ,stops_N));
//_________________________________________

// stops, string, stops, -----> stops
//Interp. given the stop getting on and off as well as the lines of them,
//      It will produce the array of stop that the train pass before the intersection

var stp_before_inter = function(begin_line, begin_stp, desti_line)  {
  var stp = []
  if (begin_line.indexOf(begin_stp) < index_intersect(begin_line ,desti_line)) {
// +1 since the first stop getting on is omitted
    for (var i = begin_line.indexOf(begin_stp)+1; i < begin_line.length; i++) {
      for (var j = 0; j < desti_line.length; j++) {
        if (desti_line[j] === begin_line[i]) {
          stp.push(begin_line[i]);
          return stp;
        }
      }
      stp.push(begin_line[i]);
    }
  } else {
    for (var i = begin_line.indexOf(begin_stp)-1; i < begin_line.length; i--) {
      for (var j = 0; j < desti_line.length; j++) {
        if (desti_line[j] === begin_line[i]) {
          stp.push(begin_line[i]);
          return stp;
        }
      }
      stp.push(begin_line[i]);;
  }
}
}

console.log("Test for stp_before_inter")
console.log(stp_before_inter(stops_N ,"Times_Square_N", stops_L));
console.log(stp_before_inter(stops_N ,"8th_N", stops_L));
console.log(stp_before_inter(stops_6 ,"33rd_6", stops_L ));
console.log(stp_before_inter(stops_6 ,"Astor_Place_6", stops_L ));
console.log(stp_before_inter(stops_L ,"8th_L" , stops_N));
console.log(stp_before_inter(stops_L ,"1st_L" , stops_N));
//_________________________________________

// string, string -----> boolean
//Interp. given the names of line getting on and off
//      Then, It return true if they are diffrent line, false otherwise.

var doesinter = function ( str_begin_line, str_desti_line) {
  if (str_begin_line !== str_desti_line) {
    return true;
  } else {
    return false;
  }
}

console.log("Test for doesinter")
console.log(doesinter('N', 'L'));
console.log(doesinter('L', 'L'));
//_________________________________________

// stops, string, stops, -----> stops
//Interp. given the stop getting on and off as well as the lines of them,
//      It will produce the array of stop that the train pass before the intersection

var stp_after_inter = function(begin_line, desti_stp, desti_line)  {
  var intersectionstop = desti_line[index_intersect(desti_line ,begin_line)];
  return stp_nochangeline(desti_line, intersectionstop, desti_stp);
}

console.log("Test for stp_after_inter")
console.log(stp_after_inter(stops_N ,"8th_L", stops_L));
console.log(stp_after_inter(stops_N ,"33rd_6", stops_6));
console.log(stp_after_inter(stops_6 ,"6th_L", stops_L ));
console.log(stp_after_inter(stops_6 ,"3rd_L", stops_L ));
console.log(stp_after_inter(stops_L ,"Times_Square_N" , stops_N));
console.log(stp_after_inter(stops_L ,"8th_N" , stops_N));
//_________________________________________


// string (key) -> array (its property)
//Interp. given the name of lines
//      It will produce the all stops in that line

var interatelines = function(name) {
  for (var i = 0; i < lines.length; i++) {
    if (name === lines[i].name) {
      return lines[i].stops;
    }
  }
}

console.log("Test for interatelines")
console.log(interatelines('N'));
console.log(interatelines('L'));
console.log(interatelines('6'));
//_________________________________________

// string, string, string, string -----> journey ----->string
//Interp. given the stop getting on and off  and the line of that as well as those for destination
//      It will produce the record of Journey.
//      Then, It is converted in to massage

//use constructor - creat new object (journey)

function Journey(str_begin_line, begin_stp, str_desti_line, desti_stp) {
  //str_begin_line ----> begin_line &&
  //str_desti_line ----> desti_line_
  this.stp_before_inter = stp_before_inter(interatelines(str_begin_line), begin_stp, interatelines(str_desti_line));
  this.doesinter = doesinter(str_begin_line, str_desti_line);
  this.stp_after_inter = stp_after_inter(interatelines(str_begin_line), desti_stp, interatelines(str_desti_line));
  this.total = function( ) { return this.stp_before_inter.length+this.stp_after_inter.length };
}

var planTrip = function (str_begin_line, begin_stp, str_desti_line, desti_stp) {
    var planedjourney = new Journey(str_begin_line, begin_stp, str_desti_line, desti_stp)
      if (planedjourney.doesinter) {
        return  "You must travel through the following stops on the "+str_begin_line+" line: "+ planedjourney.stp_before_inter.join(', ')+".\n"+
                "Change at Union Square.\n"+
                "Your journey continues through the following stops: "+ planedjourney.stp_after_inter.join(', ')+".\n"+
                planedjourney.total()+" stops in total."
      } else {
        return "You must travel through the following stops on the "+str_begin_line+" line: "+ planedjourney.stp_before_inter.join(', ')+".\n"+
                "not Change at Union Square.\n"+
                "Your journey continues through the following stops: "+ planedjourney.stp_after_inter.join(', ')+".\n"+
                planedjourney.total()+" stops in total."
              }
}

console.log("Test for planTrip");
console.log(planTrip('N', 'Times_Square_N', '6', '33rd_6'));
console.log(planTrip('L', '1st_L', 'N', 'Times_Square_N'));
//console.log(planTrip('N', 'Times_Square_N', 'N', '8th-N'));
//- where the stops getting on and off are the same
//-> This is the case that does not work, and I can not fix it( like an infinity loop)

//_________________________________________







//************** Just Ignore below this *************
//It is just my scatch work



//______________________
// stops, string, string -----> number
// Interp. given the stop getting on and off as well as the line of them,
//      It will produce the number of stops that the train pass before the intersection

// var numofstp_before_inter = function (begin_line, begin_stp, desti_line)  {
//   if (begin_line.indexOf(begin_stp) < index_intersect(begin_line ,desti_line)) {
//     var num1 = 0
// // +1 since the first stop getting on is omitted
//     for (var i = begin_line.indexOf(begin_stp)+1; i < begin_line.length; i++) {
//       for (var j = 0; j < desti_line.length; j++) {
//         if (desti_line[j] === begin_line[i]) {
//           return num1;
//         }
//       }
//       num1 += 1;
//     }
//   } else {
//     var num2 = 0;
//     for (var i = begin_line.indexOf(begin_stp)-1; i < begin_line.length; i--) {
//       for (var j = 0; j < desti_line.length; j++) {
//         if (desti_line[j] === begin_line[i]) {
//           return num2;
//         }
//       }
//       num2 += 1;
//   }
// }
// }
//
// console.log("Test for numofstp_before_inter")
// console.log(numofstp_before_inter(stops_N ,"Times_Square_N", stops_L));
// console.log(numofstp_before_inter(stops_N ,"8th_N", stops_L));
// console.log(numofstp_before_inter(stops_6 ,"33rd_6", stops_L ));
// console.log(numofstp_before_inter(stops_6 ,"Astor_Place_6", stops_L ));
// console.log(numofstp_before_inter(stops_L ,"8th_L" , stops_N));
// console.log(numofstp_before_inter(stops_L ,"1st_L" , stops_N));

//_______________
