const {check,validationResult}=require("express-validator");



exports.registerValidator=()=>[
    check("name","veuillez inseror votre name").not().isEmpty(),
    check("email","veuillez verifer votre mail").isEmail(),
    check("password","password (min:6)").isLength({min:7}),

]


exports.loginvalidation=()=>[
    check("email","veuillez verifer votre mail").isEmail(),
    check("password","password (min:6)").isLength({min:6}),
    
]
exports.validation =(req,res,next)=> {
    const errors = validationResult(req);
    if (!errors.isEmpty()){
        return res.status(400).json({errors : errors.array()})
    }
    next()
}