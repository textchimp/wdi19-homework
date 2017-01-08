$(document).ready(function() {
  $('div').hide();
  var words = $('div').text().split(/[ _.:;?!~,`"&|()<>{}\[\]\r\n/\\]+/);
  var f = function() {
    var word = words[Math.floor(Math.random() * words.length)];
    var $p = $('<p>').css({'top' : (Math.random() * innerHeight) + 'px', 'left' : (Math.random() * innerWidth) + 'px', 'font-size': Math.random() * 50 + 'px', 'color': '#'+(Math.random()*0xFFFFFF<<0).toString(16)}).text(word).appendTo('body');
    $p.fadeIn(1000).fadeOut(1000);
  };
  var loop = function() {
    f();
    window.setTimeout(loop, 200);
  }
  loop();
});
