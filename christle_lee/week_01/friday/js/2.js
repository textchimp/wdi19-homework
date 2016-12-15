//MTA

var line = {
 'N': n,
 'L': l,
 '6': six
}
var n = ['Time Square', '34th', '28th', '23rd', 'Union Square', '8th'];
var l = ['8th', '6th', 'Union Square', '3rd', '1st'];
var six = ['Grand Central', '33rd', '28th', '23rd', 'Union Square', 'Astor Place'];


function planTrip(fromLine, fromStation, toLine, toStation) {
    var fromLineArray = line[fromLine];
    var startingPtIndex = 0;
    var endingPtIndex = 0;
    if (fromLine === toLine) {
        for (var i = 0; i < fromLineArray.length; i++){
              var currentStation = fromLineArray[i];

              if (currentStation === fromStation) {
                startingPtIndex = i;
              }
              if (currentStation === toStation) {
                endingPtIndex = i;
            }
        }
        var stations = fromLineArray.slice(startingPtIndex+1, endingPtIndex);
        if (endingPtIndex < startingPtIndex+1) {
          stations = stations.reverse() }

        var printPretty = stations.join(", ");

    }
    else {
      console.log("Change at Union Square")

       var unionSqIndex = 0;
       var destionationIndex = 0;
       var toLineArray = line[toLine];
       for(var j = 0; j< toLineArray.length; j++){
           var currentStation = toLineArray[j];
                if (currentStation === "Union Square") {
                  unionSqIndex = j;
                }
                if (currentStation === toStation) {
                  destinationIndex = j;
              }
       }
       var afterTransfer = [];
       if(unionSqIndex < destinationIndex){
         afterTransfer = toLineArray.slice(unionSqIndex, destinationIndex);
       } else{
         afterTransfer = toLineArray.slice(destinationIndex, unionSqIndex).reverse();
       }
    }

    console.log("You must travel through the following stops on the " + fromLine + " line: " + printPretty);
    console.log("Your journey continues through the following stops: " + afterTransfer);


};
