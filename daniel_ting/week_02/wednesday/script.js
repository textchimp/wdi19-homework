document.body.style.fontFamily = 'Arial, sans-serif';
document.getElementById('nickname').innerHTML = 'Bean';
document.getElementById('favorites').innerHTML = 'Tofu';
document.getElementById('hometown').innerHTML = 'England';
var l = document.getElementsByTagName('li');
for (var i = 0; i < l.length; i++) {
  l[i].className = 'listitem';
  l[i].style.color = 'red';
}
var img = document.createElement('img');
document.body.appendChild(img);
img.src = "http://digitalspyuk.cdnds.net/16/01/1280x640/landscape-uktv-mr-bean.jpg";
