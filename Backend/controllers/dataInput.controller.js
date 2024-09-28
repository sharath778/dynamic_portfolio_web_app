import UserData from "../models/data.model.js";
import User from "../models/user.model.js";

export const dataInput = async (req,res)=>{
    try {
        // if(!req.username){
        //     return res.status(501).json({error:"you are need to Login"});
        // }
        const {name,
            title,
            mobileNumber,
            email,
            address,
            github,
            linkedIn,
            summary,
            techSkills,
            softSkills,
            languages,
            certifications
        }=req.body;
        
        const userId = req.user._id;
        const newData = new UserData({
            userId,
            name,
            title,
            mobileNumber,
            email,
            address,
            github,
            linkedIn,
            summary,
            techSkills,
            softSkills,
            languages,
            certifications
        });
        await newData.save();
        res.status(201).json({newData});
        // console.log(newData);
    } catch (error) {
        console.log("Error in dataInput controller", error.message);
        res.status(500).json({error:"Internal server error"});
    }

};

export const getData= async(req, res)=>{
    try{
        const{userId}=req.params;
        const data = await UserData.findOne({userId});
        
        res.status(201).json(data);
    }catch(error){
        res.status(400).json({message:"error in get userdata!"})
    }
};

export const updateData =async(req, res)=>{
    try{
        const {name,
            title,
            mobileNumber,
            email,
            address,
            github,
            linkedIn,
            summary,
            techSkills,
            softSkills,
            languages,
            certifications
        }=req.body;
        const id=req.user._id;
        const currUser = await UserData.findOneAndUpdate(
            {userId:id},
            {   $set:{
                name,
                title,
                mobileNumber,
                email,
                address,
                github,
                linkedIn,
                summary,
                techSkills,
                softSkills,
                languages,
                certifications
                }
            },
            {new:true, runValidators:true}
        );
        if (!currUser) {
            return res.status(404).json({ error: "User not found" });
        }
        res.status(200).json({ message: "User updated successfully", user: currUser });
    }catch(error){
        console.log("Error in dataInput controller for updateDetails", error.message);
        res.status(500).json({error:"Internal server error"});
    }
}
