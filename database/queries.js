const db = require('./configuration')

function grabTweets() {
  return db.any('SELECT * FROM tweets')
}

module.exports = {
  grabTweets
}
