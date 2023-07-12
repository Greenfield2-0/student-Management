const mongoose = require("mongoose");
const students= mongoose.Schema;
var student= new students({
    name:String,
    age:Number,
    email:String,
    password:String,
    level:Number
})
module.exports=mongoose.model("students",student);


