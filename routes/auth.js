var express = require('express');
var router = express.Router();
const AuthModel = require('../models/authModel');



router.post('/create', async (req,res)=> {

    const user  = new AuthModel(req.body);
    const  Saved = await user.save();
    res.status(200).json(saved);
    
})