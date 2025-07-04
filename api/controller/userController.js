import User from "../models/userModel.js";

export const create =async (req,res)=>{
    try {
        const newUser=new User(req.body)
        const {email}=newUser

        //check whether the user exists
        const userExist=await User.findOne({email})
        if (userExist){
            res .status(400).json({message:"User laready exists"}) 
        } 
        const saveUserData=await newUser.save()
        return res.status(201).json(saveUserData)

        
    } catch (error) {
        return res.status(500).json({errorMessage:error.message})
    }
}