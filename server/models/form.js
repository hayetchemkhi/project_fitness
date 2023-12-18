const mongoose =require('mongoose')


const formschema=new mongoose.Schema({
    selectedHeight:{
    type:String
   },
   selectedWeight:{
        type: String
    },
    selectedGender:{
        type: String
    },
    
    weightGoal: { 
    type: String
    },
    selectedPeriod: { 
    type: String
    },
    selectedAllergies:{
        type : String
    },
    reminderPreference:{
        type: String
    } 
})

module.exports = mongoose.model("form", formschema)