import express from "express";
import route from "./routes/route.js";
import dotenv from "dotenv"
import cors from 'cors'
import connectDb from "./config/db.js";

const app=express()
dotenv.config()
const PORT = process.env.PORT || 8000
app.use(cors())
app.use(express.json())
app.use("/api",route)
app.get("/",(req,res)=>{
    res.send("Server first page.")
})
app.listen(PORT,(req,res)=>{
    connectDb()
    console.log(`Server is Running at port ${PORT}`);
    
})