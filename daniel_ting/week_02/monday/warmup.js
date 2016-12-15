var stats = {};

var register_clapper = function(day, clapper) {
  var lotto = [];
  var day = day.toUpperCase();
  if (day === "FRIDAY") {
    console.log("friday");
    for (var student in stats) {
      if (stats[student].length > 3) {
        lotto.push(stats[student][0]);
      }
    }
  }
  if (!stats[clapper]) {
    stats[clapper] = [clapper];
  }
  if (stats[clapper].indexOf(day) === -1) {
    stats[clapper].push(day);
  }
  return lotto[Math.floor(Math.random() * lotto.length)];
}
