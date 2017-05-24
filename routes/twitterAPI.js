const express = require('express')
const app = express()

const client = require('./config')

function searchTweets(){
  client.get('search/tweets', {q: 'harley since:2012-05-01', count: 100},(err, data,res) => {
    if(err) {
       console.log(err)
    } else {
      data.statuses.forEach(s => {
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

module.exports = searchTweets
