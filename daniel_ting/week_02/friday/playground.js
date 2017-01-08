var greet = function() {
  var name = $('#name').val();
  $('#greeting').text("Hello " + name);
}

$('#useName').on('click', greet);
$('#name').on('keyup', greet);

// calulator
var addition = function() {
  var first = $('#first-number').val();
  var second = $('#second-number').val();
  var result = parseFloat(first) + parseFloat(second);
  $('#result').text(result);
};

$('#calculate').on('click', addition);

// slideshow
var fadeBill = function() {
  $('.bill').fadeToggle(4000, fadeBill)
};

fadeBill();

var doMagic = function() {
  var magicNumber = Math.random();
  $(this).closest('.magic').find('h3').text(magicNumber);
  console.log(magicNumber);
}

$('.magic button').on('click', doMagic);
