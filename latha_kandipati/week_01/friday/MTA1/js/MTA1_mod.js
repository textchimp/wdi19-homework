var lineN = ["Times Square", "34th", "28th", "23rd", "Union Square", "8th"];
var lineL = ["8th", "6th", "Union Square", "3rd", "1st"];
var line6 = ["Grand Central", "33rd", "28th", "23rd", "Union Square", "Astor Place"];

function planTrip(fromLine, fromStop, toLine, toStop)
{
  var stopsCntr = 0;
  var tempArray=[];
  var fl = eval(fromLine);
  var tl = eval(toLine);
  if (fromLine === toLine){
    for(var i=(fl.indexOf(fromStop)+1); i<=(fl.indexOf(toStop)); i++){
      tempArray.push(fl[i]);
      stopsCntr++;
    }
    console.log("Your must travel through the following stops on the "+fromLine+" : "+tempArray.join(", ")+".");
  }
  else {
    if(fromStop !== "Union Square"){
      for( var i=(fl.indexOf(fromStop)+1); i<=(fl.indexOf("Union Square")); i++ ){
        tempArray.push(fl[i]);
        stopsCntr++;
      }
      console.log("Your must travel through the following stops on the "+fromLine+" : "+tempArray.join(", ")+".");
      console.log("Change at Union Square.");
      tempArray = [];
    }
    var toLineStartingIndex = tl.indexOf("Union Square");
    var toLineEndingIndex = tl.indexOf(toStop);
    if ( toLineStartingIndex > toLineEndingIndex ){
      for( var i=toLineStartingIndex - 1; i>=toLineEndingIndex; i-- ){
        tempArray.push(tl[i]);
        stopsCntr++;
      }
    }
    else{
      for( var i=toLineStartingIndex + 1; i<=toLineEndingIndex; i++ ){
        tempArray.push(tl[i]);
        stopsCntr++;
      }
    }
    console.log("Your journey continues through the following stops on "+toLine+" : "+tempArray.join(", ")+".");
  }
  console.log(stopsCntr+" stops in total.");
}
planTrip('lineN', "34th", 'lineN', "23rd");
planTrip('lineN', "34th", 'lineL', "3rd");
planTrip('lineL', "Union Square", 'line6', "Grand Central");
planTrip('lineL', "6th", 'lineL', "6th");
planTrip('line6', "Union Square", 'line6', "Union Square");
planTrip('lineN',"23rd",'line6',"23rd");
