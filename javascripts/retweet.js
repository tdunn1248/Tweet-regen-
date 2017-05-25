const express = require('express')
const app = express()

const client = require('./config')
const databaseInput = require('../database/commands')

function reTweet(){
 client.post('statuses/retweet/:id', {id: '867784581218304000' }, function(err, data, res) {
   console.log('data --> ',data)
 })
}

module.exports = reTweet
