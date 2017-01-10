var cat = document.getElementsByTagName('img')[0];

cat.style.position = 'absolute';
cat.style.left='0px';

var catWalk = function (){
  var oldLeft = parseInt(cat.style.left);
  var newLeft = oldLeft + 10;

  if ( newLeft > window.innerWidth){
    cat.style.left=0 + 'px';
  }
  else {  cat.style.left = newLeft + 'px';
}

};
window.setInterval(catWalk,50);
