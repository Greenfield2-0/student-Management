var express=require("express");
var router=express.Router()
var controller=require("../controller/teacher");
router.get('/',controller.getAll);
module.exports=router;
