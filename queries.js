const pgp = require('pg-promise')
const connectionString = 'postgres://jiggs@localhost:5432/regen'
const db = pgp(connectionString)

function grabTweets() {
  return db.any('SELECT * FROM tweets')
}
