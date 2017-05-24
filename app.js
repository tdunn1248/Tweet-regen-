const express = require('express')
const bodyParser = require('body-parser')
const app = express()

const port = 3004

const config = require('./routes/config')
const twitterAPI = require('./routes/twitterAPI')()
// require db routes

app.use(bodyParser.urlencoded({extended: true}))

app.set('view engine', 'ejs')

app.get('/', (req, res) => {
  res.render('index')
})

app.get('/tweets', (req, res) => {
  res.render('index')
})

app.listen(port, () => {
  console.log('listenin to port: ' + port +  ', fool')
})

module.exports = app

// what else do i need to export
