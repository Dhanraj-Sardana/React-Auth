const User=require("../models/User");
const jwt = require('jsonwebtoken');
const bcrypt=require('bcrypt');
exports.login= async (req,res)=>{
const {email,password}=req.body;
    try{
const user= await User.findOne({email});
if(!user){
   return res.status(404).json({error:'user doesnot found'});
}
const userpassword=user.password;
const userName=user.name;

    bcrypt.compare(password,userpassword,(err,result)=>{
 if(err) return res.status(500).json({error:error.message});
 if(result) {
    const token=jwt.sign({email:email,userName:userName},process.env.SECURE,{expiresIn:'1h'});
    res.cookie('token',token,{
        httpOnly:true,
        secure:false
        })
    return res.status(200).json({message:"Sent Data"})
} 
   return res.status(401).json({error:'wrong password'}) 
})
    
    }catch(error){
return res.status(500).json({error:error.message});
    }
}