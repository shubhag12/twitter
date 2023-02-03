import express from "express";
import { connect } from "./config/database.js";
import { passportAuth } from "./config/jwt-middleware.js";
import bodyParser from "body-parser";
import apiRoutes from "./routes/index.js";
import passport from 'passport'
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(passport.initialize());
passportAuth(passport);
app.listen(3000, async () => {
  console.log("server started");
  await connect();
  console.log("mongo db connect");
  app.use("/api", apiRoutes);
});
