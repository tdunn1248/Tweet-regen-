const express = require('express')
const app = express()

const client = require('./config')
const databaseInput = require('../database/commands')

function grabANDstoreTweets(){
 client.get('statuses/user_timeline', {q: {screen_name: 'echoQuoter'}} ,(err, data,res) => {
    let outputTweets = []
    if(err) {
       console.log(err)
    } else {
      data.forEach(stweet => {
        outputTweets.push(stweet.user.screen_name)
        outputTweets.push(stweet.text)
        databaseInput.addTweetsToDatabase(outputTweets)
        outputTweets = []
      })
    }
  })
}

module.exports = grabANDstoreTweets
