import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import cors from "cors";
import path from "path";

import dataInputRoute from "./routes/dataInput.routes.js"
import authRoutes from "./routes/auth.routes.js";
import connectToMongoDb from "./db/connectToMongoDB.js";

const app = express();
const PORT = process.env.PORT||5000;

const __dirname = path.resolve();

dotenv.config();


app.use(express.json()); //to parse the incoming requests with json payloads (From req.body)
app.use(cookieParser());



app.use("/api/auth", authRoutes);
app.use("/api", dataInputRoute);

app.use(express.static(path.join(__dirname,"/frontend/dist")));


app.get("*", (req,res)=>{
    res.sendFile(path.join(__dirname, "frontend","dist","index.html"));
});


app.listen(PORT,()=>{
    connectToMongoDb();
    console.log(`Server is running on port ${PORT}`);
});