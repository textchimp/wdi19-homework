
CREATE TABLE novels(
  id INTEGER UNIQUE PRIMARY KEY AUTOINCREMENT,
  name TEXT,
  author TEXT,
  description TEXT,
  image TEXT
);
INSERT INTO novels(name, author, description, image) VALUES ("The Da Vinci Code", "Dan Brown", "Robert Langdon, professor of religious symbology at Harvard, is in Paris to give a lecture. At the reception that follows, he is scheduled to meet with a revered curator from the world-famous Louvre museum. But the curator never shows up, and later that night Langdon is awakened by authorities and told that the curator has been found dead. He is then taken to the Louvre—the scene of the crime—where he finds out that baffling clues have been left behind.
Thus begins a race against time, as Robert Langdon becomes a suspect and, with the help of French cryptologist Sophie Neveu, must decipher a mystifying trail of clues that the two come to realize have been left specifically for them. If Robert and Sophie cannot solve the puzzle in time, an ancient truth could be lost forever—and they themselves might end up as collateral damage.", "https://upload.wikimedia.org/wikipedia/en/6/6b/DaVinciCode.jpg");
