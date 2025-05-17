
const express=require('express');
const {signin}=require('../controllers/signin'); 

const Router=express.Router();

Router.post('/signin',signin);

module.exports=Router;