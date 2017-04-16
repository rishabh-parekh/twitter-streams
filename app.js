// Require our dependencies
var express = require('express'),
  http = require('http'),
  twitter = require('twitter'),
  nconf = require('nconf'),
  io = require('socket.io')(server);



// Create an express instance and set a port variable
var app = express();
var port = process.env.PORT || 8032;

nconf.file({ file: 'config.json' }).env();


var client = new twitter({
  consumer_key: process.env.TWITTER_CONSUMER_KEY|| nconf.get('TWITTER_CONSUMER_KEY'),
  consumer_secret: process.env.TWITTER_CONSUMER_SECRET|| nconf.get('TWITTER_CONSUMER_SECRET'),
  access_token_key: process.env.TWITTER_ACCESS_TOKEN_KEY|| nconf.get('TWITTER_ACCESS_TOKEN_KEY'),
  access_token_secret: process.env.TWITTER_ACCESS_TOKEN_SECRET|| nconf.get('TWITTER_ACCESS_TOKEN_SECRET')
});


/**
 * Stream statuses filtered by keyword
 * number of tweets per second depends on topic popularity
 **/
client.stream('statuses/filter', {track: 'twitter'},  function(stream) {
  stream.on('data', function(tweet) {
    console.log(tweet.text);
  });

  stream.on('error', function(error) {
    console.log(error);
  });
});



// Fire it up (start our server)
var server = http.createServer(app).listen(port, function() {
  console.log('Express server listening on port ' + port);
});
