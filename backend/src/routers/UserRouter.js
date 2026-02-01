const express=require('express');
const { signup, signin } = require('../controllers/AuthController');
const router=express.Router();
router.post("/Signup",signup)
router.post("/Signin",signin)
module.exports=router;