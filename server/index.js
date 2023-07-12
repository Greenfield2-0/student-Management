var express=require("express");
var cors=require("cors");
var app=express();
var port=5000;
var conn=require("./connection");
var route=require("./routers/teacherRoute")
var student= require("./routers/studentRoutes")
app.use(cors())
app.use(express.json())
app.get("/",(req,res)=>{
    res.send("hello")
})
app.use('/api/teachers',route);
app.use("/api/student",student)
app.listen(port,()=>{console.log(`listening on port: ${port}`)});
