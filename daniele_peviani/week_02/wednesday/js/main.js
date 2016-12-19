var img = document.getElementsByTagName('img')[0];

//Image not loaded yet in the page, so cannot use img.width
var imgWidth = 296;
var imgHeight = 296;

var windowWidth = window.innerWidth - imgWidth;
var windowHeight = window.innerHeight - imgHeight;
var walking = {
  directionX: "RIGHT",
  directionY: "DOWN",
  flip: 0,
  pixelSpeed: 5
}
var killerModeOn = false;

img.style.top = '0px';
img.style.left = '0px';


var moveCat = function () {
  var oldX = parseInt(img.style.left);
  var newX = oldX;
  var oldY = parseInt(img.style.top);
  var newY = oldY;

  if (walking.directionX === "RIGHT") {
    newX += walking.pixelSpeed;
  } else {
    newX -= walking.pixelSpeed;
  }
  if (walking.directionY === "DOWN") {
    newY += walking.pixelSpeed;
  } else {
    newY -= walking.pixelSpeed;
  }
  img.style.left = newX + 'px';
  img.style.top = newY + 'px';
  if ((windowWidth < newX) || (newX < 0)) {
    reverseWalk("X");
  }
  if ((windowHeight < newY) || (newY < 0)) {
    reverseWalk("Y");
  }
}

var reverseWalk = function(XorY) {
  if (XorY === "X") {
    if (walking.flip === 0) {
      img.style.transform = "rotateY(180deg)";
      walking.flip = 180;
    } else {
      img.style.transform = "rotateY(0deg)";
      walking.flip = 0;
    }
    if (walking.directionX === "RIGHT") {
      walking.directionX = "LEFT";
    } else {
      walking.directionX = "RIGHT";
    }
  } else {
    if (walking.directionY === "DOWN") {
      walking.directionY = "UP";
    } else {
      walking.directionY = "DOWN";
    }
  }
}

var killTheCat = function(e) {
  if (killerModeOn) {
    var cat = document.getElementsByTagName('img')[0];
    var catX = parseInt(cat.style.left);
    var catY = parseInt(cat.style.top);
    document.getElementById('bang').pause();
    document.getElementById('bang').play();
    if (((e.clientX >= (catX)) && (e.clientX <= (catX + imgWidth))) && ((e.clientY >= (catY)) && (e.clientY <= (catY + imgHeight)))) {
      clearInterval(myTimer);
      img.src = "images/blood.png";
      document.getElementById('cat-audio').pause();
      setTimeout(deadCat, 2000);
    }
  }
}

var deadCat = function() {
  img.src = "images/dead-cat.jpg";
  btnKillerMode.style.display = "none";
}

var killerMode = function() {
  document.body.style.cursor = "url('http://image.flaticon.com/icons/png/128/69/69373.png'), auto";
  killerModeOn = true;
  clearInterval(myTimer);
  myTimer = setInterval(moveCat, 7);
  walking.pixelSpeed = 10;
  document.getElementById('cat-audio').src = "audio/angry_cat_meow.mp3";
}


var myTimer = window.setInterval(moveCat, 60);
var btnKillerMode = document.getElementById("btnKillerMode");

document.addEventListener('click', killTheCat);
btnKillerMode.addEventListener('click', killerMode);
