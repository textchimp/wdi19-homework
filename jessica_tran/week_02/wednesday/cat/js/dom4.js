var cat = document.getElementsByTagName('img')[0];

cat.style.position = 'absolute';
cat.style.left='0px';

var catTimer;
var distance =0;

var catWalk = function (){
  var oldLeft = parseInt(cat.style.left);
  var newLeft = oldLeft;

  if (oldLeft<10){
    distance= +10;
  cat.style.transform = "rotateY(360deg)"

  }
  if(oldLeft>window.innerWidth-cat.width){
    distance= -10;
    cat.style.transform = "rotateY(180deg)";
  }
//////////
  var halfway = parseInt((window.innerWidth-cat.width)/2);
  var oldLeft = parseInt(cat.style.left);
  if(oldLeft === halfway){
      var stopDancing = function (){
        window.clearInterval(catTimer);
        cat.src = "http://vignette3.wikia.nocookie.net/animal-jam-clans-1/images/7/7d/Dancing-cat.gif/revision/latest?cb=20160319144601";
        }
        stopDancing();
        var startDancing= function(){
          cat.src ="http://www.anniemation.com/clip_art/images/cat-walk.gif";
          catTimer= window.setInterval(catWalk,50);
        }
      window.setTimeout(startDancing, 5000);
    }
///////////////
  newLeft += distance;
  cat.style.left = newLeft + 'px';
};
var catTimer = window.setInterval(catWalk,50);
