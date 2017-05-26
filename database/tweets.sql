DROP TABLE IF EXISTS tweets;

CREATE TABLE tweets (
  ID SERIAL PRIMARY KEY,
  username VARCHAR(40),
  tweetBody VARCHAR(140),
  retweet BOOLEAN
);
