import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import cors from "cors";

import dataInputRoute from "./routes/dataInput.routes.js"
import authRoutes from "./routes/auth.routes.js";
import connectToMongoDb from "./db/connectToMongodb.js";

const app = express();
const PORT = process.env.PORT||5000;

dotenv.config();

app.use(cors());
app.use(cors({
    origin:'http://localhost:3000'
}));
app.use(express.json()); //to parse the incoming requests with json payloads (From req.body)
app.use(cookieParser());



app.use("/api/auth", authRoutes);
app.use("/api", dataInputRoute);


// app.get("/",(req,res)=>{
//     res.send("Hello world!!");
// });



app.listen(PORT,()=>{
    connectToMongoDb();
    console.log(`Server is running on port ${PORT}`);
});