var bros = "groucho harpo chico".split(' ');

_(bros).each(function(b) {
  console.log(b.toUpperCase());
})

var groucho = {
  name: 'groucho',
  instrument: 'guitar',
  vice: 'cigars'
}

_(groucho).each(function(val, key) {
  console.log(key, 'is', val);
})

var fullBrothers = _(bros).map(function(b) {
  return b + ' Marx';
})

console.log(bros, fullBrothers);

var nums = [5, 7, 23];
var squares = _(nums).map(function(n) {
  return n * n;
})

console.log(nums, squares);

var total = _(nums).reduce(function(sum, n) {
  return sum + n;
})

console.log(total);

var nums = [1, 1, 1, 5, 7, 11, 14, 7, 3, 20, 8, 5, 17];

var result = _(nums).find(function(n) {
  return n % 2 === 0;
});

console.log(result);

var brother = _(bros).find(function(b) {
  return b.includes('i');
})

console.log(brother);

var evens = _(nums).filter(function(n) {
  return n % 2 === 0;
})

console.log(evens);

var actors = [
  {name: 'Groucho', gender: 'male'},
  {name: 'Harpo', gender: 'male'},
  {name: 'Mrs Dumont', gender: 'female'},
  {name: 'Chico', gender: 'male'},
];

var maleActors = _(actors).where({gender: 'male'});

console.log(maleActors);


var names = _(actors).pluck('name');

console.log(names);
