const express=require("express")
const router = require("./Contact")
const { registervalidator, loginvalidator} = require("../middleware/validator")
const {register, login}= require("../controlers/user")
const jsAuth = require("../middleware/jsAuth")


//register


router.post('/register' ,registervalidator(),register)
//login
router.post('/login', loginvalidator(),login)
//current
router.get("./current",jsAuth,(req,res)=>{
    res.send(req.user)
})