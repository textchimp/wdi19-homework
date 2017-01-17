
CREATE TABLE authors(
  id INTEGER UNIQUE PRIMARY KEY AUTOINCREMENT,
  name TEXT,
  bookid INTEGER,
  description TEXT,
  image TEXT
);
INSERT INTO authors(name, bookid, description, image) VALUES ("Dan Brown", 1, "Dan Brown is the author of numerous #1 bestselling novels, including The Da Vinci Code, which has become one of the best selling novels of all time as well as the subject of intellectual debate among readers and scholars. Brown’s novels are published in 56 languages around the world with over 200 million copies in print.
In 2005, Brown was named one of the 100 Most Influential People in the World by TIME Magazine, whose editors credited him with “keeping the publishing industry afloat; renewed interest in Leonardo da Vinci and early Christian history; spiking tourism to Paris and Rome; a growing membership in secret societies; the ire of Cardinals in Rome; eight books denying the claims of the novel and seven guides to read along with it; a flood of historical thrillers; and a major motion picture franchise.”
The son of a mathematics teacher and a church organist, Brown was raised on a prep school campus where he developed a fascination with the paradoxical interplay between science and religion. These themes eventually formed the backdrop for his books. He is a graduate of Amherst College and Phillips Exeter Academy, where he later returned to teach English before focusing his attention full time to writing.
Brown is currently hard at work on a new novel.", "http://danbrown.com/wp-content/themes/danbrown/images/db/slideshow/author/02.jpg");
