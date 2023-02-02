import TweetService from '../services/tweet-service.js'
const tweetSevice =new TweetService();

export const createTweet=async(req,res)=>{
    try {
        const response=await tweetSevice.create(req.body);
        return res.status(201).json({
            success:true,
            message:'succesfuly created a new city',
            data:response,
            err:{}
        })
    } catch (error) {
        console.log('error at controller tweet .js');
        return res.status(500).json({
            success:false,
            message:'not able to  create a new city',
            data:response,
            err:error
        })
    }
}