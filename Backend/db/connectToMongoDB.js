import mongoose from "mongoose";

 const connectToMongoDb = async ()=>{
    try{
        await mongoose.connect(process.env.MONGO_DB_URI);
        console.log("Connect to MongoDB");
    }catch(error){
        console.log("Error connecting mongoDb", error.message);
    }
};
export default connectToMongoDb;