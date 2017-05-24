const express = require('express')
const router = express.Router()
//

// functions to handle queries
const queries = require('../database/queries')

// authorization keys
const client = require('./config')

//db CReadUD routes


// app.get('/api/getTweets', (req, res) => {
//   queries.grabTweets()
//     .then( data => {
//       res.json(data)
//     })
//     .catch(err => {
//       console.log(err)
//     })
// })

module.exports = router
