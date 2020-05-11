const twitterAPI = require("twit");
function callTwitter(twitterParams, hashTag) {
  return new Promise(function (resolve, reject) {
    try {
      const twitter = new twitterAPI({
        consumer_key: twitterParams.twitter_apikey,
        consumer_secret: twitterParams.twitter_secret,
        access_token: twitterParams.twt_token,
        access_token_secret: twitterParams.twt_secret_token,
      });
      console.log("Twitter Connected! :D");

      twitter.get(
        "search/tweets",
        {
          q: `${hashTag}%20("pienso que" OR "creo que" OR "me parece" OR "opino")`,
          count: 10,
          result_type: "recent",
          tweet_mode: 'extended',
          lang: "es",
          retweet: "false"
        },
        function (err, data) {
          if (err) console.error(err);
          resolve(data);
        }
      );
    } catch (error) {
      console.error(error);
      reject(error);
    }
  });
}

module.exports = callTwitter;
