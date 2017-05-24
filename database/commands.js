const db = require('./configuration')

function addTweetsToDatabase(twitterT) {
  db.oneOrNone('INSERT INTO tweets (id, username, tweetbody) VALUES (default, $1, $2)', twitterT)
}

module.exports = {
  addTweetsToDatabase
}
