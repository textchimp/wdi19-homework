var img = document.getElementsByTagName('img')[0];
img.style.left = 0;
img.style.right = 0;
img.style.top = '100px'
var newleft = 0
var maxWidth = window.innerWidth -296;
var newRight =maxWidth;
var animateright;
var playing = false;
var play = function PlaySound(song) {
var audioElement = document.createElement('audio');
audioElement.setAttribute('src', song);
audioElement.play();
}
var  catWalk = function(){

    newleft +=  10;
    img.style.left = newleft + 'px';
    if(parseInt(img.style.left) >= maxWidth)
    {
        img.style.webkitTransform ="scaleX(-1)";
        img.style.msTransform="scaleX(-1)";
        img.style.transform = "scaleX(-1)";
        animateright = setInterval(walkBack,100);
        clearInterval(animate);
    }//if
    if (newleft > 450 && playing === false){
        play('song.mp3')
        playing =true
        document.body.style.background= "url(http://www.dokimos.org/ajff/idx2.gif)"
        document.getElementById('scroller').style.fontSize= (200 + 'px');
        document.getElementById('scroller2').style.fontSize= (100 + 'px');
        document.getElementById('scroller').style.color= 'white';
        document.getElementById('scroller2').style.color= 'red';
        document.getElementById('hotdogs').style.opacity= 1;
        document.getElementById('meow').src='https://www.youtube.com/embed/ndsaoMFz9J4?autoplay=1&controls=0&showinfo=0';
    }//if
 if (newleft === 0 && (playing === true)){
   catWalk()
 }
};


var walkBack = function() {
 console.log('walking back')
    newleft = newleft-10;
    img.style.left = newleft + 'px';
      if(parseInt(img.style.left) === 0){
        clearInterval(animateright);

      }


}
var animate = setInterval(catWalk,100);





  //catwalk



  // var catWalkBack = function() {
  //   leftAmount = (leftAmount + - 5);
  //   img.style.left = (leftAmount + 'px')
  //   if (leftAmount === 0){
  //     window.clearInterval(stopBack);
  //     }
  //   }//walkback


  // if (leftAmount >= 850){
  //   var stopBack = setInterval(catWalkBack, 100)
  // }
  // if (leftAmount === 0){
  //   var stop = setInterval(catWalk, 100);
