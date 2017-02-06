///PART 1 /////////////

var people = [
  { id: 1, username: "A", active: true,  age: 20, uid: 1412 },
  { id: 2, username: "B", active: false, age: 35, uid: 1352 },
  { id: 3, username: "C", active: false, age: 50, uid: 5418 },
  { id: 4, username: "D", active: true,  age: 65, uid: 216  },
  { id: 5, username: "E", active: true,  age: 80, uid: 18   },
  { id: 6, username: "E", active: true,  age: 95, uid: 1000 }
];


// Log out 30 random numbers between 20 and 100

var numbers = _.range(20,100);
var random = _(numbers).sample(5);
console.log(random);

// Create a function that can only ever be called once

var functionA = function(){
  console.log('Hello')
};
var once = _.once(functionA);
once();
once();

// Append a paragraph tag to the body for every person in people. It should end up looking something like this - <p> Hello A, you don't look a day over 20 </p>
$(document).ready(function(){

  _(people).each(function(person){
    var str = ["<p> Hello",person['username'],",",
    "you don't look a day over",person['age'],"</p>"].join(' ');
    $('body').append(str);
  });

});


//PART 2/////////////

var startingData = [
  [["groucho", "marx", 1990], ["firstName", "lastName", "born"]],
  [["chico",   "marx", 1987], ["firstName", "lastName", "born"]],
  [["zeppo",   "marx", 2001], ["firstName", "lastName", "born"]],
  [["harpo",   "marx", 1988], ["firstName", "lastName", "born"]],
  [["gummo",   "marx", 1992], ["firstName", "lastName", "born"]]
];

_(startingData).each(function(marx){
  var unzip = _.unzip(marx);
  var object = _.object(unzip);
  var invert = _.invert(object);
  var number = _.mapObject(invert, function(val,key){
    var newVal = parseInt(val)
    if(!_.isNaN(newVal)){
      return val - 100;
    };
    return _.first(val).toUpperCase() + _.rest(val,1).join('');
    });

  var template = _.template("<%= firstName %> <%= lastName %> was born in <%= born %>");

  var output = template(number);
  console.log(output);
})
