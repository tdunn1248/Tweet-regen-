const express = require('express')
const app = express()

const client = require('./config')

function grabAllTwitterTweets(){
  client.get('statuses/user_timeline', {q: {screen_name: 'echoQuoter'}} ,(err, tweet,res) => {
    if(err) {
       console.log(err)
    } else {
      tweet.forEach(s => {
        const user = {
          username: s.user.screen_name,
          location: s.user.location,
          followerCount: s.user.followers_count,
          tweet: s.text
        }
        console.log(user)
          return user
      })
    }
  })
}

module.exports = grabAllTwitterTweets
