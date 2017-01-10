var cat = document.getElementsByTagName('img')[0];

cat.style.position = 'absolute';
cat.style.left='0px';
cat.style.bottom='0px';

var body = document.body;
var dino = document.createElement('img');
dino.style.position = 'absolute';
dino.src = "giphy.gif";
dino.style.zIndex='-2';
body.appendChild(dino);
dino.style.left='0px';
dino.style.top='0px';

var dinoBike = function(){
  var oldLeft = parseInt(dino.style.left);
  var oldTop =parseInt(dino.style.top);
  var newLeft = oldLeft + 5;
  var newTop = oldTop + 1;
  if ( newLeft > window.innerWidth){
    dino.style.left=0 + 'px';
    dino.style.top=0 + 'px';
  }
  else {  dino.style.left = newLeft + 'px';
  dino.style.top = newTop + 'px';
}

}
// https://images.thoughtbot.com/css-selectors-cats/dancing-cat.gif

var cat3 = document.createElement('img');
cat3.style.position = 'absolute';
cat3.src = "https://mlkshk-ada.kxcdn.com/r/FEA5";
// cat3.style.zIndex='-1';
body.appendChild(cat3);
cat3.style.right='0px';
cat3.style.top='0px';
cat3.style.zIndex='-1'


var catBigger= function() {

 cat3.width+=5;
 if(cat3.width > 200){
   cat3.width = 0;
 }
};



var catWalk = function (){
  var oldLeft = parseInt(cat.style.left);
  var newLeft = oldLeft;

  if (oldLeft<10){
    distance= +10;
  }
  if(oldLeft>window.innerWidth-cat.width){
    distance= -10;
  }
  newLeft += distance;
  cat.style.left = newLeft + 'px';
};
var dancingCat= function (){
var body = document.body;
var cat2 = document.createElement('img');
cat2.src = "http://www.clipartkid.com/images/594/animation-bundle-animated-cats-jumping-playing-and-running-around-see-xL5d9E-clipart.gif";
cat2.style.width=50+'px';

body.appendChild(cat2);
}


var cat4 = document.createElement('img');
cat4.src = "http://www.clipartkid.com/images/594/animation-bundle-animated-cats-jumping-playing-and-running-around-see-xL5d9E-clipart.gif";
body.appendChild(cat4);
cat4.style.position='absolute';
cat4.style.left = '0px';
cat4.style.bottom='0px';
cat4.style.width=400+'px';
cat4.style.opacity = 0.70;


window.setInterval(dancingCat,2000);
window.setInterval(catWalk,50);
window.setInterval(dinoBike,80);
window.setInterval(catBigger, 100);
