import TweetService from "../services/tweet-service.js";

import upload from "../config/s3-config.js";

const singleUploader = upload.single('image');


const tweetSevice = new TweetService();


export const createTweet = async (req, res) => {
  try {
    singleUploader(req, res, async function (err, data) {
      if (err) {
        return res.status(500).json({
          error: err,
        });
      }
      console.log("Image url is ", req.file);
      const payload=req.body;
      payload.images=req.file.location;
      const response = await tweetSevice.create(payload);
      return res.status(201).json({
        success: true,
        message: "succesfuly created a new tweet",
        data: response,
        err: {},
      });
    });
  
  } catch (error) {
    console.log("error at controller tweet .js");
    return res.status(500).json({
      success: false,
      message: "not able to  create a new tweet",
      data: response,
      err: error,
    });
  }
};
export const getTweet = async (req, res) => {
  try {
    const response = await tweetSevice.get(req.params.id);
    return res.status(201).json({
      success: true,
      message: "succesfuly fetched a new city",
      data: response,
      err: {},
    });
  } catch (error) {
    console.log("error at controller tweet .js");
    return res.status(500).json({
      success: false,
      message: "not able to  fetch a new tweet",
      data: response,
      err: error,
    });
  }
};
