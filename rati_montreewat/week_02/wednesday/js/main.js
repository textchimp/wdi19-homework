// Create a new Javascript file and link to it with a script tag at the bottom.
// Create a variable to store a reference to the img.
// Change the style of the img to have a "left" of "0px", so that it starts at the left hand of the screens.
// Create a function called catWalk() that moves the cat 10 pixels to the right of where it started,
//by changing the "left" style property.
// Call that function every 50 milliseconds. Your cat should now be moving across the screen from left to right. Hurrah!
//
// Bonus #1: When the cat reaches the right-hand of the screen, restart them at the left hand side ("0px").
//So they should keep walking from left to right across the screen, forever and ever.
//
// Bonus #2: When the cat reaches the right-hand of the screen, make them move backwards instead.
//They should keep walking back and forth forever and ever.
//
// Bonus #3: When the cat reaches the middle of the screen, replace the img with an image of a cat dancing,
//keep it dancing for 10 seconds, and then replace the img with the original image and have it continue the walk.
//
// Bonus #4: Pretty much go nuts or whatever.

// ###########################

// Data definition
// Step 1 :Indentify constant information

// Defind the width of the screen (browser viewport)   note-** document is object HTML document
var width = screen.width;
//Defind the height of the screen
var height = screen.height;
//Defind the start point of y
var start_y = (height/2);
//Define a cat image walking from L to R aross screen
var img = document.getElementsByTagName('img')[0];

img.style.top = start_y + "px";

console.log(width);

// ##############################
//Step 2 Indentify Changinng indormation

//cat is Number
//Inter. x position of the cat in screen
//Examples
var cat1 = 0          //left edge
img.style.left = cat1+ "px";
var cat2 = (width/2); //middle
var cat3 = width      //right edge
// Template for cat // tell where you can store cat
// var = fn-for-cat (c) {
//   ...  c (or img.style.left)
// }


//Function definitions


//cat ->  cat
//Inter. produce and store the next cat ( by advancing it 10 px to the right)

//took the template above
var advance_cat = function () {
    var cat = parseInt(img.style.left, 10) + 10;
    img.style.left = cat.toString() + "px";
}

console.log("Test for advance_cat by comment below out" );
// advance_cat()
// console.log("check by inspect, left should be equal to 10 px");


//cat, timer ->  image
//start with cat1 = 0

var catWalk = function () {
  debugger;
  var delayMilliseconds = 50
  window.setInterval(advance_cat, delayMilliseconds);
}

console.log("Test for catWalk by comment below out" );
 console.log(catWalk(cat1));
