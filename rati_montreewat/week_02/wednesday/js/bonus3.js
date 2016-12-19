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

//catx is Number
//Inter. x position of the cat in screen
//Examples
var catx1 = 0          //left edge
var catx2 = (width/2); //middle
var catx3 = width      //right edge
// Template for catx
// var = fn-for-catx (catx) {
//   (img.style.left = catx + "px")
// }

//dx is Number
//Inter. the difference in the position that cat walk each time
//Examples
var dx1 = 0;   //not moving
var dx2 = 2;   //moving from right to left
var dx3 = -2   //moving from left to right
// Template for dx
// var = fn-for-dx (dx) {
//   (img.style.left = cat(before) + dx + "px")
// }

// ****** change dx when cow x > width or <0

//cat is object,
// __key__|__value
//   catx | Number
//    dx  | Number
//Inter. cat with coordinate x and difference dx
//       catx is the position of the cat
//       dx is the pixel per walk
// Example
var cat1 = {
  catx : 0,
  dx : 10
}             // at 0 moving from left to right

img.style.left = cat1['catx']+ "px";
img.dx = cat1['dx'];

console.log(img.style.left);
console.log(img.dx);

var cat1 = {
  catx : 10,
  dx : -10
}             // at 10 moving from right to left

// Template for cat
// var = fn-for-cat (cat) {
//   ...  cat[catx] (or img.style.left)
//        cat[dx] (or img.dx)
// }



//Function definitions

// string -> string
//Inter . change the image to the dancing cat

var dancing = function(){
  img.src="giphy.gif"
}


// string -> string
//Inter . change the image to the walking cat
var walk = function(){
  img.src="http://www.anniemation.com/clip_art/images/cat-walk.gif"
}

//cat ->  cat
//Inter. increase cowx by dx ; bounce off edge

var next_cat = function () {
  var catx = parseInt(img.style.left, 10);
  var dx = img.dx;

  if ((catx + dx) > width) {
    img.style.left = width + "px";
    img.dx = -1*dx;
  } else if ((catx + dx) < 0) {
    img.style.left = 0 + "px";
    img.dx = -1*dx;
  } else if (catx === (width/2)) {
    img.style.left = catx + dx + "px";
    img.dx = dx;
    dancing();
    window.setTimeout(walk, 10000);
   } else {
    img.style.left = catx + dx + "px";
    img.dx = dx;
  }
}



console.log("Test for next_cat by comment below out" );
// advance_cat();
// console.log("check by inspect,given { catx : 0, dx : 10 }, left property should = 10" )             ; ordinary walk

// console.log("check by inspect,given { catx : width - 10, dx : 10 }, left property should = width") ; reach right edge
// console.log("check by inspect,given { catx : 10, dx : -10 }, left property should = 0")             ; reach left edge

// console.log("check by inspect,given { catx : width , dx : 10 }, left property should = width - dx ") ; try to pass  right edge
// console.log("check by inspect,given { catx : 0, dx : -10 }, left property should = width + dx")      ; try tp pass  left edge





//cat, timer ->  image
//start with cat1 = 0

var catWalk = function () {
  debugger;
  var delayMilliseconds = 50
  window.setInterval(next_cat, delayMilliseconds);
}

console.log("Test for catWalk by comment below out" );
catWalk();
