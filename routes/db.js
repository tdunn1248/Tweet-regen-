const express = require('express')
const router = express.Router()

//function batch to handle queries
const db = require('../queries')

// authorization keys
const client = require('./config')

//db CRUD routes

// app.get('/api/getTweets', (req, res) => {
//   db.grabTweets()
//     .then( data => {
//       res.json(data)
//     })
//     .catch(err => {
//       console.log(err)
//     })
// })

module.exports = router
