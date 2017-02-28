// Get an array of all of the people with an age of over 60
// Remove all of the people with an age less than 40

// EACH ////////////////////////////////////////////////////////////////////////
var numbers = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ];

var people = [
  { id: 1, username: "A", active: true,  age: 20 },
  { id: 2, username: "B", active: false, age: 35 },
  { id: 3, username: "C", active: false, age: 50 },
  { id: 4, username: "D", active: true,  age: 65 },
  { id: 5, username: "E", active: true,  age: 80 },
  { id: 6, username: "E", active: true,  age: 95 },
];

// Iterate through numbers and log each number to the console
_(numbers).each(function (n) {
  console.log( n );
});



// MAP /////////////////////////////////////////////////////////////////////////


// Iterate through numbers and multiply each one of them by 5
var fives = _(numbers).map(function (n) {
  return n*5 ;
});
console.log(fives);


// REDUCE //////////////////////////////////////////////////////////////////////
// Iterate through numbers and reduce it by adding them together
var total = _(numbers).reduce(function (sum, n) { // sum => accumulator
  console.log('sum:', sum, 'n:', n);
  return sum + n;
});
console.log(total);

// Get an array of all of the people in people that have the username "E"
var eUsers = _(people).filter(function(sum,p){
  return p.username === 'E';
});
// var eUsers = _(people).where({username:'E'})
console.log(eUsers);

// Find the first object in people that has the id of 3
var find_1 = _.find(people, function (f) { return f.id === 3; })
var find_2 = people.find(function (f) { return f.id === 3; })
var find_3 = _(people).findWhere( { id : 3 })

console.log(find_1);
console.log(find_2);
console.log(find_3);


// Find the first person who has an age of less than 50
var youngPerson = _(people).find(function (p) {
  return p.age < 50;
});
console.log(youngPerson);

// - Get an array of all of the people with an age of over 60
var oldPeople = _(people).filter(function (p) {
  return p.age > 60;
});
console.log(oldPeople);

// - Remove all of the people with an age less than 40
var youngPeople = _(people).reject(function (p) {
  return p.age < 40;
});
console.log(youngPeople);
