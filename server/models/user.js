const mongoose =require('mongoose')


const userschema=new mongoose.Schema({
   username:{
    type:String
   },
    email:{
        type: String
    },
    password:{
        type: String
    },
    
    role: { 
    type: String,
    enum:["admin","user","coach"] },
})

module.exports = mongoose.model("user", userschema)