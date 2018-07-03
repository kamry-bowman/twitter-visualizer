const  Twit = require('twit');
require('dotenv').config();

const T = new Twit({
  consumer_key:         'q4KBTdot14XaxfTBEOD1FeWwz',
  consumer_secret:      '7viHgcRhl99Kinr2JzyHIrSK3auW7hzNdm93jqdVTmKyi6yOaF',
  access_token:         '4820153224-wWmBu8PxhI3I6ssf9E5v3D6mXpLfv7yoEDfBGRi',
  access_token_secret:  'm2EcJlwb9kBHvmgKXqu67IEnkfyC1gMThNfta4IMhgjVL',
  timeout_ms:           60*1000
})

const getTweets = (user) => {
  const tweetList = [];
  T.get(`https://api.twitter.com/1.1/statuses/user_timeline.json?screen_name=${user}&count=10`)
  .then(resp => {
    const tweets = resp.data;

    for (let tweet of tweets) {
      tweetList.push(tweet.text)
      console.log(tweet.text)
    }

    return tweetList;
  })
  .catch(err => console.log(err))
};

module.exports=getTweets;