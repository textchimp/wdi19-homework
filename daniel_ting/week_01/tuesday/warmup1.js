var raindrop = function(num) {
  var out = '';
  if (num % 3 === 0) {
    out += 'Pling';
  }
  if (num % 5 === 0) {
    out += 'Plang';
  }
  if (num % 7 === 0){
    out += 'Plong';
  }
  if (out === '') {
    out += num;
  }
  return out;
}
