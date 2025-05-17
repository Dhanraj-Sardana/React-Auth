require('dotenv').config();
const express=require('express');
const cors=require('cors');
const connectDB=require('./config/db');
const AuthRouter=require("./routes/authRoutes");


connectDB();

const app=express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:true}))

app.use('/',AuthRouter);

app.listen(3000,(err)=>{
if(err) console.log('cannot connect');
console.log("backend listening at port 3000");
})