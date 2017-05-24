DROP TABLE IF EXISTS tweets;

CREATE TABLE tweets (
  ID SERIAL PRIMARY KEY,
  username VARCHAR(40),
  tweetBody VARCHAR(140)
);


INSERT INTO tweets VALUES (default, 'tdunn1248', 'A Royal with cheese');
