CREATE TABLE books (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  title TEXT,
  author_id INTEGER,
  yearPublished TEXT,
  publisher TEXT,
  blurb TEXT,
  image TEXT
);

INSERT INTO books (title, author_id, yearPublished, publisher, blurb, image) VALUES ('Musashi',1,'2012','Kodansha America, Inc','The classic samurai novel about the real exploits of the most famous swordsman. The classic samurai novel about the real exploits of the most famous swordsman. Miyamoto Musashi was the child of an era when Japan was emerging from decades of civil strife. Lured to the great Battle of Sekigahara in 1600 by the hope of becoming a samurai-without really knowing what it meant-he regains consciousness after the battle to find himself lying defeated, dazed and wounded among thousands of the dead and dying. On his way home, he commits a rash act, becomes a fugitive and brings life in', 'http://d3cxckyc3pu9pz.cloudfront.net/images/9781568364278.jpg?width=240');
--
-- ALTER TABLE books ADD COLUMN author_id INTEGER;
