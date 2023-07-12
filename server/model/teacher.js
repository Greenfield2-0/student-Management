const mongoose = require("mongoose");
const teachers= mongoose.Schema;
var teacher= new teachers({
    name:String,
    email:String,
    cours:String,
    password:String,

})
model.exports=mongoose.model("teacher",teacher);