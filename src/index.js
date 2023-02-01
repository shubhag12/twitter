const express = require("express");
const connect = require("./config/database");
const app = express();
const {TweetRepository} = require("./repository/index");
const TweetService=require('./services/tweet-service')
app.listen(3000, async () => {
  console.log("server started");
  await connect();
  console.log("mongo db connect");
});
