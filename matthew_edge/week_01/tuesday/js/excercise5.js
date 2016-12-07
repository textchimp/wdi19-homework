// Warmup - Raindrops
//
// Write a Javascript program that will take a number (eg 28 or 1755 or 9, etc) and output the following:
//
// If the number contains 3 as a factor, output 'Pling'.
// If the number contains 5 as a factor, output 'Plang'.
// If the number contains 7 as a factor, output 'Plong'.
// If the number does not contain 3, 5, or 7 as a factor, output the number as a string.



var rainDrops = function (input){
  if (input % 3 === 0){
  return ("Pling");
} else if (input % 5 === 0){
  return ("Plang");
} else if (input % 7 === 0){
  return ("Plong");
} else  {
  return input.toString(); //needed help as this was a new function
}
}


res = "";
res+= "Pling"

//used else if instead od just if.
