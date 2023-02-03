import CommentService from '../services/comment-service.js';
const commentService=new CommentService();
export const createcomment=async(req,res)=>{
    try {
        const response=await commentService.createComment(req.query.modelId,req.query.modelType,req.user.id,req.body.content);
        return res.status(200).json({
            success:true,
            data:response,
            message:"successfuly created a comment",
            err:{}
        })
    } catch (error) {
        console.log('error at comment controller');
        res.status(500).json({
            success:false,
            data:{},
            message:"something went wrong",
            err:error
        })
    }
}