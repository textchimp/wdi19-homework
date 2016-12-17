var books = [
  {title: 'The Design of EveryDay Things',
   author: 'Don Norman',
   alreadyRead: false
  },
  {title: 'The Most Human Human',
  author: 'Brian Christian',
  alreadyRead: true
  }];

  for (var book in books) {
    var b = document.createElement('p');
    b.innerHTML = "book: " + books[book].title + "<br>author: " + books[book].author;
    if (books[book].alreadyRead) {
      b.style.color = "green";
    }
    document.body.appendChild(b);
  }
