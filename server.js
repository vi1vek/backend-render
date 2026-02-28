import express from "express";
import route from "./routes/route.js";

const app=express()
const PORT = 4000
app.use("/api",route)
app.get("/",(req,res)=>{
    res.send("Server first page.")
})
app.listen(PORT,(req,res)=>{
    console.log(`Server is Running at port ${PORT}`);
    
})