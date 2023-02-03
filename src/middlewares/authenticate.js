import passport from 'passport'


export const authenticate=(req,res,nex)=>{
    passport.authenticate('jwt',(err,user,data)=>{
        if(err)nex(err);
        if(!user){
            return res.status(401).json({
                message:"unauthorized acess"
            })
        }
       req.user=user;
       nex();
    })(req,res,nex)
}