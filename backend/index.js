const express=require('express');

const app=express();

app.get('/',(req,res)=>{
res.send("hi")
})

app.listen(3000,(err)=>{
if(err) console.log('cannot connect');
console.log("backend listening at port 3000");
})