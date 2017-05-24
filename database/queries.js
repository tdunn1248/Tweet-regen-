const db = require('./configuration')

function grabTweets() {
  return db.any('SELECT * FROM tweets')
    .then(allTweets => {
      allTweets.forEach(tweet => {
        // console.log('tweet-->',tweet)
      })
    })
    .catch( err => console.log(err))
}

grabTweets().then(result => {
  console.log('the result as promised-->',result)
})


// console.log('grabTweets()--->',timeLine)

module.exports = {
  grabTweets
}
