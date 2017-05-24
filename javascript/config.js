//Export a function
//run it by hitting the route '/tweets'
//Bring in the Twitter module, and work with that
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

  client.get('search/tweets', {screen_name: 'echoQuoter', q: 'Obama since:2017-05-01', count: 5},(err, data,res) => {
    if(err) {
       console.log(err)
    } else {
      console.log(data.statuses) // tweet body
      // console.log(res) // JSON response
    }
  })
}

module.exports = searchTweets
