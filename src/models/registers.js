const mongoose= require("mongoose");

const contactSchema = new mongoose.Schema({
    firstname:{
        type:String,
        required:true
    },
    surname:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    phone_no:{
        type:Number,
        required:true,
        unique:true
    },
    address:{
        type:String,
        required:true
    }
})

//collection
const Contacts = new mongoose.model("Contacts",contactSchema);



module.exports=Contacts;