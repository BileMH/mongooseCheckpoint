const express = require('express');
const { register, login  } = require('../controlers/user.js');
const jsAuth = require('../middleware/jsAuth');
const { registerValidator, validation, loginvalidation } = require('../middleware/validator.js');

const router = express.Router()


router.post("/register" ,registerValidator() , validation, register )

router.post("/login" , loginvalidation(),validation ,login)


router.get("/current" ,jsAuth ,(req,res)=> {
    res.send(req.user)
})


module.exports = router