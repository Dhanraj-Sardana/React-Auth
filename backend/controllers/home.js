const jwt=require('jsonwebtoken');
exports.home=(req,res)=>{
const token =req.cookies.token;
if(!token) return res.status(401).json({error:'no token provided'})


const payload=jwt.verify(token,process.env.SECURE)


if(!payload) return res.status(404).json({error:'Server cannot read cookie'})
return res.status(200).json({userName:payload.userName});
}