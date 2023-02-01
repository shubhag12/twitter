const express = require("express");
const connect = require("./config/database");
const app = express();
const HashtagRepository = require("./repository/hashtag-repository");
app.listen(3000, async () => {
  console.log("server started");
  await connect();
  console.log("mongo db connect");
  const Repo = new HashtagRepository();
  await Repo.bulkCreate([
    {
      title: "trend",
      tweets: [],
    },
    {
      title: "excited",
      tweets: [],
    },
    {
      title: "phyton",
      tweets: [],
    },
    {
      title: "FUN",
      tweets: [],
    },
  ]);
});
