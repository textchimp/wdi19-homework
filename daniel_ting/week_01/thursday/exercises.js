// The Recipe Card
var recipe = {
  'name': 'Mole',
  'Serves': 2,
  'Ingredients': ['cinnamon', 'cumin', 'cocoa']
};

console.log(recipe.name);
console.log('Serves: ', recipe.Serves);
console.log('Ingredients:');
for (var i = 0; i < recipe.Ingredients.length; i++) {
  console.log(recipe.Ingredients[i]);
}

// The Reading List
var ReadingList = [
  {'title': 'Lord of the Flies', 'author': 'William Golding', 'alreadyRead': false},
  {'title': 'Anna Karenina', 'author': 'Leo Tolstoy', 'alreadyRead': true},
  {'title': 'One Hundred Years of Solitude', 'author': 'Gabriel Garcia Marquez', 'alreadyRead': false}
];

for (var i = 0; i < ReadingList.length; i++) {
  var des = ReadingList[i].title + ' by ' + ReadingList[i].author;
  console.log(ReadingList[i].title + des);
  if (ReadingList[i].alreadyRead) {
    console.log('You already read "' + des);
  } else {
    console.log('You still need to read "' + des);
  }
}

// The Movie Database
var IMDB = {
  'title': 'Titanic',
  'duration': 180,
  'stars': ['Dicaprio', 'Winslet']
};

function movieInformation(movie) {
  var res = movie.title + ' last for ' + movie.duration + ' minutes. Stars: ';
  for (var i = 0; i < movie.stars.length; i++) {
    if (i === movie.stars.length - 1) {
      res += movie.stars[i] + '.';
    } else {
      res += movie.stars[i] + ', '
    }
  }
  console.log(res);
}
