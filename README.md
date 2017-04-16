# twitter-streams
Program to get Search and Streaming Data from Twitter

## Steps to get started
1. Git Clone this repository

    `git clone git@github.com:rishabh-parekh/twitter-streams.git`

2. Open the folder in Editor like Atom

    `cd twitter-streams`
    `atom .`

3. Get the Twitter API Keys from twitter

     a. https://apps.twitter.com/
     b. Create a new app, example : 'RP-Twitter-Streams'
     c. Put the description and a dummy URL
     d. Click on Keys and Access Tokens
     e. Under Access Tokens click Create my access tokens

4. Create a config.json file with the following content

    `{
    	"TWITTER_CONSUMER_KEY": "",
    	"TWITTER_CONSUMER_SECRET": "",
    	"TWITTER_ACCESS_TOKEN_KEY": "",
    	"TWITTER_ACCESS_TOKEN_SECRET": ""
    }`

    Copy your Consumer Key, Consumer Secret, Access Token, Access Token Secret from the Twitter Page

4. Install the Npm dependencies

    `npm install`

5. Start the Sample app and watch the terminal window

    `npm start`

6. Open the app.js in atom and change the Query String from `Detroit` to something else

    `client.get('search/tweets', {q: 'detroit'}, function(error, tweets, response) {`

7. Change the Streaming Query, the tracking query from `entrepreneur` to something else

     `client.stream('statuses/filter', {track: 'entrepreneur'},  function(stream) {`

8. Save the file, and watch the terminal window.
