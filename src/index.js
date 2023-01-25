const express = require("express");
const connect = require("./config/database");
const app = express();
//const Tweet=require('./models/tweet')
const TweetRepository = require("./repository/tweet-repository");
app.listen(3000, async () => {
  console.log("server started");
  await connect();
  console.log("mongo db connec");
  // const tweet=await Tweet.create({
  //     content:"third tweet",
  //     userEmail:"a@b12.com"
  // })
  // const tweets=await Tweet.find({userEmail:'a@b.com'})
  const tweetRepo = new TweetRepository();

  //   const tweets = await tweetRepo.update("63d131f0fe486af55c44cf9d",{
  //     content:"new latest content here is coming"
  //   });

  const tweet = await tweetRepo.create({ content: "my tweet" });
  console.log(tweet);
  tweet.comments.push({ content: "first commit" });
  await tweet.save();
  console.log(tweet);
});
