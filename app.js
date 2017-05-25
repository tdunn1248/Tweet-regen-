const express = require('express')
const bodyParser = require('body-parser')
const ejs = require('ejs')
const app = express()

const port = 3004

const client = require('./javascripts/config')
const twitterAPI = require('./javascripts/twitterAPI')
const queries = require('./database/queries')

app.use(bodyParser.urlencoded({extended: true}))
app.set('view engine', 'ejs')

app.get('/', (req, res) => {
  //grabTweets
    //.then create the object to pass to ejs
    //while testing, try hard-coding your object first
    //{userName:"blah", tweets:[1,2,3]}
  res.render('index', {userName: 'LaffyTaffy'})
})

app.listen(port, () => {
  console.log('listenin to port: ' + port +  ', fool')
})

module.exports = app

// what else do i need to export
