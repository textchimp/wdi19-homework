// Create a new Javascript file and link to it with a script tag at the bottom.
// Create a variable to store a reference to the img.
// Change the style of the img to have a "left" of "0px", so that it starts at the left hand of the screens.
// Create a function called catWalk() that moves the cat 10 pixels to the right of where it started, by changing the "left" style property.
// Call that function every 50 milliseconds. Your cat should now be moving across the screen from left to right. Hurrah!
//
// Bonus #1: When the cat reaches the right-hand of the screen, restart them at the left hand side ("0px"). So they should keep walking from left to right across the screen, forever and ever.
//
// Bonus #2: When the cat reaches the right-hand of the screen, make them move backwards instead. They should keep walking back and forth forever and ever.
//
// Bonus #3: When the cat reaches the middle of the screen, replace the img with an image of a cat dancing, keep it dancing for 10 seconds, and then replace the img with the original image and have it continue the walk.
//
// Bonus #4: Pretty much go nuts or whatever.

var cat = document.getElementsByTagName('img')[0];
var rick = document.getElementsByClassName('rick')[0];
var button1 = document.createElement('button');
var button2 = document.createElement('button');
var audio = document.getElementById('audio');
var trippycats = document.getElementsByClassName('trippy');

cat.style.left = '0px';
button1.innerHTML = "Squanch with Rick?";
button2.className = 'boring';
button2.innerHTML = "NO, no squanching in here"

button1.addEventListener('click', function() {
  audio.play();
  cat.style.visibility = 'hidden';
  rick.style.visibility = "hidden";
  button2.style.visibility = 'hidden';
  this.style.visibility = 'hidden';
  document.body.style.backgroundImage = 'url(http://www.clipartandgraphics.com/images/backgrounds/colorwave2.gif)';

  for (var i = 0; i < trippycats.length; i++) {
    trippycats[i].style.left = '400px';
    trippycats[i].style.visibility = "visible";
    var stop_two = setInterval(function() {
      for (var i = 0; i < trippycats.length; i++) {
        moveRandom(trippycats[i]);
        resize(trippycats[i]);
      }
    }, 300);
  }

});

button2.addEventListener('click', function() {
  // audio.play();
  button1.style.visibility = 'hidden';
  rick.style.visibility = "hidden";
  this.style.visibility = 'hidden';
  cat.style.top = '0px';
  cat.style.left = '0px';
  multiply(cat, 0, 500);
});

// Basic recursivity, was breaking Max Call Stacks on all the other calls
// it's at least something, kind of hard to work with dom elements and higher
// order functions
var multiply = function(cat, count, maxCats) {
  var c = cat;
  var counter = count;
  counter++;

  if (counter > 500) {
    var cats = document.getElementsByTagName('img');
    for (var i = 0; i < cats.length; i++) {
      var temp = i * 1.2;
      moveRandom(cats[i])
      resize(cats[i], { width: 200 - temp, height: 200 - temp})
    }
    return
  } else {
    var x = c.cloneNode(true)
    document.body.appendChild(x)
    multiply(c, counter);
  }
}

var resize = function(trippyCat, opts) {
  if (opts) {
    var width = opts.width;
    var height = opts.height;
  } else {
    var width = Math.random() * 500;
    var height = Math.random() * 500;
  }
  trippyCat.style.width = width + 'px';
  trippyCat.style.height = height + 'px';

  if (trippyCat.style.width < 30 && trippyCat.style.height < 30) {
    trippyCat.src = "http://rs523.pbsrc.com/albums/w356/unkadug/explosion-1.gif~c200";
    trippyCat.style.width = "50px";
    trippyCat.style.zIndex = 1;
    document.body.style.backgroundColor = 'black';
    setTimeout(function() {
      var cats = document.getElementsByTagName('img');
      for (var i = cats.length; i--;) {
        cats[i].remove()
      }
    }, 2000)
  }
}


var moveRandom = function(trippyCat) {
  var xAxis = Math.random() * 999;
  var yAxis = Math.random() * 400;
  trippyCat.style.top = yAxis + 'px';
  trippyCat.style.left = xAxis + 'px';
  trippyCat.style.right = xAxis + 'px';
  trippyCat.style.bottom = yAxis + 'px';
}

var moveRight = function() {
  var oldPos = parseInt(cat.style.left);
  var newPos = oldPos + 10;
  cat.style.left = newPos + 'px';

  if (cat.style.left === '400px') {
    clearInterval(stop);
    document.body.appendChild(button1);
    document.body.appendChild(button2);
    rick.style.visibility = "visible";
  }
};

var stop = window.setInterval(moveRight, 50);
