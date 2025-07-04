import mongoose from "mongoose"


// declare a user schema 
const userSchema=mongoose.Schema({
    name:{
        type:String,
        require:true 
    },
    email:{
        type:String,
        require:true
    },
    phone_number:{
        type:Number,
        require:true
    },
    place_of_residence:{
        type:String,
        require:true
    }
})
export default mongoose.model ("users",userSchema)