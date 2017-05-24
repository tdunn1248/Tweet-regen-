const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const config = require('./javascript/config')()

const port = 3004

app.use(bodyParser.urlencoded({extended: true}))
app.set('view engine', 'ejs')

// app.get('/', (req, res) => {
//   res.render('index')
// })

// app.get('/tweets', (req, res) => {
//   twitterAPI.searchTweets()
//   res.render('index')
// })



app.listen(port, () => {
  console.log('listenin to port: ' + port +  ', fool')
})

module.exports = app
