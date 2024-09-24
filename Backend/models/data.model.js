import mongoose from "mongoose";

const data = new mongoose.Schema({
    userId:{
        type: mongoose.Schema.Types.ObjectId,
        ref:"User",
        required:true
    },
    name:{
        type:String,
        require:true
    },
    title:{
        type:String,
        require:true,
    },
    mobileNumber:{
        type:String,
        require:true,
    },
    email:{
        type:String,
        require:true,
    },
    address:{
        type:String,
        require:true,
    },
    github:{
        type:String,
        require:true,
    },
    linkedIn:{
        type:String,
        require:true,
    },
    summary:{
        type:String,
        require:true,
    },
    techSkills:[{
        type:String,
        require:true,
    }],
    softSkills:[{
        type:String,
        require:true,
    }],
    languages:[{
        type:String,
        require:true,
    }],
    certifications:[{
        type:String,
        require:true,
    }]
},{timestamps:true});

const UserData = mongoose.model("UserData", data);
export default UserData;