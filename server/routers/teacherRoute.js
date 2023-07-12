var express=require("express");
var router=express.Router()
var controller=require("../controller/teacher");
router.get('/',controller.getAll);
router.post('/',controller.add);
router.put('/:id',controller.updateName);
router.delete('/:id',controller.deleteStud)
module.exports=router;
