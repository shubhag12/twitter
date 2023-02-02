import express from "express";
import { connect } from "./config/database.js";
import bodyParser from "body-parser";
import apiRoutes from "./routes/index.js";
import { UserRepository, TweetRepository } from "./repository/index.js";
import LikeService from "./services/like-service.js";
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.listen(3000, async () => {
  console.log("server started");
  await connect();
  console.log("mongo db connect");
  app.use("/api", apiRoutes);
  // const userRepository = new UserRepository();
  // const tweetRepository = new TweetRepository();
  // const tweets = await tweetRepository.getAll(0, 10);
  // const user = await userRepository.create({
  //   email: "shubh1@2ail.com",
  //   name: "shub2h2",
  //   password: "1345",


  // });
  // const user=await userRepository.getAll();
  
  // const likeService = new LikeService();
  // await likeService.toggleLike(tweets[0].id, "Tweet", user[0].id);
});
