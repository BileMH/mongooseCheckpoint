const User = require("../Models/User")
const jwt = require ("jsonwebtoken")


const jsAuth = async (req,res,next)=>{
    try{
        //test if user has token
        const token=req.headers["authorization"]
        if (!token){
            return res.status(401).send[{errors : [{msg : 'not authorized 1!!'}]}];
        }
        const decode = jwt.verify(token,process.env.SCRT_KEY);
        const foundUser = await User.findOne({_id:decode.id});
        if (!foundUser){
            return res.status(401).send('not authorized 2!!')
        }
        req.user=foundUser ; 
        next();
    }
    catch(error){
        return res.status(401).send('not authorized 3!!')
    }
};
module.exports=jsAuth 