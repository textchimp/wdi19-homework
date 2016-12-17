var KwunTongLine = ['Tiu Keng Leng', 'Yau Tong', 'Lam Tin', 'Kwun Tong', 'Ngau Tau Kok', 'Kowloon Bay', 'Choi Hung', 'Diamond Hill', 'Wong Tai Sin', 'Lok Fu', 'Kowloon Tong', 'Shek Kip Mei', 'Prince Edward', 'Mong Kok', 'Yau Ma Tei', 'Ho Man Tin', 'Whampoa'];
var TsuenWanLine = ['Tsuen Wan', 'Tai Wo Hau', 'Kwai Hing', 'Kwai Fong', 'Lai King', 'Mei Foo', 'Lai Chi Kok', 'Cheung Sha Wan', 'Sham Shui Po', 'Prince Edward', 'Mong Kok', 'Yau Ma Tei', 'Jordan', 'Tsim Sha Tsui', 'Admiralty', 'Central'];
var IslandLine = ['Kennedy Town', 'HKU', 'Sai Ying Pun', 'Sheung Wan', 'Central', 'Admiralty', 'Wan Chai', 'Causeway Bay', 'Tin Hau', 'Fortress Hill', 'North Point', 'Quarry Bay', 'Tai Koo', 'Sai Wan Ho', 'Shau Kei Wan', 'Heng Fa Chuen', 'Chai Wan']
var TseungKwanOLine_PoLam = ['Po Lam', 'Hang Hau', 'Tseung Kwan O', 'Tiu Keng Leng', 'Yau Tong', 'Quarry Bay','North Point'];
var TseungKwanOLine_Lohas = ['LOHAS Park', 'Tseung Kwan O', 'Tiu Keng Leng', 'Yau Tong', 'Quarry Bay','North Point'];
var TungChungLine = ['Hong Kong', 'Kowloon', 'Olympic', 'Nam Cheong', 'Lai King', 'Tsing Yi', 'Sunny Bay', 'Tung Chung'];
var DisneyLine = ['Sunny Bay', 'Disneyland Resort'];
var EastRailLine_LoWu = ['Hung Hom', 'Mong Kok East', 'Kowloon Tong', 'Tai Wai', 'Sha Tin', 'Fo Tan', 'University', 'Tai Po Market', 'Tai Wo', 'Fanling', 'Sheung Shui', 'Lo Wu'];
var EastRailLine_LMC = ['Hung Hom', 'Mong Kok East', 'Kowloon Tong', 'Tai Wai', 'Sha Tin', 'Fo Tan', 'University', 'Tai Po Market', 'Tai Wo', 'Fanling', 'Sheung Shui', 'Lok Ma Chau'];
var MaOnShanLine = ['Tai Wai', 'Che Kung Temple', 'Sha Tin Wai', 'City One', 'Shek Mun', 'Tai Shui Hang', 'Heng On', 'Ma On Shan', 'Wu Kai Sha'];
var WestRailLine = ['East Tsim Sha Tsui', 'Austin', 'Nam Cheong', 'Mei Foo', 'Tsuen Wan West', 'Kam Sheung Road', 'Yuen Long', 'Long Ping', 'Tin Shui Wai', 'Siu Hong', 'Tuen Mun'];

var mtr = [KwunTongLine, TsuenWanLine, IslandLine, TseungKwanOLine_PoLam, TseungKwanOLine_Lohas, TungChungLine, DisneyLine, EastRailLine_LoWu, EastRailLine_LMC, MaOnShanLine, WestRailLine];
var mtr_s = ['Kwun Tong', 'Tsuen Wan', 'Island', 'Tseung Kwan O - Po Lam', 'Tseung Kwan O - Lohas', 'Tung Chung', 'Disney', 'East Rail - LoWu', 'East Rail - LMC', 'Ma On Shan', 'West Rail'];
var db = {};

var Station = function(name) {
  this.name = name;
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

  var currentLine;
  for (var i = 0; i < stationLines['Src'].length; i++) {
    if (stationLines[stations[1]].indexOf(stationLines['Src'][i]) !== -1) {
      currentLine = stationLines['Src'][i];
    }
  }
  var tmpLine = [currentLine];
  for (var i = 0; i < res.stations.length; i++) {
    if (stations[i+1] && stationLines[stations[i+1]].indexOf(currentLine) !== -1) {
      tmpLine.push(stations[i+1]);
      //console.log("#1 current station: ", stations[i], "next station: ", stations[i+1], "current Line: ", currentLine);
    } else {
      lineChanges.push(tmpLine);
      if (stations[i+1]) {
        for (var j = 0; j < stationLines[stations[i+1]].length; j++) {
          if (stationLines[stations[i]].indexOf(stationLines[stations[i+1]][j]) !== -1) {
            currentLine = stationLines[stations[i+1]][j];
          }
        }
        //console.log("#2 current station: ", stations[i], "next station: ", stations[i+1], "current Line: ", currentLine);
        tmpLine = [currentLine, stations[i]];
        tmpLine.push(stations[i+1]);
      }
    }
  }
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
    for (var j = 2; j < lineChanges[i].length; j++) {
      if (j === lineChanges[i].length - 1) {
        output += lineChanges[i][j] + '.\n'
        transfer = lineChanges[i][j];
      } else {
      output += lineChanges[i][j] + ', ';
      }
    }
  }
  output += (res.stations.length - 1) + " stops in total."
  console.log(lineChanges);
  console.log(output);
}

setUp();
msg(planTrip('Wu Kai Sha', 'Disneyland Resort'));
