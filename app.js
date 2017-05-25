const express = require('express')
const bodyParser = require('body-parser')
const ejs = require('ejs')
const path = require('path')
const app = express()

const port = 3004

const client = require('./javascripts/config')
const twitterAPI = require('./javascripts/twitterAPI')()
const queries = require('./database/queries')
const db = require('./database/configuration')
const retweet = require('./javascripts/retweet')

app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')
app.use(bodyParser.urlencoded({extended: true}))
app.use(express.static(path.join(__dirname, 'public')))

app.get('/', (req, res) => {
  res.render('index')
})

app.get('/tweets', (req, res) => {
  queries.grabTweets()
    .then(tweets => {
      let userName = tweets[0].username
      let timeLine = tweets[0].tweetbody
      res.render('tweets', {userName: userName, tweets: tweets, timeLine: timeLine})
    }).catch(err => console.log('errrror',err))
  })

app.post('/retweet', function(req, res) {
  retweet()
  res.redirect('tweets')
})

app.listen(port, () => {
  console.log('listenin to port: ' + port +  ', fool')
})

module.exports = app
