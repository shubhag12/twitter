import TweetService from '../services/tweet-service.js'
const tweetSevice =new TweetService();

export const createTweet=async(req,res)=>{
    try {
        const response=await tweetSevice.create(req.body);
        return res.status(201).json({
            success:true,
            message:'succesfuly created a new tweet',
            data:response,
            err:{}
        })
    } catch (error) {
        console.log('error at controller tweet .js');
        return res.status(500).json({
            success:false,
            message:'not able to  create a new tweet',
            data:response,
            err:error
        })
    }
}
export const getTweet=async(req,res)=>{
    try {
        const response=await tweetSevice.get(req.params.id);
        return res.status(201).json({
            success:true,
            message:'succesfuly fetched a new city',
            data:response,
            err:{}
        })
    } catch (error) {
        console.log('error at controller tweet .js');
        return res.status(500).json({
            success:false,
            message:'not able to  fetch a new tweet',
            data:response,
            err:error
        })
    }
}