const mongoose = require('mongoose');

const schema = mongoose.Schema ;

const contactSchema = new schema ({
    name : {
        type : String ,
        required : true
    } ,
    email : {
        type : String ,
        required : true ,
        unique : true
    } ,
    phone : Number
    
})


module.exports = Contact = mongoose.model("contact" , contactSchema)