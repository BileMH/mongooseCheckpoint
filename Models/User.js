const mongoose = require('mongoose');

const {Schema , model} = mongoose ;

const UserSchema = new Schema ({
    name : {
        type : String,
        required : true,
    } ,
    email : {
        type : String,
        required : true,
    } ,
    password : {
        required : true,
        type : String, 

    },
    phone : {
        type : Number

    }
})

module.exports = User =mongoose.model ("user" , UserSchema);