const express=require("express");
const app=express();
require("dotenv").config();
const PORT=process.env.PORT;
app.get("/",(req,res)=>{
    res.send("done get part");
})


app.get("/about",(req,res)=>{
    res.send("done about part");
})
app.get("/contact",(req,res)=>{
    res.send(`done conatct part  ${process.env.PHONE}`);
})



app.listen(PORT,()=>{
    console.log("listen 8080");
})