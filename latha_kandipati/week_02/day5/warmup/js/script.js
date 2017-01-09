//Get the text from p tag in a array and hide it.
$(document).ready(function(){
// var pArr = $('p').text().split(/[ ,;.\n\-]+/); //Using Regular expression
var pArr = $('p').text().split(' ');
//generate random number from 1 to the length of the array.
var ind = Math.floor(Math.random() * (pArr.length-0 +1));
//Using the random number as index to get a word.
var randWord = pArr[random(pArr.length)];
var $div = $('<div class="showText">').html(randWord).css({
  top: random(window.innerHeight) + 'px',
  left: random(window.innerWidth) + 'px'
});
console.log($div);
$('body').append($div);
//display at rondom place

//Make the display as fadeIn and fadeOut.
//Loop the random number generation in setInterval


function random(max){
  return Math.random() * (max);
}
});
