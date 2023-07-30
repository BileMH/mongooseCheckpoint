const express = require('express');
const { register, login, updateUserPassword } = require('../controllers/user');
const { registerValidator, validation, loginValidator } = require('../middlewares/Validator');

const router = express.Router()


router.post("/register" ,registerValidator() , validation, register )

router.post("/login" , loginValidator(),validation ,login)


router.get ("/current" , jsAuth , (req,res)=>{
    res.send (req,user)
})


module.exports = router