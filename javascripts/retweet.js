const express = require('express')
const app = express()

const client = require('./config')


function retweet(){
  client.get('statuses/user_timeline', { q: {screen_name: 'echoQuoter'}}, (err, data, res) => {
    let randomNum = Math.floor(Math.random() * (data.length - 1) + 1)
    let theTweetID = data[randomNum].id_str
    postTweet(theTweetID)
  })
}

function postTweet(tweetId) {
  client.post('statuses/retweet/:id', {id: tweetId }, function(err, data, res) {
  })
}

setInterval(retweet, 10000000)

module.exports = retweet
