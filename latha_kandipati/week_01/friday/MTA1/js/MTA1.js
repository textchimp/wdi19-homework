var linesObj = { N: ["Times Square", "34th", "28th", "23rd", "Union Square", "8th"],
                L: ["8th", "6th", "Union Square", "3rd", "1st"],
                6: ["Grand Central", "33rd", "28th", "23rd", "Union Square", "Astor Place"]};

function planTrip(fromLine, fromStop, toLine, toStop)
{
  var stopsCntr = 0;
  var tempArray=[];
  //If the from Line and toLine are similar, we need not go throuh the
  if (fromLine === toLine)
  {
    for(var i=(linesObj[fromLine].indexOf(fromStop)+1); i<=(linesObj[fromLine].indexOf(toStop)); i++)
    {
      tempArray.push(linesObj[fromLine][i]);
      stopsCntr++;
    }
    console.log("Your must travel through the following stops on the",fromLine+"Line: "
                +tempArray.join(", ")+".");
  }
  else {
    if(fromStop !== "Union Square")
    {
      for( var i=(linesObj[fromLine].indexOf(fromStop)+1); i<=(linesObj[fromLine].indexOf("Union Square")); i++ )
      {
        tempArray.push(linesObj[fromLine][i]);
        stopsCntr++;
      }
      console.log("Your must travel through the following stops on the",fromLine+"Line: "
                +tempArray.join(", ")+".");
                console.log("Change at Union Square.");
                tempArray = [];
    }
    var toLineStartingIndex = linesObj[toLine].indexOf("Union Square");
    var toLineEndingIndex = linesObj[toLine].indexOf(toStop);
    if ( toLineStartingIndex > toLineEndingIndex )
    {
      for( var i=toLineStartingIndex - 1; i>=toLineEndingIndex; i-- )
      {
        tempArray.push(linesObj[toLine][i]);
        stopsCntr++;
      }
    }
    else
    {
      for( var i=toLineStartingIndex + 1; i<=toLineEndingIndex; i++ )
      {
        tempArray.push(linesObj[toLine][i]);
        stopsCntr++;
      }
    }
    console.log("Your journey continues through the following stops on",toLine+"Line: "
                +tempArray.join(", ")+".");
  }
  console.log(stopsCntr+" stops in total.");
}
planTrip('N', "34th", 'N', "23rd");
planTrip('N', "34th", 'L', "3rd");
planTrip('L', "Union Square", '6', "Grand Central");
planTrip('L', "6th", 'L', "6th");
planTrip('6', "Union Square", '6', "Union Square");
planTrip('N',"23rd",'6',"23rd");
