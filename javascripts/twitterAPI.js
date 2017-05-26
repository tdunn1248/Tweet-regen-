const express = require('express')
const app = express()

const client = require('./config')
const databaseInput = require('../database/commands')

function grabANDstoreTweets(){
 client.get('statuses/user_timeline', {q: {screen_name: 'echoQuoter'}} ,(err, data,res) => {
    if(err) {
       console.log(err)
    } else {
      data.forEach(stweet => {
        databaseInput.addTweetToDatabase(stweet.user.screen_name, stweet.text)
      })
    }
  })
}

module.exports = grabANDstoreTweets
