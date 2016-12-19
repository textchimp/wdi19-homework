var img = document.getElementsByTagName('img')[0];
img.style.left = 0;
var position = 0;

var catwalk = function() {
  position += 10;
  img.style.left = position + "px";
  if (position > window.innerWidth) {
    window.clearInterval(timer);
    p = document.createElement('p');
    p.style.fontSize = "30px";
    p.style.color = "Red";
    p.innerHTML = "Bazinga! And you thought you got me";
    document.body.appendChild(p);
  }
};

var timer = window.setInterval(catwalk, 80);

var capture = function() {
  rright();
  img.src = "pokeball.png";
  window.clearInterval(timer);
  img.width = 30;
  img.style.marginTop = "138px";
  img.style.left = position + 148 + "px";
  window.setTimeout(rleft, 300);
  window.setTimeout(troll, 1000);
}

var rleft = function() {
  img.style.transform = "rotate(-20deg)";
}

var rright = function() {
  img.style.transform = "rotate(20deg)";
}

var troll = function() {
    img.src = "troll.jpg";
    img.width = 80;
    timer = window.setInterval(catwalk, 80);
}

window.addEventListener('click', capture);
