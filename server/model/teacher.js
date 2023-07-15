const mongoose = require("mongoose");
const teachers= mongoose.Schema;
var teacher= new teachers({
    name:String,
    email:String,
    cours:String,
    password:String,

})
const teach=mongoose.model("teacher",teacher);
module.exports=teach
