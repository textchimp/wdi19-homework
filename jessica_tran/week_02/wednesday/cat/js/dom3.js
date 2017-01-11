var cat = document.getElementsByTagName('img')[0];

cat.style.position = 'absolute';
cat.style.left='0px';

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



  newLeft += distance;
  cat.style.left = newLeft + 'px';
};
window.setInterval(catWalk,50);
