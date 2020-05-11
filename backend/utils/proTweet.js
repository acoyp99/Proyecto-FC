module.exports = function proTweet(ansTweetAPI) {
  return new Promise(function (resolve, reject) {
    try {
      var statuses = ansTweetAPI.statuses;
      res = [];
      for (const item of statuses) {
        // console.log(`text: ${JSON.stringify(item.text)}`);

        if (!res.includes(item.full_text)) res.push(item.full_text);
      }

      resolve(res);
    } catch (err) {
      console.log(err);
      reject(err);
    }
  });
};
