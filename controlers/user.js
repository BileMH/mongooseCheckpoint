const User = require("../Models/User");
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');


//**register */
    exports.rogister = async(req,res)=>{
        try{
            const {name,email,password,phone}=req.body;
            const foundUser = await User.findOne({email})
            if (foundUser){
                return res.status(400).send({errors:({msg: "email deja utilise"})})
            }
            const checkpassword = await bcrypt.compare(password , foundUser.password)
        if (!checkpassword){
            return res.status(400).send({errors : [{msg:"bad credential !!!"}]})
        }
        //TOKEN
        const token = jwt.sign(
            { id:newUser._id },
             process.env.SCRT_KEY,
             {expiresIn:"24h"}
        )
        response.status(200).send({saccess: [{msg :"inscription avec succes"}],User : newUser , token})
        }
        catch (error){
            return res.status(400).send({errors:[{msg : "can not ... please verify your infos !!!"}]})
        }
    }
    exports.login = async(req,res)=>{
        try{
            const {email , password}=req.body;
            //check email 
            const foundUser= await User.findOne({email})
            if (!foundUser){
                return res.status(400).send ({errors : [{msg : "utilisateur nom trouvé"}]})
            } 
            const checkpassword = await bcrypt.compare(password,foundUser.password)
            if (!checkpassword){
                return res.status(400).send({errors : [{msg: "veuillez verifier votre mode de passe !"}]})
            }
            const token = jwt.sign({
                id: foundUser._id
            },
            process.env.SCRT_KEY,{expiresIn:"168h"})
            res.status(200).send({success: [{msg: "welcome back"}], User:foundUser,token})
        }
        catch (error){
            res.status(400).send({errors : [{msg: "imposible de trouver l'utilisateur"}]})
        }
    }