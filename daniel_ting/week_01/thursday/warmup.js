year = prompt("Gimme a year");

var isLeapYear = function(year) {
  return (year % 400 === 0 || (year % 4 === 0 && year % 100 !== 0));
}

isLeapYear(year);
