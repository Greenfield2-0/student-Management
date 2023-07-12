let mongoose=require("mongoose");
var connection=mongoose.connect("mongodb+srv://mongo:rootroot@mydatabase1.ihaxueo.mongodb.net/studentsDatabase")
.then((res)=>{
    console.log("database temshy")
})
.catch((err)=>{
    throw new Error(err)
})
module.exports =connection