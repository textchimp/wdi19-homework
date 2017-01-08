var link = document.querySelectorAll("ul a");

for (var i = 0; i < link.length; i++) {
  var href = link[i].getAttribute("href");
  var thumbnail = youtube.generateThumbnailUrl(href);
  var img = document.createElement("img");
  img.setAttribute("src", thumbnail);
  link[i].appendChild(img);
}
