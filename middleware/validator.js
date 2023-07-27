const {check,validationResult}=require("express-validator")



exports.registervalidator=()=>[
    check("name","veuillez inseror votre name").not().isEmpty(),
    check("email","veuillez verifer votre mail").isEmail(),
    check("password","password (min:6)").isLength({min:6}),

]


exports.loginvalidator=()=>[
    check("email","veuillez verifer votre mail").isEmail(),
    check("password","password (min:6)").isLength({min:6}),
    
]