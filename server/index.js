var express=require("express");
var cors=require("cors");
var  app=express();
var port=3000;
var conn=require("./connection");

app.use(cors())
app.use(express.json())
app.listen(port,()=>{console.log(`listening on port: ${port}`)})
