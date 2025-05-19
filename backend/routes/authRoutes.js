
const express=require('express');
const {signin}=require('../controllers/signin'); 
const {login}=require('../controllers/login');
const {home}=require('../controllers/home');

const Router=express.Router();

Router.post('/signin',signin);
Router.post('/login',login);
Router.get('/home',home);
module.exports=Router;