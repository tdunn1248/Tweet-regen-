const db = require('./configuration')

function addTweetToDatabase(user, tweet) {
  db.any('SELECT * FROM tweets WHERE tweets.tweetbody = $1', [tweet]).then(tweets => {
    if(tweets.length == 0) {
      db.oneOrNone('INSERT INTO tweets (id, username, tweetbody) VALUES (default, $1, $2)', [user, tweet])
        .catch(err => console.log(err))
    }
  }).catch(err => console.log(err))
}

module.exports = {
  addTweetToDatabase
}
