import Users from "../models/userModel.js";

export const create =async (req,res)=>{
    try {
        const newUser=new Users(req.body)
        const {email}=newUser

        //check whether the user exists
        const userExist=await Users.findOne({email})
        if (userExist){
           return  res .status(400).json({message:"User laready exists"}) 
        } 
        const saveUserData=await newUser.save()
        return res.status(201).json(saveUserData)

        
    } catch (error) {
        return res.status(500).json({errorMessage:error.message})
    }
}

export const getAllUsers=async(req,res)=>{
  try {
      const userData=await Users.find()
    //check if there are users in there
    if(!userData ||userData===0){
        return res.status(404).json({message:"User Data not Found"})
    }
    return res.status(200).json(userData)
    
  } catch (error) {
    return res.status(500).json({errorMessage:error.message})
  }
}

export const getUserById=async(req,res)=>{
  try {
        const id=req.params.id
        console.log("user id to be searched", id)
        const userExist=await Users.findById(id)
        if(!userExist){
          return res.status(400).json({message:"User Data not Found"})
        }
  } catch (error) {
    return res.status(500).json({errorMessage:error.message})
  }
}

export const update = async (req, res)=>{
  try {
      const id=req.params.id
        console.log("user id to be searched", id)
        const userExist=await Users.findById(id)
          if(!userExist){
          return res.status(400).json({message:"User Data not Found"})
        }
        const updatedata=await Users.findByIdAndUpdate (id, req.body,{
          new:true
        })
        return res.status(200).json(updatedata)
            
  } catch (error) {
    return res.status(500).json({errorMessage:error.message})
  }
}

export const deleteUser=async (req,res)=>{
  try {
    const id=req.params.id
        console.log("user id to be searched", id)
        const userExist=await Users.findById(id)
          if(!userExist){
          return res.status(400).json({message:"User Data not Found"})
        }
        await Users.findByIdAndDelete(id);
        return res.status(200).json({message:"User deleted successfully"})

    
  } catch (error) {
        return res.status(500).json({errorMessage:error.message})
  }

}