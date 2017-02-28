var showPic = function() {
  var xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function() {
    if (xhr.readyState < 4) { return; }
    var poster = JSON.parse(xhr.responseText)['Poster'];
    document.getElementById("img").setAttribute("src", poster);
  }
  xhr.open('GET', 'http://omdbapi.com/?t=' + document.getElementById("search").value);
  xhr.send();
}
