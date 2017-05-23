const express = require('express')
const router = express.Router()

const db = require('../queries')

//database routes
app.get('/api/getTweets', (req, res) => {
  db.grabTweets()
    .then( data => {
      res.json(data)
    })
    .catch(err => {
      console.log(err)
    })
})



module.exports = router
