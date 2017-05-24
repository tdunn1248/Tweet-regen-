const pgp = require('pg-promise')()
const connectionString = 'postgres://rover@localhost:5432/regen'
const db = pgp(connectionString)

module.exports = db
