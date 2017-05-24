// client is my router??

require('dotenv').config()
const Twit = require('twit')
const client = new Twit({
  consumer_key: process.env.CONSUMER_KEY,
  consumer_secret: process.env.CONSUMER_SECRET,
  access_token: process.env.ACCESS_TOKEN,
  access_token_secret: process.env.ACCESS_TOKEN_SECRET
})

function searchTweets(){
  console.log('Getting tweets!')
  client.get('search/tweets', {q: 'Obama since:2017-05-01', count: 1},(err, data,res) => {
    if(err) {
       console.log(err)
    } else {
      data.statuses.forEach(s => {
        console.log(s.user.screen_name)
        console.log(s.text)
      })
    }
  })
}

module.exports = searchTweets
